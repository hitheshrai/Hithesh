import { useEffect, useRef, useState } from 'react';
const links = [['Research', 'research'], ['Experience', 'experience'], ['Papers & posters', 'publications'], ['Engineering', 'engineering'], ['About', 'about'], ['Contact', 'contact']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPointer); };
  }, [open]);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header" ref={headerRef}><div className="header-inner wrap">
    <a href="#main" className="wordmark" aria-label="Hithesh Rai Purushothama — back to top">Hithesh Rai<span className="wordmark-dot">.</span></a>
    <button ref={buttonRef} className="menu-button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="site-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav>
  </div></header></>;
}
