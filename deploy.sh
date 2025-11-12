#!/bin/bash

# ============================================
# GitHub Pages Deployment Script
# ============================================
# This script rebuilds minified assets and 
# copies them to the build/ directory

set -e  # Exit on error

echo "🚀 Preparing production build for GitHub Pages..."
echo ""

# Step 1: Minify source files
echo "📦 Step 1: Minifying CSS and JavaScript..."
./build.sh
echo ""

# Step 2: Copy minified assets to build/
echo "📋 Step 2: Copying files to build/ directory..."

# Copy HTML
cp index.html build/
echo "  ✅ index.html"

# Copy minified CSS
cp css/theme.min.css build/css/
cp css/styles.min.css build/css/
echo "  ✅ CSS files (minified)"

# Copy minified JavaScript
cp js/app.min.js build/js/
echo "  ✅ JavaScript (minified)"

# Copy configuration
cp data/site-config.json build/data/
echo "  ✅ site-config.json"

# Copy images
cp assets/images/* build/assets/images/
echo "  ✅ Images"

# Copy resume
if [ -f "resume/Priyanka-Ghosh-CV.pdf" ]; then
  cp resume/Priyanka-Ghosh-CV.pdf build/resume/
  echo "  ✅ Resume PDF"
fi

# Copy favicon files if they exist
if ls *.png *.ico 2>/dev/null; then
  cp *.png *.ico build/ 2>/dev/null || true
  echo "  ✅ Favicon files"
fi

echo ""
echo "✨ Build complete!"
echo ""

# Show build size
echo "📊 Build statistics:"
du -sh build/
echo ""

# List all files
echo "📁 Build contents:"
find build/ -type f | grep -v "\.nojekyll\|README.md" | sort
echo ""

# Instructions
echo "🎯 Next steps:"
echo ""
echo "1. Review the changes in build/ directory"
echo "2. Commit to git:"
echo "   git add build/"
echo "   git commit -m 'Update production build'"
echo "   git push origin main"
echo ""
echo "3. Deploy via GitHub Pages:"
echo "   - Go to: https://github.com/sumanrox/priyanka/settings/pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: /build"
echo "   - Save"
echo ""
echo "4. Your site will be live at:"
echo "   https://sumanrox.github.io/priyanka/"
echo ""
