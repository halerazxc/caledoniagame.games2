export interface Game {
  slug: string;
  title: string;
  provider: string;
  category: 'slots' | 'card-games' | 'bingo' | 'casual';
  description: string;
  howToPlay: string[];
  tips: string[];
  features: string[];
  rating: number;
  popularity: number;
  thumbnailAlt: string;
  screenshots: { src: string; alt: string }[];
  demoType: 'iframe' | 'self-hosted';
  demoUrl: string;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  dateAdded: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: TeamMember;
  category: string;
  readTime: number;
  datePublished: string;
  dateUpdated: string;
  thumbnailAlt: string;
  tableOfContents: { id: string; title: string; level: number }[];
  faq: { question: string; answer: string }[];
  relatedGuideSlugs: string[];
  relatedGameSlugs: string[];
  tags: string[];
}

export interface LearnTopic {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  icon: string;
  dateUpdated: string;
  thumbnailAlt: string;
  relatedGuideSlugs: string[];
  relatedGameSlugs: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photoAlt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface GamblingLogo {
  name: string;
  src: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}
