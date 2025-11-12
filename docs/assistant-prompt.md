# Assistant Prompt / Handoff Notes

Use this short prompt when asking an editor or assistant to make future updates to the site. It provides the minimal context they need to be effective without scanning the entire repo.

```
Project: Priyanka Ghosh portfolio
Stack: Static HTML, Tailwind, CSS variables, vanilla JS, Three.js, GSAP

Key files:
- index.html (markup, contact placeholders, resume link)
- css/theme.css (color system, active theme preset)
- css/styles.css (component styles referencing theme vars)
- js/app.js (animations + optional JS-driven color usage)

Current active theme: NAVY & CREAM (see css/theme.css :root)
Contact: ghoshpriyanka989@gmail.com | +91 83350 29364
Resume path: resume/Priyanka-Ghosh-CV.pdf
Location string: Howrah - 711108, West Bengal, India

When editing:
1. Prefer updating CSS variables in `css/theme.css` instead of hardcoded colors.
2. Keep `theme.css` imported before `styles.css` in `index.html`.
3. For content updates (email/phone), edit `index.html` and the JSON-LD block near the top.
4. To change where CTAs point, update the anchor `href` attributes in `index.html` (Get in Touch → `#contact`).

Edge cases / notes:
- Three.js color values may still be hardcoded in `js/app.js` (convert to CSS variables if you want 3D to follow theme).
- If adding new color variables, define them in `css/theme.css` and use them in `css/styles.css`.

Purpose: paste this prompt when you want quick assistance or automation to modify the site.
```
