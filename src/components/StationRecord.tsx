// src/components/StationRecord.tsx
import { memo } from 'react';
import type { Station } from '../data/content';

type Props = {
  station: Station;
  index: number;
  total: number;
  coordLabel: string;
};

/**
 * One stop on the traverse. Used both inside the sticky atlas panel and, under
 * reduced motion, as a plain stacked record.
 */
/**
 * Memoised: the atlas re-renders on every scroll frame, but this content only
 * changes when the traverse crosses into a new stop.
 */
function StationRecord({ station, index, total, coordLabel }: Props) {
  return (
    <article>
      <div className="mb-4 flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <span className="label text-graphite">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="label text-oxide">{station.institution}</span>
      </div>

      {/* The work is the headline. The map already says where this happened. */}
      <h2 className="max-w-[19ch] font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-light leading-[1.05] tracking-[-0.015em]">
        {station.headline}
      </h2>

      <div className="mt-6 max-w-measure border-l border-[var(--rule)] pl-5">
        <p className="text-[0.95rem] leading-relaxed text-graphite-soft">{station.body}</p>
      </div>

      <p className="label mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span>{station.role}</span>
        <span aria-hidden>·</span>
        <span>{station.period}</span>
        <span aria-hidden>·</span>
        <span>
          {station.place}, {station.country}
        </span>
        <span aria-hidden>·</span>
        <span>{coordLabel}</span>
      </p>

      <ul className="mt-5 flex max-w-measure flex-wrap gap-x-4 gap-y-1.5">
        {station.methods.map((method) => (
          <li key={method} className="label text-graphite-soft">
            {method}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default memo(StationRecord);
