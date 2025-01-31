// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://farhanfadila1717.github.io',
  base: 'farhanfadila1717.github.io',
  integrations: [tailwind()],
  experimental: {
    svg: true,
  }
});