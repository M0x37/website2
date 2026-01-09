import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
    port: 5173,
    strictPort: true,
    open: true,
    cors: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      input: 'index.html'
    },
    sourcemap: true,
    minify: 'terser',
    manifest: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  css: {
    devSourcemap: true,
  }
});