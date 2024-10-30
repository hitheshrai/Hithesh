import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Enterprise E-commerce Platform",
      description: "Led development of a high-performance e-commerce platform handling $50M+ in annual transactions. Built with React, Node.js, and AWS.",
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Migration Framework",
      description: "Architected and implemented a framework for migrating legacy applications to AWS, reducing deployment time by 70%.",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.link} className="text-cyan-400 hover:underline">View Project</a>
                  <a href={project.github} className="text-cyan-400 hover:underline">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}