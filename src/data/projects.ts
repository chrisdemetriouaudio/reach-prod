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
          'All funds raised from our activities are used to support sustainable projects in Uganda — this has included buying equipment and funding training courses for the women.',
        ],
      },
    ],
  },
  {
    slug: 'visitors-to-uganda-2014',
    title: 'Visitors to Uganda – 2014',
    summary:
      'In 2014 Jamie Clarke visited Sr Theresa and the children at the Good Shepherd School. We welcome supporters who’d like to visit our projects — get in touch for contacts and travel advice.',
    sections: [
      {
        paragraphs: [
          'In summer 2014, Jamie Clarke — a neighbour of trustees Tom and Lydia — took a break from his university studies to visit Uganda. As well as volunteering with another organisation, Jamie visited Sr Theresa at the Good Shepherd Special School and spent some time with the children.',
          '“I am very thankful to R.E.A.CH for putting me in touch with Sr Theresa and the children at The Good Shepherd School. The children are incredible and I think about them every day. It was good to see first hand how the money being raised by R.E.A.CH helps these children — it really does make a huge difference. I cannot wait to go back!” — Jamie Clarke',
          'Should you have family or friends who would like to visit Uganda, please do contact us and we can provide you with some contacts and travel advice.',
        ],
      },
      {
        heading: 'What next?',
        paragraphs: [
          'In 2016 we hoped to build accommodation for a group of orphans in Western Uganda who were living in very small, cramped and uncomfortable housing. In partnership with Helping Uganda Schools (HUGs) we planned to build new living quarters to vastly improve their quality of life — work that grew into St Gabriel’s House.',
          'We also hoped to set up further school partnerships with schools in the North West, with the aim of ultimately having all seven Good Shepherd School classes each linked with and supported by a UK school. Please contact us if your school would be interested.',
        ],
      },
    ],
  },
  {
    slug: 'good-shepherd-special-needs-school',
    title: 'Good Shepherd Special Needs School',
    summary:
      'Supporting orphaned children cared for by Sr Theresa in Fort Portal, and funding school fees for a class of children at the Good Shepherd Special Needs School.',
    sections: [
      {
        paragraphs: [
          'The Good Shepherd Special Needs School in Fort Portal, Western Uganda was built by our partner charity Helping Uganda Schools (HUGs) in 2008, which continues to support its running. It is home to many of the vulnerable children R.E.A.CH supports, under the care of our trusted advisor Sr Theresa Abigaba — and is where St Gabriel’s House, the accommodation funded by R.E.A.CH and HUGs, provides a safe home for children in the Orphan Support Project.',
          'Currently, our funds are being spent on supporting a group of 14 vulnerable and orphaned children being cared for by Sr Theresa in Fort Portal, and on the school fees for a class of children (Primary 4) at the school.',
        ],
      },
    ],
  },
  {
    slug: 'the-joy-of-learning-project',
    title: 'The Joy of Play Project',
    summary:
      'A twice-weekly playgroup in a Kampala slum giving pre-school children a safe space to access toys and food — and just be children — funded by R.E.A.CH and run by our representative Ronald Kamoga.',
    gallery: [
      { src: '/images/joy-of-play.jpg', alt: 'A play leader and pre-school children with their arms raised at the Joy of Play playgroup in Kampala' },
    ],
    sections: [
      {
        paragraphs: [
          'Our Joy of Play project was initiated in 2023 and operates in one of Kampala’s slum areas. This playgroup project runs twice a week and provides a safe space for pre-school age children to access toys and food, allowing them to just be a child for a few hours each week. The children attending are some of the most vulnerable in Uganda’s society. They have no toys of their own and may spend much of their time fending for themselves in the slum. We are so happy to be able to fund this playgroup and bring joy to these children.',
          'This project is managed by our trusted representative, Ronald Kamoga. Ronald sends us regular reports, photos and videos. Follow us on <a href="https://www.facebook.com/BuryAfricanOutreach" target="_blank" rel="noopener">Facebook</a> to see the latest updates.',
        ],
      },
    ],
  },
  {
    slug: 'link-and-learn-2015',
    title: 'Link and Learn – 2015 School Partnership',
    summary:
      'In 2015 R.E.A.CH linked with Helping Uganda Schools and connected St Gabriel’s RC High in Bury with the Good Shepherd Special Needs School in Fort Portal.',
    sections: [
      {
        paragraphs: [
          'In 2015 R.E.A.CH linked with Helping Uganda Schools (HUGs), another UK-based charity supporting children’s education in Uganda. HUGs helped build the Good Shepherd Special Needs School in Fort Portal in 2008 and continues to support its running. Having visited the school ourselves in 2013, we were keen to get involved.',
          'That year we also established a link between St Gabriel’s RC High School in Bury — long-term supporters of R.E.A.CH — and the Good Shepherd Special Needs School. Sr Theresa visited St Gabriel’s in the spring of 2015 and took back almost 50 letters from Year 7–9 pupils for her own students. The children are sharing experiences of their lives in the UK and Uganda, and we hope this will be the beginning of a long-term learning partnership.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
