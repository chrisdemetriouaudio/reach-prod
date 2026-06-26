export interface ProjectSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  featured?: boolean;
  image?: string;
  gallery?: { src: string; alt: string }[];
  sections: ProjectSection[];
  /** true when the original page content could not be recovered from the export */
  stub?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'orphan-support-project',
    title: 'Orphan Support Project',
    summary:
      "Supporting vulnerable children who live at St Gabriel's House on the grounds of Good Shepherd Special School in Fort Portal, under the care of Sr Theresa Abigaba.",
    featured: true,
    image: '/images/orphan-support-project.jpg',
    gallery: [
      { src: '/images/orphan-support-project.jpg', alt: 'Children supported by the Orphan Support Project' },
      { src: '/images/st-gabriels-house.jpg', alt: "St Gabriel's House" },
    ],
    sections: [
      {
        paragraphs: [
          'Through this project we support the education of a group of vulnerable children who are living under the care of our Trusted Advisor, Sr Theresa Abigaba. They live together in purpose-built accommodation on the grounds of Good Shepherd Special School in Fort Portal, Western Uganda. Many of these children have lost their parents to AIDS or Malaria, which continues to take thousands of lives every year in Uganda. Others have been abused and have moved there to seek refuge, whilst some have been abandoned due to their disabilities. All of their stories are truly heart-breaking.',
          "This project was initiated in 2015 when we became aware that Sr Theresa had 'taken in' a number of vulnerable children from surrounding villages in desperate need of a safe home. We saw pictures of their living accommodation at the school and were very keen to build something more fit for purpose. In 2016 our charity (in partnership with charity 'Helping Uganda Schools') built new living accommodation in order to improve their quality of life. The house is called St Gabriel's House in acknowledgement of the support provided by St Gabriel's RC High in Bury over the last two decades, and is a wonderful space providing a safe home for the children under the care of this project.",
          "Currently there are 15 children living at St Gabriel's House who are supported by this project. The primary school children attend The Good Shepherd School (where they live) and the secondary children are studying at a nearby High School. Once children complete their studies, they enter a 'Transition' of one to two years where we continue to send funds to support them and help them enter the world of work, after which we would expect them to move out of St Gabriel's House and become financially independent. As children transition out of the house, we have been able to move new children into the project.",
          "Our main objective is to provide a safe home for these children under Sr Theresa's care and give them the best chance to improve their lives through education.",
        ],
      },
    ],
  },
  {
    slug: 'family-support-initiative',
    title: 'Family Support Initiative',
    summary:
      'Empowering a small number of vulnerable families in Lira, Northern Uganda so they are able to feed and educate their children and work towards sustainability.',
    featured: true,
    image: '/images/family-support-initiative.jpg',
    gallery: [
      { src: '/images/family-support-initiative.jpg', alt: 'Family supported by the Family Support Initiative' },
    ],
    sections: [
      {
        paragraphs: [
          'This project began in 2017 with Sr Evangelista (trusted advisor) based in Lira, Northern Uganda.',
          'In Uganda life is hard, and families live in poverty; often the children do not receive an adequate diet and do not attend school. It is very difficult for a family to move out of poverty. This project was set up with the goal of providing an opportunity to break the cycle. It is important that we do not foster dependency, but work with people to empower them and work towards sustainability.',
          'We support a small number of vulnerable families so that they are able to feed and educate their children.',
        ],
      },
      {
        heading: 'The families we support',
        paragraphs: [
          "Kellen's Family — Kellen was identified by Sr Evangelista in 2017. She was a single mother with five children (abandoned by the father of her children) really struggling to make ends meet and feed and educate her family. We agreed to financially support her and have funded the education of three of her children through school for the last four years. We receive regular updates on their progress, and they are so delighted to have the opportunity to go to school. Last year we also sent emergency funds to help buy food during the COVID-19 pandemic.",
          "Joyce's House — Joyce and her five children were another family in need. Working with Helping Uganda Schools (HUGs) we built new living accommodation for Joyce and her family back in 2019. This has provided security for them all. The children's education is supported by HUGs donors, but we have also continued to provide additional humanitarian support through the pandemic.",
          'Rose and Peter — Rose and her son Peter live in Jinja in extreme poverty. Rose is physically disabled and struggles with daily life. We have provided funds to make emergency repairs to their home and make life more comfortable with furniture and bedding. Peter’s schooling is funded by HUGs. We have provided humanitarian support through the pandemic and hope to build Rose and Peter a new home in the near future.',
          'The main aim of this project is to empower and improve the lives of families in Uganda.',
        ],
      },
    ],
  },
  {
    slug: 'supporting-vulnerable-children-carolynes-story',
    title: "Supporting Vulnerable Children – Carolyne's Story",
    summary:
      "Carolyne's story is typical of the children looked after by R.E.A.CH — an orphan taken in by Sr Theresa who went on to achieve some of the highest exam scores in the country.",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Carolyne's story is typical of the children who are looked after by R.E.A.CH. Carolyne is an orphan and was found by Sr Theresa in a local village when she was three years old.",
          'Rather than place her in an orphanage, Sr Theresa took her in and provided love and shelter and nursed her back to health. By means of generous donations she was able to send her to school from nursery to Primary 7.',
          'In 2014 Carolyne achieved some of the highest scores in the country in her school exams (which was announced on Ugandan national radio and television!)',
          'R.E.A.CH has helped pay for Carolyne to go to school, where she has gone from strength to strength and is now regarded as one of the most gifted children in her school. With our help in supporting her ongoing education, we hope that she can achieve her goals.',
          'R.E.A.CH supports 14 children like Carolyne; we provide funds for care, uniforms and schooling.',
          'Children supported by this project have benefitted by accessing an education that will raise their status and value within their community, foster their long-term self-sufficiency and help to protect them from exploitation. They also benefit from vocational training, health education, a balanced diet and living in a safe and secure place.',
        ],
      },
    ],
  },
  {
    slug: 'kosovo-education-project',
    title: 'Kosovo Education Project',
    summary:
      'School-fee sponsorship for 30 children living in the Kosovo slum in Kampala, identified by our trusted advisor Ronald and run with two partner organisations.',
    sections: [
      {
        paragraphs: [
          'Working together with two other organisations (Helping Uganda Schools and Friends of CEFOVID), 30 children have been identified by Ronald (our trusted advisor in Kampala) for school-fee sponsorship through this project. These children live in the Kosovo slum in significant poverty and would otherwise have no opportunity to attend school. The first cohort of children commenced their studies in 2021, and we look forward to hearing about their progress.',
        ],
      },
    ],
  },
  {
    slug: 'womens-group',
    title: "Women's Group",
    summary:
      'Linking groups of women in the UK and Uganda to improve quality of life, develop new skills and empower women to support their families in the long term.',
    sections: [
      {
        paragraphs: [
          'We have started linking groups of women in the UK and Uganda with the aim of improving quality of life, developing and learning new skills, and empowering women so that they are better able to support their families in the long term.',
          'We have shared life stories and recipes, and in 2019 we created a charity single and song together. The Lira Women’s Group, formed with Sr Evangelista Mirembe, was linked with the WI (Rolling Scones) in Marple.',
        ],
      },
    ],
  },
  {
    slug: 'visitors-to-uganda-2014',
    title: 'Visitors to Uganda – 2014',
    summary:
      'We welcome supporters who would like to visit our projects in Uganda and meet our trusted advisors. Get in touch for contacts and travel advice.',
    sections: [
      {
        paragraphs: [
          'Members of R.E.A.CH have visited Uganda to see our projects first-hand, meet the children we support and work alongside our trusted advisors.',
          'Should you have family or friends who would like to visit Uganda, please do contact us and we can provide you with some contacts and travel advice.',
        ],
      },
    ],
  },
  {
    slug: 'good-shepherd-special-needs-school',
    title: 'Good Shepherd Special Needs School',
    summary:
      'A special school in Fort Portal, Western Uganda, led by our trusted advisor Sr Theresa Abigaba, where many of the children we support live and learn.',
    stub: true,
    sections: [
      {
        paragraphs: [
          'The Good Shepherd Special School in Fort Portal, Western Uganda is home to many of the vulnerable children R.E.A.CH supports, under the care of our trusted advisor Sr Theresa Abigaba. It is also where St Gabriel’s House — the purpose-built accommodation funded by R.E.A.CH and Helping Uganda Schools — provides a safe home for children in the Orphan Support Project.',
          'The detailed content for this page could not be recovered from the original website archive. If you have information or photographs you would like to add, please get in touch.',
        ],
      },
    ],
  },
  {
    slug: 'the-joy-of-learning-project',
    title: 'The Joy of Learning Project',
    summary: 'One of the education projects supported by R.E.A.CH in Uganda.',
    stub: true,
    sections: [
      {
        paragraphs: [
          'The Joy of Learning Project is one of the education initiatives supported by R.E.A.CH in Uganda.',
          'The detailed content for this page could not be recovered from the original website archive. If you have information or photographs you would like to add, please get in touch.',
        ],
      },
    ],
  },
  {
    slug: 'link-and-learn-2015',
    title: 'Link and Learn – 2015 School Partnership',
    summary: 'A 2015 school partnership linking pupils in the UK and Uganda.',
    stub: true,
    sections: [
      {
        paragraphs: [
          'Link and Learn was a 2015 school partnership connecting pupils in the UK and Uganda to share learning and build understanding between the two communities.',
          'The detailed content for this page could not be recovered from the original website archive. If you have information or photographs you would like to add, please get in touch.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
