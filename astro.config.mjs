import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Custom-domain deployment (reach-children-uganda.org.uk) on GitHub Pages.
// Because we serve from the domain root, `base` stays "/".
// If you ever move to a project path (e.g. user.github.io/reach-prod),
// set `base: '/reach-prod'` and update the CNAME / links accordingly.
export default defineConfig({
  site: 'https://reach-children-uganda.org.uk',
  base: '/',
  trailingSlash: 'ignore',
  // The sitemap is generated on every build, so new pages are always listed.
  integrations: [tailwind(), sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    format: 'directory',
  },
});
