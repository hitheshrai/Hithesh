// src/components/Masthead.tsx
import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const links = [
  { label: 'Atlas', href: '#atlas' },
  { label: 'Practice', href: '#practice' },
  { label: 'Work', href: '#work' },
  { label: 'Papers', href: '#papers' },
];

export default function Masthead() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        condensed ? 'bg-stone/85 backdrop-blur-[2px]' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-[var(--gutter)] py-4">
        <a href="#atlas" className="label link-draw whitespace-nowrap text-graphite">
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">H. R. P.</span>
        </a>

        <nav className="flex items-center gap-5 whitespace-nowrap sm:gap-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="label link-draw hidden md:inline">
              {link.label}
            </a>
          ))}
          <a href="#work" className="label link-draw md:hidden">
            Work
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="label link-draw link-draw-oxide text-oxide"
          >
            <span className="hidden sm:inline">Curriculum Vitae</span>
            <span className="sm:hidden">CV</span>
          </a>
        </nav>
      </div>
      <div className={`mx-[var(--gutter)] h-px transition-colors duration-500 ${condensed ? 'bg-[var(--rule)]' : 'bg-transparent'}`} />
    </header>
  );
}
