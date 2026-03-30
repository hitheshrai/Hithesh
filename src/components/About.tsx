// src/components/About.tsx

const interests = [
  'Perovskite Photovoltaics',
  'Self-Driving Laboratories',
  'ML for Materials Discovery',
  'Thin-Film Fabrication',
  'Edge AI & LLMs',
  'Autonomous Experimentation',
];

export default function About() {
  return (
    <section id="about" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        About
      </h2>

      <div className="max-w-2xl space-y-4">
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          I work at the intersection of materials science, machine learning, and automation —
          building closed-loop systems that connect experiment and computation to accelerate
          energy materials discovery.
        </p>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          My fabrication work spans four institutions (ASU, Purdue, HZB, EPFL), where I've
          achieved{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            19% single-junction device efficiency
          </span>
          , characterized structural phase transitions via PDF and neutron diffraction, and
          presented at{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-100">IEEE PVSC 2024</span>.
          On the AI side, I build LangChain RAG pipelines, benchmark LLM inference on NVIDIA
          Jetson edge hardware, and study INT8/Q4 quantization trade-offs for real-world deployment.
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
