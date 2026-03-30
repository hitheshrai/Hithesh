// src/App.tsx
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

const Timeline = lazy(() => import('./components/Timeline'));

function App() {
  const timelineMountRef = useRef<HTMLDivElement | null>(null);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const node = timelineMountRef.current;
    if (!node || showTimeline) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowTimeline(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [showTimeline]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 md:px-6">
        <Header />
        <About />
        <Publications />
        <div ref={timelineMountRef} id="research">
          {showTimeline ? (
            <Suspense
              fallback={
                <section className="py-12 text-sm text-slate-400 dark:text-slate-500">
                  Loading research timeline…
                </section>
              }
            >
              <Timeline />
            </Suspense>
          ) : (
            <section className="py-12" aria-hidden="true" />
          )}
        </div>
        <Projects />
        <Articles />
        <Contact />
      </main>
      <footer className="max-w-4xl mx-auto px-4 md:px-6 py-8 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-600 flex justify-between items-center">
        <span>Hithesh Rai Purushothama · ASU</span>
        <span>hraipuru@asu.edu</span>
      </footer>
    </div>
  );
}

export default App;
