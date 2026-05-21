# Why `git push` Did Not Update Production

## Root cause (most common)

**Vercel production deploys the `main` branch**, not feature branches like `cursor/seo-geo-aeo-pages-6031`.

| What you did | What Vercel does |
|--------------|------------------|
| Push to `cursor/...` branch | Preview deployment only (if enabled), **not** www.skyesummithomes.com |
| Push to `main` | **Production** deployment to your live domain |

Your SEO/GBP work was on `cursor/seo-geo-aeo-pages-6031`. Until that is merged into `main`, production stays on the last `main` deploy (live site `last-modified` was still April 2026).

## Second check: Git repository link

Remote: `LetMeHelpYouREALTY/skyesummithomes`

In **Vercel → Project → Settings → Git**, the connected repo must be this exact GitHub repo. If it still points to `DrJanDuffy/skyesummithomes`, webhooks will not fire on new pushes.

## Third check: `vercel.json`

Legacy `builds` + `buildCommand` together can block or confuse Git deployments. This repo now uses:

- `buildCommand`: `npm run build`
- `outputDirectory`: `.`
- No `builds` array (API routes under `/api` are auto-detected)

## What to do

### Option A — Merge to main (recommended)

```bash
git checkout main
git pull origin main
git merge cursor/seo-geo-aeo-pages-6031
git push origin main
```

Then open **Vercel → Deployments** and confirm a **Production** build from `main` completes.

### Option B — Deploy a preview from your branch

Push the feature branch (already done), then in Vercel open the latest **Preview** deployment URL to verify changes before merging.

### Option C — Manual production deploy

```bash
npx vercel login
npx vercel link
npx vercel --prod
```

## Verify production updated

```bash
curl -sI https://www.skyesummithomes.com | grep -i last-modified
```

After a successful deploy, `last-modified` should be today's date. You can also check for new pages:

- https://www.skyesummithomes.com/skye-summit-realtor
- https://www.skyesummithomes.com/skye-summit-faq

## Cloudflare note

`www` uses Vercel (`x-vercel-id` in responses). Cloudflare may cache HTML; if the deploy succeeded but the site looks old, purge cache for `www.skyesummithomes.com` in Cloudflare → Caching → Purge Everything.

## GitHub webhook

If `main` pushes still do not deploy:

1. GitHub → **LetMeHelpYouREALTY/skyesummithomes** → Settings → Webhooks  
2. Confirm an active **Vercel** webhook (recent deliveries = 200)  
3. If missing: Vercel → Project → Settings → Git → **Reconnect**
