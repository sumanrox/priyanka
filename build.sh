#!/bin/bash
# Build script - minify CSS and JS files

echo "🔨 Building optimized assets..."

# Minify CSS files
echo "→ Minifying CSS..."
cat css/theme.css | tr -d '\n' | sed 's/  */ /g' | sed 's/ *{ */{/g' | sed 's/ *} */}/g' | sed 's/ *: */:/g' | sed 's/ *; */;/g' | sed 's/ *, */,/g' > css/theme.min.css
cat css/styles.css | tr -d '\n' | sed 's/  */ /g' | sed 's/ *{ */{/g' | sed 's/ *} */}/g' | sed 's/ *: */:/g' | sed 's/ *; */;/g' | sed 's/ *, */,/g' > css/styles.min.css

# Minify JS (safer minification that preserves regex patterns)
echo "→ Minifying JavaScript..."
cat js/app.js | \
  sed '/^[[:space:]]*\/\//d' | \
  sed 's/[[:space:]]*\/\/[^"'\'']*$//' | \
  sed 's/[[:space:]]\{2,\}/ /g' | \
  sed 's/^[[:space:]]\+//' | \
  tr '\n' ' ' | \
  sed 's/[[:space:]]\+/ /g' | \
  sed 's/; /;/g' | \
  sed 's/ {/{/g' | \
  sed 's/{ /{/g' | \
  sed 's/ }/}/g' | \
  sed 's/} /}/g' \
  > js/app.min.js

# Report sizes
echo ""
echo "✅ Build complete! File sizes:"
echo "theme.css:    $(wc -c < css/theme.css) → $(wc -c < css/theme.min.css) bytes"
echo "styles.css:   $(wc -c < css/styles.css) → $(wc -c < css/styles.min.css) bytes"
echo "app.js:       $(wc -c < js/app.js) → $(wc -c < js/app.min.js) bytes"
echo ""
echo "📦 Total savings: ~$(($(wc -c < css/theme.css) + $(wc -c < css/styles.css) + $(wc -c < js/app.js) - $(wc -c < css/theme.min.css) - $(wc -c < css/styles.min.css) - $(wc -c < js/app.min.js))) bytes"
