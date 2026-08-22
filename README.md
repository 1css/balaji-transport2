# Balaji Transports — Landing Page

A React + Vite recreation of the balajitransports.in landing page, built with
plain CSS (custom design system) and Bootstrap 5 (grid, navbar, carousel,
icons).

## Stack

- React 19 + Vite
- Bootstrap 5 (`bootstrap`, `bootstrap-icons`) for grid/utilities/components
- Custom CSS design system in `src/index.css` (colors, type, components)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  data/siteData.js      # all page content (services, branches, team, etc.)
  components/
    Navbar.jsx           # top bar + sticky nav with scroll-spy
    Hero.jsx
    About.jsx
    Services.jsx
    Branches.jsx         # "route line" branch map signature element
    Team.jsx
    Testimonials.jsx      # Bootstrap carousel
    Partners.jsx
    Contact.jsx           # form + embedded Google Map
    Footer.jsx
    BackToTop.jsx
  App.jsx
  index.css               # design tokens + all component styles
```

## Notes

- Images are referenced directly from the original balajitransports.in
  media assets. Swap the URLs in `src/data/siteData.js` for your own hosted
  images if you'd like to remove that dependency.
- The contact form is client-side only (no backend wired up) — connect it to
  your form handler / API of choice in `src/components/Contact.jsx`.
- This is a client-side-routed app (`/`, `/careers/:slug`). Static hosts must
  rewrite unknown paths to `index.html` so deep links and refreshes work:
  - **Netlify**: already handled by `public/_redirects` (`/* /index.html 200`).
  - **Apache**: add an `.htaccess` with a rewrite rule to `index.html`.
  - **Nginx**: add `try_files $uri /index.html;` to the server block.
  - **Vercel/GitHub Pages/other**: configure their SPA fallback equivalent.
