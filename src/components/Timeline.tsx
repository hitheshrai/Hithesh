// src/components/Timeline.tsx

import React from "react";

const timelineData = [
  {
    title: "Blade-Coated Perovskite Thin Films for Energy Conversion",
    date: "2022 – Present",
    description: [
      "Fabrication of perovskite thin films using spin and blade coating.",
      "Device characterization via solar simulation and XRD.",
      "Efficiency optimization and defect control for scalable processing.",
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
    title: "Structural Instability in Ferroelectric Materials",
    date: "Summer 2024",
    description: [
      "Pair Distribution Function (PDF) analysis of local structure.",
      "X-ray and neutron diffraction for phase transition studies.",
      "Correlation of composition-driven structural instabilities.",
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
    title: "Battery Energy Storage System (BESS) Modeling",
    date: "2025",
    description: [
      "Grid-scale storage modeling and PV integration analysis.",
      "System-level optimization and digital twin evaluation.",
    ],
  },
  {
    title: "Autonomous AI Workflows for Edge Deployment",
    date: "2026 – Present",
    description: [
      "Designed retrieval-augmented systems for structured scientific workflows.",
      "Benchmarked large language models under memory and power constraints.",
      "Optimized inference pipelines for energy-efficient deployment.",
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-semibold mb-12">
          Selected Research & Systems Work
        </h2>

        <div className="relative border-l border-slate-300 dark:border-slate-700">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              <div className="absolute -left-2.5 mt-2 w-4 h-4 bg-slate-600 dark:bg-slate-400 rounded-full"></div>

              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                {item.date}
              </div>

              <h3 className="text-lg font-medium mb-3">
                {item.title}
              </h3>

              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description.map((point, i) => (
                  <li key={i}>• {point}</li>
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
