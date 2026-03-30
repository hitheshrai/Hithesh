// src/components/Header.tsx
import { FileText, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="pt-14 pb-12 border-b border-slate-200 dark:border-slate-800">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-slate-50 mb-3 leading-tight">
        Hithesh Rai Purushothama
      </h1>

      <p className="text-lg md:text-xl text-blue-700 dark:text-blue-400 font-medium mb-3 max-w-2xl leading-snug">
        Building AI-accelerated platforms for autonomous materials discovery in photovoltaics
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-7">
        M.S. AI Engineering (Materials Science) · Arizona State University &nbsp;·&nbsp;
        Researcher, Rolston Lab &nbsp;·&nbsp; Management Intern, Next Lab
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/Hithesh/assets/Rai_Purushothama_Hithesh_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition-colors font-medium"
        >
          <FileText size={15} />
          View CV (PDF)
        </a>

        <a
          href="https://www.linkedin.com/in/hithesh-rai-p/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
        >
          <Linkedin size={15} />
          LinkedIn
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
        >
          <Mail size={15} />
          Get in touch
        </a>

        <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1" />

        <a
          href="https://github.com/hitheshrai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <Github size={20} />
        </a>

        <a
          href="https://x.com/hitheshrai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
          className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <Twitter size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;
