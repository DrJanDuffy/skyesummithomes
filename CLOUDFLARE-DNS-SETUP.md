# Cloudflare DNS Optimization for SEO

## Current Status
- ✅ `www` CNAME correctly points to Vercel
- ⚠️ Root domain (`skyesummithomes.com`) A record points to old IP
- ✅ Redirects configured in `vercel.json` (non-www → www)

## Recommended DNS Changes

### Option 1: Update A Record to Vercel (Recommended)

**Steps:**

1. **Get Vercel's IP from Vercel Dashboard:**
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Look for the A record IP address for your domain
   - Common Vercel IPs: `76.76.21.21` or check your Vercel dashboard

2. **Update Cloudflare A Record:**
   - Go to Cloudflare DNS → Click "Edit" on the A record for `skyesummithomes.com`
   - Change IP from `216.198.79.1` to Vercel's IP (from step 1)
   - Keep Proxy status: **DNS only** (gray cloud)
   - TTL: Auto
   - Click Save

**OR Option 1B: Use CNAME Flattening (If Available)**

If Cloudflare supports CNAME flattening for root domain:
1. Delete the A record for `skyesummithomes.com`
2. Create new CNAME:
   - Type: CNAME
   - Name: `@` or `skyesummithomes.com`
   - Target: `1e88402ffbe247ac.vercel-dns-017.com` (same as www)
   - Proxy: DNS only
   - TTL: Auto

### Option 2: Keep Current Setup (If Vercel Handles Redirect)

If Vercel is properly handling the redirect from root to www, you can:
- Keep the A record as is
- Ensure Cloudflare's SSL/TLS is set to "Full" or "Full (strict)"
- Verify redirects work: `http://skyesummithomes.com` → `https://www.skyesummithomes.com`

## Cloudflare Settings for SEO

### 1. SSL/TLS Settings
- **SSL/TLS encryption mode**: Full (strict)
- **Always Use HTTPS**: ON
- **Automatic HTTPS Rewrites**: ON
- **Minimum TLS Version**: 1.2

### 2. Speed Optimizations
- **Auto Minify**: Enable for HTML, CSS, JavaScript
- **Brotli**: ON
- **HTTP/2**: ON (automatic)
- **HTTP/3 (with QUIC)**: ON

### 3. Caching
- **Caching Level**: Standard
- **Browser Cache TTL**: Respect Existing Headers
- **Always Online**: ON

### 4. Page Rules (REQUIRED for SEO)

**IMPORTANT**: Create these page rules in Cloudflare (Rules → Page Rules):

**Rule 1: Redirect Non-WWW to WWW (Priority 1)**
- URL Pattern: `skyesummithomes.com/*`
- Settings:
  - Forwarding URL: `301 - Permanent Redirect`
  - Destination: `https://www.skyesummithomes.com/$1`
- **Why**: This handles redirects at Cloudflare's edge (faster than Vercel) and ensures all traffic goes to www

**Rule 2: Force HTTPS on Non-WWW (Priority 2)**
- URL Pattern: `http://skyesummithomes.com/*`
- Settings:
  - Forwarding URL: `301 - Permanent Redirect`
  - Destination: `https://www.skyesummithomes.com/$1`

**Rule 3: Cache Static Assets (Performance)**
- URL Pattern: `www.skyesummithomes.com/*.css`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month

**Rule 4: Cache Images (Performance)**
- URL Pattern: `www.skyesummithomes.com/images/*`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month

## DNS Records Summary (After Changes)

### Required Records:

1. **Root Domain (A or CNAME)**
   - Type: A or CNAME
   - Name: `skyesummithomes.com` (or `@`)
   - Target: Vercel IP or `cname.vercel-dns.com`
   - Proxy: DNS only
   - TTL: Auto

2. **WWW Subdomain (CNAME)**
   - Type: CNAME
   - Name: `www`
   - Target: `1e88402ffbe247ac.vercel-dns-017.com` (keep current)
   - Proxy: DNS only
   - TTL: Auto

3. **Email Records (MX)** - Keep as is
   - route1.mx.cloudflare.net (Priority 38)
   - route2.mx.cloudflare.net (Priority 5)
   - route3.mx.cloudflare.net (Priority 28)

4. **SPF Record (TXT)** - Keep as is
   - `"v=spf1 include:_spf.mx.cloudflare.net ~all"`

5. **DMARC Record (TXT)** - Keep as is
   - `v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=mailto:DrJanSells@ReverenceSummerlinHomes.com; fo=1`

6. **DKIM Record (TXT)** - Keep as is
   - cf2024-1._domainkey

7. **Google Verification (TXT)** - Keep as is
   - `google-site-verification=wKOftY7ctL98xgE1EW2r-2pYqOXyN109r4ZLLiRwQsI`

8. **Vercel Verification (TXT)** - Keep as is
   - Both `_vercel` records

## Verification Steps

After making changes:

1. **Test Redirects:**
   ```bash
   curl -I http://skyesummithomes.com
   curl -I https://skyesummithomes.com
   curl -I http://www.skyesummithomes.com
   curl -I https://www.skyesummithomes.com
   ```
   All should redirect to `https://www.skyesummithomes.com` with 301 status.

2. **Check SSL:**
   - Visit: https://www.ssllabs.com/ssltest/analyze.html?d=www.skyesummithomes.com
   - Should get A or A+ rating

3. **Verify DNS Propagation:**
   - Use: https://www.whatsmydns.net/#A/skyesummithomes.com
   - Check: https://dnschecker.org/

4. **Test in Google Search Console:**
   - Request indexing for `https://www.skyesummithomes.com/`
   - Monitor "Page with redirect" issue - should clear within 1-2 weeks

## Important Notes

- **DNS Propagation**: Changes can take 24-48 hours to fully propagate
- **Cloudflare Proxy**: Keep DNS records on "DNS only" (gray cloud) for root domain to avoid conflicts with Vercel
- **Vercel Configuration**: Ensure both `skyesummithomes.com` and `www.skyesummithomes.com` are added in Vercel dashboard
- **Canonical URLs**: All pages now use `www.skyesummithomes.com` as canonical (already updated)

## Next Steps After DNS Update

1. Wait 24-48 hours for DNS propagation
2. Test all redirects manually
3. Submit updated sitemap to Google Search Console: `https://www.skyesummithomes.com/sitemap.xml`
4. Request re-indexing of homepage in Search Console
5. Monitor "Page with redirect" issue - should resolve automatically

---

**Last Updated**: January 2025
