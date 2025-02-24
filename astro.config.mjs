// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://farhanfadila1717.github.io',
  base: '',
  integrations: [tailwind()],
  experimental: {
    svg: true,
  }
});