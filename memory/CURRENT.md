# Current state — 2026-10-05

- The research-first redesign is live at <https://www.hitheshrai.com>.
- Current website release commit: `5f465e8` (`Add Next Lab team context to the`r`n  homepage`). It was pushed directly to GitHub `main`; the live
  domain returned HTTP 200 with the new metadata and passed the production
  Playwright desktop/mobile check.
- The opening now names the three public themes directly: solar materials,
  battery degradation, and practical AI. It names thin-film fabrication,
  battery measurements, and computational tools, then connects the Next Lab and
  SolarSPELL team's offline-AI tests to educational access in underserved
  communities, including the Global South. This is stated as a goal rather than
  a completed deployment outcome.
- ASU's Renewable Energy Materials and Devices Lab (Rolston Lab) is the main
  research section. Each card separates the question, contribution, and output,
  status, or evidence boundary.
- The perovskite card now links the consolidated ASU Forge participant record.
  The three documented projects are: PAIOS mobile-ion characterization in spring
  2023, additive-mediated ion-migration control in fall 2023, and ambient
  blade-coated CsPbX₃ films in spring 2025. The homepage does not add a lifetime
  or device-performance claim beyond those records.
- Research beyond ASU covers Purdue, HZB, EPFL, and NIMS. EPFL's unqualified
  19% number was removed pending measurement and attribution context. The NIMS
  entry states that a lithium-conservation check exposed an artifact in one
  model result and that result was rejected.
- Next Lab is framed as team-based applied AI and engineering. EDge AI names the
  Jetson trade-offs, partner demonstrations, and the verified ASU presentation
  leadership without changing the user's official role title.
- The projects rail now includes the user-supplied full Next Lab team photo while
  retaining the Enterprise Technology Town Hall, AEE, and First Solar images.
- The hero retains the contained, lazily loaded Three.js ideal cubic CsPbI₃
  reference structure and selectable Materials, Solar, Batteries, and Systems
  views. These captions distinguish completed work from longer-term interests.
- The research fact layout uses an 88px label column and 13px body text. The
  previously confirmed Contribution/text overlap is resolved at desktop and
  390px phone width.
- The public CV remains withheld until the user supplies its replacement.
- The IPEROP poster uses the user-confirmed author list H. R. Purushothama,
  H. Nguyen, K. Bakshi, and N. Rolston. The linked nanoGe record still omits
  Nguyen and Bakshi; that difference is documented in `docs/content-sources.md`.
- `public/assets/og-redesign.png` now matches the current hero message. Run
  `npm run share-card` to regenerate it deterministically with Playwright.
- Checks passed on the release: `npm run build`, `npm run lint`,
  `npx tsc --noEmit`, `npm run design:audit`, local Playwright at 1440×1000 and
  390×844, and the same Playwright check against production. Both production
  widths reported zero console errors and body width equal to viewport width.
- Review artifacts are written under `artifacts/website-preview/` and ignored by
  Git. Source evidence and claim boundaries are in `docs/content-sources.md`.

Next: integrate the new CV when supplied. Future edits should preserve the
separation between documented contributions, team outcomes, ongoing work, and
longer-term research interests.
