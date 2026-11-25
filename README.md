# Kier Daryl Abiad — Portfolio

A React and Vite portfolio inspired by [GitProfile](https://github.com/arifszn/gitprofile). It uses a light-by-default card layout with a 14-theme menu, a featured project for [Abiad Residences](https://abiadresidences.vercel.app/), and a credentials section.

## Run locally

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite (normally http://127.0.0.1:5173).

## Update the portfolio

- `src/data.js`: biography, contact details, education, experience, skills, projects, and credentials. GitHub cards are curated rather than fetched at runtime.
- `src/components/Profile.jsx`, `src/components/ThemePicker.jsx`, and `src/components/Work.jsx`: profile, theme menu, experience, and project cards.
- `src/styles.css`: responsive layout and theme palettes. Theme names are listed in `src/hooks/useTheme.js`.
- `public/Abiad_KierDaryl_RESUME.pdf`: the supplied résumé, version (6).
- `public/abiad-residences.webp` and `public/abiad-residences-dark.webp`: light and dark screenshots of the featured project. Its logo is in `public/abiad-residences-logo.svg`.

## Verify and deploy

```sh
npx playwright install chromium
npm test
npm run build
```

Playwright covers the project links and assets, résumé download, theme persistence, keyboard navigation, and automated accessibility in desktop and mobile Chromium. Vite writes the production build to `dist/`. To publish on Vercel, push the reviewed changes to the production branch connected to the portfolio project.
