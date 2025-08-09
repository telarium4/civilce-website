# CivilCE Website Architecture Plan

## Company Overview
- **Name:** CivilCE
- **Domain:** civilce.org
- **Purpose:** Professional Development Hours (PDH) for Civil Engineers
- **Target Audience:** Licensed Professional Engineers requiring continuing education

## Website Structure

### 1. Homepage (index.html)
- Hero section with value proposition
- Featured courses carousel
- State eligibility checker
- Benefits of choosing CivilCE
- Testimonials section
- Call-to-action buttons

### 2. Courses Page (courses.html)
- Course catalog with filtering options
- Categories: Structural, Transportation, Water Resources, Geotechnical, Environmental
- PDH hours clearly displayed
- Pricing information
- Quick enrollment buttons

### 3. Individual Course Pages
- Detailed course description
- Learning objectives
- PDH hours offered
- Instructor information
- Course format (self-paced online)
- Price and enrollment button

### 4. States We Serve (states.html)
- Interactive map of supported states
- State-specific requirements
- Compliance information
- Certificate acceptance details

### 5. About Us (about.html)
- Company mission and vision
- Why choose CivilCE
- Accreditation information
- Quality guarantee

### 6. Contact (contact.html)
- Contact form
- Support email and phone
- FAQ section
- Business hours

## Featured Courses with Pricing

### Structural Engineering
1. **Advanced Seismic Design Principles** - 8 PDH - $199
2. **Bridge Inspection and Maintenance** - 6 PDH - $149
3. **Steel Structure Design Updates** - 4 PDH - $99

### Transportation Engineering
4. **Highway Safety Design Standards** - 6 PDH - $149
5. **Traffic Flow Analysis and Optimization** - 5 PDH - $125
6. **Pavement Design and Management** - 7 PDH - $175

### Water Resources
7. **Stormwater Management Best Practices** - 8 PDH - $199
8. **Flood Risk Assessment and Mitigation** - 6 PDH - $149
9. **Water Treatment Plant Design** - 10 PDH - $249

### Geotechnical Engineering
10. **Foundation Design for Difficult Soils** - 6 PDH - $149
11. **Slope Stability Analysis** - 5 PDH - $125
12. **Retaining Wall Design Methods** - 4 PDH - $99

### Environmental Engineering
13. **Environmental Impact Assessment** - 8 PDH - $199
14. **Sustainable Infrastructure Design** - 6 PDH - $149
15. **Remediation Technologies** - 7 PDH - $175

### Ethics and Professional Practice
16. **Engineering Ethics and Professional Responsibility** - 2 PDH - $49
17. **Project Management for Engineers** - 4 PDH - $99
18. **Risk Management in Engineering** - 3 PDH - $75

## Bundle Packages
- **Essential Pack:** 15 PDH - $299 (Save 25%)
- **Professional Pack:** 30 PDH - $549 (Save 30%)
- **Annual Unlimited:** All courses for 1 year - $599

## Design Guidelines

### Color Scheme
- Primary: #1e3a8a (Deep Blue - Trust, Professionalism)
- Secondary: #f97316 (Orange - Energy, Innovation)
- Accent: #10b981 (Green - Growth, Success)
- Neutral: #f3f4f6 (Light Gray backgrounds)
- Text: #1f2937 (Dark Gray)

### Typography
- Headers: Inter or Montserrat (Modern, Professional)
- Body: Open Sans or Roboto (Readable, Clean)

### Visual Elements
- Professional photography of engineers at work
- Icons for different engineering disciplines
- Clean, modern layout with plenty of whitespace
- Mobile-responsive design

## Technical Implementation
- Pure HTML/CSS/JavaScript (no backend required)
- Course data stored in JSON format
- Responsive design using CSS Grid and Flexbox
- Smooth scrolling and animations
- Contact form (frontend only, with instructions to integrate with form service)

## Deployment to Cloudflare Pages
1. Initialize Git repository
2. Create GitHub repository
3. Connect to Cloudflare Pages
4. Configure build settings
5. Deploy and configure custom domain

## SEO Considerations
- Meta descriptions for all pages
- Structured data for courses
- Sitemap.xml
- Robots.txt
- Fast loading times
- Mobile optimization