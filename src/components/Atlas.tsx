// src/components/Atlas.tsx
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import posthog from 'posthog-js';
import { stations, profile } from '../data/content';
import {
  MAP_W,
  MAP_H,
  coastPaths,
  projectX,
  projectY,
  routeArc,
  routeArcPartial,
  easeInOut,
  clamp,
  lerp,
  STATION_SPAN_VIEWPORT,
  STATION_SPAN_PLATE,
  PLATE_RATIO,
  WORLD_PAD_DEG,
  WORLD_PAD_FACTOR,
} from '../lib/atlas';
import { useReducedMotion, useMediaQuery } from '../lib/hooks';
import StationRecord from './StationRecord';

/**
 * Longitudes unwrapped so consecutive stops are always adjacent on the plane.
 * Tempe → Tsukuba is a westward Pacific crossing, so Tsukuba resolves to −219.89°
 * rather than +140.11°. The map is tiled horizontally to cover the extra ground.
 */
const unwrappedLon: number[] = (() => {
  const out: number[] = [];
  stations.forEach((s, i) => {
    const lon = s.coord[0];
    if (i === 0) {
      out.push(lon);
      return;
    }
    const prev = out[i - 1];
    let best = lon;
    let bestDist = Math.abs(lon - prev);
    for (const k of [-1, 1]) {
      const candidate = lon + k * 360;
      const dist = Math.abs(candidate - prev);
      if (dist < bestDist) {
        best = candidate;
        bestDist = dist;
      }
    }
    out.push(best);
  });
  return out;
})();

/** Enough copies of the coastline to cover the unwrapped longitude range. */
const TILES = [-720, -360, 0, 360];

const allCoast = coastPaths.join(' ');

const graticule = (() => {
  let d = '';
  for (let lon = -180; lon <= 180; lon += 20) {
    d += `M${projectX(lon)} 0L${projectX(lon)} ${MAP_H}`;
  }
  for (let lat = -80; lat <= 80; lat += 20) {
    d += `M0 ${projectY(lat)}L${MAP_W} ${projectY(lat)}`;
  }
  return d;
})();

