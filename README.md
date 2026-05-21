# Skye Summit Real Estate Website

A comprehensive, service-focused hyperlocal website for Dr. Jan Duffy, REALTOR®, specializing in Skye Summit Las Vegas real estate.

**Live Site**: https://skyesummithomes.com  
**Business**: Berkshire Hathaway HomeServices Nevada Properties  
**License**: S.0197614.LLC  
**Phone**: (702) 930-8222

---

## 🎯 Site Philosophy

**"Narrow focus, deep expertise"** — Every page answers "What can Dr. Jan do for ME as a Skye Summit buyer/seller/resident?"

This website positions Dr. Jan Duffy as THE expert resource for Skye Summit residents and buyers, with hyperlocal community content and service-specific pages that establish deep expertise in this one neighborhood.

---

## 📄 Site Architecture

### 10 Service-Focused Pages

1. **Homepage** (`index.html`) - Service-focused hero with quick access to all services
2. **About Dr. Jan** (`about.html`) - Credentials, specialization, and philosophy
3. **Skye Summit Community** (`community.html`) - Comprehensive lifestyle and amenities guide
4. **Sell Your Skye Summit Home** (`sell.html`) - 5-step selling process with FAQ
5. **Buy in Skye Summit** (`buy.html`) - Buyer services with insider knowledge
6. **Free Home Valuation** (`valuation.html`) - Lead capture form with professional analysis
7. **Contact & Consultation** (`contact.html`) - Multiple contact methods and Calendly integration
8. **Investment Strategy** (`invest.html`) - ROI analysis and investment profiles
9. **Relocation Services** (`relocate.html`) - Out-of-state buyer guidance
10. **Insider Blog** (`blog.html`) - Hyperlocal community news and market insights

---

## 🚀 Features

### SEO Optimization
- ✅ Unique meta titles and descriptions for each page
- ✅ Comprehensive schema markup (LocalBusiness, Service, Person, Place, FAQPage)
- ✅ Canonical URLs
- ✅ Internal linking structure (3-5 links per page)
- ✅ Mobile-first responsive design
- ✅ Sitemap.xml with all pages
- ✅ Robots.txt configured

### Performance
- ✅ Service Worker for offline support and caching
- ✅ Resource hints (preconnect, dns-prefetch)
- ✅ Optimized font loading
- ✅ Lazy loading for images/widgets
- ✅ Code splitting and optimization

### Accessibility
- ✅ ARIA labels on all interactive elements
- ✅ Skip to main content link
- ✅ Keyboard navigation support
- ✅ Focus states on all links/buttons
- ✅ Semantic HTML structure

### User Experience
- ✅ Consistent navigation across all pages
- ✅ Mobile hamburger menu
- ✅ Services dropdown menu
- ✅ Back-to-top button
- ✅ FAQ accordion functionality
- ✅ Form validation ready

---

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Font Awesome icons
- **Fonts**: Google Fonts (Montserrat)
- **Deployment**: Vercel (Static Site)
- **Widgets**: RealScout Office Listings
- **Analytics**: Vercel Analytics (ready for GA4)

---

## 📁 Project Structure

```
skyesummithomes/
├── index.html              # Homepage
├── about.html              # About Dr. Jan
├── community.html          # Skye Summit Community Guide
├── sell.html              # Sell Your Home Service
├── buy.html               # Buy in Skye Summit Service
├── valuation.html         # Free Home Valuation Service
├── invest.html            # Investment Strategy Service
├── relocate.html          # Relocation Services
├── contact.html           # Contact & Consultation
├── blog.html              # Insider Blog
├── 404.html               # Custom error page
├── styles.css             # All page styles
├── script.js              # Shared JavaScript
├── sw.js                  # Service Worker
├── components.js          # Navigation component (reference)
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── vercel.json            # Vercel deployment config
├── package.json           # Project configuration
├── SITE-ARCHITECTURE.md   # Complete site documentation
└── DEPLOYMENT-CHECKLIST.md # Post-launch guide
```

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone git@github.com:LetMeHelpYouREALTY/skyesummithomes.git
   cd skyesummithomes
   ```

2. **Start local server**:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Or using Node.js
   node server.js
   ```

