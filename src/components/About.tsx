import React from 'react';

export default function About() {
  return (
    <section className="bg-slate-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-slate-300 mb-6">
            Senior Software Engineer with 8+ years of experience building scalable web applications.
            Expert in React, Node.js, and AWS cloud infrastructure. Led multiple successful projects
            for Fortune 500 companies.
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