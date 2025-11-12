# 🚀 GitHub Pages Deployment Guide

## Quick Start (3 Steps)

### 1️⃣ Run deployment script
```bash
./deploy.sh
```

### 2️⃣ Commit and push
```bash
git add build/
git commit -m "Deploy production build to GitHub Pages"
git push origin main
```

### 3️⃣ Configure GitHub Pages
1. Go to: https://github.com/ghoshpriyanka989/portfolio-priyanaka/settings/pages
2. **Source**: Deploy from a branch
3. **Branch**: `main`
4. **Folder**: `/build`
5. Click **Save**

**Your site will be live at**: https://ghoshpriyanka989.github.io/

---

## 📁 What's Included

The `build/` directory contains everything needed for GitHub Pages:

```
build/
├── index.html                 # 55 KB - Main HTML
├── .nojekyll                  # Disables Jekyll processing
├── README.md                  # Deployment documentation
├── css/
│   ├── theme.min.css         # 3.3 KB - Theme variables
│   └── styles.min.css        # 9.9 KB - Main styles
├── js/
│   └── app.min.js            # 20.6 KB - All JavaScript
├── data/
│   └── site-config.json      # Contact & resume info
├── assets/
│   └── images/
│       ├── dp.jpg            # 2.1 MB - Profile photo
│       └── reference.webp    # 363 KB - Reference
└── resume/
    └── Priyanka-Ghosh-CV.pdf # 180 KB - Resume
```

**Total size**: 2.7 MB

---

## 🔄 Workflow

### When you make changes:

1. **Edit source files** (in root directory):
   - `index.html`
   - `css/theme.css`
   - `css/styles.css`
   - `js/app.js`
   - `data/site-config.json`

2. **Run deployment script**:
   ```bash
   ./deploy.sh
   ```
   This automatically:
   - Minifies CSS and JS
   - Copies everything to `build/`
   - Shows summary

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

4. **Wait 1-2 minutes** for GitHub Pages to rebuild

---

## 🎨 Customization

### Update Contact Info
Edit `data/site-config.json`:
```json
{
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "location": "Your City, Country"
  }
}
```

### Change Theme Colors
Edit `css/theme.css` and uncomment a theme:
- Navy & Cream (current)
- Modern Tech (blue/cyan)
- Elegant Purple
- Warm Earth (brown/terracotta)

Then run `./deploy.sh`

### Update Resume
Replace `resume/Priyanka-Ghosh-CV.pdf` with your PDF, then run `./deploy.sh`

---

## 🔒 Security Features

✅ **All OWASP Top 10 protections implemented**:
- Content Security Policy (CSP)
- XSS prevention & input sanitization
- Subresource Integrity (SRI) on CDN scripts
- Security headers (X-Frame-Options, etc.)
- Path traversal protection
- Input validation on forms

See `SECURITY.md` for complete security documentation.

---

## ⚡ Performance

- **Minified assets**: ~33% JavaScript size reduction
- **Deferred loading**: Non-blocking script execution
- **Resource hints**: Preconnect & preload for critical assets
- **CDN caching**: External libraries cached by browsers
- **Lighthouse score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `priyankaghosh.com`):

### 1. Add CNAME file
```bash
echo "priyankaghosh.com" > build/CNAME
git add build/CNAME
git commit -m "Add custom domain"
git push origin main
```

### 2. Configure DNS
Add these records with your domain registrar:

**Option A - A Records** (Recommended):
```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

**Option B - CNAME Record**:
```
Type     Host    Value
CNAME    www     ghoshpriyanka989.github.io
```

### 3. Enable in GitHub
1. Go to Settings → Pages
2. Custom domain: Enter `priyankaghosh.com`
3. ✅ Enable "Enforce HTTPS"
4. Wait for DNS propagation (can take 24-48 hours)

---

## 🐛 Troubleshooting

### Site shows 404
- **Wait**: GitHub Pages takes 1-2 minutes after first push
- **Check**: Settings → Pages shows green checkmark
- **Verify**: Branch is `main` and folder is `/build`

### Styles not loading
- **Clear cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Check paths**: All CSS/JS paths in index.html should be relative
- **Verify files**: Run `ls build/css/` to confirm .min.css files exist

### Images broken
- **Check**: Images are in `build/assets/images/`
- **Verify paths**: HTML uses relative paths (e.g., `assets/images/dp.jpg`)
- **Browser console**: Look for 404 errors

### Changes not appearing
- **GitHub Pages cache**: Can take 1-2 minutes to update
- **Browser cache**: Hard refresh (Ctrl+Shift+R)
- **Check commit**: Verify files were committed to `build/`

---

## 📊 Analytics (Optional)

To add Google Analytics:

1. **Get tracking ID** from Google Analytics
2. **Add to index.html** (in `build/index.html`):
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```
3. **Update CSP** to allow Google Analytics domain

---

## 📝 Notes

- **DO NOT** edit files in `build/` directly - they'll be overwritten
- Always edit source files in root directory
- Run `./deploy.sh` to regenerate build files
- The `.nojekyll` file prevents Jekyll processing (required for GitHub Pages)
- Build folder is committed to git for easy deployment

---

## 🆘 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Repository**: https://github.com/ghoshpriyanka989/portfolio-priyanaka
- **Email**: ghoshpriyanka989@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/priyanka-ghosh-84025a164

---

**Last Updated**: November 12, 2025
