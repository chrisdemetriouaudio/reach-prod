# R.E.A.CH — Launch, SEO, DNS & Email Guide

A practical playbook for getting **reach-children-uganda.org.uk** found, funded and live.
Written for a small, volunteer-run charity — most of it is free; the paid items are where a
£10,000 budget genuinely moves the needle.

---

## Part 1 — Technical SEO already built into the site (free, done)

These are in the code and ship automatically:

- **Unique title + meta description** on every page.
- **Open Graph + Twitter Card** tags (nice link previews when shared on Facebook/WhatsApp/X), with a
  share image.
- **Organisation (NGO) structured data** (JSON-LD) sitewide — name, logo, founding year (1992),
  registered charity number (1094502), address, area served (Uganda), and social profile. Helps
  Google show a rich "knowledge panel."
- **FAQ structured data** on the FAQ page (can earn expandable Q&A results in Google).
- **Canonical URLs**, `robots` meta, and a **sitemap.xml** + **robots.txt**.
- **Fast, static pages** (Astro) — excellent Core Web Vitals out of the box.
- **Accessibility basics** — semantic HTML, alt text, skip-to-content link, `prefers-reduced-motion`,
  British-English `lang`. (A formal WCAG audit is a budget item below.)
- **Mobile-first responsive** layout, favicons, 404 page (noindexed).

**Your first free actions after go-live:**

1. **Google Search Console** (search.google.com/search-console) — add the domain, verify, and submit
   `https://reach-children-uganda.org.uk/sitemap.xml`.
2. **Bing Webmaster Tools** — same, submit the sitemap (import from Search Console in one click).
3. **Analytics** — install **Google Analytics 4** (free) or, for a privacy-friendly charity option,
   **Plausible** (~£7/mo) or **Cloudflare Web Analytics** (free). Tell me which and I'll wire it in.

---

## Part 2 — The biggest SEO win for a charity: Google Ad Grant

