# hitheshrai.com

Personal research website for Hithesh Rai Purushothama.

The site follows a connected path from solar materials and battery degradation
to computation, applied AI, and energy systems. It is intentionally selective:
the public pages show a research direction and a small set of verifiable work,
rather than reproducing a full CV.

## Stack

- React, TypeScript, and Vite
- Three.js for the interactive research-vision scene
- Plain responsive CSS
- PostHog, loaded only on the production hostname

## Local development

Use Node.js 20 or newer.

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Open <http://127.0.0.1:4173/>.

## Checks

```bash
npm run build
npm run lint
npm run design:audit
npx tsc --noEmit
node scripts/preview-check.mjs
```

The Playwright script writes desktop and mobile review images to
`artifacts/website-preview/` inside the project.

## Project structure

- `src/data/site.ts` contains public copy, experience, publications, and links.
- `src/components/` contains the page sections and visualizations.
- `src/index.css` contains the visual system and responsive layouts.
- `src/lib/atlas.ts` supplies the compact research-location map geometry.
- `docs/content-sources.md` records evidence and editorial decisions.
- `memory/` contains project status, decisions, and session handoffs.

The public CV is intentionally withheld until its next revision. The current
social share image is `public/assets/og-redesign.png`.

## Deployment

Vercel builds and deploys the `main` branch. The production domain is
<https://www.hitheshrai.com>.
