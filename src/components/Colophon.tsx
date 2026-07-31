// src/components/Colophon.tsx
import { profile, stations } from '../data/content';
import { useReveal } from '../lib/hooks';

export default function Colophon() {
  const ref = useReveal<HTMLElement>();
  const places = [...new Set(stations.map((s) => s.place))];

  return (
    <footer ref={ref} id="contact" className="relative z-10">
      <div className="px-[var(--gutter)] pb-14 pt-24 md:pt-32">
        <p className="reveal label mb-8">Contact</p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal link-draw inline-block font-display text-[clamp(2rem,6.5vw,4.75rem)] font-light leading-[1.05] tracking-[-0.02em]"
        >
          {profile.email}
        </a>

        <p className="reveal mt-8 max-w-measure text-[0.95rem] leading-relaxed text-graphite-soft">
          Open to research collaborations, industry roles at the intersection of energy materials
          and machine learning, and PhD conversations.
        </p>

        <div className="reveal mt-12 flex flex-wrap gap-x-8 gap-y-3 rule pt-6">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw link-draw-oxide label text-oxide"
          >
            Curriculum Vitae ↗
          </a>
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw label"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--rule-faint)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">
            {places.join(' · ')}
          </p>
          <p className="label">
            Set in Newsreader, Public Sans &amp; IBM Plex Mono
          </p>
        </div>
      </div>
    </footer>
  );
}
