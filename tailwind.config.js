// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode with a 'dark' class on the <html> element
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Light mode primary color
        backgroundDark: '#000000', // Dark mode background
        textDark: '#FFFFFF', // Dark mode text
        backgroundLight: '#FFFFFF', // Light mode background
        textLight: '#000000', // Light mode text
      },
    },
  },
  plugins: [],
};
