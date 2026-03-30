// src/components/About.tsx

const interests = [
  'Perovskite Photovoltaics',
  'Self-Driving Laboratories',
  'ML for Materials Discovery',
  'Thin-Film Fabrication',
  'Edge AI & LLMs',
  'Autonomous Experimentation',
];

const institutions = ['Arizona State University', 'Purdue University', 'HZB', 'EPFL'];

export default function About() {
  return (
    <section id="about" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        About
      </h2>

      <div className="max-w-2xl space-y-4">
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          I am an M.S. AI Engineering (Materials Science) researcher at Arizona State University
          in the Rolston Lab, focused on building AI-accelerated and experiment-grounded
          workflows for next-generation photovoltaics.
        </p>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          My work combines perovskite thin-film fabrication, materials characterization, and
          machine learning for autonomous experimentation. Across ASU, Purdue, HZB, and EPFL, I
          have achieved{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            19% single-junction device efficiency
          </span>
          , studied phase transitions with PDF and neutron diffraction, and presented at{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-100">IEEE PVSC 2024</span>.
          On the AI side, I build LLM-enabled research pipelines and edge-deployable inference
          workflows for real-world lab use.
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Institutional experience:{' '}
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {institutions.join(' · ')}
          </span>
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
