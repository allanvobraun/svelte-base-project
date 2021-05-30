import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import preprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: preprocess()
  })],
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
