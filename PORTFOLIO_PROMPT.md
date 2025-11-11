# Complete Portfolio Website Build Prompt

## Project Overview
Create a **professional, sophisticated portfolio website** for a Sales Coordinator & Executive Assistant with 6+ years of experience. The design uses a **Navy & Cream color scheme** with **Three.js 3D animations**, **Lenis smooth scrolling**, and a **modern, studio-grade aesthetic**.

---

## 🎨 Design System

### Color Palette (Navy & Cream Professional Theme)
```css
--primary: #1e3a5f;        /* Deep Navy - Professional, trustworthy */
--primary-light: #2d5a8f;  /* Lighter navy */
--primary-dark: #0f1e30;   /* Darker navy */
--accent: #c8a882;         /* Warm Gold - Elegance, sophistication */
--accent-light: #e5cfb3;   /* Light gold/beige */
--accent-dark: #a88f6f;    /* Dark gold */
--cream: #f5f3ed;          /* Warm cream background */
--cream-light: #faf9f5;    /* Lighter cream */
--text-dark: #1a1a1a;      /* Almost black for text */
--text-medium: #4a5568;    /* Medium gray */
--text-light: #718096;     /* Light gray */
--border-color: #e8e4dd;   /* Cream-toned border */
```

### Typography
- **Display Font (Name Only)**: Playfair Display, italic, 900 weight
- **Body Font**: Inter, weights 300-900
- **All text**: NO rounded corners/borders anywhere (`border-radius: 0 !important`)

### Key Design Principles
1. **Clean, Angular Design**: Zero rounded corners throughout
2. **Professional Navy/Cream Aesthetic**: Warm, sophisticated, corporate-friendly
3. **Bold Typography**: Strong contrast, clear hierarchy
4. **Subtle Animations**: Smooth, elegant, not distracting
5. **Studio-Grade Smooth Scroll**: Lenis library for butter-smooth scrolling

---

## 📦 Technology Stack

### Core Libraries (CDN)
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Bootstrap Icons v1.11.1 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- Lenis Smooth Scroll v1.0.42 -->
<script src="https://unpkg.com/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- Three.js r128 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Tailwind CSS (with forms & typography plugins) -->
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
```

### File Structure
```
portfolio-priyanaka/
├── index.html (632 lines)
├── css/
│   └── styles.css (347 lines)
├── js/
│   └── app.js (660 lines)
└── assets/
    └── images/
        ├── dp.jpg (profile image)
        └── reference.webp
