// src/components/About.tsx

const interests = [
  'Perovskite Photovoltaics',
  'Self-Driving Laboratories',
  'ML for Materials Discovery',
  'Energy Materials',
  'Edge AI & LLMs',
  'Battery Degradation Modeling',
];

export default function About() {
  return (
    <section id="about" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        About
      </h2>

      <div className="max-w-2xl space-y-4">
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          I am an early-career M.S. AI Engineering (Materials Science) student at Arizona State
          University in the Rolston Lab. My current work focuses on learning how to build
          experiment-grounded AI workflows for photovoltaics and related energy systems.
        </p>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          I am developing skills across perovskite thin-film fabrication, materials
          characterization, and machine learning for autonomous experimentation. As a Management
          Intern at Next Lab, I help evaluate emerging AI tools, support small pilot projects,
          and assist with implementation for practical lab use.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {interests.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
