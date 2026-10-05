# Website design system

This is the working contract for visual consistency on hitheshrai.com.

## Foundations

- Warm paper, graphite, rust, and sage remain the core palette. The cream
  background is an intentional continuation of the site’s earlier atlas era.
- Newsreader is reserved for names and headings. Public Sans carries prose and
  interface text. IBM Plex Mono identifies metadata and technical labels.
- Visitor-facing text does not drop below 12px. Body copy should normally be
  14–17px with a readable line length.
- Section spacing, rules, and muted colors use the shared values in `:root`.
  Avoid one-off colors or spacing when an existing token fits.

## Section hierarchy

Every major section uses the same order:

1. a short sentence-case metadata label
2. a direct serif heading
3. optional supporting text or one action
4. the section content

Sections are not numbered. Navigation labels match the destination’s visible
language.

## Cards and photographs

- Research cards use the same Question / Contribution / Evidence structure.
- Interactive photographs use `.photo-card` and the same caption order:
  institution or event, role or program, then work or context.
- Hover and keyboard focus use the same lift, image scale, caption reveal, and
  visible focus treatment. Mobile shows the full caption without requiring
  hover.
- Image captions describe the research context. Scholarships and funders are
  supporting context rather than substitutes for the lab or work.

## Interaction

- Links use the shared text-link, project-link, or publication-link treatment.
- Controls have at least a 44px target and readable labels.
- Motion stays small and contained. Reduced-motion mode removes transitions
  without hiding content.

## Review

Before release, run the local build, lint, TypeScript, Playwright preview, and
Impeccable source/rendered-page scans. Impeccable findings are inputs to review,
not automatic design decisions; documented identity choices can remain when
the rendered result is accessible and intentional.
