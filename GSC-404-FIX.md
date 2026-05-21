# Google Search Console: Not Found (404) — Fix Guide

## What Google reported

These URLs returned **404** (or were not served) when crawled on the **non-www** host:

| URL | Last crawled |
|-----|----------------|
| https://skyesummithomes.com/invest | Jan 7, 2026 |
| https://skyesummithomes.com/sell | Nov 27, 2025 |
| https://skyesummithomes.com/valuation | Nov 25, 2025 |
| https://skyesummithomes.com/buy | Nov 25, 2025 |
| https://skyesummithomes.com/contact | Nov 23, 2025 |
| https://skyesummithomes.com/about | Nov 23, 2025 |

## Root cause

- **Correct site** lives on **https://www.skyesummithomes.com** (Vercel).
- **https://skyesummithomes.com** (apex, no `www`) is handled by Cloudflare Workers **before** Vercel:
  - `kelly-landing` returns **404** for unknown hosts (including apex `/invest`, `/buy`, etc.).
  - `palms-place-listing-injector` may serve a **generic Las Vegas landing page** when the origin errors.
- `vercel.json` already has non-www → www **301** redirects, but they only run when traffic reaches **Vercel**. Apex must **301 to www at Cloudflare** first.

## Code changes in this repo

1. **`scripts/generate-clean-urls.js`** — At build time, creates `/{slug}/index.html` from `/{slug}.html` so paths like `/about` work on static hosts without rewrites alone.
2. **`vercel.json`** — `cleanUrls: true`, `.html` → extensionless **301** redirects, existing non-www → www redirects kept.
3. **`npm run build`** — Runs clean-url generation before the maps key inject step.

## Required: Cloudflare (fixes GSC 404s)

Do this in the Cloudflare dashboard for **skyesummithomes.com**:

### Option A — Page rule (fastest)

1. **Rules → Page Rules → Create**
2. URL: `skyesummithomes.com/*`
3. Setting: **Forwarding URL** → **301 Permanent**
4. Destination: `https://www.skyesummithomes.com/$1`
5. Save and deploy

Repeat for `http://skyesummithomes.com/*` if needed.

### Option B — Point apex to Vercel (recommended long-term)

1. **DNS** → Edit **A** record for `skyesummithomes.com`
2. Change IP from `216.198.79.1` to Vercel’s IP (from Vercel → Project → Settings → Domains)
3. Keep proxy **DNS only** (gray cloud), not orange cloud
4. Ensure **www** CNAME stays: `1e88402ffbe247ac.vercel-dns-017.com`

See also: `CLOUDFLARE-QUICK-ACTION.md`

## Verify after DNS / page rule (24–48 hours)

```bash
curl -sI https://skyesummithomes.com/invest | grep -iE 'HTTP|location'
curl -sI https://skyesummithomes.com/about  | grep -iE 'HTTP|location'
```

**Expected:** `HTTP/2 301` and `location: https://www.skyesummithomes.com/invest` (same for each path).

Confirm www serves real titles:

```bash
curl -sL https://www.skyesummithomes.com/invest | grep -o '<title>[^<]*</title>'
```

Should include **Skye Summit** / **Investment Strategy**, not a generic “Las Vegas Homes” title.

## Google Search Console

1. Use property **https://www.skyesummithomes.com** as primary (or domain property with www preferred).
2. **Sitemaps** → submit: `https://www.skyesummithomes.com/sitemap.xml`
3. On the **Not found (404)** issue → **Validate fix** after apex returns **301** to www for all six URLs.
4. Optionally **URL Inspection** → request indexing for each www URL.

Validation often takes **1–2 weeks** after redirects are live.
