// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hithesh/', // Replace with your repo name if deploying to GitHub Pages
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/examples')) return 'three-examples';
          if (id.includes('node_modules/three')) return 'three-core';
          if (id.includes('node_modules/@react-three/fiber')) return 'react-three-fiber';
          if (id.includes('node_modules/@react-three/drei')) return 'react-three-drei';
          return undefined;
        },
      },
    },
  },
});
