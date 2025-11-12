# Priyanka Ghosh — Portfolio

Professional portfolio website showcasing experience, skills, certifications, and education in sales coordination and executive assistance.

## ✨ Features

- **Navy & Cream Theme**: Elegant design with CSS variables in `css/theme.css`
- **Lenis Smooth Scroll**: Studio-grade scroll experience (1.0s duration, optimized easing)
- **Three.js Scenes**: Wireframe hero, feather contact bg, geometric bento shapes
- **GSAP Animations**: Minimal subtle animations (button pulse only)
- **Responsive Design**: Mobile-first with hamburger menu and optimized layouts
- **Security Hardened**: OWASP Top 10 protections, input sanitization, SRI hashes
- **Performance Optimized**: Minified CSS/JS (~14KB savings), resource hints, deferred loading
- **Centralized Config**: Contact info managed via `data/site-config.json`

## 📁 Project Structure

```
portfolio-priyanaka/
├── index.html                 # Main HTML structure
├── css/
│   ├── theme.css             # Theme variables (Navy & Cream)
│   ├── theme.min.css         # Minified theme (3.3KB)
│   ├── styles.css            # Component styles & animations
│   └── styles.min.css        # Minified styles (9.9KB)
├── js/
│   ├── app.js                # Site functionality & interactions
│   └── app.min.js            # Minified JavaScript (18KB)
├── data/
│   └── site-config.json      # Contact info & resume path
├── assets/images/            # Profile and visual assets
├── resume/
│   └── Priyanka-Ghosh-CV.pdf # Resume file
├── build/                     # Production-ready GitHub Pages files
├── build.sh                  # Minification script
├── deploy.sh                 # Full deployment automation
├── SECURITY.md               # OWASP Top 10 documentation
├── DEPLOYMENT.md             # Detailed deployment guide
└── README.md                 # This file
```

## 🚀 Quick Start

**Local development:**

```bash
# Start a local server
python3 -m http.server 8000

# Open in browser
# Navigate to http://localhost:8000
```

**Build for production:**

```bash
# Minify CSS and JavaScript
./build.sh

# Or run full deployment workflow
./deploy.sh
```

## 🌐 Deployment

### GitHub Pages (Current Setup)

**Live URL**: [https://ghoshpriyanka989.github.io/](https://ghoshpriyanka989.github.io/)

**Deploy steps:**

1. Run build script:
   ```bash
   ./deploy.sh
   ```

2. Push to GitHub:
   ```bash
   git add build/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. Configure GitHub Pages:
   - Repository: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/build`
   - Save

**Build directory contains:**
- ✅ Optimized HTML with security headers
- ✅ Minified CSS (~13KB total)
- ✅ Minified JavaScript (~18KB)
- ✅ All images and resume
- ✅ Site configuration JSON
- ✅ `.nojekyll` file (disables Jekyll processing)

See `DEPLOYMENT.md` for complete deployment documentation.

## 🎨 Theme Customization

Edit `css/theme.css` to customize colors:

```css
:root {
  --primary: #1e3a5f;    /* Navy blue */
  --accent: #c8a882;     /* Gold accent */
  --cream: #f5f3ed;      /* Cream background */
  /* ... more variables */
}
```

The file includes 4 pre-configured themes. Uncomment alternatives to switch themes.

## 📝 Contact Information

Update contact details in `data/site-config.json`:

```json
{
  "contact": {
    "email": "ghoshpriyanka989@gmail.com",
    "phone": "+918335029364",
    "location": "Howrah - 711108, West Bengal, India"
  },
  "resume": {
    "filename": "Priyanka-Ghosh-CV.pdf",
    "path": "resume/Priyanka-Ghosh-CV.pdf"
  }
}
```

Changes are automatically injected into the page on load.

## 🔒 Security Features

- **Input Sanitization**: All form inputs sanitized (email, phone, text)
- **XSS Prevention**: No innerHTML usage, safe DOM manipulation
- **SRI Hashes**: Subresource Integrity on all CDN scripts
- **Security Headers**: X-Content-Type-Options, X-XSS-Protection, Referrer-Policy
- **Email/Phone Validation**: Regex patterns prevent injection

See `SECURITY.md` for complete OWASP Top 10 coverage.

## ⚡ Performance

**Optimization highlights:**
- Minified CSS: 40% reduction (~5KB saved)
- Minified JavaScript: 33% reduction (~9KB saved)
- Resource hints: Preconnect to CDNs, DNS prefetch
- Deferred scripts: Non-blocking JavaScript loading
- Optimized Lenis: Reduced scroll duration (1.0s) and smooth easing
- Minimal animations: Only essential GSAP (button pulse)

**Build script:**
```bash
./build.sh
# Generates .min.css and .min.js files
# Shows file size comparison
```

## 🛠️ Technologies

- **HTML5**: Semantic markup with ARIA labels
- **Tailwind CSS**: Utility-first CSS framework (CDN v3.4.1)
- **Three.js**: 3D WebGL scenes (r128)
- **GSAP**: Minimal animations (v3.12.2 + ScrollTrigger)
- **Lenis**: Smooth scroll library (v1.0.42 via jsDelivr)
- **Bootstrap Icons**: v1.11.1
- **Fonts**: Playfair Display (headers), Inter (body/sidebar)

## 📱 Responsive Design

- **Mobile**: < 768px (hamburger menu, stacked layouts)
- **Tablet**: 768px - 1024px (grid layouts, sidebar appears)
- **Desktop**: > 1024px (full navigation, three-column grids)

**Mobile features:**
- Icon-only hamburger button (no "Menu" text)
- Slide-in mobile menu with overlay
- Touch-optimized Lenis scroll (touchMultiplier 1.5)
- Responsive typography and spacing

## 🎯 Key Sections

1. **Hero**: Introduction with animated Three.js wireframes
2. **About**: Professional summary
3. **Experience**: Work timeline with Vareli Tecnac job details
4. **Bento Grid**: Certifications and highlights with geometric shapes
5. **Contact**: Form with Three.js feather background
6. **Footer**: Three-column grid (navigation, social, contact)

**UI Elements:**
- Scroll progress bar with gradient shimmer
- Back to top button (black circle with white arrow)
- Fixed vertical sidebar with branding
- LinkedIn social link (username: priyanka-ghosh-84025a164)

## 📊 File Sizes

| File | Original | Minified | Savings |
|------|----------|----------|---------|
| theme.css | 3.8KB | 3.3KB | 13% |
| styles.css | 11.6KB | 10.0KB | 14% |
| app.js | 27.6KB | 18.0KB | 35% |
| **Total** | **43KB** | **31KB** | **~12KB** |

## 📞 Support & Contact

- **GitHub**: [@ghoshpriyanka989](https://github.com/ghoshpriyanka989)
- **LinkedIn**: [priyanka-ghosh-84025a164](https://www.linkedin.com/in/priyanka-ghosh-84025a164)
- **Email**: ghoshpriyanka989@gmail.com
- **Phone**: +91 83350 29364

## 📄 License

© 2025 Priyanka Ghosh. All Rights Reserved.

---

**Last Updated**: November 12, 2025  
**Version**: 4.0 (Production Ready)  
**Status**: Deployed to GitHub Pages
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
