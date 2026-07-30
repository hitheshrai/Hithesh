// src/lib/atlas.ts
// Geometry for the atlas. Equirectangular projection, chosen because it makes the
// map coordinate system and the SVG user space the same thing: one degree = one unit.

import raw from '../data/coastline.json';

/** Flattened [lon, lat, lon, lat, ...] per coastline path. */
const coastline = raw as number[][];

export const MAP_W = 360;
export const MAP_H = 180;

export function projectX(lon: number): number {
  return lon + 180;
}

export function projectY(lat: number): number {
  return 90 - lat;
}

/** Pre-built SVG path strings for every coastline. Computed once at module load. */
export const coastPaths: string[] = coastline.map((flat) => {
  let d = '';
  for (let i = 0; i < flat.length; i += 2) {
    const x = projectX(flat[i]).toFixed(1);
    const y = projectY(flat[i + 1]).toFixed(1);
    d += (i === 0 ? 'M' : 'L') + x + ' ' + y;
  }
  return d;
});

type Pt = [number, number];

/**
 * Control points for the connector between two stations. A straight line across an
 * equirectangular map looks wrong; this bows toward the pole, which reads the way
 * a long-haul route is drawn on a printed chart.
 */
function arcPoints(from: Pt, to: Pt): [Pt, Pt, Pt] {
  const p0: Pt = [projectX(from[0]), projectY(from[1])];
  const p2: Pt = [projectX(to[0]), projectY(to[1])];

  const dx = p2[0] - p0[0];
  const dy = p2[1] - p0[1];
  const len = Math.hypot(dx, dy);

  // Perpendicular offset, always bowing north, scaled by span.
  const bow = Math.min(len * 0.16, 22);
  const nx = len === 0 ? 0 : -dy / len;
  const ny = len === 0 ? 0 : dx / len;
  const sign = ny > 0 ? -1 : 1;

  const p1: Pt = [(p0[0] + p2[0]) / 2 + nx * bow * sign, (p0[1] + p2[1]) / 2 + ny * bow * sign];
  return [p0, p1, p2];
}

function q(p0: Pt, p1: Pt, p2: Pt): string {
  return (
    `M${p0[0].toFixed(1)} ${p0[1].toFixed(1)}` +
    `Q${p1[0].toFixed(1)} ${p1[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  );
}

export function routeArc(from: Pt, to: Pt): string {
  const [p0, p1, p2] = arcPoints(from, to);
  return q(p0, p1, p2);
}

/**
 * The first `t` of the arc, as its own shorter curve.
 *
 * This is a De Casteljau split rather than a stroke-dash trick: dash offsets are
 * measured in screen space once `vector-effect: non-scaling-stroke` is in play,
 * which shatters a pathLength-normalised dash into hairline ticks.
 */
export function routeArcPartial(from: Pt, to: Pt, t: number): string {
  if (t >= 1) return routeArc(from, to);
  const [p0, p1, p2] = arcPoints(from, to);
  const a: Pt = [lerp(p0[0], p1[0], t), lerp(p0[1], p1[1], t)];
  const b: Pt = [lerp(p1[0], p2[0], t), lerp(p1[1], p2[1], t)];
  const c: Pt = [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
  return q(p0, a, c);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Ease used for every camera move. Slow out, slow in — no bounce, no overshoot. */
export function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

/* --------------------------------------------------------------------- *
 * Framing.
 *
 * Both renderers answer the same two questions — how tightly to frame one
 * stop, and how much air to leave around the whole route — but in different
 * units, because one fills a measured viewport and the other is a fixed-ratio
 * card. Keeping the numbers together means tuning one prompts a look at its
 * counterpart instead of letting the two views drift apart.
 * --------------------------------------------------------------------- */

/** Degrees of longitude across a single stop, full-screen traverse. */
export const STATION_SPAN_VIEWPORT = 76;
/** Degrees of longitude across a single stop, static plate. */
export const STATION_SPAN_PLATE = 108;
/** Height / width of a static plate. */
export const PLATE_RATIO = 0.62;
/** Air around the whole route: additive degrees on a plate… */
export const WORLD_PAD_DEG = 58;
/** …and a multiplier on the measured viewport. */
export const WORLD_PAD_FACTOR = 1.06;
