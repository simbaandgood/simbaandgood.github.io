import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (simbaandgood.com) serves from the root, so no base path is needed.
export default defineConfig({
  site: 'https://simbaandgood.com',
  integrations: [sitemap()],
});
