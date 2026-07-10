# BMB Shield Technologies - Company Website

A professional, modern, responsive company website for **BMB Shield Technologies Private Limited**, built using clean HTML5, CSS3, and vanilla JavaScript. The design features a cybersecurity and safety trust theme, with a premium dark color palette, glassmorphism elements, custom micro-animations, and dynamic feedback mechanisms.

---

## 📂 Project Directory Structure

```text
website/
│
├── index.html            # Home page (Mission overview, product highlight, services preview)
├── about.html            # About Us page (Official profile, CIN, registrar details, core values)
├── services.html         # Services page (Detail panels for all 5 specialized offerings)
├── products.html         # Products page (Flagship spotlight on NETRA, problem/solution logic)
├── team.html             # Team page (Profiles of founders, directors, and focus disciplines)
├── projects.html         # Projects page (NETRA safety application & Ambulance 스마트 routing)
├── contact.html          # Contact Us page (Contact channels, form validation, success popups)
│
├── css/
│   └── style.css         # Typography, global CSS variables, glassmorphic styles, responsive rules
│
├── js/
│   └── script.js         # Mobile navbar toggles, active link indicators, form checkers, scroll animations
│
├── images/
│   └── netra_mockup.png  # High-quality smart mockup representing the NETRA application interface
│
└── README.md             # Documentation (This file)
```

---

## ✨ Features & Highlights

1. **Modern Dark Theme & Aesthetics**: Tailored with custom primary navy shades, deep black backgrounds, and neon cyan accents to represent safety, trust, and advanced technology.
2. **Sticky Blur Header**: Transparent navigation bar utilizing `backdrop-filter: blur(12px)` for visual integration.
3. **Active Page Highlight**: The navbar links dynamically highlight to indicate which page the user is currently visiting.
4. **Adaptive Responsiveness**: Grid structures adjust layouts smoothly across smartphones, tablets, laptops, and wide desktop screens.
5. **Interactive Contact Form & Success Modal**: 
   - Floating input labels that animate on focus/data presence.
   - Script-driven validation checking required values and email formats.
   - Successful submissions trigger a custom confirmation overlay modal without page reloads.
6. **Scroll Reveal Effects**: Elements fade and slide up smoothly as the user scrolls them into the browser viewport.

---

## 🚀 Setup & Local Execution

No build steps or complex node environments are required. You can run the website in seconds:

1. **Standard Double-Click**: Locate `index.html` in your file system and double-click to open it directly in any modern browser (Chrome, Firefox, Safari, Edge).
2. **Local Live Server (Recommended)**: 
   - If using **VS Code**, install the "Live Server" extension, right-click `index.html`, and select **"Open with Live Server"**.
   - Or run a simple python server in your terminal from the root folder:
     ```bash
     python -m http.server 8000
     ```
     Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🎨 Theme Customization

To tweak colors, typography, or borders, edit the CSS variables located at the top of [css/style.css](file:///c:/Users/SRIVASTAV/Downloads/bmb%20doc/website/css/style.css):

```css
:root {
    --bg-primary: #060a13;         /* Background color of pages */
    --accent-primary: #00f5d4;     /* Primary highlight color (Neon Cyan) */
    --accent-secondary: #3b82f6;   /* Secondary accent color (Electric Blue) */
    --accent-emergency: #ff2a5f;   /* Danger/Safety warnings (Rose-Red) */
    --glass-bg: rgba(11, 17, 32, 0.7); /* Background fill of glassmorphic cards */
}
```

---

## 🌐 Deployment Details

Since this is a static website, deployment is straightforward:

- **Netlify / Vercel**: Drag and drop the root `website` directory directly into the dashboard.
- **GitHub Pages**: Initialize a git repository, commit the files, push to GitHub, and enable GitHub Pages under settings.
- **Shared Hosting (cPanel)**: Upload the files inside the public directory (usually `public_html`) using the File Manager or an FTP client.