```

---

## 🏗️ Layout Structure

### 1. Fixed Sidebar (Left)
- **Width**: 16px mobile, 24px desktop
- **Background**: `var(--cream-light)`
- **Border**: 2px right border, `var(--primary)`
- **Content**: Vertical text "PRIYANKA GHOSH" in navy
- **Position**: Fixed, full height, z-index: 20

### 2. Fixed Header (Top)
- **Height**: 16px mobile (64px), 20px desktop (80px)
- **Background**: `var(--cream-light)`
- **Border**: 2px bottom border, `var(--primary)`
- **Left Offset**: Matches sidebar width (ml-16 md:ml-24)
- **Contents**:
  - **Desktop Navigation**: Home, About, Experience, Contact (uppercase, tracked)
  - **CTA Button**: "Get in Touch" (gold background, inverts on hover)
  - **Mobile**: Hamburger menu button with 3-line animation
- **Position**: Fixed, z-index: 10

### 3. Mobile Menu (Right Slide-in)
- **Width**: 320px
- **Animation**: Slides in from right with cubic-bezier(0.16, 1, 0.3, 1)
- **Background**: `var(--cream-light)`
- **Features**:
  - Profile badge (navy circle with "PG" initials)
  - Navigation links with accent-light hover backgrounds
  - Gold accent left borders on hover
  - Gold CTA button at bottom
  - Close button (X icon)
- **Overlay**: Dark overlay (rgba(0,0,0,0.5)) when menu is open

### 4. 3D Animated Background (Fixed Full-Screen)
- **Container**: `#three-container`, fixed, inset-0, z-index: 0
- **Background**: Linear gradient cream-light → cream → cream-light
- **3D Objects**: 25 wireframe geometric shapes (Box, Octahedron, Tetrahedron, Icosahedron, Dodecahedron, Torus, Cone)
- **Colors**: 65% navy (#1e3a5f), 35% warm gold (#c8a882)
- **Animation**: Scroll-controlled downward movement (60 units travel), auto-loop
- **Opacity**: 0.12-0.2 for subtle effect

### 5. Main Content Area
- **Left Margin**: ml-16 md:ml-24 (to clear sidebar)
- **Top Padding**: pt-20 md:pt-24 (to clear header)
- **Max Width**: max-w-7xl, centered
- **Padding**: px-6 md:px-12 lg:px-16

---

## 📄 Section-by-Section Build

### SECTION 1: Hero Section
**ID**: `#home`
**Class**: `min-h-screen py-16`

#### Layout
Two-column grid (single column on mobile):
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
```

#### Left Column (Order 2 on mobile, Order 1 on desktop)
**Profile Image**:
- Black 4px border
- `hover-lift` class (translateY(-4px) on hover)
- Group hover scale effect (scale-105)
- Max width 2xl, full width
- Image: `assets/images/dp.jpg`

#### Right Column (Order 1 on mobile, Order 2 on desktop)
**Elements**:
1. **Badge**: Black background, white text, "Sales Coordinator • Executive Assistant"
2. **Name**: 
   - Playfair Display italic 900
   - text-6xl → text-8xl responsive
   - Line break after "Priyanka"
3. **Tagline**: 
   - text-xl → text-2xl
   - Gray text with bold black highlights
   - Left border (4px black), gray-50 background
4. **CTA Buttons** (Two buttons):
   - **Primary**: Navy background, white text, envelope icon, "Get in Touch"
   - **Secondary**: Gold border outline, hover fills with gold, download icon, "Download CV"
   - Full width on mobile, auto width on desktop
5. **Stats Grid** (3 columns):
   - Border-top separator (4px, border-color)
   - Cards with:
     * Navy numbers (2xl → 4xl)
     * Gray uppercase labels (9px → 12px)
     * Hover: gold border + light background
   - Stats: "6+ Years Exp.", "3+ Certifications", "100% Data-Driven"

#### About Me Subsection
Two-column grid:
- **Left**: "About Me" label + "Professional Summary" heading
- **Right**: Professional summary paragraph (with bold highlights)
- Border-top separator (4px)

---

### SECTION 2: Bento Grid (Portfolio/Professional Highlights)
**ID**: `#bento`
**Background**: Linear gradient cream-light (0%) → cream (50%) → #ebe8dd (100%)
**Position**: Relative, overflow hidden

#### 3D Geometric Shapes Background
- **Canvas**: `#shapes-canvas`, absolute, inset-0, z-index: 1
- **Shapes**: 25 wireframe geometric objects (diamonds, hexagons, triangles, pentagons, rectangles, squares, octagons)
- **Sizes**: 2.5 → 3 units (larger than hero background)
- **Colors**: 60% navy (#2a4a6f), 40% gold (#c8a882)
- **Animation**: 
  - Floating downward (0.015-0.04 speed)
  - Horizontal sway (sine wave)
  - Rotation on Z or X axis
  - Even distribution across width (50 units total)
  - Higher respawn point (18-26 units) for continuous flow
- **Visibility**: Fades in/out based on section visibility

#### Section Header
- "Portfolio" label (navy text, gold bottom border)
- "Professional Highlights" heading (navy)
- Description paragraph (text-light)

#### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Card 1: Experience (Spans 2 columns on lg)
- **Background**: `var(--cream-light)`
- **Border**: 2px, `var(--border-color)`, hover: navy
- **Icon**: Navy box with white briefcase icon
- **Title**: Navy, uppercase, "Experience"
- **Jobs** (2 positions):
  1. Current: Gold badge "2024 – Present", navy left border (4px), gold bullets
  2. Previous: Navy badge "2018 – 2024", cream border, gold bullets on hover
- **Hover Effects**: Border color changes

#### Card 2: Skills - Sales & Operations
- **Background**: `var(--cream)` (slightly darker than cream-light)
- **Border**: 2px, `var(--border-color)`, hover: accent gold
- **Icon**: Gold box with white graph icon
- **Tags**: 4 skill tags
  - Default: cream-light bg, navy text, cream border
  - Hover: Navy bg, cream-light text

Skills: CRM (Zoho), Salesforce, Client Coordination, Tender Management

#### Card 3: Certification - Deloitte
- **Background**: `var(--cream-light)`
- **Badge**: Gold badge top-right "Certification"
- **Icon**: Navy box with gold award icon
- **Text**: Navy titles, text-light for date

Deloitte Australia, Data Analytics Simulation, Forage • Aug 2025

#### Card 4: Skills - Technical & Analytical
- Same styling as Card 2
- **Icon**: Gold box with white CPU icon
- Skills: Excel, Tableau, Data Analysis, AI Tools

#### Card 5: Certification - GenAI Analytics
- Same styling as Card 3
- GenAI Analytics, Forage • 2025

#### Card 6: Certification - AI Tools
- Same styling as Card 3
- AI Tools, be10X • 2025

#### Card 7: Education (Spans 2 columns on md+)
- **Background**: `var(--cream-light)`
- **Icon**: Navy box with white mortarboard icon
- **3 Degrees** (3 columns on sm+):
  1. BBA (Finance), University of Calcutta, 2018 (primary navy border, gold year)
  2. Higher Secondary, WBCHSE, 2015 (cream border, text-light year)
  3. Secondary, WBBSE, 2013 (cream border, text-light year)
- **Hover**: Borders change to primary/accent

---

### SECTION 3: Contact Section
**ID**: `#contact`
**Background**: White
**Position**: Relative, overflow hidden

#### 3D Feathers Background
- **Canvas**: `#feathers-canvas`, absolute, inset-0, z-index: 1
- **Feathers**: 15 realistic 3D feather shapes
- **Geometry**: 
  - Central shaft (rachis) from 0 to 4 units
  - Right/left barbs (20 segments) with sine curve (wider middle, tapered ends)
  - ExtrudeGeometry with bevel (depth: 0.05, bevel: 0.02)
- **Colors** (Colorful variations):
  - 30% Navy blue (#2a4a6f)
  - 25% Warm gold (#c8a882)
  - 20% Soft teal (#6b9b9e)
  - 15% Muted coral (#c99b8a)
  - 10% Sage green (#8b9e8c)
- **Opacity**: 0.12-0.24 (varied per feather)
- **Animation**:
  - Floating downward (0.008-0.023 speed)
  - Horizontal sway (sine wave)
  - Multi-axis rotation (X, Y, Z)
  - Even distribution across 40 units width
  - Loop back when y < -12
- **Visibility**: Fades in/out based on section visibility

#### Section Header
- "Get in Touch" label (gray-400, uppercase tracked)
- "Let's Connect" heading (Playfair Display italic, text-5xl → text-7xl, black)
- Horizontal divider (16px width, black)
- Description paragraph (gray-500)

#### Contact Form
**ID**: `#contact-form`
**Features**:
- **Animated Gradient Border** (on hover):
  - Linear gradient (45deg) navy → gold → navy → gold
  - Background-size: 300% 300%
  - Animation: borderGradient 3s infinite
  - Opacity transitions from 0 to 1 on hover
- **Background**: `var(--cream-light)`
- **Border Frames**: 2 nested border divs (navy, opacity 10% and 5%)
- **Shadow**: Elevates on hover (navy-toned shadow)

##### Form Fields (3 fields)
1. **Name Input**:
   - Floating label design
   - Border-bottom only (cream border-color)
   - Focus: border turns navy
   - Animated underline (2px height, navy, expands on focus)
   - Label animates up/down with peer-placeholder-shown

2. **Email Input**:
   - Same styling as name
   - Type: email
   - Email validation (regex)

3. **Message Textarea**:
   - Same styling as above
   - Min height: 120px
   - Resize: none

**Validation Rules**:
- Name: min 2 characters
- Email: valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Message: min 10 characters

##### Submit Button
- **Default**: Navy background, cream-light text, navy border
- **Hover**: Cream-light background, navy text (color inversion)
- **Icon**: Arrow-right (translates on hover)
- **Text**: "Send Message"
- **Shadow**: Elevates on hover
- **Functionality**: Opens mailto with pre-filled subject/body

#### Contact Info Grid (Below form)
3 columns (1 on mobile):
1. **Email**: Envelope icon, priyanka.ghosh@email.com
2. **Phone**: Phone icon, +91 12345 67890
3. **Location**: Pin icon, "Based in India"

All icons hover up slightly (translateY(-1px))

---

### SECTION 4: Footer
**Background**: `var(--primary)` (Navy)
**Border Top**: 4px, `var(--accent)` (Gold)
**Padding**: py-16

#### Layout
Grid: 1 column mobile, 3 columns desktop

#### Column 1
- **Name**: Playfair Display text-4xl, cream-light color
- **Title**: "Sales Coordinator & Executive Assistant", gold color

#### Columns 2-3 (Nested 3-column grid)
3 navigation columns:

1. **Navigation**:
   - Gold heading
   - Cream links (About, Experience, Skills, Education, Contact)
   - Hover: turns gold

2. **Socials**:
   - Gold heading
   - Cream links (LinkedIn, Twitter, GitHub)
   - Hover: turns gold

3. **Contact**:
   - Gold heading
   - Cream links (Email Me, Call Me)
   - Hover: turns gold

#### Copyright
- Border-top (gold, opacity 0.5)
- Centered cream text
- "© 2025 Priyanka Ghosh. All Rights Reserved."

---

## 🎭 Animations & Interactions

### 1. Lenis Smooth Scroll
```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  infinite: false,
});
```

**Anchor Link Behavior**:
- Intercept all `a[href^="#"]` clicks
- Calculate navbar offset (80px)
- Use Lenis scrollTo with 1.5s duration
- Auto-focus on contact form name input when clicking "Get in Touch"

### 2. Fade-Up Animation
**Class**: `.fade-up`
**Initial State**:
```css
opacity: 0;
transform: translateY(40px);
```
**In-View State**:
```css
opacity: 1;
transform: translateY(0);
transition: 900ms cubic-bezier(0.16, 1, 0.3, 1);
```

**Intersection Observer**:
- Threshold: 0.1
- Root margin: -50px bottom
- Adds `.in-view` class when visible

### 3. Hover Lift
**Class**: `.hover-lift`
```css
transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
```
**Hover**:
```css
transform: translateY(-4px);
```

### 4. Scroll Progress Bar
- Fixed top, full width
- Height: 3px, black background
- Width: `var(--scroll-progress)` (calculated from scroll position)
- Transition: 100ms ease-out

### 5. Back to Top Button
- Fixed bottom-right (30px, 30px)
- 50x50px, black background
- Shows when scroll > 500px
- Smooth scroll to top on click
- Hover: translateY(-5px)

### 6. Mobile Menu Animation
**Hamburger**:
- 3 spans (3px height each)
- Active state:
  - Span 1: rotates 45deg, moves to center
  - Span 2: opacity 0, slides left
  - Span 3: rotates -45deg, moves to center

**Menu Panel**:
- Slides from right: -100% → 0
- Transition: 600ms cubic-bezier(0.16, 1, 0.3, 1)

**Overlay**:
- Opacity: 0 → 1
- Visibility toggle

### 7. Contact Form Animations
**Border Gradient** (Hover):
```css
@keyframes borderGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Input Focus**:
```css
@keyframes inputFocus {
  0% { transform: translateY(1px); opacity: 0.8; }
  100% { transform: translateY(0); opacity: 1; }
}
```

**Submit Button Hover**:
- translateY(-3px)
- Enhanced shadow

**Border Frames** (on form hover):
- Scale slightly (1.001, 1.002)
- Opacity changes

---

## 🎨 Three.js 3D Animations

### Animation 1: Hero Background (Geometric Objects)
**Location**: Full-screen fixed background
**Count**: 25 objects
**Geometries**: Box (2 variants), Octahedron, Tetrahedron, Icosahedron, Dodecahedron, Torus, Cone

**Properties**:
- **Colors**: 65% navy (#1e3a5f), 35% warm gold (#c8a882)
- **Opacity**: 0.12-0.2
- **Wireframe**: true
- **Position**: Random across 40 units width, 50 units height, 25 units depth
- **Scale**: 0.5-2.0 (random)
- **Initial Rotation**: Random on all axes

**Animation Loop**:
- **Rotation**: Continuous on X, Y, Z (different speeds per object)
- **Scroll-Controlled Movement**: 
  - Objects move down based on scroll progress
  - Travel distance: 60 units * scrollSpeed (0.3-1.5)
  - Loop back when y < -30, reset to y = 30-50
- **Render**: 60fps animation loop

**Responsive**:
- Resize handler updates camera aspect and renderer size

### Animation 2: Contact Section (Colorful Feathers)
**Location**: Behind "Let's Connect" heading and form
**Count**: 15 feathers
**Canvas**: `#feathers-canvas`

**Geometry Creation**:
```javascript
// Central shaft (rachis)
shape.moveTo(0, 0);
shape.lineTo(0, 4);

// Right barbs (20 segments, sine curve)
for (let i = 0; i <= 20; i++) {
  const t = i / 20;
  const y = t * 4;
  const width = Math.sin(t * Math.PI) * 0.8;
  shape.lineTo(width, y);
}

// Left barbs (mirror)
for (let i = 20; i >= 0; i--) {
  const t = i / 20;
  const y = t * 4;
  const width = Math.sin(t * Math.PI) * 0.8;
  shape.lineTo(-width, y);
}

// ExtrudeGeometry
const extrudeSettings = {
  depth: 0.05,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.02,
  bevelSegments: 2
};
```

**Color Distribution**:
- 30% Navy blue (#2a4a6f)
- 25% Warm gold (#c8a882)
- 20% Soft teal (#6b9b9e)
- 15% Muted coral (#c99b8a)
- 10% Sage green (#8b9e8c)
- Opacity: 0.12-0.24 per feather

**Distribution**:
- Even distribution across 40 units width
- Segment-based positioning (width/count)
- Small random offset within segment (±60% of segment size)

**Animation**:
- **Downward Float**: speedY 0.008-0.023
- **Horizontal Sway**: `initialX + sin(time * frequency) * amplitude`
- **Multi-axis Rotation**:
  - Z: += speedRotation
  - Y: sin(time * 0.8) * 0.2
  - X: cos(time * 0.6) * 0.15
- **Loop**: Reset to top when y < -12, recalculate even distribution

**Visibility**:
- Scroll listener checks if contact section is in viewport
- Opacity: 0 when not visible, 1 when visible

**Responsive**:
- Resize handler updates camera and renderer

### Animation 3: Bento Section (Geometric Shapes)
**Location**: Behind Professional Highlights section
**Count**: 25 shapes
**Canvas**: `#shapes-canvas`

**Geometries** (Wireframe outlines):
- Diamond (PlaneGeometry 2.5x2.5)
- Hexagon (CircleGeometry r=1.4, 6 segments)
- Triangle (CircleGeometry r=1.5, 3 segments)
- Pentagon (CircleGeometry r=1.2, 5 segments)
- Rectangle (PlaneGeometry 3x0.8)
- Square (PlaneGeometry 1.8x1.8)
- Octagon (CircleGeometry r=1.3, 8 segments)

**Material**:
- LineBasicMaterial (not solid, just edges)
- Colors: 60% navy (#2a4a6f), 40% gold (#c8a882)
- Opacity: 0.12-0.25
- Linewidth: 2

**Distribution**:
- Total width: 50 units
- Even distribution: `-(width/2) + (index * segmentSize) + (segmentSize/2)`
- Small random offset (±40% of segment)

**Animation**:
- **Downward Float**: speedY 0.015-0.04 (faster than feathers)
- **Horizontal Sway**: `initialX + sin(time * frequency) * amplitude`
- **Rotation**: Either Z or X axis (random choice per shape)
- **Loop**: Reset when y < -18, respawn at y = 18-26

**Visibility**:
- Scroll listener checks if bento section is in viewport
- Opacity toggle

**Responsive**:
- Resize handler

---

## 📱 Responsive Breakpoints

### Mobile (<768px)
- Sidebar: 16px (w-16)
- Header height: 64px (h-16)
- Hero: Single column, image on top
- Stats: 3 columns maintained
- Bento: Single column
- Footer: Single column
- Mobile menu: Visible
- Desktop nav: Hidden

### Tablet (768px-1024px)
- Sidebar: 24px (w-24, md:w-24)
- Header height: 80px (h-20, md:h-20)
- Hero: 2 columns
- Bento: 2 columns, some cards span both
- Footer: 3 columns
- Mobile menu: Hidden
- Desktop nav: Visible

### Desktop (>1024px)
- Bento: 3 columns
- Hero: 2 columns optimized
- All animations at full effect

---

## ✅ SEO & Accessibility

### Meta Tags (Comprehensive)
```html
<!-- Primary -->
<title>Priyanka Ghosh — Sales Coordinator & Executive Assistant | Data-Driven Professional</title>
<meta name="description" content="Experienced Sales Coordinator & Executive Assistant with 6+ years in pre-sales, post-sales operations, CRM management, and data analytics. Expert in Zoho, Salesforce, Tableau, Excel & AI tools. Based in India, available for remote opportunities.">
<meta name="keywords" content="Sales Coordinator, Executive Assistant, CRM Management, Data Analytics, Tableau, Excel, Zoho, Salesforce, Pre-sales, Post-sales Operations, India, Remote Work">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Priyanka Ghosh — Sales Coordinator & Executive Assistant">
<meta property="og:description" content="6+ years in sales operations, CRM, reporting and executive support. Data-driven and process oriented professional.">
<meta property="og:image" content="https://priyankaghosh.com/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">

<!-- Canonical -->
<link rel="canonical" href="https://priyankaghosh.com/">
```

### Structured Data (JSON-LD)
Full Person schema with:
- Name, jobTitle, description
- Email, telephone, address
- AlumniOf (University of Calcutta)
- HasCredential (3 certifications)
- KnowsAbout (skills array)
- WorkExample (2 organizations)

### Accessibility
- **ARIA Labels**: All interactive elements
- **Alt Text**: All images with descriptive text
- **Form Labels**: Proper label associations
- **Keyboard Navigation**: All clickable elements focusable
- **Focus States**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy (h1→h2→h3→h4)

---

## 🔧 JavaScript Features

### Form Validation
```javascript
// Name: min 2 characters
// Email: regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Message: min 10 characters
// Success: Opens mailto link
// Error: Shows inline feedback (red text)
// Success: Shows green feedback + resets form after 3s
```

### Scroll Features
1. **Progress Bar**: Updates width based on scroll percentage
2. **Back to Top**: Shows at 500px scroll, smooth scroll to top
3. **Intersection Observer**: Triggers .fade-up animations
4. **Lenis Integration**: Smooth scroll with anchor link handling
5. **3D Animations**: Scroll-controlled object movement

### Mobile Menu
- Toggle open/close
- Hamburger animation
- Body scroll lock when open
- Close on link click
- Close on overlay click

---

## 💻 Code Organization

### HTML Structure (632 lines)
1. **Head** (118 lines): Meta tags, fonts, libraries
2. **Body**:
   - Scroll progress bar
   - Back to top button
   - Mobile menu overlay + panel
   - Fixed sidebar
   - Fixed header (desktop nav + mobile toggle)
   - 3D background container
   - Main content:
     * Hero section
     * Bento section
     * Contact section
     * Footer
   - Scripts

### CSS Structure (347 lines)
1. **Root Variables** (23 lines)
2. **Lenis Smooth Scroll** (17 lines)
3. **3D Background** (28 lines)
4. **Scroll Progress** (8 lines)
5. **Animations** (fade-up, hover-lift) (15 lines)
6. **Back to Top** (18 lines)
7. **Mobile Menu** (33 lines)
8. **Hamburger Animation** (47 lines)
9. **Typography** (6 lines)
10. **Contact Form** (143 lines - includes all animations)
11. **Utilities** (4 lines)

### JavaScript Structure (660 lines)
1. **3D Background Animation** (118 lines)
2. **Feathers Animation** (130 lines)
3. **Geometric Shapes Animation** (135 lines)
4. **Mobile Menu** (30 lines)
5. **Intersection Observer** (8 lines)
6. **Scroll Progress** (8 lines)
7. **Back to Top** (12 lines)
8. **Form Validation** (54 lines)
9. **Lenis Initialization** (65 lines)

---

## 🎯 Key Implementation Details

### Inline Styles with CSS Variables
All color theming uses inline styles referencing CSS variables:
```html
style="background-color: var(--primary); color: var(--cream-light);"
```

### Hover Events with Inline JavaScript
```html
onmouseover="this.style.borderColor='var(--accent)'"
onmouseout="this.style.borderColor='var(--border-color)'"
```

### Three.js Scene Setup Pattern
Each 3D animation follows:
1. Check if canvas exists + Three.js loaded
2. Create scene, camera, renderer
3. Set renderer size and clear color
4. Position camera
5. Create geometries/materials
6. Add objects to scene
7. Animation loop with requestAnimationFrame
8. Resize handler
9. Visibility/scroll handlers

### Lenis Smooth Scroll Integration
- Initialize with specific easing function
- RAF loop for continuous updates
- Custom anchor link handling with offset calculation
- Auto-focus on contact form

---

## 📋 Testing Checklist

### Visual Testing
- [ ] No rounded corners anywhere
- [ ] Navy & Cream colors consistent
- [ ] All hover states working
- [ ] 3D animations smooth (60fps)
- [ ] Feathers evenly distributed
- [ ] Geometric shapes evenly distributed
- [ ] Mobile menu slides smoothly
- [ ] Hamburger animates correctly
- [ ] Form border gradient animates on hover

### Functional Testing
- [ ] Lenis smooth scroll works
- [ ] Anchor links scroll with offset
- [ ] Contact form validation works
- [ ] Mailto link opens on submit
- [ ] Back to top button appears/works
- [ ] Scroll progress bar updates
- [ ] Fade-up animations trigger
- [ ] Mobile menu opens/closes
- [ ] Responsive layouts correct

### Performance Testing
- [ ] 3D animations at 60fps
- [ ] No layout shifts
- [ ] Images lazy load
- [ ] CDN resources load quickly
- [ ] Smooth scroll doesn't lag

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Alt text on images
- [ ] Form labels associated
- [ ] Focus states visible
- [ ] Semantic HTML structure

---

## 🚀 Build Instructions

### Step 1: Create File Structure
```bash
mkdir -p portfolio-priyanaka/{css,js,assets/images}
```

### Step 2: Create HTML File
Create `index.html` with all sections as documented above.

### Step 3: Create CSS File
Create `css/styles.css` with all styles, animations, and utilities.

### Step 4: Create JavaScript File
Create `js/app.js` with all Three.js animations, Lenis setup, and interactions.

### Step 5: Add Assets
- Add profile image: `assets/images/dp.jpg`
- Add reference image: `assets/images/reference.webp` (optional)

### Step 6: Test Locally
```bash
# Simple HTTP server (Python 3)
python3 -m http.server 8000

# Or Node.js http-server
npx http-server -p 8000
```

Open browser: `http://localhost:8000`

---

## 🎨 Design Tokens Reference

### Spacing Scale (Tailwind)
- `gap-2`: 0.5rem (8px)
- `gap-3`: 0.75rem (12px)
- `gap-4`: 1rem (16px)
- `gap-6`: 1.5rem (24px)
- `gap-8`: 2rem (32px)
- `gap-16`: 4rem (64px)

### Font Sizes
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)
- `text-7xl`: 4.5rem (72px)
- `text-8xl`: 6rem (96px)

### Border Widths
- `border`: 1px
- `border-2`: 2px
- `border-4`: 4px

### Transitions
- Fast: 300ms
- Medium: 400-500ms
- Slow: 600-900ms
- Cubic bezier: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth spring)

---

## 📝 Final Notes

### Critical Success Factors
1. **Zero Rounded Corners**: Enforce `border-radius: 0 !important` globally
2. **Color Consistency**: Always use CSS variables, never hard-code colors
3. **Smooth Scroll**: Lenis is essential for studio-grade feel
4. **3D Performance**: Keep object count balanced (25 max per scene)
5. **Even Distribution**: Use segment-based positioning for all floating elements
6. **Responsive Design**: Test all breakpoints thoroughly
7. **Form Validation**: Ensure all edge cases covered
8. **Accessibility**: ARIA labels and semantic HTML mandatory

### Performance Optimization
- **Three.js**: Use wireframe for low poly count
- **Lenis**: Disable smooth touch for better mobile performance
- **Images**: Lazy load, optimize file sizes
- **CDN**: Use CDN links for all libraries
- **Animations**: Use CSS transitions over JavaScript when possible

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Variables support required
- WebGL support required (for Three.js)

---

## 🎉 Conclusion

This prompt provides a **complete, pixel-perfect specification** for building a professional portfolio website with:
- ✅ Sophisticated Navy & Cream color scheme
- ✅ Three unique Three.js 3D animation scenes
- ✅ Lenis smooth scrolling
- ✅ Responsive bento grid layout
- ✅ Elegant contact form with validation
- ✅ Comprehensive SEO and accessibility
- ✅ Mobile-first responsive design
- ✅ Professional animations and interactions

**Every detail is documented** - colors, spacing, animations, code structure, and implementation steps. Follow this prompt exactly to recreate the portfolio perfectly.
