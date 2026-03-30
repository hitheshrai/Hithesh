// src/components/Timeline.tsx
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  memo,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type Stage = {
  id: string;
  short: string;
  date: string;
  institute?: string;
  location: string;
  narrative: string;
  interests: string[];
};

const stages: Stage[] = [
  {
    id: 'ee-start',
    short: 'Electrical Engineering → AI Engineering',
    date: '2021 – Present',
    institute: 'ASU — B.S.E EEE / M.S. AI Engineering',
    location: 'Tempe, AZ',
    narrative:
      'B.S.E in Electrical & Electronic Engineering (2021–2025), now pursuing an M.S. in AI Engineering (Materials Science) — applying ML to accelerate energy materials research.',
    interests: ['Optoelectronics', 'Semiconductors', 'Power Systems', 'Renewable Energy'],
  },
  {
    id: 'tempe-start',
    short: 'Perovskite Research – ASU Renewable Energy Lab',
    date: 'Sep 2022 – Present',
    institute: 'Renewable Energy Materials & Devices Lab, ASU',
    location: 'Tempe, AZ',
    narrative:
      'Fabricated perovskite thin films via spin and blade coating; led an Intel-funded cesium wide-bandgap project that delivered an improved-stability prototype, presented at IEEE PVSC 2024.',
    interests: ['Photovoltaics', 'Thin-Film Fabrication', 'Materials Characterization', 'Energy Systems'],
  },
  {
    id: 'purdue-data',
    short: 'Data & Analysis – Purdue SURF',
    date: 'Summer 2023',
    institute: 'Letian Dou Group, Purdue University',
    location: 'West Lafayette, IN',
    narrative:
      'Built a comparative device-efficiency database in Python/Excel and used the Perovskite Database to identify material-performance trends guiding additive selection.',
    interests: ['Data Analysis', 'ML for Materials', 'Perovskite Databases', 'Stability Studies'],
  },
  {
    id: 'structure-hzb',
    short: 'Structure Analysis – HZB',
    date: 'Summer 2024',
    institute: 'Helmholtz Zentrum Berlin – Quantum Materials Group',
    location: 'Berlin, Germany',
    narrative:
      'Used PDF and X-ray/neutron diffraction to reveal structural instabilities and morphotropic phase transitions in perovskite ferroelectric systems.',
    interests: ['PDF Analysis', 'Diffraction', 'Materials Characterization', 'Crystal Structure'],
  },
  {
    id: 'device-epfl',
    short: 'Device Fabrication – EPFL',
    date: 'Summer 2025',
    institute: 'Photovoltaics Lab, EPFL',
    location: 'Neuchâtel, Switzerland',
    narrative:
      'Fabricated single-junction perovskite devices reaching 19% efficiency, learned atomic layer deposition and thermal evaporation — funded by the ThinkSwiss Research Scholarship.',
    interests: ['Device Fabrication', 'ALD', 'Thermal Evaporation', 'Stability Testing'],
  },
  {
    id: 'nextlab-ai',
    short: 'Management Intern – Next Lab, ASU',
    date: 'Jan 2026 – Present',
    institute: 'Next Lab / ASU',
    location: 'Tempe, AZ',
    narrative:
      'Leading partner-funded AI initiatives: building LangChain retrieval pipelines, benchmarking AI workloads on NVIDIA Jetson edge devices, and analyzing INT8/Q4 quantization trade-offs for robust deployment.',
    interests: ['RAG', 'Edge AI', 'LangChain', 'Quantization', 'Automation'],
  },
];

// --- Memoized TimelineItem ---

interface TimelineItemProps {
  stage: Stage;
  idx: number;
  isActive: boolean;
  isExpanded: boolean;
  setRef: (el: HTMLDivElement | null, idx: number) => void;
  toggleExpanded: (id: string) => void;
  shouldReduce: boolean | null;
}

