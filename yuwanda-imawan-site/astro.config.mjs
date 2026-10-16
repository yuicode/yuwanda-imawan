import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.pages.dev', // Replace after deployment with your real public URL.
  vite: {
    plugins: [tailwindcss()],
  },
});
