# EMAZZY® — Developer Portfolio

A responsive, dark-first React portfolio for **Emmanuel Izuchukwu Innocent**. Built with React, Vite, JavaScript, Tailwind CSS v4, Framer Motion and Lucide React.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## What's included

- Editorial, motion-led portfolio with responsive desktop, tablet and mobile layouts.
- Dark and light themes with a persistent preference in `localStorage`.
- Mobile navigation includes the same theme switcher.
- About, skills, selected projects, services, process, contact and footer sections.
- Project detail overlays with project notes and technology tags.
- Contact form validation and Formspree submission using the endpoint you supplied. Test it from the deployed site before launch.
- Reduced-motion support, keyboard focus styles, semantic landmarks and SEO metadata.

## Personalise before publishing

1. **Project links:** add verified live-demo and repository URLs in `src/data/projects.js` when you are ready to share them. The current project descriptions are intentionally high-level and do not invent URLs or metrics.
2. **Contact form:** in `src/App.jsx`, replace the current successful-validation notice in `Contact` with a request to your chosen endpoint. Add server-side validation and spam protection.
3. **Social links:** add only profiles you actively use; no fake social destinations are included.\n4. **Repository visibility:** public repositories are linked where supplied. Sacred Geomancy Solutions and CMMS Projects are labelled private and have no public source links.
4. **Resume:** add a real CV file and link it from the navigation if you want a resume download.
5. **Your portrait:** create `public/images/` and place your photo there as `emmanuel-photo.jpg`. The About section already has a portrait frame and will show the image automatically. Use a well-lit portrait crop.\n6. **Project visuals:** the project panels are original CSS-built visual compositions, not claimed product screenshots. Replace them with genuine project screenshots when available.
7. **Availability:** update the availability label in `src/components/Navbar.jsx` if your status changes.

## Theme

The theme defaults to dark. Users can switch between dark and light using the navbar control (also available in the mobile menu). The preference is saved as `emazzy-theme`.

## Deploy

This is a standard Vite static site. Import the project into Vercel or Netlify, use `npm install` as the install command and `npm run build` as the build command, and set `dist` as the publish/output directory.

## Project structure

```text
src/
  components/
    Navbar.jsx
    Reveal.jsx
    ThemeContext.jsx
    ThemeToggle.jsx
  data/
    projects.js
    skills.js
  App.jsx
  index.css
  main.jsx
public/
index.html
vite.config.js
```


## Contact form setup

The contact form is configured with the Formspree endpoint supplied for this portfolio:

`https://formspree.io/f/mnpddvea`

It sends the visitor's name, email, subject and message using Formspree's JSON endpoint. Before launch, submit a test message and confirm the Formspree account is active and the destination email is verified.

## Project visibility

- Public: Stocklytics (`Inventory-stock`), IEURION Tech (`Ieurion-Tech`), QuickCrow, Ngozi’s NaturSip and DeStoryTeller.EO.
- Private: Sacred Geomancy Solutions and CMMS Projects. Their cards intentionally do not expose repository links.
