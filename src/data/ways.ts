// Ways to give — each becomes its own page at /donate/<slug>/ (a small, data-driven set:
// every page answers a different question someone might search for).
// Only facts already on the site: costs from the Donate page, projects from projects.ts.

export interface WayToGive {
  slug: string;
  /** Page title and H1 — phrased the way people search. */
  title: string;
  /** Short name for cards and links. */
  short: string;
  amount?: string;
  period?: string;
  /** Meta description (under ~155 characters). */
  description: string;
  lead: string;
  /** What the gift pays for, in plain words. */
  provides: string[];
  /** Why it matters — from the charity's own words. */
  why: string[];
  relatedProjects: string[];
}

export const ways: WayToGive[] = [
  {
    slug: 'sponsor-a-secondary-school-child',
    title: 'Sponsor a secondary school child in Uganda',
    short: 'Sponsor a secondary school child',
    amount: '£20',
    period: 'per month',
    description:
      '£20 a month gives a secondary school child in Uganda food, accommodation and education. Sponsor through R.E.A.CH, a volunteer-run UK charity.',
    lead: '£20 a month provides a secondary school child in Uganda with food, accommodation and education.',
    provides: ['Secondary school education', 'Food', 'Accommodation'],
    why: [
      "School costs rise as children get older. A monthly gift of £20 covers a secondary school child's food, accommodation and education.",
      'R.E.A.CH is run by unpaid volunteer trustees — no one takes a wage or claims expenses — so your gift goes to the education and care of the children we support.',
    ],
    relatedProjects: ['orphan-support-project', 'kosovo-education-project', 'good-shepherd-special-needs-school'],
  },
  {
    slug: 'sponsor-a-primary-school-child',
    title: 'Sponsor a primary school child in Uganda',
    short: 'Sponsor a primary school child',
    amount: '£12.50',
    period: 'per month',
    description:
      '£12.50 a month pays for a primary school child in Uganda to attend school. Give monthly through R.E.A.CH, a UK charity run by volunteers since 1992.',
    lead: '£12.50 a month helps a primary school child in Uganda with their education and care.',
    provides: ['A month of primary school', 'Educational needs', 'Care'],
    why: [
      'As an example, £12.50 will pay for a primary school child to attend school for a month. A good education is the surest way out of poverty.',
      'About 70% of what R.E.A.CH raises comes from monthly gifts like this.',
    ],
    relatedProjects: ['kosovo-education-project', 'orphan-support-project', 'the-joy-of-learning-project'],
  },
  {
    slug: 'school-uniform',
    title: 'Give a school uniform to a child in Uganda',
    short: 'Give a school uniform',
    amount: '£2',
    period: 'per month',
    description:
      '£2 a month provides a school uniform and clothing for a child in Uganda. A small, regular gift through R.E.A.CH, a volunteer-run UK charity.',
    lead: '£2 a month provides a school uniform and clothing for a child in Uganda.',
    provides: ['A school uniform', 'Clothing'],
    why: [
      '£2 a month provides a school uniform and clothing — one of the simplest ways to help a child at school.',
      'Regular gifts, however small, add up: most of what R.E.A.CH raises comes from monthly donations.',
    ],
    relatedProjects: ['family-support-initiative', 'orphan-support-project', 'kosovo-education-project'],
  },
  {
    slug: 'gift-aid',
    title: 'Gift Aid your donation to R.E.A.CH',
    short: 'Add Gift Aid',
    description:
      'UK taxpayers can add 25% to their donation to R.E.A.CH at no extra cost with Gift Aid: £100 becomes £125 for children in Uganda.',
    lead: 'If you pay UK tax, Gift Aid adds 25% to your donation at no extra cost to you.',
    provides: ['+25% on every donation', 'No cost to you', 'One form, then it applies to your gifts'],
    why: [
      'By confirming that you are a UK taxpayer, the government will increase your donation by a further 25%. If you donated £100, the charity would receive a further £25.',
      'Donations made under UK Gift Aid have enabled R.E.A.CH to substantially increase its support to the children at no extra cost to our sponsors. Email us for a copy of the Gift Aid form.',
    ],
    relatedProjects: ['orphan-support-project', 'family-support-initiative', 'kosovo-education-project'],
  },
];

export const getWay = (slug: string) => ways.find((w) => w.slug === slug);
