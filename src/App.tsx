import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

const AtomVisualization = lazy(() => import('./components/AtomVisualization'));

function App() {
  return (
    <div className="relative">
      {/* Atom Visualization Background (Lazy Loaded) */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="absolute inset-0 -z-10">
          <AtomVisualization />
        </div>
      </Suspense>

      {/* Main Content */}
      <Header />
      <About />
      <Projects />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;
