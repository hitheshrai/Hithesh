// src/components/Timeline.tsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
    location: "India",
    narrative:
      "B.S.E in Electrical and Electronic Engineering at ASU (Aug 2021 – Dec 2025), where I developed core training in circuits, signals, and embedded systems. I am now continuing at ASU with an M.S. in AI Engineering (Materials Science & Engineering) to connect AI methods with materials research.",
    interests: [
      "Optoelectronics",
      "Semiconductors",
      "Power Systems",
      "Renewable Energy",
    ],
  },
  {
    id: "tempe-start",
    short: "Transition to Renewable Energy",
    date: "Sep 2022 – Present",
    institute: "Renewable Energy Materials & Devices Lab, ASU",
    location: "Tempe, AZ",
    narrative:
      "Research at ASU’s Renewable Energy Materials & Devices Lab focused on fabrication and characterization of perovskite thin films and devices, including alphavoltaic prototypes. My work centers on degradation mechanisms, processing adjustments, and improving stability and reproducibility.",
    interests: ["Photovoltaics", "Materials", "Energy Systems"],
  },
  {
    id: "purdue-data",
    short: "Data & Analysis — Purdue",
    date: "Summer 2023",
    institute: "Purdue (SURF)",
    location: "West Lafayette, IN",
    narrative:
      "At Purdue (SURF), I compiled comparative device and processing datasets, conducted trend analysis, and used data-driven evaluation to inform experimental design and material selection.",
    interests: ["Data Analysis", "Databases", "ML for Materials"],
  },
  {
    id: "structure-hzb",
    short: "Structure Analysis – HZB",
    date: "Summer 2024",
    institute: "Helmholtz Zentrum Berlin",
    location: "Berlin, Germany",
    narrative:
      "Performed Pair Distribution Function (PDF) and X-ray diffraction analysis to study local structure and composition-driven instabilities in perovskite-related systems, linking structural behavior to potential failure pathways.",
    interests: ["Diffraction", "PDF Analysis", "Materials Characterization"],
  },
  {
    id: "device-epfl",
    short: "Device-Level Fabrication – EPFL",
    date: "Summer 2025",
    institute: "EPFL",
    location: "Neuchâtel, Switzerland",
    narrative:
      "Worked on fabrication of single-junction perovskite devices, including ALD-based transport layers and thermal evaporation processes. The focus was on connecting materials processing decisions to device performance and stability outcomes.",
    interests: ["Device Fabrication", "ALD", "Stability Testing"],
  },
  {
    id: "nextlab-ai",
    short: "AI & Edge Systems — Next Lab",
    date: "2026 – Present",
    institute: "Next Lab / ASU",
    location: "Tempe, AZ",
    narrative:
      "At Next Lab, I apply AI to research workflows and edge systems — building retrieval-augmented pipelines, benchmarking inference on NVIDIA Jetson devices for latency and power, and automating documentation processes to improve lab efficiency.",
    interests: ["RAG", "Edge AI", "Automation", "Self-driving Labs"],
  },
];

const FULL_PATH = stages.map((s) => s.location.split(",")[0]);
const FINAL_DESTINATION = FULL_PATH[FULL_PATH.length - 1];

export default function Timeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const shouldReduce = useReducedMotion();
  const keyboardNav = useRef(false);

  // Scroll-based stage detection
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
    return () => nodes.forEach((n) => obs.unobserve(n));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        keyboardNav.current = true;
        setActive((a) => Math.min(a + 1, stages.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        keyboardNav.current = true;
        setActive((a) => Math.max(0, a - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll only when triggered by keyboard
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

  const progressPercent = Math.round(
    (active / (stages.length - 1)) * 100
  );

  const panelVariants = {
    enter: { opacity: 0, x: 10 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -8 },
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left: Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
            Where the Research Has Taken Me
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-8 font-light tracking-wide">
            From Circuits to Crystal Structure
          </p>

          <div
            className="relative"
            role="list"
            aria-label="Research stages"
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />

            <div className="space-y-14">
              {stages.map((s, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={s.id}
                    ref={(el) => (refs.current[i] = el)}
                    data-idx={i}
                    role="listitem"
                    aria-current={isActive ? "true" : undefined}
                    className="relative pl-10"
                    aria-labelledby={`stage-${s.id}`}
                  >
                    <div
                      className={`absolute left-4 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full ring-2 ring-white dark:ring-slate-900 transition-all duration-300 ${
                        isActive
                          ? "bg-accent scale-125"
                          : "bg-slate-400 dark:bg-slate-500 scale-100"
                      }`}
                    />

                    <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {s.date}
                    </div>

                    <h3
                      id={`stage-${s.id}`}
                      className="text-lg md:text-xl font-medium mb-3"
                    >
                      {s.short}
                    </h3>

                    <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                      {s.narrative}
                    </p>
                  </div>
                );
              })}
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
                  <div className="text-xs text-slate-400 mb-1">
                    Stage
                  </div>
                  <div className="text-lg font-semibold">
                    {stages[active].short}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {stages[active].institute} •{" "}
                    {stages[active].location}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stages[active].narrative}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400 mb-2">
                    Interests
                  </div>
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

            {/* Path + progress */}
            <div className="mt-6">
              <div className="text-xs text-slate-400 mb-2">
                Path
              </div>

              <div className="text-sm text-slate-700 dark:text-slate-200 font-medium mb-2">
                {FULL_PATH.join(" → ")}
              </div>

              <div className="flex items-center text-sm">
                <span className="mr-2 text-slate-700 dark:text-slate-200 font-medium">
                  {FULL_PATH[0]}
                </span>
                <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-800 mx-1 rounded-full overflow-hidden">
                  <motion.div
                    className="h-1 bg-accent rounded-full"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{
                      duration: shouldReduce ? 0 : 0.5,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="ml-2 text-slate-700 dark:text-slate-200 font-medium">
                  {FINAL_DESTINATION}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:scale-[1.02] transition"
              >
                Collaborate / Contact
              </a>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              Scroll to explore — or use arrow keys.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
