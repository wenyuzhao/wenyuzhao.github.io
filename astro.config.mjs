// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wenyu.me',
  vite: {
    // plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    // `lastmod` is deliberately omitted: stamping every page with the build time
    // on each deploy is noise that crawlers learn to ignore.
    sitemap({ changefreq: 'monthly' }),
  ],
});
