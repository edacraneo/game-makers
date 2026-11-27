import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://game-makers-xyz.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
