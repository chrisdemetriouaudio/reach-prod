# R.E.A.CH — Astro site

A clean, mobile-first rebuild of the R.E.A.CH (Reaching East Africa's Children) website,
migrated from a WordPress export to [Astro](https://astro.build) + Tailwind CSS and ready to
deploy to GitHub Pages on the custom domain **reach-children-uganda.org.uk**.

All WordPress, PHP, Elementor and Hestia theme code has been stripped. The content (text, page
structure, contact details, trustee bios, project descriptions, FAQs) was extracted from the
static export and rewritten as semantic Astro components.

## Quick start

```bash
cd astro-site
npm install          # installs Astro, Tailwind, sitemap
npm run dev          # local preview at http://localhost:4321
```

Then build a production copy:

```bash
npm run build        # outputs static files to ./dist
npm run preview      # serve the built site locally
```

## Add the images (one-time)

The page templates reference photos by clean filenames (e.g. `/images/trustee-lydia.png`). A helper
script copies them out of the WordPress export and renames them:

```bash
bash scripts/copy-images.sh
# or point it at the uploads folder explicitly:
bash scripts/copy-images.sh "/Volumes/01 PROJECTS/Claude/reach-children-recovery/static-site/wp-content/uploads"
```

Any image that can't be found is skipped — the site falls back to a branded placeholder so the
layout never breaks. You can drop replacement images straight into `public/images/` using the same
names. After copying, run `npm run build` again.

## Deploy to GitHub Pages

1. Create / use the repo `chrisdemetriouaudio/reach-prod`.
2. From this `astro-site` folder:

   ```bash
   git init
   git add -A
   git commit -m "Migrate WordPress site to Astro"
   git branch -M main
   git remote add origin https://github.com/chrisdemetriouaudio/reach-prod.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
5. **Custom domain:** `public/CNAME` already contains `reach-children-uganda.org.uk`. Point the
   domain's DNS at GitHub Pages (a `CNAME` record to `chrisdemetriouaudio.github.io`, or the four
   `A` records for apex domains), then set the custom domain under Settings → Pages.

> Serving from a `github.io/reach-prod` path instead? Set `base: '/reach-prod'` in
> `astro.config.mjs`, delete `public/CNAME`, and rebuild.

## Project structure

```
astro-site/
├── public/
│   ├── images/            # site images (+ placeholder.svg fallback)
│   ├── CNAME              # custom domain for GitHub Pages
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── copy-images.sh     # WordPress uploads -> public/images
├── src/
│   ├── components/        # Header, Footer, PageHeader, Img
│   ├── data/              # site.ts, projects.ts, news.ts (content)
│   ├── layouts/           # BaseLayout.astro
│   ├── pages/             # routes mirroring the original slugs
│   └── styles/            # global.css (Tailwind + theme)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | How R.E.A.CH works |
| `/about/the-history` | The History |
| `/about/safeguarding` | Safeguarding Statement |
| `/trustees` | Our Trustees |
| `/representatives` | Our Trusted Representatives |
| `/faq` | Frequently Asked Questions |
| `/donate` | Donate |
| `/contact-us` | Contact Us |
| `/projects` | Projects index |
| `/projects/<slug>` | 9 individual project pages |
| `/news` | News & Events |
| `/news/<slug>` | 4 event pages |

## Editing content

Content lives in plain TypeScript data files so it's easy to update without touching markup:

- **`src/data/site.ts`** — name, tagline, email, phone, address, navigation.
- **`src/data/projects.ts`** — every project's title, summary and body text.
- **`src/data/news.ts`** — fundraising events.

## Notes from the migration

- The **News**, **Representatives** and three project pages (Good Shepherd Special Needs School,
  The Joy of Learning, Link and Learn 2015) were captured as `503 Service Unavailable` errors in the
  export, so their original body text could not be recovered. These pages have been rebuilt from
  facts found elsewhere on the site (event titles/dates, the named Ugandan advisors, etc.) and are
  marked where detail is missing. Drop in the real copy via the data files when you have it.
- The **contact form** sends real email via [Formspree](https://formspree.io) (GitHub Pages can't
  run the old PHP Contact Form 7). To turn it on:
  1. Sign up free at formspree.io, create a form, and set its destination email to
     `reachchildrenuganda@outlook.com`.
  2. Copy the form's endpoint (looks like `https://formspree.io/f/abcdwxyz`) into
     `formspreeEndpoint` in `src/data/site.ts`.
  3. **Spam protection:** a hidden honeypot field is always on. For a stronger "I'm not a robot"
     check, create a Google reCAPTCHA **v2** at https://www.google.com/recaptcha/admin and paste the
     **site key** into `recaptchaSiteKey` in `src/data/site.ts`. Leave it blank to rely on the
     honeypot plus Formspree's built-in spam filtering. (Validating the reCAPTCHA on the server side
     requires Formspree's paid plan; the widget still blocks basic bots on the free plan.)
  Until the endpoint is set, the form shows a friendly note asking visitors to email directly.
- **Security:** the original WordPress export contained an injected malicious script
  (`cdn.statisticline.com/scripts/sway.js`) on several pages — a sign the old site was compromised.
  None of it has been carried over. Keep it out of any future content edits.
