import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import { SITE_CONFIG } from './src/data/config.ts';

export default defineConfig({
  site: SITE_CONFIG.url,
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
