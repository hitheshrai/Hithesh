// src/components/Practice.tsx
import { capabilities, profile } from '../data/content';
import { useReveal } from '../lib/hooks';

export default function Practice() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="practice" className="relative z-10 bg-stone-deep">
      <div className="px-[var(--gutter)] py-24 md:py-32">
        <div className="reveal mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-5">Practice</p>
            <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.01em]">
              Two disciplines, one loop.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[0.95rem] leading-relaxed text-graphite-soft">
            I make the material, measure it, and train the model on that measurement. Each side
            keeps the other honest.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div
              key={cap.id}
              className="reveal rule pt-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="label mb-4 text-oxide">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mb-4 font-display text-[1.5rem] font-normal leading-tight">
                {cap.title}
              </h3>
              <p className="mb-6 text-[0.9rem] leading-relaxed text-graphite-soft">{cap.summary}</p>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[var(--rule-faint)] pt-2 font-mono text-[0.72rem] leading-relaxed tracking-wide text-graphite-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 flex flex-col gap-8 rule pt-8 sm:flex-row sm:gap-16">
          {profile.degrees.map((degree) => (
            <div key={degree.label}>
              <p className="text-[0.95rem] leading-snug">{degree.label}</p>
              <p className="label mt-1">{degree.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
