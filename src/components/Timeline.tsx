// src/components/Timeline.tsx

import React from "react";

// Import logos (update paths if needed)
import asuLogo from "../../ASU12.jpg";
import helmholtzLogo from "../../helmholtz_zentrum_berlin_logo.jpeg";
import purdueLogo from "../../Purdue.jpeg";
import nextLabLogo from "../../channels4_profile.jpg";
import epflLogo from "../../ASU12.jpg"; // Fallback to ASU logo

const timelineData = [
  {
    title: "M.S. in Artificial Intelligence Engineering (Materials Science & Engineering)",
    date: "Jan 2026 – May 2027",
    logo: asuLogo,
    description: [
      "Arizona State University",
      "Focus on AI-driven materials research and renewable energy systems",
      "Capstone: Modeling Battery Energy Storage Systems (BESS) for grid-scale integration",
    ],
  },
  {
    title: "Management Intern – AI & Edge Systems",
    date: "Jan 2026 – Present",
    logo: nextLabLogo,
    description: [
      "Next Lab, Arizona State University",
      "Built and benchmarked AI workflows on NVIDIA Jetson devices",
      "Developed RAG pipelines and evaluated latency, memory, and power trade-offs",
      "Led Gen AI initiatives and coordinated technical workflows",
    ],
  },
  {
    title: "Research Assistant – Renewable Energy Materials & Devices Lab",
    date: "Sep 2022 – Present",
    logo: asuLogo,
    description: [
      "Mentor: Prof. Nick Rolston",
      "Fabricated perovskite thin films (spin coating & blade coating)",
      "Characterized devices using solar simulator, XRD, and profilometry",
      "Focused on photovoltaic and alphavoltaic device optimization",
    ],
  },
  {
    title: "Undergraduate Research Assistant – EPFL Photovoltaics Lab",
    date: "May 2025 – Aug 2025",
    logo: epflLogo,
    description: [
      "École Polytechnique Fédérale de Lausanne (EPFL)",
      "Fabricated single-junction perovskite devices (up to 19% efficiency)",
      "Performed ALD SnO₂ deposition and thermal evaporation processes",
      "Conducted encapsulation and stability studies",
    ],
  },
  {
    title: "International Summer Student – Helmholtz Zentrum Berlin",
    date: "Jul 2024 – Aug 2024",
    logo: helmholtzLogo,
    description: [
      "Mentor: Dr. Kaustuv Datta",
      "Quantum Materials Group",
      "Used Pair Distribution Function (PDF) analysis to study structural instabilities",
      "Analyzed phase transitions using X-ray and neutron diffraction",
    ],
  },
  {
    title: "Summer Undergraduate Research Fellow – Purdue University",
    date: "May 2023 – Aug 2023",
    logo: purdueLogo,
    description: [
      "Mentor: Prof. Letian Dou",
      "Stability studies of halide perovskite solar cells",
      "Built comparative database of device structures and efficiencies using Python",
      "Reviewed literature on additive engineering and degradation mechanisms",
    ],
  },
  {
    title: "Team Lead – EPICS (Engineering Projects in Community Service)",
    date: "Jan 2022 – Jan 2024",
    logo: asuLogo,
    description: [
      "Led 10+ students in robotics & Python curriculum development",
      "Integrated Jetson-based systems for hands-on STEM education",
      "Managed delivery across international education partners",
    ],
  },
  {
    title: "B.S.E. in Electrical & Electronic Engineering",
    date: "Aug 2021 – Dec 2025",
    logo: asuLogo,
    description: [
      "Arizona State University",
      "Focus on photovoltaics, renewable energy, and power systems",
    ],
  },
];

const Timeline: React.FC = () => (
  <div className="timeline">
    <h2 className="timeline-title">Experience</h2>
    <div className="timeline-line"></div>

    {timelineData.map((item, index) => (
      <div
        key={index}
        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
      >
        <img
          src={item.logo}
          alt={`${item.title} Logo`}
          className="logo w-10 h-10 mb-2 object-contain"
        />

        <div className="date text-primary dark:text-accent-dark mb-2">
          {item.date}
        </div>

        <div className="title text-lg font-bold mb-1">
          {item.title}
        </div>

        <ul className="description list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Timeline;
