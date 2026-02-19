// src/components/Timeline.tsx

import React from "react";

const timelineData = [
  {
    title: "Autonomous AI Workflows for Edge Deployment",
    date: "2026 – Present",
    description: [
      "Designed retrieval-augmented systems for structured scientific workflows.",
      "Benchmarked large language models under memory and power constraints.",
      "Optimized inference pipelines for energy-efficient deployment.",
    ],
  },
  {
    title: "Battery Energy Storage System (BESS) Modeling",
    date: "2025",
    description: [
      "Grid-scale storage modeling and PV integration analysis.",
      "System-level optimization and digital twin evaluation.",
    ],
  },
  {
    title: "Single-Junction Perovskite Device Fabrication",
    date: "Summer 2025",
    description: [
      "Fabricated devices reaching ~19% efficiency.",
      "Atomic layer deposition of transport layers.",
      "Encapsulation and stability pathway analysis.",
    ],
  },
  {
    title: "Structural Instability in Ferroelectric Materials",
    date: "Summer 2024",
    description: [
      "Pair Distribution Function (PDF) analysis of local structure.",
      "X-ray and neutron diffraction for phase transition studies.",
      "Correlation of composition-driven structural instabilities.",
    ],
  },
  {
    title: "Perovskite Solar Cell Stability Modeling",
    date: "Summer 2023",
    description: [
      "Comparative database of device architectures.",
      "Literature synthesis on degradation mechanisms.",
      "Trend analysis for material-performance optimization.",
    ],
  },
  {
    title: "Blade-Coated Perovskite Thin Films for Energy Conversion",
    date: "2022 – Present",
    description: [
      "Fabrication of perovskite thin films using spin and blade coating.",
      "Device characterization via solar simulation and XRD.",
      "Efficiency optimization and defect control for scalable processing.",
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-16">
          Selected Research & Systems Work
        </h2>

        <div className="relative border-l border-slate-300 dark:border-slate-700">
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-14 pl-8">
              
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-slate-600 dark:bg-slate-400 rounded-full ring-4 ring-white dark:ring-slate-900"></span>

              {/* Date */}
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {item.date}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-medium mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <ul className="space-y-2 text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-slate-400">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
