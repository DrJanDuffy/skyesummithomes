# Patch `kelly-landing` worker (returns 404 for skyesummithomes.com)

`skyesummithomes.com` is **not** in `RE_OVERRIDES`, so this worker returns **HTTP 404** for paths like `/invest` — matching the Google Search Console report.

Add at the **start** of `fetch()` (after `const host = normalizeHost(...)`):

```javascript
if (host === 'skyesummithomes.com') {
  const target = new URL(request.url);
  target.hostname = 'www.skyesummithomes.com';
  target.protocol = 'https:';
  return Response.redirect(target.toString(), 301);
}
```

Redeploy `kelly-landing` in Cloudflare (same account as `palms-place-listing-injector`).
