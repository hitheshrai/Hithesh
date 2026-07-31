import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import posthog from 'posthog-js';
import App from './App.tsx';
import './index.css';

/**
 * Events are sent to /ingest on this domain, not to posthog.com directly:
 * content blockers drop requests to known analytics hosts, which silently
 * removes a large share of a technical audience. The proxy is defined in
 * vercel.json for production and in vite.config.ts for `npm run dev`.
 *
 * Only the project key is configuration. Fewer variables, fewer ways for this
 * to end up doing nothing.
 */
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: '/ingest',
    // Where the toolbar and "view in PostHog" links point. Not an ingest path,
    // so it stays the real host even though traffic is proxied.
    ui_host: 'https://us.posthog.com',
    // Nobody signs in to a portfolio, so every event is anonymous. This keeps
    // them from consuming the person-profile quota.
    person_profiles: 'identified_only',
    capture_exceptions: true,
    // These three pull down 93 KB of extra script between them — more than half
    // the weight of the site itself — and none of it earns its place on a
    // six-section portfolio. Exception capture stays; it is 5 KB and useful.
    disable_session_recording: true,
    disable_surveys: true,
    capture_dead_clicks: false,
  });
} else {
  // Deliberately not DEV-only. A missing key in production is exactly the case
  // that produces an empty dashboard with no explanation.
  console.warn(
    'PostHog disabled: VITE_PUBLIC_POSTHOG_KEY is not set at build time. ' +
      'Set it in the Vercel project environment variables and redeploy — Vite ' +
      'inlines env vars during the build, so changing it does nothing until a ' +
      'new build runs.'
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
