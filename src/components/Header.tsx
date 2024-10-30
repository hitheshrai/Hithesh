import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-cyan-400">Alex Smith</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Senior Software Engineer with expertise in React, Node.js and Cloud Architecture
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/alexsmith" className="p-2 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/alexsmith" className="p-2 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:alex@example.com" className="p-2 hover:text-cyan-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}