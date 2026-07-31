// src/components/Work.tsx
import posthog from 'posthog-js';
import { work } from '../data/content';
import { useReveal } from '../lib/hooks';

export default function Work() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" className="relative z-10">
      <div className="px-[var(--gutter)] py-24 md:py-32">
        <p className="reveal label mb-5">Selected work</p>

        {work.map((project, i) => (
          <article
            key={project.id}
            className="reveal group grid gap-x-10 gap-y-4 rule py-10 md:grid-cols-12"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="md:col-span-1">
              <span className="label text-oxide">{project.index}</span>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-[1.15] tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="label mt-3">{project.meta}</p>
            </div>

            <div className="md:col-span-5">
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-graphite-soft">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="label">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw link-draw-oxide text-[0.85rem] text-oxide"
                    onClick={() => posthog.capture('project_link_clicked', { project_id: project.id, project_title: project.title, link_label: link.label })}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
