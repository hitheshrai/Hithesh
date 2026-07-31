// src/App.tsx
import Masthead from './components/Masthead';
import Atlas from './components/Atlas';
import Practice from './components/Practice';
import Work from './components/Work';
import Papers from './components/Papers';
import Colophon from './components/Colophon';
import { profile } from './data/content';

export default function App() {
  return (
    <>
      {/* The atlas swaps the hero out for a station record as you scroll, which
          used to leave the page with no h1 for most of its length. Anchoring it
          here keeps exactly one, always. */}
      <h1 className="sr-only">
        {profile.name} — {profile.discipline}
      </h1>
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
