# Jackson Professional Portfolio

Astro static portfolio built from the Jackson Portfolio Source Pack. Project content and project-type labels are maintained in `src/data/projects.json`; profile, experience, web services and development steps live in `src/data/site.ts`.

## Local development

1. Install dependencies with `npm install`.
2. The default production origin is `https://sthb2025.github.io`. Set `PUBLIC_SITE_URL` only when using a custom domain.
3. Run `npm run dev` for local development or `npm run build` for a static production build.

Canonical metadata, social image URLs, `robots.txt`, and the sitemap use the GitHub Pages origin configured in `astro.config.mjs` unless `PUBLIC_SITE_URL` overrides it.

Project cards use supplied brand marks and imagery where available. Other visual elements are CSS-rendered previews or campaign artwork described in the relevant project data. The Dazzle case-study visual is an illustration, not a screenshot of its live site. The Open Graph preview is a PNG rendered from the included SVG source artwork.
