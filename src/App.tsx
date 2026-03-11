// src/App.tsx
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
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
        if (entries.some((entry) => entry.isIntersecting)) {
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
    <div className="relative min-h-screen">
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <Header />
          <About />
          <Projects />
          <div ref={timelineMountRef}>
            {showTimeline ? (
              <Suspense
                fallback={
                  <section className="py-16 text-center text-slate-500 dark:text-slate-400">
                    Loading timeline...
                  </section>
                }
              >
                <Timeline />
              </Suspense>
            ) : (
              <section className="py-16" aria-hidden="true" />
            )}
          </div>
          <Articles />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;