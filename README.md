# R.E.A.CH charity website

The website for R.E.A.CH (Reaching East Africa's Children), a UK charity that supports children's education in Uganda.

**Live:** https://reach-children-uganda.org.uk

## The problem

The charity had lost its WordPress website. Donors and supporters had nowhere to go.

## What I built

- **Recovered the content.** Page text, trustee details, projects and FAQs came back from web archives and an old backup.
- **Rebuilt it as a static site.** Astro and Tailwind CSS, with no WordPress, PHP or plugins left to patch.
- **A contact form that reaches the charity.** A small Cloudflare Worker checks each message is from a person, then e-mails the charity's inbox.
- **Display settings.** Dark by default, with text size, a dyslexia-friendly font, contrast and calm motion.
- **Ready to be found.** Structured data for the charity, its events and FAQs, share cards, a sitemap and `llms.txt`.
- **Privacy first.** No tracking cookies unless a visitor agrees.

## The result

The charity is back online, on its own domain, with no hosting bill.

## How it works

| Where | What runs there |
|---|---|
| **GitHub Actions** | Builds and deploys the site on every push to `main` |
| **GitHub Pages** | Serves the static site on the charity's domain |
| **Cloudflare Worker** | Receives the contact form, runs the Turnstile check and sends the e-mail |

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # static files in ./dist
npm run preview   # serve the built site
```

## Where things are

| Folder | What |
|---|---|
| `src/pages/` | One file per page |
| `src/components/` | Header, footer, display settings, cookie consent |
| `src/data/` | Content in plain data files: site details, projects, news, FAQs |
| `worker/` | The contact form Worker |
| `public/` | Images, fonts and the domain file |
| `docs/` | Set-up guides for the contact form and for launch |

## Change the content

Content lives in `src/data/`, so text can change without touching the page layout.

- `site.ts`: name, contact details and menu.
- `projects.ts`: each project's title, summary and text.
- `news.ts`: fundraising events.

## How this was built

I design the solution and direct AI coding tools to build it. I test it, and nothing ships until I sign it off.
