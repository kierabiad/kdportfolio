# Kier Daryl Abiad — Portfolio

A responsive, monochrome editorial portfolio built with React, Vite, and Tailwind CSS. Dark, strictly black-and-white by default (with an optional light inverse that is remembered between visits). Features professional experience, selected projects, education, a categorized technical toolkit, and a downloadable résumé.

Type is Instrument Serif (display) paired with DM Sans (text), both self-hosted.

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

The test command builds the site and runs Playwright against the production preview. Checks cover desktop and mobile navigation, experience disclosure, contact links, the dark default and saved theme preference, blocked local storage, skip-link behavior, local anchors, portrait loading, and the PDF download. A palette test fails if any computed text, background, border, or SVG color is not a pure gray in either theme, and Axe checks both themes against WCAG A/AA rules. Browser traces are retained on failure in the ignored `test-results/` directory.

## Updating content

- `src/data.js`: contact details, hero facts, experience, project descriptions, and technical skills.
- `src/components/`: one file per page section (`Hero`, `About`, `Experience`, `Work`, `Toolkit`, `Contact`, plus `Header`, `Footer`, and the project illustrations).
- `src/styles/tokens.css`: the whole palette and spacing scale. Change colors here; dark is the default and `:root[data-theme='light']` is the inverse.
- `src/styles/`: `base.css` (type, buttons, primitives), `layout.css` (header/footer), `sections.css`, and `work.css`.
- `src/hooks/useTheme.js` and `public/theme-init.js`: theme toggle and the pre-paint saved-theme bootstrap.
- `public/Abiad_KierDaryl_RESUME.pdf`: the downloadable résumé. This is an exact copy of the supplied `Abiad_KierDaryl_RESUME (4).pdf`.
- `kierportfolio.jpg.jfif`: original portrait, bundled by Vite. It is shown in grayscale and multiplied onto a gray studio backdrop so its white background sits naturally on the dark page.
- `index.html`: page metadata and canonical URL.

Tailwind only scans `src/components/` and `src/App.jsx` for utility classes (see `src/styles.css`). Avoid giving your own CSS classes the same name as a Tailwind utility (for example `invert`, `filter`, `blur`): Tailwind will also generate that utility, and its properties (such as `filter: invert(100%)`) get applied on top of yours.

Dates and achievements follow the supplied résumé. The AI Software Engineer role (May 2025–September 2026) and Developer Intern role (February–May 2026) overlap as provided. The three earlier projects are retained from the original portfolio; the migration project is drawn from the updated résumé. Project illustrations are conceptual, and no unverified repository or demo URLs are used.

Fonts are self-hosted through Fontsource; the site does not require a third-party font service.

## Vercel deployment

`vercel.json` configures the Vite framework, `npm run build`, and the `dist` output directory. The existing Vercel project should use this repository's root directory and Node.js 22 or newer.

After reviewing the local changes, commit and push them to the production branch connected to the Vercel project serving `kier-abiad.vercel.app`. Vercel then builds and deploys the new site. Confirm that this domain is attached to the intended project in the Vercel dashboard.

The local redesign does not publish itself; a production deployment is required to update the public website.
