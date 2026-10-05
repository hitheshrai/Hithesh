# Session handoff — 2026-10-04 — root

Worked in the isolated `redesign/research-first` checkout. Reconciled the
redesign review with the user's source profile, shipped CV, public publisher
records, and the user's PVSC clarification. The site remains local and
uncommitted. Major content decisions and links are recorded in
`docs/content-sources.md`.

Later in the same session, the hero SVG was replaced by a contained Three.js
research-vision scene with crystal, solar, storage, and system stages. Copy was
rewritten from the user's older site phrases and `ground_truth.yaml`: ASU
Rolston Lab is now the visible research home; undergraduate work progresses
from narrow- to wide-bandgap solar perovskites; master's work focuses on
battery degradation. Placement copy includes learning and self-correction,
including the NIMS model discarded after a physical check. The separate
Open-Air PVSC presentation was removed at the user's request; IPEROP represents
that cesium thread.

The user wants the website to communicate a long-term vision grounded in
materials fundamentals and improved energy systems, with limited public
detail. The final draft now makes the connection explicit: make materials,
measure what changes, model what comes next, and carry that understanding into
better energy systems. AI is a method within that work. The user requested
removal of the outdated public CV and will provide another later.

Research placements appear immediately after the research themes as four
chronological chapters. Public, user-supplied photos show Purdue SURF, HZB,
ThinkSwiss/EPFL, and NIMS. The engineering story uses the LlamaCon 2025 team
photo, and the copy records both its LlamaCon and ASU FOLC Fest presentations;
About uses the user-supplied photo with Prof. Nicholas Rolston. Subtle
reveal motion, a drawn map route, and contained image movement were added with
a complete reduced-motion fallback.

The inaccurate generic perovskite cube was replaced with an original SVG
rendered from ideal cubic CsPbI3 Pm-3m coordinates, expanded to a 2×2×1 lattice
to show corner-sharing PbI6 octahedra and Cs A-sites. The figure links to
Materials Project `mp-1069538` and is explicitly labeled as an ideal model.

Later review corrections: Cs is now larger than Pb in the structure visual;
the HZB placement describes local structure and phase behavior; impedance is
defined in plain language; the AI4X poster is card 02's evidence. The user
confirmed Studio Associate from Sep 2023 followed by Management Intern from
Mar 2026, EPICS · 2Unify from 2022–2024, the Zoom presentation at an
Enterprise Technology Town Hall, and the First Solar reliability site visit.
The About copy now connects Rolston Lab's materials-to-energy foundation with
Next Lab's AI-for-social-impact direction as the reason for the AI Engineering
Materials Science degree.

Validation: Vite build, ESLint, and TypeScript pass. Browser render checks at
1440, 768, 390, 320px show no runtime errors or horizontal overflow. All local
images load after their lazy-load sections enter view, every internal anchor
resolves, and reduced-motion mode leaves content visible without transforms.
Axe previously found no tagged WCAG/best-practice violations; its color
contrast check was incomplete. The local preview is available on port 4173
during this session. Screenshots are in
`C:/Users/hithe/Downloads/website-redesign-review/`, outside Git.


## Release

The redesign was committed as `ed50022`, opened as
<https://github.com/hitheshrai/Hithesh/pull/27>, and merged to `main` as
`750a790bb4a0b9be066e3b17f5a95b0a7c8d1a74`. GitHub and Vercel reported a
successful production deployment. `https://www.hitheshrai.com` returned HTTP
200 and served the new hero, interactive research vision, and Next Lab copy.

The final external review found one public README issue: the preview-output
documentation exposed an absolute local path. The script and README now use
the repository-relative ignored directory `artifacts/website-preview/`.
Next Lab programme-work copy was also made more concrete by naming offline
Jetson trade-offs, the Agentic AI presentation, FOLC Fest, LlamaCon, and
testable research and voice-assistant prototypes. The collaborative voice and
the 3D future-direction story remain intentional user decisions.
