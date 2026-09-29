# Kier Daryl Abiad — Portfolio

A responsive, editorial-style portfolio built with React, Vite, and Tailwind CSS. Features professional experience, selected projects, education, a categorized technical toolkit, persistent light/dark themes, and a downloadable résumé.

## Local development

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://127.0.0.1:5173`).

## Production build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The test command builds the site and runs Playwright against the production preview. Checks cover desktop and mobile navigation, experience disclosure, contact links, saved theme preferences, blocked local storage, local anchors, portrait loading, and the PDF download. Axe checks both color themes against WCAG A/AA rules. Browser traces are retained on failure in the ignored `test-results/` directory.

## Updating content

- `src/data.js`: contact details, experience, project descriptions, and technical skills.
- `src/App.jsx`: page sections, introduction, education, and featured migration project.
- `src/styles.css`: visual tokens, layout, responsive styles, and reduced-motion support.
- `public/Abiad_KierDaryl_RESUME.pdf`: the downloadable résumé. This is an exact copy of the supplied `Abiad_KierDaryl_RESUME (4).pdf`.
- `kierportfolio.jpg.jfif`: original portrait, bundled by Vite.
- `index.html`: page metadata and canonical URL.

Dates and achievements follow the supplied résumé. The AI Software Engineer role (May 2025–September 2026) and Developer Intern role (February–May 2026) overlap as provided. The three earlier projects are retained from the original portfolio; the migration project is drawn from the updated résumé. Project illustrations are conceptual, and no unverified repository or demo URLs are used.

Fonts are self-hosted through Fontsource; the site does not require a third-party font service.

## Vercel deployment

`vercel.json` configures the Vite framework, `npm run build`, and the `dist` output directory. The existing Vercel project should use this repository's root directory and Node.js 22 or newer.

After reviewing the local changes, commit and push them to the production branch connected to the Vercel project serving `kier-abiad.vercel.app`. Vercel then builds and deploys the new site. Confirm that this domain is attached to the intended project in the Vercel dashboard.

The local redesign does not publish itself; a production deployment is required to update the public website.
