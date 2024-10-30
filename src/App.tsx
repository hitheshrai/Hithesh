import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-slate-400">
        <p>© 2024 Hithesh Rai Purushothama. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;