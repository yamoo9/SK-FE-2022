import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './server'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000/',
    },
  },
});
