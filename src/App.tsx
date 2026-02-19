// src/App.tsx

import { Suspense, lazy } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles'
import Contact from './components/Contact';
import Timeline from './components/Timeline';

const AtomVisualization = lazy(() => import('./components/PerovskiteVisualizer'));

function App() {
  return (
    <div className="relative">
      {/* Centered Atom Visualization */}
      <div className="fixed inset-0 flex justify-center items-center z-0 opacity-30 pointer-events-none">
        <Suspense fallback={<div>Loading...</div>}>
          <AtomVisualization />
        </Suspense>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <Header />
        <About />
        <Projects />
        <Timeline />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}

export default App;
