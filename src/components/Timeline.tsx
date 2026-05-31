// src/components/Timeline.tsx
import { useRef, useState, Fragment } from 'react';
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion';
import Flag from './Flag';

type Region = 'us' | 'europe' | 'japan';

type Stage = {
  id: string;
  short: string;
  date: string;
  yearLabel: string;
  institute?: string;
  location: string;
  flag: string;
  region: Region;
  narrative: string;
  interests: string[];
};

const stages: Stage[] = [
  {
    id: 'ee-start',
    short: 'Electrical Engineering → AI Engineering',
    date: '2021 – Present',
    yearLabel: '2021',
    institute: 'ASU — B.S.E EEE / M.S. AI Engineering',
    location: 'Tempe, AZ',
    flag: 'us',
    region: 'us',
    narrative:
      'B.S.E in Electrical & Electronic Engineering (2021–2025), now pursuing an M.S. in AI Engineering (Materials Science) — applying ML to accelerate energy materials research.',
    interests: ['Optoelectronics', 'Semiconductors', 'Power Systems', 'Renewable Energy'],
  },
  {
    id: 'tempe-start',
    short: 'Perovskite Research – ASU Renewable Energy Lab',
    date: 'Sep 2022 – Present',
    yearLabel: '2022',
    institute: 'Renewable Energy Materials & Devices Lab, ASU',
    location: 'Tempe, AZ',
    flag: 'us',
    region: 'us',
    narrative:
      'Fabricated perovskite thin films via spin and blade coating; led an Intel-funded cesium wide-bandgap project that delivered an improved-stability prototype, presented at IEEE PVSC 2024.',
    interests: ['Photovoltaics', 'Thin-Film Fabrication', 'Materials Characterization', 'Energy Systems'],
  },
  {
    id: 'purdue-data',
    short: 'Data & Analysis – Purdue SURF',
    date: 'Summer 2023',
    yearLabel: '2023',
    institute: 'Letian Dou Group, Purdue University',
    location: 'West Lafayette, IN',
    flag: 'us',
    region: 'us',
    narrative:
      'Built a comparative device-efficiency database in Python/Excel and used the Perovskite Database to identify material-performance trends guiding additive selection.',
    interests: ['Data Analysis', 'ML for Materials', 'Perovskite Databases', 'Stability Studies'],
  },
  {
    id: 'structure-hzb',
    short: 'Structure Analysis – Helmholtz-Zentrum Berlin',
    date: 'Summer 2024',
    yearLabel: '2024',
    institute: 'Institute Quantum Phenomena in Novel Materials, Helmholtz-Zentrum Berlin (HZB)',
    location: 'Berlin, Germany',
    flag: 'de',
    region: 'europe',
    narrative:
      'Used PDF and X-ray/neutron diffraction to reveal structural instabilities and morphotropic phase transitions in perovskite ferroelectric systems.',
    interests: ['PDF Analysis', 'Diffraction', 'Materials Characterization', 'Crystal Structure'],
  },
  {
    id: 'device-epfl',
    short: 'Device Fabrication – EPFL',
    date: 'Summer 2025',
    yearLabel: '2025',
    institute: 'Photovoltaics Lab, École Polytechnique Fédérale de Lausanne (EPFL)',
    location: 'Neuchâtel, Switzerland',
    flag: 'ch',
    region: 'europe',
    narrative:
      'Fabricated single-junction perovskite devices reaching 19% efficiency, applied atomic layer deposition and thermal evaporation techniques — funded by the ThinkSwiss Research Scholarship.',
    interests: ['Device Fabrication', 'ALD', 'Thermal Evaporation', 'Stability Testing'],
  },
  {
    id: 'nextlab-ai',
    short: 'Management Intern – Next Lab, ASU',
    date: 'Jan 2026 – Present',
    yearLabel: '2026',
    institute: 'Next Lab / ASU',
    location: 'Tempe, AZ',
    flag: 'us',
    region: 'us',
    narrative:
      'Leading partner-funded AI initiatives: building LangChain retrieval pipelines, benchmarking AI workloads on NVIDIA Jetson edge devices, and analyzing INT8/Q4 quantization trade-offs for robust deployment.',
    interests: ['RAG', 'Edge AI', 'LangChain', 'Quantization', 'Automation'],
  },
  {
    id: 'nims-grad',
    short: 'Graduate Research Intern – NIMS Electrochemical Smart Lab',
    date: 'May – Aug 2026',
    yearLabel: '2026',
    institute: 'Automated Electrochemical Experiments Team (GREEN), National Institute for Materials Science (NIMS)',
    location: 'Tsukuba, Japan',
    flag: 'jp',
    region: 'japan',
    narrative:
      'Interning with the Electrochemical Smart Lab Team at NIMS GREEN — analyzing EIS data to improve NIMO, the NIMS autonomous materials discovery platform, for battery research.',
    interests: ['EIS Analysis', 'NIMO', 'Battery Materials', 'ML for Materials'],
  },
];