3. **Open browser**: Navigate to `http://localhost:3000` or `http://localhost:5000`

---

## 📦 Deployment

### Vercel (Recommended)

The site is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the static site configuration
3. Deployments happen automatically on every push to `main`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## 🎨 Customization

### Colors
- **Primary**: `#0A2540` (Dark Blue)
- **Secondary**: `#3A8DDE` (Blue)
- **Accent**: `#16B286` (Green)
- **Background**: `#F7F9FC` (Light Gray)
- **Gold**: `#FFD700` (Call-to-action highlights)

### Content Updates
- Update service pages: Edit individual HTML files
- Modify contact information: Update footer in all HTML files
- Add blog posts: Create new HTML files in `/blog/` directory
- Update testimonials: Edit testimonial sections in service pages

---

## 📊 SEO Strategy

### High-Intent Service Keywords
- "sell my Skye Summit home"
- "buy Skye Summit property"
- "Skye Summit home valuation"
- "move to Skye Summit"
- "invest in Skye Summit"

### Why This Works
- Less competition than generic terms
- Higher conversion rates (specific service intent)
- Google rewards service + location specificity
- Brand authority as "Skye Summit expert"

---

## 📝 Forms & CRM Integration

### Forms Ready for Integration
- **Valuation Form** (`valuation.html`) - Comprehensive property details
- **Consultation Form** (`contact.html`) - Service interest + timeline

### CRM Setup Required
1. Set up Follow Up Boss webhook
2. Add form action URLs
3. Configure auto-responder emails
4. Set up lead routing

See `DEPLOYMENT-CHECKLIST.md` for detailed integration steps.

---

## 📞 Contact Information

**Dr. Jan Duffy, REALTOR®**  
Berkshire Hathaway HomeServices Nevada Properties  
**Phone**: (702) 930-8222  
**Email**: DrJanSells@SkyeSummitHomes.com  
**Office**: 11411 Southern Highlands Pkwy #300, Las Vegas, NV 89141  
**License**: S.0197614.LLC

**Google Business Profile**: [View Profile](https://share.google/yoVmGzrpTUtHrvsnL)

---

## 📚 Documentation

- **SITE-ARCHITECTURE.md** - Complete site structure and page details
- **DEPLOYMENT-CHECKLIST.md** - Post-launch tasks and maintenance guide

---

## 🔄 Maintenance

### Monthly Tasks
- Review Google Analytics
- Update blog with new posts (2-3 per month)
- Check for broken links
- Review page load speeds
- Update market data on service pages

### Quarterly Tasks
- Review and update content
- Check schema markup validity
- Update sitemap if new pages added
- Review keyword rankings
- Optimize images

---

## 📈 Key Metrics to Track

- Form submissions by service type
- Phone calls by source (UTM tracking)
- Consultation bookings (Calendly)
- Organic traffic growth
- Keyword rankings for "Skye Summit [service]" phrases
- Google Business Profile views and actions
- Time on page (target: 2+ min on service pages)
- Service page conversion rate (target: 3-5%)

---

## 🐛 Troubleshooting

### Forms Not Submitting
- Check Follow Up Boss webhook configuration
- Verify form action URLs are correct
- Check browser console for JavaScript errors

### RealScout Widget Not Loading
- Verify agent-encoded-id is correct
- Check network tab for widget script loading
- Ensure widget script is included in HTML

### Navigation Issues
- Clear browser cache
- Check that all HTML files have consistent navigation structure
- Verify mobile menu JavaScript is loaded

---

## 📄 License

© 2025 Dr. Jan Duffy, REALTOR® S.0197614.LLC. All rights reserved.

---

## 🙏 Acknowledgments

Built with focus on:
- Service-first approach
- Hyperlocal Skye Summit expertise
- Conversion optimization
- SEO best practices
- Accessibility standards

---

*Last Updated: January 2025*
