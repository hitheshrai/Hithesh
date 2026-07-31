// src/components/Papers.tsx
import posthog from 'posthog-js';
import { publications, writing } from '../data/content';
import { useReveal } from '../lib/hooks';

export default function Papers() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="papers" className="relative z-10 bg-stone-deep">
      <div className="px-[var(--gutter)] py-24 md:py-32">
        <div className="grid gap-x-14 gap-y-20 md:grid-cols-12">
          {/* Publications */}
          <div className="md:col-span-7">
            <p className="reveal label mb-8">Conference proceedings</p>

            <ol>
              {publications.map((pub, i) => (
                <li
                  key={pub.id}
                  className="reveal rule py-7"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="mb-3 flex items-baseline justify-between gap-6">
                    <span className="label text-oxide">{pub.venue}</span>
                    <span className="label">{pub.year}</span>
                  </div>

                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw font-display text-[1.2rem] font-normal leading-snug md:text-[1.35rem]"
                    onClick={() => posthog.capture('publication_opened', { publication_id: pub.id, venue: pub.venue, year: pub.year })}
                  >
                    {pub.title}
                  </a>

                  <p className="mt-2 text-[0.85rem] text-muted">{pub.authors}</p>
                  <p className="label mt-1">{pub.note}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Writing & press */}
          <div className="md:col-span-5">
            <p className="reveal label mb-8">Writing &amp; press</p>

            <ul>
              {writing.map((piece, i) => (
                <li
                  key={piece.id}
                  className="reveal rule"
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1.5 py-5"
                    onClick={() => posthog.capture('writing_piece_opened', { piece_id: piece.id, kind: piece.kind, outlet: piece.outlet })}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="label">{piece.kind}</span>
                      <span className="label opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className="text-[0.95rem] leading-snug text-graphite-soft transition-colors duration-300 group-hover:text-graphite">
                      {piece.title}
                    </span>
                    <span className="label">{piece.outlet}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
