export interface NewsPost {
  slug: string;
  title: string;
  eventDate: string;
  posted: string;
  venue: string;
  location: string;
  blurb: string;
}

// Fundraising events from the R.E.A.CH calendar. The original post bodies could
// not be recovered from the website archive, so each entry is reconstructed from
// the event title, date and venue. Update the blurbs with full details as needed.
export const news: NewsPost[] = [
  {
    slug: 'elf-the-movie-29th-november-2025-regent-cinema-marple',
    title: 'Elf the Movie — Family Film Night',
    eventDate: '29 November 2025',
    posted: '15 October 2025',
    venue: 'Regent Cinema',
    location: 'Marple',
    blurb:
      'A festive family screening of the Christmas favourite Elf at the Regent Cinema in Marple, raising funds for the children R.E.A.CH supports in Uganda.',
  },
  {
    slug: 'spa-at-the-bar-1st-october-2025-norfolk-arms-marple-bridge',
    title: 'Spa at the Bar',
    eventDate: '1 October 2025',
    posted: '17 September 2025',
    venue: 'The Norfolk Arms',
    location: 'Marple Bridge',
    blurb:
      'A relaxing evening of pampering, facials and wellbeing at The Norfolk Arms in Marple Bridge, in aid of R.E.A.CH.',
  },
  {
    slug: 'tea-and-cake-3rd-august-2025-penns-in-the-rocks',
    title: 'Tea and Cake',
    eventDate: '3 August 2025',
    posted: '3 August 2025',
    venue: "Penns in the Rocks",
    location: 'Sussex',
    blurb:
      'An afternoon of tea, cake and good company at Penns in the Rocks, raising funds for vulnerable children in Uganda.',
  },
  {
    slug: 'clothes-swap-10th-april-2025-lentils-lather-marple',
    title: 'Clothes Swap',
    eventDate: '10 April 2025',
    posted: '9 March 2025',
    venue: 'Lentils & Lather',
    location: 'Marple',
    blurb:
      'A sustainable clothes swap at Lentils & Lather in Marple — refresh your wardrobe and support R.E.A.CH at the same time.',
  },
];
