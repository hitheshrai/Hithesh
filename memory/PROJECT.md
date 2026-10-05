# Project

Personal research website redesign in a separate local checkout at
`C:/Users/hithe/Downloads/hithesh-website-redesign`.

The current draft leads with a research vision, concise proof of work, public
publication records, one engineering example, a compact location map, and
contact. The original site is in `C:/Users/hithe/Hithesh`; this checkout is on
`redesign/research-first` and is not the deployed site.

Use Node 20+ and `npm run dev -- --host 127.0.0.1 --port 4173` for a local
preview. `npm run build`, `npm run lint`, and
`node node_modules/typescript/bin/tsc -p tsconfig.app.json --noEmit`
check the draft. The content source map is `src/data/site.ts`; supporting
source decisions are in `docs/content-sources.md`.

The user prefers limited public detail and will supply a new CV later. Do not
restore the old public PDF without reconciling its claims and dates.
