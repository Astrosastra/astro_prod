import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/astrology-form-submission': {
        target: 'https://n8n.commcal.in/webhook',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/astrology-form-submission/, '/astrology-form-submission'),
      },
      '/api/astrology-payments': {
        target: 'https://n8n.astrosastra.com/webhook',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/astrology-payments/, '/astrology-payments'),
      },
      '/api/verify-payment': {
        target: 'https://n8n.astrosastra.com/webhook',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/verify-payment/, '/verify-payment'),
      },
      '/api/places-autocomplete': {
        target: 'https://n8n.astrosastra.com/webhook',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/places-autocomplete/, '/places-autocomplete'),
      },
    },
  },
});