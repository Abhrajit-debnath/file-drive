import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/users/': 'http://localhost:3000',
      '/auth/': 'http://localhost:3000',
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});