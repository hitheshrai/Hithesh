// src/components/Timeline.tsx

import React from "react";

// Importing logos
import asuLogo from "/workspaces/Hithesh/ASU12.jpg";
import helmholtzLogo from "/workspaces/Hithesh/helmholtz_zentrum_berlin_logo.jpeg";
import purdueLogo from "/workspaces/Hithesh/Purdue.jpeg";
import nextLabLogo from "/workspaces/Hithesh/channels4_profile.jpg";

const timelineData = [
  {
    title: "B.S.E in Electrical and Electronic Engineering",
    date: "Aug 2021 – Dec 2025",
    logo: asuLogo,
    description: [
      "Studied at Arizona State University (ASU)",
      "Focus: Electrical Engineering",
      "Specialization: Photovoltaics and Renewable Energy",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    date: "Sep 2022 – Present",
    logo: asuLogo,
    description: [
      "Mentor: Professor Nick Rolston",
      "Research Group: Ira A. Fulton School of Engineering",
      "Focus: Halide perovskite solar cells and alpha-voltaic thin films",
    ],
  },
  {
    title: "International Summer Student",
    date: "July 2024 – Aug 2024",
    logo: helmholtzLogo,
    description: [
      "Mentor: Dr. Kaustuv Datta",
      "Research Institute: Helmholtz Zentrum Berlin",
      "Focus: X-ray diffraction and phase transitions in ferroelectric materials",
    ],
  },
  {
    title: "Summer Undergraduate Research Fellow",
    date: "May 2023 – Aug 2023",
    logo: purdueLogo,
    description: [
      "Mentor: Professor Letian Dou",
      "Research Group: Purdue University",
      "Focus: Stability of perovskite materials and device fabrication",
    ],
  },
  {
    title: "Senior Studio Associate",
    date: "Sep 2023 – Present",
    logo: nextLabLogo,
    description: [
      "Lab: Next Lab at ASU",
      "Role: Lead AI Researcher in Gen AI team",
      "Focus: Solar-powered edge AI devices and AI efficiency improvements",
    ],
  },
];

const Timeline: React.FC = () => (
  <div className="timeline">
    <h2 className="timeline-title">Resume</h2>
    <div className="timeline-line"></div>

    {timelineData.map((item, index) => (
      <div
        key={index}
        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} // Alternate between left and right
      >
        <img src={item.logo} alt={`${item.title} Logo`} className="logo w-10 h-10 mb-2" />
        <div className="date text-primary dark:text-accent-dark mb-2">{item.date}</div>
        <div className="title text-lg font-bold mb-1">{item.title}</div>
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
