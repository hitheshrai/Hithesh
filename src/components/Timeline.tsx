// src/components/TimelineInterestJourney.tsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Interest Journey with Framer Motion transitions
 * Path: India → Tempe → West Lafayette → Berlin → Neuchâtel → Tempe
 */

type Stage = {
  id: string;
  short: string;
  date: string;
  institute?: string;
  location: string; // single-location string like "Tempe, AZ"
  narrative: string;
  interests: string[];
};

const stages: Stage[] = [
  {
    id: "ee-start",
    short: "Electrical Engineering — Foundations",
    date: "2021 – 2022",
    institute: "Early coursework",
    location: "India",
    narrative:
      "Started with electrical engineering fundamentals — circuits, signals, and systems. This laid the foundation for hardware-aware thinking.",
    interests: ["Circuits", "Signals", "Embedded Systems"],
  },
  {
    id: "tempe-start",
    short: "Transition to Renewable Energy",
    date: "2022 – 2023",
    institute: "ASU lab work",
    location: "Tempe, AZ",
    narrative:
      "Moved to Tempe and began hands-on work in renewable energy — fabrication and testing of PV materials and systems, focusing on real-world energy problems and scale.",
    interests: ["Photovoltaics", "Materials", "Energy Systems"],
  },
  {
    id: "purdue-data",
    short: "Data & Analysis — Purdue",
    date: "Summer 2023",
    institute: "Purdue (SURF)",
    location: "West Lafayette, IN",
    narrative:
      "At Purdue, I engaged deeply with data — curated device databases, ran trend analysis, and learned how data drives experimental decisions.",
    interests: ["Data Analysis", "Databases", "ML for Materials"],
  },
  {
    id: "structure-hzb",
    short: "Structure Analysis — HZB",
    date: "Summer 2024",
    institute: "Helmholtz Zentrum Berlin",
    location: "Berlin, Germany",
    narrative:
      "Conducted local-order and structural analysis (PDF/XRD), connecting composition to instability and failure modes — a turning point in material understanding.",
    interests: ["Diffraction", "PDF Analysis", "Materials Characterization"],
  },
  {
    id: "device-epfl",
    short: "Device-Level Fabrication — EPFL",
    date: "Summer 2025",
    institute: "EPFL",
    location: "Neuchâtel, Switzerland",
    narrative:
      "Worked on device fabrication and encapsulation; linked materials processing decisions to device performance and long-term stability.",
    interests: ["Device Fabrication", "ALD", "Stability Testing"],
  },
  {
    id: "nextlab-ai",
    short: "AI for Social Good & Edge — Next Lab",
    date: "2026 – Present",
    institute: "Next Lab / ASU",
    location: "Tempe, AZ",
    narrative:
      "Returned to Tempe to focus on integrating AI and edge inference into research workflows — RAG pipelines, Jetson deployments, and automation to reduce friction in experiments.",
    interests: ["RAG", "Edge AI", "Automation", "Self-driving Labs"],
  },
];

const FULL_PATH = [
  "India",
  "Tempe",
  "West Lafayette",
  "Berlin",
  "Neuchâtel",
  "Tempe",
];

export default function TimelineInterestJourney(): JSX.Element {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-idx"));
            setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  // Map active stage to progress across FULL_PATH segments.
  // We'll compute a percentage along the full path: active index maps to (index)/(stages.length -1)
  const progressPercent = Math.round((active / (stages.length - 1)) * 100);

  // Animation variants for right panel
  const panelVariants = {
    enter: { opacity: 0, x: 10 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -8 },
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left: timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            My Interest Journey
          </h2>

          <div className="relative">
            {/* left vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />

            <div className="space-y-14">
              {stages.map((s, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={s.id}
                    ref={(el) => (refs.current[i] = el)}
                    data-idx={i}
                    className="relative pl-14"
                    aria-labelledby={`stage-${s.id}`}
                  >
                    <div
                      className={`absolute -left-6 top-1 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-900 ${
                        isActive ? "bg-accent scale-110" : "bg-slate-500 dark:bg-slate-400 scale-100"
                      }`}
                      style={{ transition: "transform 300ms ease, background-color 300ms ease" }}
                      aria-hidden
                    />

                    <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {s.date}
                    </div>

                    <h3 id={`stage-${s.id}`} className="text-lg md:text-xl font-medium mb-3">
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

        {/* Right: cinematic panel */}
        <aside className="sticky top-24 self-start">
          <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Journey</div>

            <div className="min-h-[92px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stages[active].id}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.36, ease: "easeOut" }}
                >
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Stage</div>
                    <div className="text-lg font-semibold">{stages[active].short}</div>
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
            </div>

            {/* Path visualization + progress */}
            <div className="mt-6">
              <div className="text-xs text-slate-400 mb-2">Path</div>

              {/* textual full path */}
              <div className="text-sm text-slate-700 dark:text-slate-200 font-medium mb-2">
                {FULL_PATH.join(" — ")}
              </div>

              {/* progress bar */}
              <div className="flex items-center text-sm">
                <span className="mr-2 text-slate-700 dark:text-slate-200 font-medium">India</span>
                <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-800 mx-3 rounded-full overflow-hidden">
                  <motion.div
                    className="h-1 bg-accent rounded-full"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <span className="ml-2 text-slate-700 dark:text-slate-200 font-medium">
                  {stages[active].location.split(",")[0]}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:scale-[1.02] transition"
                aria-label="Contact"
              >
                Collaborate / Contact
              </a>
            </div>

            <div className="mt-4 text-xs text-slate-400">Scroll to explore — the right panel updates smoothly.</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
