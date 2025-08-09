# CivilCE - Professional Development Hours Website

A modern, responsive website for CivilCE, providing NCEES-approved continuing education courses for Professional Engineers. The website offers PDH courses across multiple engineering disciplines and serves engineers in Nevada and 40+ other states.

## 🌟 Features

- **Complete Course Catalog**: 18+ PDH courses across 6 engineering disciplines
- **State-Specific Information**: Detailed PDH requirements for all 50 states with Nevada prominently featured
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Interactive Elements**: State requirement checker, course filters, and FAQ accordion
- **SEO Optimized**: Meta tags, structured data ready, and semantic HTML
- **Fast Performance**: Optimized CSS/JS, lazy loading ready, and CDN-friendly

## 📁 Project Structure

```
civilce/
├── index.html              # Homepage with hero, featured courses, state checker
├── courses.html            # Course catalog with filtering and sorting
├── course-detail.html      # Individual course detail template
├── states.html             # States served with PDH requirements (Nevada featured)
├── about.html              # Company information and team
├── contact.html            # Contact form and FAQ section
├── assets/
│   ├── logo.svg            # CivilCE brand logo
│   ├── favicon.svg         # Browser favicon
│   ├── styles.css          # Main stylesheet with responsive design
│   ├── main.js             # JavaScript functionality
│   └── courses.json        # Course database (18 courses + 3 bundles)
├── WEBSITE_PLAN.md         # Detailed planning document
├── DEPLOYMENT_GUIDE.md     # Cloudflare Pages deployment instructions
├── SITEMAP.md              # Site structure and navigation
├── IMPLEMENTATION_CHECKLIST.md  # Development checklist
└── README.md               # This file
```

## 🚀 Quick Start

### Local Development

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JavaScript

### Testing Locally

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Then visit http://localhost:8000
```

## 🌐 Deployment to Cloudflare Pages

### Prerequisites
- GitHub account
- Cloudflare account
- Domain name (civilce.org)

### Step-by-Step Deployment

1. **Initialize Git Repository**
   ```bash
   cd civilce
   git init
   git add .
   git commit -m "Initial commit - CivilCE website"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Create new repository named `civilce-website`
   - Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/civilce-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**
   - Log in to Cloudflare Dashboard
   - Navigate to Pages
   - Click "Create a project"
   - Connect to GitHub
   - Select `civilce-website` repository
   - Build settings: Leave empty (static site)
   - Deploy

4. **Configure Custom Domain**
   - In Cloudflare Pages project settings
   - Add custom domain: civilce.org
   - Follow DNS configuration instructions

## 📋 Key Features by Page

### Homepage (index.html)
- Hero section with clear value proposition
- State PDH requirement checker (dropdown)
- Featured courses carousel (6 courses)
- Bundle packages with pricing
- Newsletter signup
- Customer testimonials

### Courses Page (courses.html)
- Complete catalog of 18 courses
- Filter by category (6 disciplines)
- Filter by PDH hours
- Sort by price/name/featured
- Bundle packages section
- Instant enrollment buttons

### States We Serve (states.html)
- **Nevada prominently featured** at the top
- Complete table of all 50 states
- PDH requirements for each state
- Renewal periods
- Direct links to state boards
- 41 states served (those requiring PDH)

### About Us (about.html)
- Company mission and values
- Leadership team profiles
- Accreditation information
- Statistics (41 states, 18+ courses)
- Why choose CivilCE section

### Contact Page (contact.html)
- Contact form with validation
- Multiple contact methods
- Business hours
- Comprehensive FAQ section (8 questions)
- Response time commitments

### Course Detail (course-detail.html)
- Dynamic content loading from courses.json
- Course objectives and outline
- Instructor information
- Pricing and enrollment
- Related courses section
- Certificate information

## 🎨 Design System

### Colors
- **Primary Blue**: #1e3a8a (Trust, Professionalism)
- **Primary Orange**: #f97316 (Energy, Call-to-action)
- **Accent Green**: #10b981 (Success, Approval)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Inter or Montserrat
- **Body Text**: Open Sans or Roboto
- **Responsive sizing**: Mobile-first approach

### Components
- Cards with hover effects
- Buttons (primary, secondary, success)
- Forms with validation
- Tables for data display
- Accordion for FAQs
- Badges for status/categories

## 📊 Course Catalog

### Engineering Disciplines
1. **Structural Engineering** (3 courses)
2. **Transportation Engineering** (3 courses)
3. **Water Resources** (3 courses)
4. **Geotechnical Engineering** (3 courses)
5. **Environmental Engineering** (3 courses)
6. **Ethics and Professional Practice** (3 courses)

### Bundle Packages
- **Essential Pack**: 15 PDH - $299
- **Professional Pack**: 30 PDH - $549
- **Annual Unlimited**: All courses - $599

### Pricing Range
- Individual courses: $49 - $249
- Based on PDH hours (2-10 hours)
- Competitive with industry standards

## 🔧 Technical Features

### JavaScript Functionality
- Mobile navigation toggle
- State requirement checker
- Course filtering and sorting
- Form validation
- FAQ accordion
- Smooth scrolling
- Dynamic course loading

### SEO Optimization
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Semantic HTML5 structure
- Structured data ready
- XML sitemap compatible
- Fast page load times

### Responsive Design
- Mobile breakpoint: 768px
- Tablet breakpoint: 1024px
- Desktop: 1200px+ container
- Flexible grid layouts
- Touch-friendly interfaces

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## 🛠️ Maintenance

### Adding New Courses
1. Edit `assets/courses.json`
2. Add course object with all required fields
3. Set `featured: true` for homepage display
4. Course automatically appears in catalog

### Updating State Requirements
1. Edit state data in `assets/main.js`
2. Update table in `states.html` if needed
3. Ensure Nevada remains prominently featured

### Modifying Styles
1. Edit `assets/styles.css`
2. Use CSS custom properties for consistency
3. Test responsive breakpoints

## 📈 Performance Optimization

- Minify CSS/JS for production
- Optimize images (use WebP format)
- Enable browser caching via Cloudflare
- Use Cloudflare's CDN for global distribution
- Implement lazy loading for images

## 🔒 Security Considerations

- Form submissions are frontend-only (no backend)
- Add CAPTCHA for production forms
- Implement Content Security Policy headers
- Regular security updates

## 📞 Support

For questions about the website implementation:
- Review `DEPLOYMENT_GUIDE.md` for deployment help
- Check `IMPLEMENTATION_CHECKLIST.md` for feature details
- Consult `WEBSITE_PLAN.md` for architectural decisions

## 📄 License

© 2024 CivilCE. All rights reserved.

---

**Website URL**: https://civilce.org  
**Company**: CivilCE - Professional Development Hours for Civil Engineers  
**Target Audience**: Licensed Professional Engineers requiring continuing education  
**Primary Markets**: Nevada and 40+ states requiring PDH hours