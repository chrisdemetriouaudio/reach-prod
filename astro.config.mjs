import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Custom-domain deployment (reach-children-uganda.org.uk) on GitHub Pages.
// Because we serve from the domain root, `base` stays "/".
// If you ever move to a project path (e.g. user.github.io/reach-prod),
// set `base: '/reach-prod'` and update the CNAME / links accordingly.
export default defineConfig({
  site: 'https://reach-children-uganda.org.uk',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
});
