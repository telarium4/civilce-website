# CivilCE Website Deployment Guide for Cloudflare Pages

## Prerequisites
- Git installed on your local machine
- GitHub account (free)
- Cloudflare account (free)
- Domain name (civilce.org) registered

## Step 1: Initialize Git Repository

Open terminal in the civilce directory and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit - CivilCE continuing education website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account
3. Click the "+" icon in top right corner
4. Select "New repository"
5. Configure repository:
   - Repository name: `civilce-website`
   - Description: "CivilCE - Professional Development Hours for Civil Engineers"
   - Set as Public (required for free Cloudflare Pages)
   - Do NOT initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/civilce-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sign in to your account
3. Navigate to "Pages" in the left sidebar
4. Click "Create a project"
5. Select "Connect to Git"
6. Choose GitHub and authorize Cloudflare
7. Select the `civilce-website` repository
8. Configure build settings:
   - Production branch: `main`
   - Build command: (leave empty - we're using static HTML)
   - Build output directory: `/`
   - Root directory: `/`
9. Click "Save and Deploy"

## Step 5: Configure Custom Domain

1. After deployment completes, go to your project in Cloudflare Pages
2. Navigate to "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter `civilce.org`
5. Follow the DNS configuration instructions:
   - If domain is with Cloudflare: Automatic setup
   - If domain is elsewhere: Add CNAME record pointing to your-project.pages.dev

### DNS Settings (if domain is not with Cloudflare):
```
Type: CNAME
Name: @ (or civilce.org)
Content: civilce-website.pages.dev
TTL: Auto
```

For www subdomain:
```
Type: CNAME
Name: www
Content: civilce-website.pages.dev
TTL: Auto
```

## Step 6: Enable HTTPS (Automatic)

Cloudflare Pages automatically provides SSL certificates for your custom domain. No additional configuration needed.

## Step 7: Configure Page Rules (Optional)

1. In Cloudflare Dashboard, go to your domain
2. Navigate to "Rules" > "Page Rules"
3. Add redirects if needed:
   - Redirect www to non-www (or vice versa)
   - Force HTTPS

Example redirect rule:
```
URL: http://www.civilce.org/*
Setting: Forwarding URL (301)
Destination: https://civilce.org/$1
```

## Updating the Website

To make changes to your website:

```bash
# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Cloudflare Pages will automatically deploy within 1-2 minutes
```

## Environment Variables (Not needed for static site)

Since this is a frontend-only site, no environment variables are required.

## Build Configuration File (Optional)

Create a `_headers` file in the root directory for custom headers:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

## Monitoring Deployment

1. Go to Cloudflare Pages dashboard
2. Click on your project
3. View "Deployments" tab to see build status
4. Each commit triggers automatic deployment
5. Preview deployments available for each commit

## Rollback Procedure

If you need to rollback to a previous version:

1. Go to Cloudflare Pages dashboard
2. Navigate to your project
3. Go to "Deployments" tab
4. Find the previous working deployment
5. Click "..." menu and select "Rollback to this deployment"

## Performance Optimization

Cloudflare Pages automatically provides:
- Global CDN distribution
- Automatic minification
- Brotli compression
- HTTP/3 support
- Image optimization (with Cloudflare Polish)

## Analytics Setup

1. In Cloudflare Pages project settings
2. Navigate to "Analytics" tab
3. Enable Web Analytics (free)
4. Copy the analytics snippet if you want more detailed tracking

## Troubleshooting

### Common Issues:

1. **404 errors on routes:**
   - Ensure index.html is in root directory
   - Check file paths are relative

2. **CSS/JS not loading:**
   - Verify paths in HTML files
   - Check for case sensitivity (Linux servers are case-sensitive)

3. **Domain not working:**
   - Allow 24-48 hours for DNS propagation
   - Verify DNS records in domain registrar

4. **Build failing:**
   - Check Cloudflare Pages build logs
   - Ensure no server-side code is present

## Support Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Documentation](https://docs.github.com/)
- [Cloudflare Community](https://community.cloudflare.com/)

## Contact for Issues

If you encounter deployment issues:
1. Check build logs in Cloudflare Pages dashboard
2. Review GitHub repository for file structure
3. Verify DNS settings with your domain registrar
4. Contact Cloudflare support if needed

---

**Note:** This guide assumes you're deploying a static HTML/CSS/JavaScript website with no server-side functionality. The website will be served directly from Cloudflare's global CDN for optimal performance.