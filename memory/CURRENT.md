# Current state — 2026-10-04

- The research-first redesign is live at <https://www.hitheshrai.com>.
- Release commit: `ed50022` (`Redesign site around connected energy research`).
- Pull request: <https://github.com/hitheshrai/Hithesh/pull/27>.
- Merge commit on `main`: `750a790bb4a0b9be066e3b17f5a95b0a7c8d1a74`.
- GitHub and Vercel reported a successful production deployment. The live
  domain returned HTTP 200 and served the new hero, interactive research
  vision, and Next Lab programme-work copy.
- The public site is deliberately selective. It connects undergraduate solar
  research, graduate battery-degradation work, computation, applied AI, and
  energy systems without reproducing the full CV.
- The old CV and its public link remain removed. The user will provide a new
  version later.
- IPEROP represents the cesium-perovskite thread. The separate Open-Air PVSC
  presentation is intentionally omitted; the linked formamidinium PVSC
  proceedings paper remains.
- The Three.js hero shows a future direction from crystal chemistry to solar,
  storage, and a combined energy system. Li-rich antiperovskites are described
  as candidate solid electrolytes, not as completed research.
- ASU Rolston Lab is the research home. The narrative moves from narrow- to
  wide-bandgap solar perovskites during the B.S.E. to batteries, degradation,
  and impedance during the M.S.
- Next Lab is framed through programme-management evidence while preserving
  the verified titles: Studio Associate from Sep 2023 and Management Intern
  from Mar 2026. Copy names concrete work on offline Jetson models, EDge AI
  presentations, and testable research and voice-assistant prototypes.
- EPICS · 2Unify dates are 2022–2024. The Zoom image is from an Enterprise
  Technology Town Hall, and the photovoltaic image is a First Solar
  reliability site visit.
- The site avoids repetitive first-person phrasing by naming teams and precise
  contributions. This is an intentional editorial choice for a collaborative
  research identity.
- Final release checks passed: build, ESLint, TypeScript, and the Playwright
  desktop/mobile preview check. The Three.js chunk remains dynamically loaded.
- Preview screenshots are generated under `artifacts/website-preview/`, which
  is ignored by Git.
- The placement gallery now uses animated, keyboard-focusable cards. The 2025
  placement leads with `EPFL · PV-Lab`; ThinkSwiss appears as the scholarship
  context rather than the primary research affiliation.
- Visitor-facing language calls this section `Experience` and `Research beyond
  ASU`. It uses factual research topics and contributions rather than framing
  the ongoing work as a completed journey or story.

Next: integrate the new CV when the user supplies it. Future copy changes
should preserve the distinction between completed work, public evidence, and
the longer-term research vision documented in `docs/content-sources.md`.
