import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import GuideCard from '@/components/GuideCard';
import Newsletter from '@/components/Newsletter';
import { guides } from '@/data/guides';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Guides & Strategy Articles',
  description: 'Expert guides covering social casino strategy, game mechanics, RNG, poker hands, bingo rules, responsible gaming, and more. Free educational content for all players.',
  path: '/guides',
});

export default function GuidesHubPage() {
  const categories = [...new Set(guides.map((g) => g.category))];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }]} />

      <div className="mb-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-2">Guides &amp; Articles</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          Our editorial team crafts in-depth articles covering everything from beginner basics to advanced strategy, game design insights, and responsible gaming advice.
        </p>
      </div>

      {categories.map((cat) => {
        const catGuides = guides.filter((g) => g.category === cat);
        return (
          <section key={cat} className="mb-12">
            <h2 className="font-[var(--font-heading)] text-xl text-[var(--gold)] mb-6 border-b border-[var(--border-gold)] pb-3">
              {cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-12 max-w-2xl mx-auto">
        <Newsletter />
      </div>
    </div>
  );
}
