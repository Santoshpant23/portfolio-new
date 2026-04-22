import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works both locally and on GitHub Pages
// regardless of whether it's deployed to a user page or a project page.
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
