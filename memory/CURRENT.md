# Current state — 2026-10-04

- Objective: finish a local, reviewable redesign with a sparse, durable
  research identity. The live site is unchanged.
- Branch: `redesign/research-first` in the separate checkout. Changes remain
  uncommitted and unpublished.
- The user asked to omit the separate Open-Air cesium PVSC presentation;
  IPEROP now represents that thread. The remaining PVSC item is the linked
  formamidinium proceedings paper. See `docs/content-sources.md`.
- The user requested removal of the old public CV and will provide a new one
  later. The PDF and all CV links are removed from this draft.
- Public research cards now include one specific method line each. The hero
  has the user's full name as h1 and the vision as the large display line.
- Research placements now appear directly after the research themes as four
  visible entries rather than an interactive selector. A compact map and
  verified Purdue, HZB, ThinkSwiss, and NIMS photos support the section.
- The engineering section uses the LlamaCon 2025 team photo from the public
  ASU SolarSPELL story and names both LlamaCon and ASU FOLC Fest as 2025
  presentations of the EDge AI work. Responsive layout stacks the hero and placement
  visuals by 800px; the share card was replaced.
- The hero now contains a lazily loaded Three.js research-vision scene with
  crystal, solar, storage, and system stages. It distinguishes halide
  perovskites for solar from Li-rich antiperovskites as candidate solid
  electrolytes and labels the full path as future direction.
- The user confirmed Next Lab began as Studio Associate in Sep 2023, followed
  by Management Intern in Mar 2026; "Senior" was removed. EPICS · 2Unify runs
  2022–2024. The Zoom photograph is from an Enterprise Technology Town Hall,
  and the photovoltaic photograph is a First Solar reliability site visit.
- About now explains the degree choice: Rolston Lab built the materials-to-
  energy foundation, Next Lab developed the AI-for-social-impact direction,
  and the AI Engineering Materials Science track connects them.
- The narrative now states the degree progression directly: undergraduate
  research moved from narrow- to wide-bandgap solar perovskites; master's work
  focuses on batteries, degradation measurements, and models. ASU Rolston Lab
  is the research home and labels all three core research cards. Placement copy
  uses collaborative turning points and includes a model discarded after a
  physical check. The About image shows the user with Prof. Rolston.
- The public voice no longer relies on repeated first-person phrasing. Next Lab
  now emphasizes partner alignment, technical trade-offs, team delivery,
  demonstrations, and communication as TPM-relevant evidence while retaining
  the verified Studio Associate and Management Intern titles.
- Subtle intersection-based reveals, a drawn map route, contained image hover
  motion, and slow hero schematic drift add movement. Reduced-motion mode
  leaves all content visible and disables the reveal transforms.
- 2026-10-04 checks after the Three.js and human-story pass: build, lint, and
  TypeScript passed. Playwright rendered the interactive hero and all four
  stages at 1440×1000 and 390×844 with no page errors or horizontal overflow.
  Desktop, mobile, system-stage, and ASU research screenshots are in
  `C:/Users/hithe/Downloads/website-preview/`.
- Preview: <http://127.0.0.1:4173/> while the local Vite server runs.

Next: review final assets and Git status, then give the user a concise handoff
and public-search findings. A new CV can be integrated when supplied.
