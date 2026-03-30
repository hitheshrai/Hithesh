// src/components/Projects.tsx

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  press?: string;
};

const projects: Project[] = [
  {
    id: 'blade-coated-cspbx3',
    title: 'Blade-Coated CsPbX₃ Films for Alphavoltaic & Optoelectronic Devices',
    description:
      'Developed scalable ambient blade-coating of cesium lead halide perovskite films using PVP/PEG polymer additives under Dr. Nick Rolston. Intel-funded; delivered improved-stability prototype presented at IEEE PVSC 2024.',
    tags: ['Perovskite', 'Blade Coating', 'Alphavoltaics', 'Intel-funded', 'IEEE PVSC 2024'],
    link: 'https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/',
  },
  {
    id: 'ferroelectric-instability',
    title: 'Structural Instability in Perovskite-Based Ferroelectric Materials',
    description:
      'Probed morphotropic phase transitions in ferroelectric perovskites using pair distribution function (PDF) analysis, X-ray and neutron diffraction at Helmholtz Zentrum Berlin – Quantum Materials Group.',
    tags: ['PDF Analysis', 'Neutron Diffraction', 'Ferroelectrics', 'HZB'],
    github: 'https://www.helmholtz-berlin.de/forschung/oe/qm/quantenphaenomene/index_en.html',
  },
  {
    id: 'edge-ai-device',
    title: 'EDge AI — Solar-Powered Offline LLM Device',
    description:
      'Led development of an offline AI platform running multilingual LLaMA on Raspberry Pi via SolarSPELL. Designed for equity-first AI access for communities without internet. Recognized by ASU Next Lab.',
    tags: ['LLaMA', 'Raspberry Pi', 'Edge AI', 'SolarSPELL', 'LangChain'],
    link: 'https://nextlab.asu.edu/edge-ai/',
  },
  {
    id: '2unify-education',
    title: '2Unify Education Program',
    description:
      'Led robotics curriculum development for middle school students in partnership with EPICS and Bridge2Africa, integrating robotic arm programming for underserved communities.',
    tags: ['Robotics', 'EPICS', 'Education', 'Bridge2Africa'],
    link: 'https://epics.engineering.asu.edu/2022/02/2unify-education/',
  },
  {
    id: 'ecee-student-feature',
    title: 'ASU ECEE Student Feature',
    description:
      "Recognized by ASU's School of Electrical, Computer and Energy Engineering for leadership in research, student outreach, and academic excellence.",
    tags: ['ASU', 'ECEE', 'Student Leadership'],
    press: 'https://ecee.engineering.asu.edu/2023/06/16/hithesh-rai-purushothama/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
              {p.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              {p.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 dark:text-blue-400 hover:underline whitespace-nowrap"
                  >
                    View →
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 dark:text-blue-400 hover:underline whitespace-nowrap"
                  >
                    Lab page →
                  </a>
                )}
                {p.press && (
                  <a
                    href={p.press}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 dark:text-blue-400 hover:underline whitespace-nowrap"
                  >
                    Feature →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
