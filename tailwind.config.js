/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Sourced from the custom properties in src/index.css so the palette has a
      // single definition; `<alpha-value>` keeps opacity modifiers (bg-stone/85,
      // bg-graphite/45) working.
      colors: {
        stone: {
          DEFAULT: 'rgb(var(--stone-rgb) / <alpha-value>)',
          deep: 'rgb(var(--stone-deep-rgb) / <alpha-value>)',
          edge: 'rgb(var(--stone-edge-rgb) / <alpha-value>)',
        },
        graphite: {
          DEFAULT: 'rgb(var(--graphite-rgb) / <alpha-value>)',
          soft: 'rgb(var(--graphite-soft-rgb) / <alpha-value>)',
        },
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        oxide: {
          DEFAULT: 'rgb(var(--oxide-rgb) / <alpha-value>)',
          deep: 'rgb(var(--oxide-deep-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        measure: '60ch',
      },
    },
  },
  plugins: [],
};
