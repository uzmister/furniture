import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // Sandbox preview domenlari (https://<port>-<id>.e2b.app) uchun ruxsat
    allowedHosts: true,
    strictPort: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});
