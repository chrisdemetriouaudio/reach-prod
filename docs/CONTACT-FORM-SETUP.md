# Contact form setup — Turnstile + Worker + Formspree

The contact form is spam-hardened with three layers:

1. **Honeypot** — a hidden field bots fill and humans don't; the Worker drops those.
2. **Cloudflare Turnstile** — a free, no-Google, privacy-friendly CAPTCHA the visitor passes.
3. **A Cloudflare Worker** — verifies the Turnstile token *server-side*, then forwards the
   message to Formspree. This stops bots that skip the widget or POST directly.

Flow: **website form → your Worker (verifies Turnstile + honeypot) → Formspree → your inbox.**

You'll set up three things (all free) and paste two values into `src/data/site.ts`.

---

## Step 1 — Formspree (delivers the email)

1. Sign up at <https://formspree.io> (free).
2. Create a form; set its destination to **reachchildrenuganda@outlook.com** and verify it.
3. Copy the form's endpoint — it looks like `https://formspree.io/f/abcdwxyz`. Keep it for Step 3.

## Step 2 — Cloudflare Turnstile (the CAPTCHA — no Google account)

1. In the **Cloudflare dashboard** → **Turnstile** → **Add site**.
2. Name it (e.g. "R.E.A.CH contact"), and add your domain: `reach-children-uganda.org.uk`
   (add `localhost` too if you want to test locally). Widget type: **Managed**.
3. You'll get two keys:
   - a **Site key** (public) — for the website.
   - a **Secret key** (private) — for the Worker.

## Step 3 — Deploy the Worker

The Worker code is in `worker/contact-worker.js`. Easiest is the dashboard:

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Create Worker**.
2. Name it **`reach-contact`**, click **Deploy**, then **Edit code**.
3. Delete the sample code, paste the contents of `worker/contact-worker.js`, and **Deploy**.
4. Go to the Worker's **Settings → Variables and Secrets** and add:
   - **Secret** named `TURNSTILE_SECRET` = your Turnstile **Secret key** (from Step 2).
   - **Variable** named `FORMSPREE_ENDPOINT` = your Formspree endpoint (from Step 1).
5. Copy the Worker's URL — it looks like `https://reach-contact.<your-subdomain>.workers.dev`.

> Prefer the command line? `cd worker && npx wrangler deploy`, then
> `npx wrangler secret put TURNSTILE_SECRET`, and set `FORMSPREE_ENDPOINT` in the dashboard.

## Step 4 — Plug the two values into the site

In `src/data/site.ts`:

```ts
turnstileSiteKey: 'YOUR_TURNSTILE_SITE_KEY',                    // from Step 2 (public site key)
contactEndpoint: 'https://reach-contact.<your-subdomain>.workers.dev',  // your Worker URL from Step 3
```

Then commit and push:

```
git add -A && git commit -m "Enable Turnstile contact form" && git push
```

## Test it

Open `/contact-us`, complete the Turnstile check, and send a test message — it should land in the
Outlook inbox. Try submitting without ticking Turnstile: it should be refused.

---

## Notes

- **Privacy:** Turnstile is cookieless and doesn't track visitors across sites — good for GDPR and
  kinder than Google reCAPTCHA (which is why we chose it).
- **CORS:** the Worker only accepts requests from `reach-children-uganda.org.uk` (and `localhost`
  for testing). If you change domains, update `ALLOWED_ORIGINS` at the top of `contact-worker.js`.
- **Extra layer (optional):** if you switch your DNS to **proxied** (orange cloud) in Cloudflare,
  you can add a **Rate Limiting** rule on the Worker route to throttle abuse.
- **Until configured:** if `turnstileSiteKey` / `contactEndpoint` are blank, the form politely tells
  visitors to email you directly instead of failing silently.
