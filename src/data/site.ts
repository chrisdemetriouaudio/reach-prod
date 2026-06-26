export const site = {
  name: 'R.E.A.CH',
  // The "CH" in CHildren is deliberate branding, echoing R.E.A.CH.
  brandLine: "Reaching East Africa's CHildren",
  fullName: "R.E.A.CH (Reaching East Africa's CHildren)",
  tagline: "The charity that believes 'education is no weight to carry'.",
  description:
    "R.E.A.CH (Reaching East Africa's CHildren) helps to educate and care for vulnerable children in Uganda. We believe all children should have a childhood and that education is no weight to carry.",
  logo: '/images/cropped-thumbnail_Reach-Logo-Final-transparent-no-text.png',
  email: 'reachchildrenuganda@outlook.com',
  phone: '07779587566',
  whatsapp: 'https://wa.me/+447779587566',
  charityNumber: '1094502',
  address: {
    name: 'Lydia and Tom Turner',
    lines: ['70 Glossop Road', 'Marple Bridge', 'Stockport', 'Greater Manchester', 'SK6 5EL'],
  },
  facebook: 'https://www.facebook.com/BuryAfricanOutreach',

  // --- Contact form delivery + spam protection ---
  // 1) Create a free form at https://formspree.io, set its email to
  //    reachchildrenuganda@outlook.com, and paste the endpoint here
  //    (looks like https://formspree.io/f/abcdwxyz).
  // 2) Optional but recommended: create a Google reCAPTCHA v2 ("I'm not a robot")
  //    at https://www.google.com/recaptcha/admin and paste the SITE key here.
  //    Leave blank to rely on the honeypot + Formspree's own spam filtering.
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  recaptchaSiteKey: '',
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'The History', href: '/about/the-history' },
      { label: 'Our Trustees', href: '/trustees' },
      { label: 'Our Trusted Representatives', href: '/representatives' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Safeguarding', href: '/about/safeguarding' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Kosovo Education Project', href: '/projects/kosovo-education-project' },
      { label: 'The Joy of Learning Project', href: '/projects/the-joy-of-learning-project' },
      { label: "Women's Group", href: '/projects/womens-group' },
      { label: 'Family Support Initiative', href: '/projects/family-support-initiative' },
      { label: 'Orphan Support Project', href: '/projects/orphan-support-project' },
      { label: 'Good Shepherd Special Needs School', href: '/projects/good-shepherd-special-needs-school' },
      { label: "Supporting Vulnerable Children – Carolyne's Story", href: '/projects/supporting-vulnerable-children-carolynes-story' },
      { label: 'Link and Learn – 2015', href: '/projects/link-and-learn-2015' },
      { label: 'Visitors to Uganda – 2014', href: '/projects/visitors-to-uganda-2014' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact Us', href: '/contact-us' },
];
