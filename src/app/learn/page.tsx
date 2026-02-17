import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { learnTopics } from '@/data/learn-topics';
import { createMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = createMetadata({
  title: 'Learn — Educational Content',
  description: 'Understand social casinos, RNG technology, the difference between social and real-money gaming, free-to-play business models, and the evolution of digital entertainment.',
  path: '/learn',
});

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Learn', href: '/learn' }]} />

      <div className="mb-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-2">Learn &amp; Discover</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          Educational content designed to deepen your understanding of social gaming, industry technology, and the broader digital entertainment landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {learnTopics.map((topic) => (
          <div key={topic.slug} className="card-retro p-6 group">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0 text-[var(--gold)]"><i className={topic.icon} /></div>
              <div className="flex-1">
                <h2 className="font-[var(--font-subheading)] text-xl text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mb-2">
                  {topic.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{topic.excerpt}</p>
                <p className="text-xs text-[var(--text-muted)] mb-4">Updated: {formatDate(topic.dateUpdated)}</p>
              </div>
            </div>

            <div className="relative aspect-[16/7] rounded-lg overflow-hidden mb-4">
              <img
                src={`/images/learn/${topic.slug}-thumb.webp`}
                alt={topic.thumbnailAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div
              className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-6"
              dangerouslySetInnerHTML={{
                __html: topic.content
                  .split('\n\n')
                  .slice(1, 3)
                  .join(' ')
                  .replace(/## .*/g, '')
                  .replace(/### .*/g, '')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .trim(),
              }}
            />

            <details className="mt-4 group/details">
              <summary className="cursor-pointer text-sm text-[var(--gold)] hover:underline">Read full article</summary>
              <div
                className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed space-y-3"
                dangerouslySetInnerHTML={{
                  __html: topic.content
                    .replace(/## (.*)/g, '<h3 class="font-[var(--font-subheading)] text-lg text-[var(--gold)] mt-6 mb-2">$1</h3>')
                    .replace(/### (.*)/g, '<h4 class="font-semibold text-[var(--text-primary)] mt-4 mb-1">$1</h4>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mb-3">')
                    .replace(/- \*\*(.*?)\*\*/g, '<br/><strong class="text-[var(--text-primary)]">$1</strong>'),
                }}
              />

              {topic.relatedGuideSlugs.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[var(--border-gold)]">
                  <p className="text-xs text-[var(--text-muted)] mb-2">Related guides:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.relatedGuideSlugs.map((s) => (
                      <Link key={s} href={`/guides/${s}`} className="text-xs text-[var(--gold)] hover:underline">
                        {s.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
