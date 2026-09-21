export type PortfolioPhoto = {
  src: string;
  alt: string;
};

export type PhotographyCollection = {
  slug: string;
  title: string;
  place: string;
  year: string;
  description: string;
  photos: PortfolioPhoto[];
};

const numberedPhotos = (folder: string, count: number, alt: string): PortfolioPhoto[] =>
  Array.from({ length: count }, (_, index) => ({
    src: `/photography/${folder}/frame-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `${alt}, frame ${String(index + 1).padStart(2, '0')}`,
  }));

export const photographyCollections: PhotographyCollection[] = [
  {
    slug: 'japan-2026',
    title: 'Tokyo Hours',
    place: 'Japan',
    year: '2026',
    description: 'Trains, crossings, windows, and the quiet rhythm of moving through the city.',
    photos: numberedPhotos('japan-2026', 10, 'A photograph made in Japan'),
  },
  {
    slug: 'san-francisco',
    title: 'Westward Light',
    place: 'San Francisco',
    year: '2025–2026',
    description: 'Through windows, over hills, and toward the Pacific.',
    photos: numberedPhotos('san-francisco', 23, 'A photograph made in San Francisco'),
  },
];

export const photographyWebsite: string = '';
export const instagramUrl = 'https://www.instagram.com/here_againphotography/';
