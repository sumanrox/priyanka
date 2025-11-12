# Priyanka Ghosh - Portfolio

**Production build for GitHub Pages deployment**

This directory contains the optimized, production-ready files for the portfolio website.

## 🚀 Deployment Instructions

### Option 1: Deploy from build/ folder

1. **Push to GitHub**:
   ```bash
   git add build/
   git commit -m "Add production build"
   git push origin main
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/build`
   - Click Save

3. **Wait for deployment** (usually 1-2 minutes)
   - Site will be live at: `https://sumanrox.github.io/priyanka/`

### Option 2: Deploy entire build/ as separate branch

1. **Create orphan branch**:
   ```bash
   cd build/
   git init
   git add .
   git commit -m "Initial GitHub Pages deployment"
   git branch -M gh-pages
   git remote add origin https://github.com/sumanrox/priyanka.git
   git push -f origin gh-pages
   ```

2. **Configure GitHub Pages**:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

## 📁 Build Contents

```
build/
├── index.html              # Main HTML file
├── .nojekyll              # Tells GitHub Pages to skip Jekyll processing
├── css/
│   ├── theme.min.css      # Minified theme variables (3.3 KB)
│   └── styles.min.css     # Minified styles (9.9 KB)
├── js/
│   └── app.min.js         # Minified JavaScript (20.6 KB)
├── data/
│   └── site-config.json   # Site configuration
├── assets/
│   └── images/
│       ├── dp.jpg         # Profile photo
│       └── reference.webp # Reference image
└── resume/
    └── Priyanka-Ghosh-CV.pdf  # Resume PDF
```

## ✅ Production Optimizations

- ✅ **Minified CSS** (~40% size reduction)
- ✅ **Minified JavaScript** (~33% size reduction)
- ✅ **Security headers** (CSP, X-Frame-Options, etc.)
- ✅ **Subresource Integrity** on CDN scripts
- ✅ **Input sanitization** and validation
- ✅ **Resource hints** (preconnect, preload)
- ✅ **Deferred script loading**

## 🔒 Security Features

All OWASP Top 10 protections implemented:
- Content Security Policy
- XSS prevention
- Input validation & sanitization
- Subresource Integrity hashes
- Secure headers

See `../SECURITY.md` for full security documentation.

## 📊 Performance Metrics

- **Total page weight**: ~35 KB (minified assets only)
- **External dependencies**: ~300 KB (CDN - cached)
- **First Contentful Paint**: < 1s (on good connection)
- **Time to Interactive**: < 2s

## 🔄 Updating the Build

When you make changes to source files:

1. **Edit source files** in root directory (not build/)
2. **Run build script**:
   ```bash
   cd ..
   ./build.sh
   ```
3. **Copy updated files**:
   ```bash
   cp css/*.min.css build/css/
   cp js/*.min.js build/js/
   cp index.html build/
   ```
4. **Commit and push**:
   ```bash
   git add build/
   git commit -m "Update production build"
   git push origin main
   ```

## 🌐 Custom Domain (Optional)

To use a custom domain like `priyankaghosh.com`:

1. **Add CNAME file** to build/:
   ```bash
   echo "priyankaghosh.com" > build/CNAME
   ```

2. **Configure DNS** with your domain registrar:
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or CNAME record: `sumanrox.github.io`

3. **Enable in GitHub**:
   - Settings → Pages → Custom domain
   - Enter your domain and save
   - Enable "Enforce HTTPS"

## 📝 Notes

- **Do NOT edit files in build/ directly** - they will be overwritten
- Always edit source files in root directory
- Run `./build.sh` to regenerate minified files
- The `.nojekyll` file prevents GitHub from processing this as a Jekyll site

## 🆘 Troubleshooting

### Site not loading?
- Check GitHub Pages status in Settings → Pages
- Ensure branch and folder are correct
- Wait 1-2 minutes after pushing changes

### Assets not loading?
- Check browser console for errors
- Verify paths in index.html are relative (not absolute)
- Check CSP headers aren't blocking resources

### Styles not applying?
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check CSS files are in build/css/
- Verify link tags in index.html point to .min.css files

---

**Last updated**: November 12, 2025