Before spending a penny: **apply for the [Google Ad Grant](https://www.google.com/grants/)** —
**$10,000/month in free Google Search ads** for eligible non-profits (~£95k/year). This is the single
highest-leverage thing you can do.

- Apply via **Google for Nonprofits** (UK charities qualify; eligibility is validated through their
  partner). You'll need your Charity Commission details (no. 1094502).
- Requirements worth knowing: ads are text-only on Google Search; max CPC $2; you must keep a **≥5%
  click-through rate** and a tidy account, and the **website must be high quality** (yours now is).
- Use it to target searches like *"sponsor a child Uganda", "donate children's education Uganda",
  "Ugandan orphan charity UK"* and drive people to your **Donate** and **Projects** pages.

> Tip: the £2 CPC cap and 5% CTR rule trip up most charities. Budget a little of the £10k for a
> Google Ad Grant specialist to set it up and manage it for the first 6–12 months — it pays for
> itself many times over.

---

## Part 3 — Suggested £10,000 budget allocation

The technical SEO is done for free, so spend the budget on **content, credibility and reach** — the
things Google can't fake and that actually convert visitors into donors.

| # | Investment | Why it matters for SEO & donations | Approx. £ |
|---|---|---|---|
| 1 | **Google Ad Grant setup + 12 months management** | Unlocks ~£95k/yr of free traffic to Donate/Projects; needs expert care to stay compliant | £2,500 |
| 2 | **Professional copywriting** — rewrite key pages + 12 news/impact stories | Fresh, keyword-rich, trustworthy content is the #1 ranking factor; storytelling drives giving | £2,000 |
| 3 | **Photography/video** of the Uganda projects & UK events | Original media → shares, backlinks, social proof, better engagement | £1,500 |
| 4 | **WCAG 2.2 AA accessibility audit + fixes** | Right thing to do, reduces legal risk, and accessible sites rank better | £1,000 |
| 5 | **Backlink & PR outreach** — local press (Marple/Stockport), charity directories, partner schools/HUGs links | Authority/backlinks are how you out-rank bigger orgs | £1,000 |
| 6 | **Donation platform + email tool** (Enthuse/JustGiving + Brevo/Mailchimp) | Smoother giving = higher conversion; email nurtures repeat donors | £750 |
| 7 | **Ongoing SEO consult** — keyword strategy, Search Console monitoring, quarterly tune-ups | Keeps momentum, catches issues | £750 |
| 8 | **Contingency / tools / Cloudflare Pro if needed** | Buffer | £500 |
| | **Total** | | **£10,000** |

**Free, do-anyway list:** Search Console + Bing + GA4; claim a **Google Business Profile**; list on
charity directories (Charity Commission, Charity Choice, localgiving); get listed on partner and
school websites; keep the **News** page active (fresh content = repeat crawling); ask supporters to
link to you.

**Local SEO angle:** you're UK-based (Stockport/Marple) helping Uganda — lean into both. Target UK
"how to help" searches *and* keep the Uganda project pages rich with specific place names (Fort
Portal, Lira, Jinja, Kampala) which you already mention.

---

## Part 4 — Cloudflare DNS records (point the domain at GitHub Pages)

> ⚠️ This repoints `reach-children-uganda.org.uk` from your **old WordPress host to the new site.**
> The old site stops serving once DNS switches and propagates (minutes to a few hours). Do it when
> you're ready to go live. First **remove the old A/CNAME records** that point to the previous host.

In **Cloudflare → your domain → DNS → Records**, add:

**Apex (the bare domain) — four A records:**

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | DNS only (grey cloud) |
| A | `@` | `185.199.109.153` | DNS only (grey cloud) |
| A | `@` | `185.199.110.153` | DNS only (grey cloud) |
| A | `@` | `185.199.111.153` | DNS only (grey cloud) |

**(Optional) IPv6 — four AAAA records (same names, grey cloud):**
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

**www subdomain:**

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | `www` | `chrisdemetriouaudio.github.io` | DNS only (grey cloud) |

**Why "DNS only" (grey cloud):** GitHub issues its own free HTTPS certificate, and the proxied
(orange-cloud) mode can block that from provisioning. Start grey-cloud. Once GitHub shows HTTPS
working, you *may* switch the proxy on — but only with Cloudflare **SSL/TLS mode = Full** (never
"Flexible", which causes redirect loops). Honestly, grey-cloud is perfectly fine to leave as is.

**Then on GitHub** (`reach-prod → Settings → Pages`):
1. **Custom domain:** enter `reach-children-uganda.org.uk`, Save. (Your repo already has the matching
   `CNAME` file.)
2. Wait for the green "DNS check successful."
3. Tick **Enforce HTTPS** (may take a few minutes to become available while the cert issues).

That's the go-live. `www` and the apex will both resolve, with HTTPS.

---

## Part 5 — Forward `lydia@reach-children-uganda.org.uk` → `reachchildrenuganda@outlook.com`

Use **Cloudflare Email Routing** — it's **free** and perfect for forwarding a domain alias to an
existing inbox. (It handles *receiving*; see the note about *sending* at the end.)

1. Cloudflare → your domain → **Email** → **Email Routing** → **Get started / Enable**.
2. Cloudflare will offer to **add the required MX and TXT (SPF) records automatically** — accept.
   (These are separate from the website A/CNAME records above and don't conflict with them.)
3. **Destination addresses** → **Add** `reachchildrenuganda@outlook.com` → Cloudflare emails that
   inbox a verification link → click it to confirm.
4. **Routing rules** → **Create address**:
   - Custom address: `lydia@` (domain is filled in automatically)
   - Action: **Send to** → `reachchildrenuganda@outlook.com`
   - Save.
5. (Optional) Set a **catch-all** to forward anything `@reach-children-uganda.org.uk` to the same
   inbox, so you never miss mail to e.g. `info@` or `donate@`.

Mail to `lydia@reach-children-uganda.org.uk` now lands in the Outlook inbox.

**Want the site to show the professional address again?** Now that forwarding works, you can switch
the displayed contact email back to `lydia@reach-children-uganda.org.uk` (it'll forward to Outlook).
Say the word and I'll change it across the site and the contact form.

**Note on *sending* as `lydia@…`:** forwarding only handles *incoming* mail. To *send* replies that
appear to come from `lydia@reach-children-uganda.org.uk`, you'd add it as a "Send mail as" identity
in Outlook using an SMTP relay (Cloudflare Routing doesn't send). Options: a cheap mailbox
(e.g. Microsoft 365 / Zoho Mail with the domain), or an SMTP service. Happy to advise if you want
that.

---

## Quick launch checklist

- [ ] Apply for **Google Ad Grant** (Google for Nonprofits)
- [ ] Add Cloudflare **DNS records** (Part 4) + set GitHub **custom domain** + **Enforce HTTPS**
- [ ] Set up Cloudflare **Email Routing** for `lydia@` (Part 5)
- [ ] **Google Search Console** + **Bing** — submit `sitemap.xml`
- [ ] Add **analytics** (GA4 / Plausible / Cloudflare)
- [ ] Claim **Google Business Profile** + charity directory listings
- [ ] Configure the **Formspree** contact form endpoint (see main README)
- [ ] Keep the **News** page active — fresh content = better rankings