const TimelineItem = memo(function TimelineItem({
  stage,
  idx,
  isActive,
  isExpanded,
  setRef,
  toggleExpanded,
  shouldReduce,
}: TimelineItemProps) {
  return (
    <div
      ref={(el) => setRef(el, idx)}
      data-idx={idx}
      role="listitem"
      aria-selected={isActive}
      tabIndex={0}
      className="relative pl-10"
      aria-labelledby={`stage-${stage.id}`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-4 top-1.5 w-2.5 h-2.5 -translate-x-1/2 rounded-full ring-2 ring-white dark:ring-slate-950 transition-all duration-300 ${
          isActive
            ? 'bg-blue-700 dark:bg-blue-400 scale-125'
            : 'bg-slate-300 dark:bg-slate-600 scale-100'
        }`}
      />

      <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
        {stage.date}
      </div>

      <button
        onClick={() => toggleExpanded(stage.id)}
        aria-expanded={isExpanded}
        aria-controls={`details-${stage.id}`}
        className="w-full text-left group flex items-start justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded"
      >
        <h3
          id={`stage-${stage.id}`}
          className={`text-base md:text-lg font-medium mb-1 transition-colors duration-150 ${
            isActive
              ? 'text-blue-700 dark:text-blue-400'
              : 'text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400'
          }`}
        >
          {stage.short}
        </h3>

        <span
          className={`mt-1 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {!isExpanded && stage.institute && (
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">
          {stage.institute} · {stage.location}
        </p>
      )}

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`details-${stage.id}`}
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.18, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pt-2 pb-1">
              {stage.institute && (
                <p className="text-sm text-slate-400 dark:text-slate-500 mb-2">
                  {stage.institute} · {stage.location}
                </p>
              )}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {stage.narrative}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {stage.interests.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// --- Main Timeline ---

export default function Timeline() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduce = useReducedMotion();
  const keyboardNav = useRef(false);

  const setRef = useCallback((el: HTMLDivElement | null, idx: number) => {
    refs.current[idx] = el;
  }, []);

  const toggleExpanded = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as Element[];
    if (nodes.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute('data-idx'));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        keyboardNav.current = true;
        setActive((a) => Math.min(a + 1, stages.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        keyboardNav.current = true;
        setActive((a) => Math.max(0, a - 1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpanded(stages[active].id);
      }
    },
    [active, toggleExpanded]
  );

  useEffect(() => {
    if (!keyboardNav.current) return;
    keyboardNav.current = false;
    refs.current[active]?.scrollIntoView({
      behavior: shouldReduce ? 'auto' : 'smooth',
      block: 'center',
    });
  }, [active, shouldReduce]);

  const panelVariants = {
    enter: { opacity: 0, y: 6 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -4 },
  };

  return (
    <section
      className="py-12 border-b border-slate-200 dark:border-slate-800"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="Research timeline"
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Research Journey
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Timeline list */}
        <div className="lg:col-span-2">
          <div className="relative" role="list" aria-label="Research stages">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="space-y-10">
              {stages.map((s, i) => (
                <TimelineItem
                  key={s.id}
                  stage={s}
                  idx={i}
                  isActive={i === active}
                  isExpanded={expanded.has(s.id)}
                  setRef={setRef}
                  toggleExpanded={toggleExpanded}
                  shouldReduce={shouldReduce}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sticky summary panel */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Current Stage
            </p>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stages[active].id}
                variants={panelVariants}
                initial={shouldReduce ? 'center' : 'enter'}
                animate="center"
                exit={shouldReduce ? 'center' : 'exit'}
                transition={{ duration: shouldReduce ? 0 : 0.25, ease: 'easeOut' }}
              >
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                  {stages[active].date}
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                  {stages[active].short}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {stages[active].institute} · {stages[active].location}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {stages[active].narrative}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stages[active].interests.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href="#contact"
                className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
              >
                Collaborate / Contact →
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-400 dark:text-slate-600">
              Click to expand · arrow keys to navigate
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
