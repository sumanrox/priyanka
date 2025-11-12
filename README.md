# Priyanka Ghosh — Portfolio

This is a small portfolio site built with static HTML, CSS (Tailwind utilities + custom), and vanilla JS. It includes a few 3D/visual effects (Three.js) and scroll-driven micro-animations (GSAP + ScrollTrigger).

Key files
- `index.html` — main page markup
- `css/theme.css` — centralized theme variables (primary, accent, background, text, borders)
- `css/styles.css` — component styles, layout and animations
- `js/app.js` — interactions, GSAP animations, Three.js scenes, form handling
- `resume/Priyanka-Ghosh-CV.pdf` — (place your resume here) — site download button links to this path

Quick start
1. Open `index.html` in your browser (no build step required). For a local dev server, you can run a simple static server, e.g.: 

```bash
# Python 3 http.server on port 8000
python3 -m http.server 8000

# then open http://localhost:8000 in your browser
```

Performance optimizations
- Site uses minified CSS and JS files (`.min.css` and `.min.js`)
- After editing source files (`css/theme.css`, `css/styles.css`, `js/app.js`), run the build script:

```bash
./build.sh
```

- This regenerates the minified versions
- All external scripts use `defer` attribute for non-blocking loads
- Critical CSS is preloaded via `<link rel="preload">`

## Deployment

### GitHub Pages Deployment

This project includes a production-ready `build/` directory optimized for GitHub Pages.

**Quick deploy:**
```bash
./deploy.sh
```

This script will:
1. Minify all CSS and JavaScript files
2. Copy optimized files to `build/` directory
3. Show deployment instructions

**Manual deployment:**

1. **Push build folder to GitHub**:
   ```bash
   git add build/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Configure GitHub Pages**:
   - Go to: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/build`
   - Click Save

3. **Your site will be live at**:
   - `https://sumanrox.github.io/priyanka/`

**What's in build/:**
- ✅ `index.html` - Main page
- ✅ Minified CSS (~13 KB)
- ✅ Minified JavaScript (~20 KB)
- ✅ Images and resume
- ✅ Configuration files
- ✅ `.nojekyll` - Disables Jekyll processing
- ✅ Security headers and optimizations

See `build/README.md` for detailed deployment instructions.

Theme switching
- Edit `css/theme.css`. The file contains multiple `:root` presets; the active one is used. Comment/uncomment to try alternatives.

Site-specific values
- Contact email: ghoshpriyanka989@gmail.com
- Phone: +91 83350 29364
- Resume path: `resume/Priyanka-Ghosh-CV.pdf`
- Location (used on site): Howrah - 711108, West Bengal, India

Notes & next steps
- Consider moving contact info and the resume path into a single `data/site-config.json` and having `js/app.js` inject them into the page. This avoids hunting through `index.html` for replacements.
- Three.js scenes currently use hardcoded colors — can be migrated to use computed CSS variables for full theme support.

If you'd like, I can implement the small config JSON and wire `js/app.js` to populate contact/resume links dynamically.

---
Generated/updated by project edits on Nov 12, 2025.
# Priyanka Ghosh - Portfolio Website

Professional portfolio website showcasing experience, skills, certifications, and education in sales coordination and executive assistance.

## ✨ Design Features

- **Monochrome Aesthetic**: Elegant black and white design with refined gray accents
- **Lenis Smooth Scroll**: Studio-grade scroll experience with momentum physics
- **Animated Background**: Continuous grain texture with scroll-responsive diagonal patterns
- **Floating Label Forms**: Premium contact form with animated underlines
- **Responsive Design**: Mobile-first, optimized for all screen sizes
- **Bootstrap Icons v1.11.1**: Professional icon system throughout
- **Typography**: Playfair Display italic for headers, Inter for body text

## 📁 Project Structure

