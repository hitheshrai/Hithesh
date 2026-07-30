// src/App.tsx
import Masthead from './components/Masthead';
import Atlas from './components/Atlas';
import Practice from './components/Practice';
import Work from './components/Work';
import Papers from './components/Papers';
import Colophon from './components/Colophon';

export default function App() {
  return (
    <>
      <Masthead />
      <main>
        <Atlas />
        <Practice />
        <Work />
        <Papers />
      </main>
      <Colophon />
    </>
  );
}