function formatCoord([lon, lat]: [number, number]): string {
  const ns = lat >= 0 ? 'N' : 'S';
  const ew = lon >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(2)}° ${ns}  ·  ${Math.abs(lon).toFixed(2)}° ${ew}`;
}

/** Coastline + graticule, repeated so the map wraps past the antimeridian. */
function Ground() {
  return (
    <>
      {TILES.map((offset) => (
        <g key={offset} transform={`translate(${offset} 0)`}>
          <path
            d={graticule}
            fill="none"
            stroke="var(--rule-faint)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={allCoast}
            fill="none"
            stroke="var(--graphite)"
            strokeWidth="1"
            strokeOpacity="0.42"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </>
  );
}

type RouteProps = {
  /** How far along the whole traverse the route has been drawn, in station units. */
  drawnTo: number;
};

function Route({ drawnTo }: RouteProps) {
  return (
    <>
      {stations.slice(0, -1).map((station, j) => {
        const t = clamp(drawnTo - j, 0, 1);
        if (t <= 0) return null;
        return (
          <path
            key={`${station.id}-route`}
            d={routeArcPartial(
              [unwrappedLon[j], stations[j].coord[1]],
              [unwrappedLon[j + 1], stations[j + 1].coord[1]],
              t
            )}
            fill="none"
            stroke="var(--oxide)"
            strokeWidth="1.25"
            strokeOpacity="0.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Static plates — used on narrow screens and under reduced motion.    */
/* ------------------------------------------------------------------ */

type PlateProps = {
  /** Station index to centre on, or null for the whole world. */
  index: number | null;
};

function Plate({ index }: PlateProps) {
  const ratio = PLATE_RATIO;
  let vb: string;

  if (index === null) {
    // Framed on the unwrapped route, not on the prime meridian: the traverse ends
    // with a westward Pacific crossing, so a 0°-centred world would push Japan off
    // the plate and send the last leg out of frame.
    const lons = unwrappedLon;
    const mid = (Math.min(...lons) + Math.max(...lons)) / 2;
    const w = Math.max(...lons) - Math.min(...lons) + WORLD_PAD_DEG;
    const h = Math.max(w * ratio, MAP_H);
    vb = `${projectX(mid) - w / 2} ${MAP_H / 2 - h / 2} ${w} ${h}`;
  } else {
    const w = STATION_SPAN_PLATE;
    const h = w * ratio;
    vb = `${projectX(unwrappedLon[index]) - w / 2} ${projectY(stations[index].coord[1]) - h / 2} ${w} ${h}`;
  }

  const drawnTo = index === null ? stations.length : index;

  return (
    <svg
      viewBox={vb}
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <Ground />
      {index === null ? (
        <>
          {stations.slice(0, -1).map((station, j) => (
            <path
              key={`${station.id}-full`}
              d={routeArc(
                [unwrappedLon[j], stations[j].coord[1]],
                [unwrappedLon[j + 1], stations[j + 1].coord[1]]
              )}
              fill="none"
              stroke="var(--oxide)"
              strokeWidth="1.1"
              strokeOpacity="0.55"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {stations.map((station, i) => (
            <circle
              key={`${station.id}-dot`}
              cx={projectX(unwrappedLon[i])}
              cy={projectY(station.coord[1])}
              r={2.2}
              fill="var(--oxide)"
              fillOpacity="0.7"
            />
          ))}
        </>
      ) : (
        <>
          <Route drawnTo={drawnTo} />
          <circle
            cx={projectX(unwrappedLon[index])}
            cy={projectY(stations[index].coord[1])}
            r={1.0}
            fill="var(--oxide)"
          />
        </>
      )}
    </svg>
  );
}

function AtlasStack() {
  return (
    <section id="atlas" className="relative z-10">
      <div className="px-[var(--gutter)] pb-16 pt-32">
        <p className="label mb-5">{profile.discipline}</p>
        {/* Presentational: the document's h1 lives in App so it survives scrolling. */}
        <p className="max-w-[14ch] font-display text-[clamp(2.5rem,10vw,4.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
          {profile.name}
        </p>
        <p className="mt-7 max-w-measure text-[1.0625rem] leading-relaxed text-graphite-soft">
          {profile.statement}
        </p>
        <ul className="mt-7 flex max-w-measure flex-wrap gap-x-4 gap-y-1.5">
          {profile.focus.map((topic) => (
            <li key={topic} className="label">
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-[var(--gutter)] pb-4">
        {/* Capped: a plate stretched to a desktop viewport turns the markers into blobs. */}
        <div className="max-w-[46rem]">
          <Plate index={null} />
          <p className="label mt-3">Six projects · 2022 — 2026</p>
        </div>
      </div>

      {stations.map((station, i) => (
        <div key={station.id} className="px-[var(--gutter)] pb-16 pt-12">
          <div className="mb-8 max-w-[46rem] border-y border-[var(--rule-faint)] py-4">
            <Plate index={i} />
          </div>
          <StationRecord
            station={station}
            index={i}
            total={stations.length}
            coordLabel={formatCoord(station.coord)}
          />
        </div>
      ))}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-driven traverse — desktop, motion allowed.                   */
/* ------------------------------------------------------------------ */

type Waypoint = { lon: number; lat: number; span: number | null };

const waypoints: Waypoint[] = [
  { lon: 0, lat: 6, span: null },
  ...stations.map((s, i) => ({
    lon: unwrappedLon[i],
    lat: s.coord[1],
    span: STATION_SPAN_VIEWPORT,
  })),
];

const SEGMENTS = waypoints.length - 1;

/** Scroll distance from a stop at which its marker appears, in station units. */
const MARKER_REVEAL = 0.55;
/** Width of the crossfade between two stops' records, in station units. */
const PANEL_HANDOFF = 0.08;

type View = { cx: number; cy: number; w: number };

function viewFor(wp: Waypoint, aspect: number): View {
  const w = wp.span === null ? Math.max(MAP_W, MAP_H / aspect) * WORLD_PAD_FACTOR : wp.span;
  return { cx: projectX(wp.lon), cy: projectY(wp.lat), w };
}

// Static for the life of the page. Holding one element reference lets React skip
// diffing the coastline subtree entirely on every scroll frame.
const ground = <Ground />;

function AtlasTraverse() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  const [aspect, setAspect] = useState(0.55);
  const [progress, setProgress] = useState(0);

  // Match the viewBox to the frame's real aspect so the projection is never
  // distorted and preserveAspectRatio never has to crop.
  useLayoutEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setAspect(height / width);
    });
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const read = () => {
      raf = 0;
      const range = section.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const scrolled = -section.getBoundingClientRect().top;
      setProgress(clamp(scrolled / range, 0, 1) * SEGMENTS);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jumpTo = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const range = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: section.offsetTop + (index / SEGMENTS) * range, behavior: 'smooth' });
  }, []);

  const seg = clamp(Math.floor(progress), 0, SEGMENTS - 1);
  const t = easeInOut(clamp(progress - seg, 0, 1));
  const a = viewFor(waypoints[seg], aspect);
  const b = viewFor(waypoints[seg + 1], aspect);

  // Width interpolates geometrically so the zoom reads as even.
  const w = Math.exp(lerp(Math.log(a.w), Math.log(b.w), t));
  const h = w * aspect;
  const cx = lerp(a.cx, b.cx, t);
  const cy = lerp(a.cy, b.cy, t);

  const nearest = Math.round(progress);
  const drift = Math.abs(progress - nearest);
  // Hold the record legible for most of the flight, then hand over quickly at the
  // midpoint rather than ghosting text across the whole traverse.
  const panelOpacity = clamp((0.5 - drift) / PANEL_HANDOFF, 0, 1);
  const activeStation = nearest > 0 ? stations[nearest - 1] : null;

  const screen = (lon: number, lat: number) => ({
    left: `${((projectX(lon) - (cx - w / 2)) / w) * 100}%`,
    top: `${((projectY(lat) - (cy - h / 2)) / h) * 100}%`,
  });

  return (
    <section
      ref={sectionRef}
      id="atlas"
      className="relative z-10"
      style={{ height: `${(SEGMENTS + 1) * 100}vh` }}
    >
      <div ref={frameRef} className="sticky top-0 h-screen overflow-hidden">
        <svg
          viewBox={`${cx - w / 2} ${cy - h / 2} ${w} ${h}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          {ground}
          <Route drawnTo={progress - 1} />
        </svg>

        {/* Legibility scrim: the panel sits on the left third, the map keeps the rest. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--stone) 0%, rgb(var(--stone-rgb) / 0.88) 26%, rgb(var(--stone-rgb) / 0) 58%)',
          }}
        />

        {/* Station markers live in HTML so their labels get real type. */}
        <div className="pointer-events-none absolute inset-0">
          {stations.map((station, i) => {
            const reached = progress >= i + MARKER_REVEAL;
            const isActive = nearest === i + 1;
            return (
              <div
                key={`${station.id}-marker`}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
                style={{ ...screen(unwrappedLon[i], station.coord[1]), opacity: reached ? 1 : 0 }}
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    isActive ? 'h-[9px] w-[9px] bg-oxide' : 'h-[5px] w-[5px] bg-graphite/45'
                  }`}
                />
                <span
                  className={`label absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-opacity duration-500 ${
                    isActive ? 'text-graphite opacity-100' : 'opacity-50'
                  }`}
                >
                  {station.place}
                </span>
              </div>
            );
          })}
        </div>

        {/* Panel */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div
            className="pointer-events-auto w-full max-w-[44rem] px-[var(--gutter)]"
            style={{ opacity: panelOpacity, transition: 'opacity 120ms linear' }}
          >
            {activeStation === null ? (
              <div>
                <p className="label mb-6">{profile.discipline}</p>
                <p className="max-w-[15ch] font-display text-[clamp(2.5rem,7.5vw,5.25rem)] font-light leading-[0.95] tracking-[-0.015em]">
                  {profile.name}
                </p>
                <p className="mt-7 max-w-measure text-lg leading-relaxed text-graphite-soft">
                  {profile.statement}
                </p>
                <ul className="mt-7 flex max-w-measure flex-wrap gap-x-4 gap-y-1.5">
                  {profile.focus.map((topic) => (
                    <li key={topic} className="label">
                      {topic}
                    </li>
                  ))}
                </ul>
                <p className="label mt-9">Scroll — six projects, six years</p>
              </div>
            ) : (
              <StationRecord
                station={activeStation}
                index={nearest - 1}
                total={stations.length}
                coordLabel={formatCoord(activeStation.coord)}
              />
            )}
          </div>
        </div>

        {/* Stop rail */}
        <nav
          aria-label="Atlas stops"
          className="absolute right-[max(1rem,calc(var(--gutter)*0.5))] top-1/2 z-20 flex -translate-y-1/2 flex-col items-end gap-3"
        >
          {waypoints.map((_, i) => {
            const isActive = nearest === i;
            return (
              <button
                key={i}
                onClick={() => {
                  posthog.capture('atlas_stop_navigated', { stop_index: i, place: i === 0 ? 'Start' : stations[i - 1].place });
                  jumpTo(i);
                }}
                className="group flex items-center gap-3 focus:outline-none focus-visible:outline-none"
                aria-current={isActive ? 'true' : undefined}
                aria-label={i === 0 ? 'Start' : stations[i - 1].place}
              >
                <span
                  className={`label transition-opacity duration-300 ${
                    isActive
                      ? 'text-graphite opacity-100'
                      : 'opacity-0 group-hover:opacity-70 group-focus-visible:opacity-70'
                  }`}
                >
                  {i === 0 ? 'Start' : stations[i - 1].place}
                </span>
                <span
                  className={`block h-px transition-all duration-500 ${
                    isActive ? 'w-8 bg-oxide' : 'w-4 bg-graphite/30 group-hover:w-6'
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export default function Atlas() {
  const reduced = useReducedMotion();
  const isNarrow = useMediaQuery('(max-width: 900px)');

  // A phone cannot hold a full station record inside a pinned viewport without
  // clipping it, so narrow screens get the same atlas as a sequence of plates.
  return reduced || isNarrow ? <AtlasStack /> : <AtlasTraverse />;
}