```
portfolio-priyanaka/
├── index.html              # Main HTML structure (617 lines)
├── css/
│   └── styles.css         # Custom CSS - animations, components, utilities (292 lines)
├── js/
│   └── app.js             # JavaScript - Lenis, animations, validation (270 lines)
├── assets/
│   └── images/
│       ├── dp.jpg         # Profile photo (2.1M)
│       └── reference.webp # Design reference (363K)
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with comprehensive SEO optimization
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Lenis v1.0.42**: Premium smooth scroll library
- **Bootstrap Icons v1.11.1**: Icon library
- **Vanilla JavaScript**: ES6+ features, no dependencies
- **Google Fonts**: 
  - Playfair Display (italic, 900) - Elegant headers
  - Inter (300-900) - Body text

## 🚀 Key Features

### Navigation
- ✅ Fixed vertical sidebar with "PRIYANKA GHOSH" branding
- ✅ Desktop horizontal navigation menu (Home/About/Experience/Contact)
- ✅ Mobile hamburger menu with slide-in animation
- ✅ "Get in Touch" CTA button in navbar
- ✅ Scroll progress bar
- ✅ Back to top button

### Interactive Elements
- ✅ Lenis smooth scroll with easeOutExpo easing (1.2s duration)
- ✅ Animated grain background with canvas-based texture
- ✅ Scroll-controlled diagonal pattern overlay
- ✅ Floating label contact form with validation
- ✅ Auto-focus on contact form when clicking "Get in Touch"
- ✅ Fade-up animations on scroll
- ✅ Hover lift effects on cards

### Form Features
- ✅ Email regex validation
- ✅ Minimum character requirements (name: 2, message: 10)
- ✅ Visual feedback with color-coded messages
- ✅ Elegant underline design with animated fill
- ✅ Responsive mobile layout

### Sections
1. **Hero Section**: Introduction with stats (6+ years, 3+ certs, 100% data-driven)
2. **About**: Professional summary
3. **Experience**: Work history timeline
4. **Bento Grid**: Professional highlights with certification badges
5. **Contact**: Premium form with elegant floating labels
6. **Footer**: Three-column grid (navigation, socials, contact)

## 🎨 CSS Architecture

The `css/styles.css` file is organized into sections:
- Root variables and Lenis smooth scroll config
- Animated background (grain canvas, blend modes)
- Scroll progress bar
- Fade-up animations with intersection observer
- Hover-lift effects
- Back to top button
- Mobile menu and overlay
- Hamburger animation (3-line to X)
- Contact form enhancements (floating labels, animated underlines)
- Typography (Playfair Display, Inter)
- Utility classes (no border-radius)

## ⚡ JavaScript Modules

The `js/app.js` file includes:
1. **Animated Background** (66 lines)
   - Canvas grain texture generation
   - Scroll-responsive diagonal lines
   - Performance optimized (updates every 3 frames)

2. **Mobile Menu** (30 lines)
   - Hamburger toggle
   - Overlay management
   - Menu link auto-close

3. **Lenis Smooth Scroll** (43 lines)
   - easeOutExpo easing function
   - 1.5s duration for anchor links
   - Auto-focus on contact form
   - Mobile menu close integration

4. **Intersection Observer** (20 lines)
   - Fade-up animations
   - Threshold-based triggering

5. **Scroll Progress Bar** (15 lines)
   - CSS variable updates
   - Percentage calculation

6. **Back to Top** (18 lines)
   - Visibility on scroll > 300px
   - Smooth scroll to top

7. **Contact Form Validation** (65 lines)
   - Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Name minimum: 2 characters
   - Message minimum: 10 characters
   - Visual feedback

## 🎯 SEO Optimization

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Structured Data (JSON-LD) for Person schema
- ✅ Semantic HTML5 elements
- ✅ Image alt attributes
- ✅ Responsive meta viewport

## 🌐 Local Development

To run the portfolio locally:

```bash
# Navigate to project directory
cd portfolio-priyanaka

# Start a simple HTTP server
python3 -m http.server 8000

# Open in browser
# Navigate to http://localhost:8000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (full-width buttons, stacked layout, compact padding)
- **Small**: 640px - 768px (two-column grids)
- **Medium**: 768px - 1024px (desktop nav appears, larger padding)
- **Large**: > 1024px (three-column bento grid, max-w-7xl container)

## 🎨 Design System

### Color Palette (Monochrome)
- **White**: `#ffffff` - Backgrounds
- **Black**: `#000000` - Text, borders, accents
- **Gray-50**: `#f9fafb` - Subtle backgrounds
- **Gray-100**: `#f3f4f6` - Border hover states
- **Gray-200**: `#e5e7eb` - Borders
- **Gray-300**: `#d1d5db` - Input borders
- **Gray-400**: `#9ca3af` - Secondary text
- **Gray-500**: `#6b7280` - Muted text
- **Gray-700**: `#374151` - Body text

### Typography
- **Headers**: Playfair Display, italic, 900 weight
- **Body**: Inter, 300-900 weights
- **Letter Spacing**: 
  - Ultra-wide: `tracking-[0.3em]`
  - Wide: `tracking-[0.2em]`
  - Wider: `tracking-wider`

### Spacing
- **Container**: `max-w-7xl mx-auto px-6 md:px-12 lg:px-16`
- **Sections**: `py-32` for major sections
- **Cards**: `p-6 sm:p-8 md:p-12` responsive padding

### Animations
- **Duration**: 300ms (quick), 500ms (standard), 1200ms (smooth scroll)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for form inputs
- **Easing**: `easeOutExpo` for Lenis scroll

## 🔧 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Optimized

## 📞 Contact Information

- **Email**: priyanka.ghosh@email.com
- **Phone**: +91 12345 67890
- **Location**: India (Remote & On-site available)

## 📄 License

© 2025 Priyanka Ghosh. All Rights Reserved.

---

**Last Updated**: November 12, 2025  
**Version**: 3.0 (Premium Edition)  
**Status**: Production Ready