const accent: Record<Region, {
  border: string;
  dot: string;
  dotActive: string;
  year: string;
  tagBg: string;
  tagText: string;
}> = {
  us: {
    border: 'border-l-blue-500',
    dot: 'bg-slate-300 dark:bg-slate-600',
    dotActive: 'bg-blue-500 dark:bg-blue-400',
    year: 'text-blue-50 dark:text-blue-950',
    tagBg: 'bg-blue-50 dark:bg-blue-950/50',
    tagText: 'text-blue-700 dark:text-blue-300',
  },
  europe: {
    border: 'border-l-violet-500',
    dot: 'bg-slate-300 dark:bg-slate-600',
    dotActive: 'bg-violet-500 dark:bg-violet-400',
    year: 'text-violet-50 dark:text-violet-950',
    tagBg: 'bg-violet-50 dark:bg-violet-950/50',
    tagText: 'text-violet-700 dark:text-violet-300',
  },
  japan: {
    border: 'border-l-rose-500',
    dot: 'bg-slate-300 dark:bg-slate-600',
    dotActive: 'bg-rose-500 dark:bg-rose-400',
    year: 'text-rose-50 dark:text-rose-950',
    tagBg: 'bg-rose-50 dark:bg-rose-950/50',
    tagText: 'text-rose-700 dark:text-rose-300',
  },
};

function StageCard({
  stage,
  isActive,
  onActivate,
  shouldReduce,
}: {
  stage: Stage;
  isActive: boolean;
  onActivate: () => void;
  shouldReduce: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });
  const [expanded, setExpanded] = useState(false);
  const a = accent[stage.region];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.4, ease: 'easeOut' }}
      onClick={() => {
        onActivate();
        setExpanded((e) => !e);
      }}
      className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 border-l-4 ${a.border}
        bg-white dark:bg-slate-900 cursor-pointer select-none
        transition-shadow duration-200
        ${isActive ? 'shadow-md' : 'hover:shadow-sm'}`}
    >
      {/* Year watermark */}
      <div
        aria-hidden
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-8xl font-black leading-none pointer-events-none select-none ${a.year}`}
      >
        {stage.yearLabel}
      </div>

      <div className="relative p-5 pr-20">
        {/* Location row */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Flag code={stage.flag} />
          <span className="text-xs text-slate-400 dark:text-slate-500">{stage.location}</span>
          <span className="text-slate-200 dark:text-slate-700" aria-hidden>·</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{stage.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-1">
          {stage.short}
        </h3>

        {/* Institute */}
        {stage.institute && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 leading-relaxed">
            {stage.institute}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {stage.interests.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${a.tagBg} ${a.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable narrative */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              key="narrative"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.22, ease: 'easeOut' }}
              className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed overflow-hidden"
            >
              {stage.narrative}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Expand chevron */}
      <div className="absolute bottom-4 right-4 text-slate-300 dark:text-slate-600">
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Research Journey
      </h2>

      {/* Journey strip */}
      <div
        className="flex items-center mb-3 overflow-x-auto pb-1"
        role="navigation"
        aria-label="Timeline stages"
      >
        {stages.map((s, i) => {
          const a = accent[s.region];
          const seenFlags = stages.slice(0, i).map((x) => x.flag);
          const showFlag = !seenFlags.includes(s.flag);
          return (
            <Fragment key={s.id}>
              <button
                onClick={() => setActive(i)}
                title={`${s.short} — ${s.location}`}
                aria-pressed={i === active}
                className="flex flex-col items-center gap-1 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <div
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? `${a.dotActive} w-3 h-3`
                      : `${a.dot} w-2 h-2 hover:scale-125`
                  }`}
                />
                {showFlag ? (
                  <Flag code={s.flag} />
                ) : (
                  <span className="w-5 inline-block" aria-hidden="true" />
                )}
              </button>
              {i < stages.length - 1 && (
                <div className="h-px flex-1 min-w-3 bg-slate-200 dark:bg-slate-800 mx-1" />
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Region legend */}
      <div className="flex gap-4 mb-8">
        {([
          { label: 'Americas', color: 'bg-blue-500' },
          { label: 'Europe', color: 'bg-violet-500' },
          { label: 'Japan', color: 'bg-rose-500' },
        ] as const).map(({ label, color }) => (
          <span key={label} className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
            <span className={`w-2 h-2 rounded-full ${color} inline-block`} />
            {label}
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {stages.map((s, i) => (
          <StageCard
            key={s.id}
            stage={s}
            isActive={i === active}
            onActivate={() => setActive(i)}
            shouldReduce={shouldReduce}
          />
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-600">
        Click a card to read more · dots to highlight
      </p>
    </section>
  );
}
