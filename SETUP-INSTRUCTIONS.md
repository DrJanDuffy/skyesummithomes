# Setup Instructions - Skye Summit Real Estate Website

## 🚀 Quick Start Guide

Follow these steps to complete the website setup and go live.

---

## Step 1: Follow Up Boss CRM Integration

### Get Your API Key
1. Log in to [Follow Up Boss](https://www.followupboss.com)
2. Navigate to **Settings** → **API**
3. Generate or copy your API key
4. Keep it secure - you'll need it for Vercel

### Add to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **skyesummithomes** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Name**: `FUB_API_KEY`
   - **Value**: [Your Follow Up Boss API Key]
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
6. Click **Save**

### Test the Integration
1. Go to `/valuation` page
2. Fill out the form with test data
3. Submit the form
4. Check your Follow Up Boss dashboard for the new lead
5. Verify all fields are captured correctly

**Troubleshooting**: See `CRM-INTEGRATION.md` for detailed help.

---

## Step 2: Calendly Integration

### Get Your Calendly URL
1. Log in to [Calendly](https://calendly.com)
2. Go to your calendar settings
3. Copy your calendar URL (e.g., `https://calendly.com/your-username/15min`)

### Add to Contact Page
1. Open `contact.html`
2. Find the Calendly placeholder section (around line 160)
3. Replace the placeholder div with:

```html
<div class="calendly-inline-widget" 
     data-url="YOUR_CALENDLY_URL" 
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async>
</script>
```

4. Replace `YOUR_CALENDLY_URL` with your actual Calendly URL
5. Save and commit

---

## Step 3: Add Real Content

### Photos
1. **Headshot Photo**:
   - Add `dr-jan-duffy.jpg` to project root or `/images/` folder
   - Update `about.html` line ~81:
   ```html
   <img src="/images/dr-jan-duffy.jpg" alt="Dr. Jan Duffy, REALTOR®" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
   ```

2. **Community Photos**:
   - Add Skye Summit community photos
   - Update `community.html` with real images
   - Use descriptive alt text for SEO

### Testimonials
1. Get permission from clients to use their testimonials
2. Update testimonial sections in:
   - `sell.html`
   - `buy.html`
   - `about.html`
   - `relocate.html`
3. Include specific results (e.g., "Sold in 8 days", "$45K above asking")

### Blog Posts
1. Create first 2-3 blog posts
2. Add to `blog.html` following the existing structure
3. Link back to relevant service pages
4. Publish 2-3 posts per month going forward

---

## Step 4: Google Analytics & Search Console

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to all HTML files in `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Google Search Console
1. Go to [Search Console](https://search.google.com/search-console)
2. Add property: `skyesummithomes.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://skyesummithomes.com/sitemap.xml`
5. Monitor for indexing issues

---

## Step 5: Final Testing

### Test Checklist
- [ ] All pages load correctly
- [ ] All internal links work
- [ ] Mobile navigation works
- [ ] Forms submit successfully
- [ ] Leads appear in Follow Up Boss
- [ ] Calendly widget loads
- [ ] RealScout widget displays listings
- [ ] Contact information is correct on all pages
- [ ] Phone links work (click to call)
- [ ] Email links work
- [ ] Google Business Profile links work
- [ ] 404 page works
- [ ] Back-to-top button works

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on tablet
- [ ] Verify all forms work on mobile
- [ ] Check mobile menu functionality

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Step 6: Launch Checklist

### Pre-Launch
- [ ] All content updated (photos, testimonials)
- [ ] Forms tested and working
- [ ] CRM integration verified
- [ ] Calendly integrated
- [ ] Google Analytics tracking
- [ ] Sitemap submitted to Search Console
- [ ] All links verified
- [ ] Mobile responsive tested

### Launch Day
- [ ] Final deployment to production
- [ ] Verify live site loads correctly
- [ ] Test forms one more time
- [ ] Submit sitemap to Search Console
- [ ] Update Google Business Profile with new site URL
- [ ] Share on social media
- [ ] Update email signature with new site URL

### Post-Launch (Week 1)
- [ ] Monitor Google Analytics for traffic
- [ ] Check Search Console for indexing
- [ ] Review form submissions in Follow Up Boss
- [ ] Monitor for any errors or issues
- [ ] Gather initial feedback

---

## Step 7: Ongoing Maintenance

### Weekly
- [ ] Check form submissions
- [ ] Review analytics
- [ ] Monitor for broken links

### Monthly
- [ ] Publish 2-3 blog posts
- [ ] Update market data on service pages
- [ ] Review keyword rankings
- [ ] Add new testimonials
- [ ] Update Google Business Profile

### Quarterly
- [ ] Review and update content
- [ ] Check schema markup validity
- [ ] Optimize images
- [ ] Review performance metrics

---

## 📞 Support

**Technical Issues**:
- Check Vercel dashboard for deployment status
- Review GitHub repository
- Check browser console for errors
- See `QUICK-REFERENCE.md` for common fixes

**Follow Up Boss Issues**:
- See `CRM-INTEGRATION.md` for detailed troubleshooting
- Check Vercel function logs
- Verify API key is set correctly

**General Questions**:
- Review documentation files:
  - `README.md` - Project overview
  - `SITE-ARCHITECTURE.md` - Site structure
  - `DEPLOYMENT-CHECKLIST.md` - Post-launch tasks
  - `QUICK-REFERENCE.md` - Quick actions

---

## ✅ Completion Status

Once you've completed:
- [x] Follow Up Boss API key added
- [ ] Calendly integrated
- [ ] Real photos added
- [ ] Testimonials updated
- [ ] Google Analytics setup
- [ ] Search Console configured
- [ ] All testing complete

Your website will be fully operational and ready to generate leads!

---

*Last Updated: January 2025*

