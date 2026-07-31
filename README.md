# hitheshrai.com

My personal site.

Most research portfolios are a reverse-chronological list of jobs, and mine never
looked right that way. The work happened in six places across four countries, and
the moving around was part of the point. So the site is a map you scroll through
instead. The view travels between the places and draws the route behind it.
Halfway along it turns around and comes back to Tempe, which is what actually
happened.

The research is perovskite solar cells, and lately battery interfaces. I make the
films, run the measurements, and build the models on whatever comes out of them.

Live at **[hitheshrai.com](https://hitheshrai.com)**.

## Running it

Node 20 or newer.

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`. Hosting is Vercel, which
builds from `main` on every push.

## Notes to my future self

**Every word on the site is in `src/data/content.ts`.** Text, projects, papers,
coordinates, the lot. Edit that file, not the components.

**The map is real geography.** Coastlines come from Natural Earth's 110m
dataset, thinned to about 17 KB so the whole thing ships with the page and
doesn't call out to anything. Longitudes are unwrapped, which is why Tempe to
Tsukuba crosses the Pacific westward instead of drawing a silly line back across
Europe.

**On phones it doesn't hijack the scroll.** Narrow screens, and anyone whose
system asks for reduced motion, get the same six stops as still plates. A phone
can't hold a full record in a pinned viewport without cutting it off.

**Analytics needs `VITE_PUBLIC_POSTHOG_KEY` set in Vercel.** It gets baked in at
build time, so changing it does nothing at all until you redeploy. Learned that
one the slow way. Use the project key that starts with `phc_`, never a personal
one.

Type is Newsreader, Public Sans and IBM Plex Mono.

## Contact

hraipuru@asu.edu
