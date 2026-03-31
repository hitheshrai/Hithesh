// src/components/Nav.tsx
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Research',     href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Articles',     href: '#articles' },
  { label: 'Contact',      href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-white dark:bg-slate-950 border-b border-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <span className="font-serif font-semibold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
          Hithesh Rai
        </span>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
