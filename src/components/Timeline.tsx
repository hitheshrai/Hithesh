// src/components/Timeline.tsx
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BackgroundPerovskite from "./BackgroundPerovskite";

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
    id: "ee-start",
    short: "Electrical Engineering → AI Engineering",
    date: "2021 – Present",
    institute: "ASU — B.S.E EEE / M.S. AI Engineering",
    location: "Tempe, AZ",
    narrative:
      "B.S.E in Electrical & Electronic Engineering (2021–2025), now pursuing an M.S. in AI Engineering (Materials Science) — applying ML to accelerate energy materials research.",
    interests: ["Optoelectronics", "Semiconductors", "Power Systems", "Renewable Energy"],
  },
  {
    id: "tempe-start",
    short: "Perovskite Research – ASU Renewable Energy Lab",
    date: "Sep 2022 – Present",
    institute: "Renewable Energy Materials & Devices Lab, ASU",
    location: "Tempe, AZ",
    narrative:
      "Fabricated perovskite thin films via spin and blade coating; led an Intel-funded cesium wide-bandgap project that delivered an improved-stability prototype, presented at IEEE PVSC 2024.",
    interests: ["Photovoltaics", "Thin-Film Fabrication", "Materials Characterization", "Energy Systems"],
  },
  {
    id: "purdue-data",
    short: "Data & Analysis – Purdue SURF",
    date: "Summer 2023",
    institute: "Letian Dou Group, Purdue University",
    location: "West Lafayette, IN",
    narrative:
      "Built a comparative device-efficiency database in Python/Excel and used the Perovskite Database to identify material-performance trends guiding additive selection.",
    interests: ["Data Analysis", "ML for Materials", "Perovskite Databases", "Stability Studies"],
  },
  {
    id: "structure-hzb",
    short: "Structure Analysis – HZB",
    date: "Summer 2024",
    institute: "Helmholtz Zentrum Berlin – Quantum Materials Group",
    location: "Berlin, Germany",
    narrative:
      "Used PDF and X-ray/neutron diffraction to reveal structural instabilities and morphotropic phase transitions in perovskite ferroelectric systems.",
    interests: ["PDF Analysis", "Diffraction", "Materials Characterization", "Crystal Structure"],
  },
  {
    id: "device-epfl",
    short: "Device Fabrication – EPFL",
    date: "Summer 2025",
    institute: "Photovoltaics Lab, EPFL",
    location: "Neuchâtel, Switzerland",
    narrative:
      "Fabricated single-junction perovskite devices reaching 19% efficiency, learned techniques like atomic layer deposition and thermal evaporation — funded by the ThinkSwiss Research Scholarship.",
    interests: ["Device Fabrication", "ALD", "Thermal Evaporation", "Stability Testing"],
  },
  {
    id: "nextlab-ai",
    short: "Management Intern – Next Lab, ASU",
    date: "Jan 2026 – Present",
    institute: "Next Lab / ASU",
    location: "Tempe, AZ",
    narrative:
      "Leading partner-funded AI initiatives: building LangChain retrieval pipelines, benchmarking AI workloads on NVIDIA Jetson edge devices, and analyzing INT8/Q4 quantization trade-offs for robust deployment.",
    interests: ["RAG", "Edge AI", "LangChain", "Quantization", "Automation"],
  },
];

// --- Memoized TimelineItem (defined OUTSIDE Timeline to avoid remounting) ---

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
      <div
        className={`absolute left-4 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full ring-2 ring-white dark:ring-slate-900 transition-all duration-300 ${
          isActive
            ? "bg-accent scale-125"
            : "bg-slate-400 dark:bg-slate-500 scale-100"
        }`}
      />

      <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
        {stage.date}
      </div>

      <button
        onClick={() => toggleExpanded(stage.id)}
        aria-expanded={isExpanded}
        aria-controls={`details-${stage.id}`}
        className="w-full text-left group flex items-start justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
      >
        <h3
          id={`stage-${stage.id}`}
          className="text-lg md:text-xl font-medium mb-1 group-hover:text-accent transition-colors duration-200"
        >
          {stage.short}
        </h3>

        <span
          className={`mt-1 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{
              duration: shouldReduce ? 0 : 0.12,
              ease: "easeOut",
            }}
            style={{ overflow: "hidden", willChange: "opacity, transform" }}
          >
            <div className="pt-2 pb-1">
              {stage.institute && (
                <p className="text-sm text-slate-400 dark:text-slate-500 mb-3">
                  {stage.institute} · {stage.location}
                </p>
              )}

              <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {stage.narrative}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {stage.interests.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md border text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
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

// --- Main Timeline component ---

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
            const idx = Number(e.target.getAttribute("data-idx"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        keyboardNav.current = true;
        setActive((a) => Math.min(a + 1, stages.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        keyboardNav.current = true;
        setActive((a) => Math.max(0, a - 1));
      } else if (e.key === "Enter" || e.key === " ") {
        toggleExpanded(stages[active].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, toggleExpanded]);

  useEffect(() => {
    if (!keyboardNav.current) return;
    keyboardNav.current = false;
    const node = refs.current[active];
    if (!node) return;
    node.scrollIntoView({
      behavior: shouldReduce ? "auto" : "smooth",
      block: "center",
    });
  }, [active, shouldReduce]);

  const panelVariants = {
    enter: { opacity: 0, x: 10 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -8 },
  };

  return (
    <section className="relative py-16">
      <BackgroundPerovskite dpr={1.0} />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* Left: Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
            Where the Research Has Taken Me
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-8 font-light tracking-wide">
            From Circuits to Crystal Structure
          </p>

          <div className="relative" role="list" aria-label="Research stages">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="space-y-14">
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

        {/* Right: Sticky Panel */}
        <aside className="sticky top-24 self-start">
          <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Research Trajectory
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stages[active].id}
                variants={panelVariants}
                initial={shouldReduce ? "center" : "enter"}
                animate="center"
                exit={shouldReduce ? "center" : "exit"}
                transition={{
                  duration: shouldReduce ? 0 : 0.36,
                  ease: "easeOut",
                }}
              >
                <div>
                  <div className="text-xs text-slate-400 mb-1">Stage</div>
                  <div className="text-lg font-semibold">
                    {stages[active].short}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {stages[active].institute} • {stages[active].location}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stages[active].narrative}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400 mb-2">Interests</div>
                  <div className="flex flex-wrap gap-2">
                    {stages[active].interests.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md border text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:scale-[1.02] transition"
              >
                Collaborate / Contact
              </a>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              Click a stage to expand · Scroll or use arrow keys to navigate.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}