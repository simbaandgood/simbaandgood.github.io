import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (simbaandgood.com) serves from the root, so no base path is needed.
export default defineConfig({
  site: 'https://simbaandgood.com',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'th', 'de', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
