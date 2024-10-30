import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://hitheshrai.github.io/Hitheshrai.github.io-/', // replace with your repo name
});
