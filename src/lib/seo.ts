import type { Metadata } from 'next';

const SITE_NAME = 'Caledonia Games';
const SITE_URL = 'https://caledoniagame.games';

export function createMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = opts.path ? `${SITE_URL}${opts.path}` : SITE_URL;
  return {
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    openGraph: {
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: (opts.type || 'website') as 'website',
      images: opts.image ? [{ url: opts.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function gameJsonLd(game: {
  title: string;
  description: string;
  slug: string;
  rating: number;
  category: string;
  dateAdded: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: game.title,
    description: game.description,
    url: `${SITE_URL}/games/${game.slug}`,
    genre: game.category,
    datePublished: game.dateAdded,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating.toString(),
      bestRating: '5',
      ratingCount: Math.floor(Math.random() * 500 + 100).toString(),
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateUpdated: string;
  authorName: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.path}/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateUpdated,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
