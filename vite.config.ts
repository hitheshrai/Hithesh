// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hithesh/', // Replace with your repo name if deploying to GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-three-fiber': ['@react-three/fiber']
        }
      },
    },
  },
});
