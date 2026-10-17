// Questions people (and search/AI answer engines) ask about R.E.A.CH.
// Every answer uses only facts already published elsewhere on this site — keep it that way.
// `topics` lets other pages (e.g. the ways-to-give pages) pick the relevant questions.

export interface Faq {
  q: string;
  a: string;
  topics: ('cost' | 'giving' | 'charity' | 'work' | 'visit')[];
}

export const faqs: Faq[] = [
  {
    q: 'How much does it cost to send a child to school?',
    a: "Costs vary depending on the child's age — the older they get, the more expensive it becomes. As an example, £12.50 will pay for a primary school child to attend school for a month, and £20 a month provides a secondary school child with food, accommodation and education.",
    topics: ['cost', 'giving'],
  },
  {
    q: 'How can I donate to R.E.A.CH?',
    a: 'You can give online through PayPal (a one-off gift or a regular donation, by card or PayPal balance), by cheque made payable to "Bury African Outreach" and posted to our registered address, or by debit or credit card — contact us to set that up.',
    topics: ['giving'],
  },
  {
    q: 'Can I add Gift Aid to my donation?',
    a: 'Yes. If you are a UK taxpayer, Gift Aid lets the charity claim an extra 25% from the government at no cost to you — a £100 donation becomes £125. Email us for a copy of our Gift Aid form.',
    topics: ['giving'],
  },
  {
    q: 'Does the charity pay wages?',
    a: 'No. No one involved with the charity takes a wage or claims expenses. R.E.A.CH is run entirely by unpaid volunteer trustees.',
    topics: ['charity', 'giving'],
  },
  {
    q: 'Is R.E.A.CH a registered charity?',
    a: 'Yes. R.E.A.CH (Reaching East Africa\'s CHildren) is a UK registered charity, number 1094502. It was founded in Bury, Lancashire in 1992 as Bury African Outreach, which is still the name on its bank account.',
    topics: ['charity'],
  },
  {
    q: 'Where in Uganda does R.E.A.CH work?',
    a: "R.E.A.CH supports children and families in Uganda through trusted advisors on the ground: at St Gabriel's House and Good Shepherd Special School in Fort Portal (Western Uganda), with families in Lira (Northern Uganda), and with children in the Kosovo area of Kampala.",
    topics: ['work'],
  },
  {
    q: 'How much does R.E.A.CH raise on average?',
    a: 'We aim to raise between £8,000 and £10,000 each year.',
    topics: ['charity'],
  },
  {
    q: 'Where does all the money come from?',
    a: 'Approximately 70% comes via monthly direct debits and the rest comes from fundraising events.',
    topics: ['charity', 'giving'],
  },
  {
    q: "Why 'Reaching East Africa's Children'?",
    a: "The charity was originally started in Bury, Lancashire and began life as 'Bury African Outreach' back in 1992. Many of our regular donors still live in the area. However, the current trustees no longer live in Bury, so in 2023 the name was changed to R.E.A.CH as we felt this would allow us to run the charity more effectively. We now have donors across the UK and beyond.",
    topics: ['charity'],
  },
  {
    q: 'Is Uganda safe?',
    a: 'Yes. The country is rebuilding itself after years of civil unrest and is now beginning to thrive as a popular tourist destination. Many tourists visit Uganda to see the endangered mountain gorillas.',
    topics: ['visit'],
  },
  {
    q: 'Can I go?',
    a: 'Yes — please do. You are welcome to visit our projects and meet the trusted advisors. Please contact us for travel tips.',
    topics: ['visit'],
  },
];

export const faqsAbout = (topic: Faq['topics'][number]) => faqs.filter((f) => f.topics.includes(topic));

export const faqSchema = (list: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: list.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
