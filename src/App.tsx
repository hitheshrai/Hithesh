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

      

          <Articles />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;