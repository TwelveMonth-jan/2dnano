import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/2dnano_web",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
