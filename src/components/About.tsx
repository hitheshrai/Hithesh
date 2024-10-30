import React from 'react';

export default function About() {
  return (
    <section className="bg-slate-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-slate-300 mb-6">
          I’m Hithesh Rai Purushothama, a senior in Electrical and Electronic Engineering at ASU with a focus on renewable energy, material research, and AI applications. 
          With hands-on experience in perovskite solar cells, AI-driven edge devices, and NASA's rover systems, 
          I aim to drive innovation in sustainable technology through technical skills in programming, material synthesis, and low-power electronics.
          </p>
          <p className="text-slate-300">
            Passionate about clean code, performance optimization, and mentoring junior developers.
            Regular contributor to open-source projects and technical blogger.
          </p>
        </div>
      </div>
    </section>
  );
}