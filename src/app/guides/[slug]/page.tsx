import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import AuthorBlock from '@/components/AuthorBlock';
import FAQ from '@/components/FAQ';
import GuideCard from '@/components/GuideCard';
import GameCard from '@/components/GameCard';
import { guides, getGuideBySlug, getRelatedGuides } from '@/data/guides';
import { getRelatedGames } from '@/data/games';
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    type: 'article',
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide.relatedGuideSlugs);
  const relatedGames = getRelatedGames(guide.relatedGameSlugs);

  const contentHtml = guide.content
    .replace(/## (.*)/g, (_, title) => {
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h2 id="${id}" class="font-[var(--font-heading)] text-2xl text-[var(--gold)] mt-10 mb-4 scroll-mt-24">${title}</h2>`;
    })
    .replace(/### (.*)/g, (_, title) => {
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h3 id="${id}" class="font-[var(--font-subheading)] text-xl text-[var(--text-primary)] mt-8 mb-3 scroll-mt-24">${title}</h3>`;
    })
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="text-[var(--text-secondary)] leading-relaxed mb-4">')
    .replace(/^/, '<p class="text-[var(--text-secondary)] leading-relaxed mb-4">')
    .replace(/$/, '</p>');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: guide.title,
              description: guide.excerpt,
              slug: guide.slug,
              datePublished: guide.datePublished,
              dateUpdated: guide.dateUpdated,
              authorName: guide.author.name,
              path: '/guides',
            })
          ),
        }}
      />
      {guide.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(guide.faq)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', href: '/' },
              { name: 'Guides', href: '/guides' },
              { name: guide.title, href: `/guides/${guide.slug}` },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: guide.title, href: `/guides/${guide.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1 space-y-6">
            <TableOfContents items={guide.tableOfContents} />
            <AuthorBlock author={guide.author} datePublished={guide.datePublished} dateUpdated={guide.dateUpdated} />

            <div className="card-retro p-5">
              <h4 className="font-[var(--font-subheading)] text-base text-[var(--gold)] mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-[var(--border-gold)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 order-1 lg:order-2">
            <header className="mb-8">
              <span className="inline-block rounded-md bg-[var(--gold)]/90 px-2.5 py-1 text-xs font-bold text-[var(--bg-primary)] mb-3">
                {guide.category}
              </span>
              <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-3">{guide.title}</h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{guide.excerpt}</p>
              <div className="flex items-center gap-4 mt-4 text-xs text-[var(--text-muted)]">
                <span>{guide.readTime} min read</span>
                <span>By {guide.author.name}</span>
              </div>
            </header>

            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-8 card-retro">
              <img
                src={`/images/guides/${guide.slug}-hero.webp`}
                alt={guide.thumbnailAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {guide.faq.length > 0 && <FAQ items={guide.faq} />}
          </article>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="mt-16">
            <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGuides.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <section className="mt-12">
            <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">Try These Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedGames.slice(0, 4).map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
