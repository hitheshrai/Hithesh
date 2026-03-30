// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#1d4ed8',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};
