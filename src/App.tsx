// src/App.tsx
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import BackgroundPerovskite from './components/BackgroundPerovskite';

const PerovskiteVisualizer = lazy(() => import('./components/PerovskiteVisualizer'));

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundPerovskite dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 1.2} />
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <Header />
          <About />
          <Projects />
          <Timeline />

          {/* Perovskite visualizer as its own section */}
          <section className="py-16">
            <h2 className="text-2xl font-serif font-semibold mb-2">Unit Cell Visualizer</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Interactive ABX₃ perovskite structure — the material class at the center of my research.
            </p>
            <Suspense fallback={<div className="h-[420px] flex items-center justify-center text-slate-400">Loading visualizer…</div>}>
              <PerovskiteVisualizer />
            </Suspense>
          </section>

          <Articles />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;