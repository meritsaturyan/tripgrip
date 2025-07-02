// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tripgrip/', // важно для GitHub Pages
  plugins: [react()],
});




