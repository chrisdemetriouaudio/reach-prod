// /llms.txt — a plain-text fact sheet for AI assistants and answer engines
// (the llmstxt.org convention). Built from the same data as the site, so it
// can't drift out of date.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { projects } from '../data/projects';
import { ways } from '../data/ways';
import { faqs } from '../data/faq';
import { news } from '../data/news';

export const GET: APIRoute = ({ site: siteUrl }) => {
  const base = (siteUrl ?? new URL('https://reach-children-uganda.org.uk')).href.replace(/\/$/, '');
  const text = `# ${site.fullName}

> ${site.description}

## Key facts
- UK registered charity number: ${site.charityNumber}
- Founded: 1992 in Bury, Lancashire, as Bury African Outreach (still the name on its bank account); renamed R.E.A.CH in 2023
- Works in: Uganda — Fort Portal (Western Uganda), Lira (Northern Uganda) and Kampala
- Run by: unpaid volunteer trustees; no one takes a wage or claims expenses
- Raises: about £8,000–£10,000 a year; around 70% from monthly gifts, the rest from fundraising events
- What gifts pay for: £20 a month gives a secondary school child food, accommodation and education; £12.50 a month pays for a primary school child to attend school for a month; £2 a month provides a school uniform and clothing
- Gift Aid: UK taxpayers can add 25% at no extra cost
- Contact: ${site.email}
- Website: ${base}/

## Ways to give
${ways.map((w) => `- [${w.title}](${base}/donate/${w.slug}/): ${w.lead}`).join('\n')}
- [All ways to donate](${base}/donate/): PayPal (one-off or monthly), cheque payable to "Bury African Outreach", or card by arrangement
- [Fundraising events](${base}/fundraising/): events and how to hold your own

## Projects
${projects.map((p) => `- [${p.title}](${base}/projects/${p.slug}/): ${p.summary}`).join('\n')}

## Recent fundraising events
${news.map((n) => `- [${n.title}](${base}/news/${n.slug}/): ${n.eventDate}, ${n.venue}, ${n.location}`).join('\n')}

## Questions and answers
${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## More
- [About R.E.A.CH](${base}/about/)
- [Our history](${base}/about/the-history/)
- [Safeguarding](${base}/about/safeguarding/)
- [Trustees](${base}/trustees/)
- [Contact](${base}/contact-us/)
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
