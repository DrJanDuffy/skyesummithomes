# Website Verification Checklist

Use this checklist to verify all pages and features are working correctly before and after deployment.

---

## ✅ Pre-Deployment Verification

### All Pages Load Correctly
- [ ] Homepage (`/`)
- [ ] About (`/about`)
- [ ] Community (`/community`)
- [ ] Sell (`/sell`)
- [ ] Buy (`/buy`)
- [ ] Valuation (`/valuation`)
- [ ] Contact (`/contact`)
- [ ] Investment (`/invest`)
- [ ] Relocation (`/relocate`)
- [ ] Blog (`/blog`)
- [ ] 404 Error Page (`/404` or any invalid URL)

### Navigation
- [ ] Desktop navigation menu works
- [ ] Services dropdown menu appears on hover
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu closes when link clicked
- [ ] Mobile menu closes when clicking outside
- [ ] All navigation links go to correct pages
- [ ] Active page highlighted in navigation
- [ ] Back-to-top button appears after scrolling
- [ ] Back-to-top button scrolls to top smoothly

### Forms
- [ ] Valuation form (`/valuation`) - All fields validate
- [ ] Consultation form (`/contact`) - All fields validate
- [ ] Forms show success message on submit
- [ ] Forms reset after submission
- [ ] Required fields marked with asterisk
- [ ] Form placeholders are helpful

### Interactive Features
- [ ] FAQ accordion opens/closes (`/sell`, `/buy`, `/relocate`)
- [ ] FAQ only one open at a time
- [ ] Community page tabs switch correctly
- [ ] Smooth scrolling works for anchor links
- [ ] Header hides/shows on scroll (desktop)
- [ ] Service cards hover effect works

### RealScout Widget
- [ ] Widget loads on homepage
- [ ] Widget displays listings
- [ ] Loading state shows if widget slow
- [ ] Fallback message appears if widget fails

---

## ✅ SEO Verification

### Meta Tags (Check Each Page)
- [ ] Unique meta title (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] Canonical URL present
- [ ] Open Graph tags present (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags present
- [ ] Keywords meta tag (optional but present)

### Schema Markup (Validate with Google Rich Results Test)
- [ ] LocalBusiness schema on all pages
- [ ] Service schema on service pages
- [ ] Person schema on About page
- [ ] Place schema on Community page
- [ ] FAQPage schema on pages with FAQ
- [ ] BreadcrumbList schema (if applicable)
- [ ] ContactPoint schema on Contact page

### Technical SEO
- [ ] Sitemap.xml accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] All pages in sitemap
- [ ] No broken internal links
- [ ] All external links have `rel="noopener"`
- [ ] Images have alt text (when added)

---

## ✅ Performance Verification

### Page Speed (Use Google PageSpeed Insights)
- [ ] Homepage loads < 3 seconds
- [ ] Service pages load < 3 seconds
- [ ] Mobile performance score > 90
- [ ] Desktop performance score > 90
- [ ] No render-blocking resources
- [ ] Images optimized (when added)

### Service Worker
- [ ] Service Worker registers correctly
- [ ] Offline page loads when offline
- [ ] Cached resources load from cache

---

## ✅ Accessibility Verification

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus states visible on all links/buttons
- [ ] Skip to main content link works
- [ ] Forms navigable with keyboard
- [ ] FAQ buttons accessible with keyboard

### Screen Reader
- [ ] ARIA labels on all buttons
- [ ] ARIA labels on icons
- [ ] Semantic HTML structure
- [ ] Headings in logical order (h1 → h2 → h3)
- [ ] Alt text on images (when added)

### Visual
- [ ] Color contrast meets WCAG AA standards
- [ ] Text readable at all sizes
- [ ] No content relies solely on color

---

## ✅ Mobile Responsiveness

### Breakpoints to Test
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px+)

### Mobile-Specific
- [ ] Navigation collapses to hamburger menu
- [ ] Forms are easy to fill on mobile
- [ ] Buttons are large enough to tap
- [ ] Text is readable without zooming
- [ ] Images scale correctly
- [ ] No horizontal scrolling
- [ ] Service cards stack vertically

---

## ✅ Content Verification

### Contact Information
- [ ] Phone number: (702) 930-8222 (all pages)
- [ ] Email: DrJanSells@SkyeSummitHomes.com (all pages)
- [ ] Address: 11411 Southern Highlands Pkwy #300, Las Vegas, NV 89141 (all pages)
- [ ] License: S.0197614.LLC (footer)
- [ ] Google Business Profile link works

### Links
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] Phone links use `tel:` protocol
- [ ] Email links use `mailto:` protocol
- [ ] Google Maps link works

### Content Quality
- [ ] No placeholder text in production
- [ ] All CTAs include phone number
- [ ] Service descriptions are clear
- [ ] No broken images (when images added)
- [ ] All testimonials are realistic (when real ones added)

---

## ✅ Cross-Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## ✅ Analytics & Tracking

### Setup Required
- [ ] Google Analytics 4 installed
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Conversion goals set up
- [ ] UTM parameters for phone calls (if applicable)

---

## ✅ Security

- [ ] HTTPS enabled (Vercel default)
- [ ] Security headers configured (vercel.json)
- [ ] No sensitive data in source code
- [ ] Forms use POST method
- [ ] External scripts from trusted sources only

---

## ✅ Post-Deployment

### Immediate Checks
- [ ] All pages accessible via production URL
- [ ] No 404 errors (except intentional 404 page)
- [ ] Forms submit successfully
- [ ] RealScout widget loads
- [ ] Google Business Profile links work
- [ ] Social media links work (if applicable)

### Week 1 Monitoring
- [ ] Google Analytics tracking working
- [ ] Search Console shows no errors
- [ ] Page speed scores acceptable
- [ ] No broken links reported
- [ ] Forms generating leads correctly

---

## 🔧 Quick Fixes

### If Navigation Broken
1. Check all HTML files have navigation
2. Verify `script.js` is loaded
3. Clear browser cache
4. Check mobile menu JavaScript

### If Forms Not Working
1. Check browser console for errors
2. Verify form action URLs
3. Test webhook endpoint
4. Check CRM integration

### If Widget Not Loading
1. Verify agent-encoded-id
2. Check network tab for script
3. Clear browser cache
4. Check RealScout account status

---

## 📊 Performance Benchmarks

**Target Scores:**
- PageSpeed Insights: 90+ (mobile & desktop)
- GTmetrix: A grade
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

**Load Time Targets:**
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

---

## ✅ Final Sign-Off

Before marking as complete:
- [ ] All pages verified
- [ ] All forms tested
- [ ] All links working
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics tracking
- [ ] Performance acceptable
- [ ] Accessibility compliant

**Verified by**: _________________  
**Date**: _________________  
**Notes**: _________________

---

*Last Updated: January 2025*

