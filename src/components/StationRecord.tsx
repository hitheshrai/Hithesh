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
      <div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <span className="label text-graphite">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="label">{coordLabel}</span>
      </div>

      <h2 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-light leading-[1] tracking-[-0.015em]">
        {station.place}
        <span className="ml-4 align-middle font-sans text-[0.9rem] font-normal tracking-normal text-muted">
          {station.country}
        </span>
      </h2>

      <p className="mt-5 max-w-measure font-display text-[1.35rem] font-light leading-snug text-graphite md:text-[1.6rem]">
        {station.headline}
      </p>

      <div className="mt-6 max-w-measure border-l border-[var(--rule)] pl-5">
        <p className="text-[0.95rem] leading-relaxed text-graphite-soft">{station.body}</p>
      </div>

      <dl className="mt-7 grid max-w-measure gap-x-8 gap-y-3 sm:grid-cols-2">
        <div>
          <dt className="label mb-1">Institution</dt>
          <dd className="text-[0.9rem] leading-snug">{station.institution}</dd>
        </div>
        <div>
          <dt className="label mb-1">Role · Period</dt>
          <dd className="text-[0.9rem] leading-snug">
            {station.role}
            <br />
            <span className="text-muted">{station.period}</span>
          </dd>
        </div>
      </dl>

      <ul className="mt-6 flex max-w-measure flex-wrap gap-x-4 gap-y-1.5">
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
