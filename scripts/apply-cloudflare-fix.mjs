#!/usr/bin/env node
/**
 * Applies apex → www redirect for skyesummithomes.com via Cloudflare API.
 * Usage: CLOUDFLARE_API_TOKEN=xxx node scripts/apply-cloudflare-fix.mjs
 */
import { execSync } from 'node:child_process';

const token = process.env.CLOUDFLARE_API_TOKEN?.trim();
const zoneName = process.env.CLOUDFLARE_ZONE_NAME || 'skyesummithomes.com';
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b';

if (!token) {
  console.error(`
Missing CLOUDFLARE_API_TOKEN.

Fastest manual fix (Cloudflare dashboard):
  Rules → Redirect Rules → Create rule
  When: Hostname equals skyesummithomes.com
  Then: Dynamic redirect → https://www.skyesummithomes.com\${uri.path} (301, preserve query)

Or add CLOUDFLARE_API_TOKEN to GitHub repo secrets and run:
  Actions → "Deploy skyesummithomes apex redirect worker" → Run workflow
`);
  process.exit(1);
}

async function cf(path, init = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(JSON.stringify(json.errors || json));
  }
  return json.result;
}

const zoneId = (await cf(`/zones?name=${zoneName}`))[0]?.id;
if (!zoneId) throw new Error(`Zone not found: ${zoneName}`);
console.log(`Zone ${zoneName}: ${zoneId}`);

// Deploy minimal redirect worker (overrides apex before kelly-landing 404)
const workerPath = new URL('../cloudflare/skyesummithomes-apex-redirect/src/index.js', import.meta.url);
const script = await import('node:fs/promises').then((fs) => fs.readFile(workerPath, 'utf8'));

const form = new FormData();
form.append(
  'metadata',
  JSON.stringify({
    main_module: 'index.js',
    compatibility_date: '2026-05-01',
  })
);
form.append('index.js', new Blob([script], { type: 'application/javascript+module' }), 'index.js');

const uploadRes = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/skyesummithomes-apex-redirect`,
  {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  }
);
const uploadJson = await uploadRes.json();
if (!uploadJson.success) throw new Error(JSON.stringify(uploadJson.errors));

console.log('Uploaded worker skyesummithomes-apex-redirect');

await cf(`/zones/${zoneId}/workers/routes`, {
  method: 'POST',
  body: JSON.stringify({
    pattern: `${zoneName}/*`,
    script: 'skyesummithomes-apex-redirect',
  }),
});

console.log('Route attached. Verify:');
console.log('  curl -sI https://skyesummithomes.com/invest | grep -iE "HTTP|location"');
