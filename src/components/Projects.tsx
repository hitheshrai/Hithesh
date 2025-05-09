// src/components/Projects.tsx

import React from 'react';

export default function Projects() {
  const projects = [
    {
  title: "Blade-Coated CsPbX₃ Films for Alphavoltaic and Optoelectronic Devices",
  description: "Guest researcher project under Dr. Nick Rolston exploring scalable blade coating of cesium lead halide perovskite films for alphavoltaics. Focused on ethanol-based deposition using PVP/PEG for improved film uniformity and thickness under ambient conditions.",
  link: "https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/"
    },

    {
      title: "Synthesis and Characterization of Halide Perovskite for Solar Cells",
      description: "Intel-funded project focusing on synthesis and optical/electrical characterization of perovskite thin films for solar applications. Involved spin coating and spectroscopic analysis.",
      link: "https://rolston.lab.asu.edu/our-work-explained/" 
    },
    {
      title: "Probing Structural Instability in Perovskite-based Ferroelectric Materials",
      description: "Explored ferroelectric and piezoelectric materials using X-ray and neutron diffraction at Helmholtz Zentrum Berlin to study phase transitions.",
      github: "https://www.helmholtz-berlin.de/forschung/oe/qm/quantenphaenomene/index_en.html"
    },
    {
      title: "Solar-Based Edge Device",
      description: "Led a team in developing a low-power, solar-powered edge device for AI applications.",
      link: "https://nextlab.asu.edu/sol-a-i/"
    },
    {
      title: "2Unify Education Program",
      description: "Led a curriculum development project integrating robotic arm programming for middle school students in collaboration with EPICS and Bridge2Africa.",
      link: "https://epics.engineering.asu.edu/2022/02/2unify-education/"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-backgroundDark text-black dark:text-textDark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-textDark">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-100 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-textDark">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-blue-600 dark:text-textDark hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-blue-600 dark:text-textDark hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
