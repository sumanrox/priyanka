# Theme System & Project Notes

This project centralizes visual theming in `css/theme.css`. The site uses CSS variables (defined in `:root`) so you can switch palettes quickly and consistently.

Quick reference (what I changed recently):
- Active theme: NAVY & CREAM (default)
- Alternate themes included (commented out): Modern Tech (blue/cyan), Warm Earth (brown/terracotta), Elegant Purple (purple/rose)

Contact & project-specific details (updated):
- Primary contact email: ghoshpriyanka989@gmail.com
- Primary phone: +91 83350 29364
- Resume path used by site: `resume/Priyanka-Ghosh-CV.pdf` (the file should be placed at this path)
- Location used in site copy: Howrah - 711108, West Bengal, India

## How to change the theme

1. Open `css/theme.css` and edit the `:root` variables for the active palette.
2. To try a provided preset, comment out the active `:root` and uncomment one of the preset `:root` sections.
3. Save and refresh your browser.

## Important variables (most-used)

- --primary — brand primary color
- --accent — accent / CTA highlight
- --cream / --cream-light — page background tones
- --text-dark / --text-medium — typography colors
- --border-color — default border color used across components

## Project-specific notes

- All "Get in Touch" CTAs now link to the `#contact` section in `index.html`.
- Downloadable resume link points to `resume/Priyanka-Ghosh-CV.pdf` (use `download` attribute on anchor).
- Experience section updated: Vareli Tecnac (2024 – Present) responsibilities now include coordination with sales, bid management, quotations, tender management, and price analysis.

## Where to edit common values

- `index.html` — placeholder content (email, phone, resume link, location) and structural markup.
- `css/theme.css` — color system and alternate themes.
- `css/styles.css` — component styles which reference theme variables.

If you want, I can also make a small admin JSON file (e.g., `data/site-config.json`) to keep contact info and resume path in one place and have `app.js` inject them into the page — that makes future edits safer.
