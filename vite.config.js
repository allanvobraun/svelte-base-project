import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
