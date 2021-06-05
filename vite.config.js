import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    // preprocess: sveltePreprocess()
    preprocess: sveltePreprocess({
      defaults: {
        script: 'typescript',
        style: 'scss'
      },
      // scss: {
      //   prependData: `@use 'src/assets/scss/variables.scss'as *;`
      // }
    }),

  })],
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
});
