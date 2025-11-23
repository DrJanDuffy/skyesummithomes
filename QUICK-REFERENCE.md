# Quick Reference Guide - Skye Summit Real Estate Website

## 🚀 Quick Actions

### Update Contact Information
**Files to edit**: All `.html` files (footer section)
- Phone: `(702) 930-8222`
- Email: `DrJanSells@SkyeSummitHomes.com`
- Address: `11411 Southern Highlands Pkwy #300, Las Vegas, NV 89141`

**Search & Replace**: Use your editor's find/replace across all HTML files

---

### Add Calendly Integration
**File**: `contact.html` (line ~160)

Replace the placeholder div with:
```html
<div class="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

---

### Add Real Photo to About Page
**File**: `about.html` (line ~81)

Replace:
```html
<div class="headshot-placeholder">
```

With:
```html
<img src="/images/dr-jan-duffy.jpg" alt="Dr. Jan Duffy, REALTOR®" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
```

---

### Update Testimonials
**Files**: `sell.html`, `buy.html`, `about.html`, `relocate.html`

Find testimonial sections and replace with real client testimonials (with permission).

---

### Add Blog Posts
**File**: `blog.html`

Add new blog post cards following this structure:
```html
<article class="blog-post-card">
    <div class="blog-post-header">
        <span class="blog-category">Category</span>
        <span class="blog-date">Month Year</span>
    </div>
    <h2>Post Title</h2>
    <p>Post excerpt...</p>
    <a href="/blog/post-slug" class="read-more">Read More →</a>
</article>
```

---

### Update Market Data
**Files**: Service pages (`sell.html`, `buy.html`, `invest.html`)

Update:
- Recent sales examples
- Price per square foot trends
- Days on market statistics
- Market conditions

---

### Form Integration (Follow Up Boss CRM)

**Files**: `valuation.html`, `contact.html`

1. Get webhook URL from Follow Up Boss
2. Update form action attributes:
   ```html
   <form action="YOUR_WEBHOOK_URL" method="POST">
   ```
3. Test form submissions
4. Set up auto-responder emails in CRM

---

### Google Analytics Setup

Add to `<head>` section of all HTML files:
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

---

### Update Sitemap

**File**: `sitemap.xml`

When adding new pages:
1. Add new `<url>` entry
2. Update `<lastmod>` date
3. Set appropriate `<priority>` (0.1-1.0)
4. Set `<changefreq>` (daily, weekly, monthly)

---

### Common CSS Updates

**File**: `styles.css`

**Change Primary Color**:
```css
/* Find and replace */
#0A2540 → Your color
#3A8DDE → Your secondary color
```

**Update Font**:
```css
/* In body selector */
font-family: 'Your Font', sans-serif;
```

---

### Add New Service Page

1. Copy structure from existing service page (e.g., `sell.html`)
2. Update:
   - Meta tags (title, description)
   - H1 heading
   - Content sections
   - Schema markup
3. Add to navigation in all HTML files
4. Add to sitemap.xml
5. Update footer links

---

### Mobile Menu Testing

**Check**:
- [ ] Menu opens/closes on mobile
- [ ] All links work
- [ ] Menu closes when link clicked
- [ ] Menu closes when clicking outside
- [ ] Hamburger icon animates correctly

---

### Performance Check

**Tools**:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## 📋 Pre-Launch Checklist

- [ ] All forms tested and working
- [ ] All internal links verified
- [ ] Mobile navigation tested
- [ ] RealScout widget loading correctly
- [ ] Contact information correct on all pages
- [ ] Google Business Profile links working
- [ ] Social media links updated (if applicable)
- [ ] 404 page working
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Analytics tracking
- [ ] Meta descriptions compelling
- [ ] Images optimized
- [ ] Page load speed < 3 seconds

---

## 🔧 Troubleshooting

### Page Not Loading
1. Check Vercel deployment status
2. Verify file exists in repository
3. Check for syntax errors in HTML

### Form Not Submitting
1. Check browser console for errors
2. Verify webhook URL is correct
3. Test webhook with Postman/curl
4. Check CRM settings

### Widget Not Showing
1. Verify agent-encoded-id is correct
2. Check network tab for script loading
3. Clear browser cache
4. Check RealScout account status

### Navigation Broken
1. Verify all HTML files have navigation
2. Check mobile menu JavaScript loaded
3. Clear browser cache
4. Test in incognito mode

---

## 📞 Support Resources

**Dr. Jan Duffy**
- Phone: (702) 930-8222
- Email: DrJanSells@SkyeSummitHomes.com

**Technical Issues**
- Check Vercel dashboard
- Review GitHub repository
- Check browser console for errors

---

*Last Updated: January 2025*

