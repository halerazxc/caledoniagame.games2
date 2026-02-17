import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import GameDemo from '@/components/GameDemo';
import GameCard from '@/components/GameCard';
import FAQ from '@/components/FAQ';
import { games, getGameBySlug, getRelatedGames } from '@/data/games';
import { createMetadata, gameJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { generateStarRating } from '@/lib/utils';

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return createMetadata({
    title: `${game.title} — Free Demo`,
    description: game.description,
    path: `/games/${game.slug}`,
    type: 'website',
  });
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game.relatedSlugs);
  const stars = generateStarRating(game.rating);

  const categoryLabel = {
    'slots': 'Slots',
    'card-games': 'Card Games',
    'bingo': 'Bingo',
    'casual': 'Casual',
  }[game.category];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(game)) }}
      />
      {game.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(game.faq)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', href: '/' },
              { name: 'Games', href: '/games' },
              { name: game.title, href: `/games/${game.slug}` },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Games', href: '/games' },
            { label: game.title, href: `/games/${game.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="rounded-md bg-[var(--burgundy)]/90 px-2.5 py-1 text-xs font-medium text-[var(--text-primary)]">
                  {categoryLabel}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{game.provider}</span>
              </div>
              <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-2">{game.title}</h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {stars.map((star, i) => (
                    <svg key={i} className={`h-5 w-5 ${star === 'full' ? 'text-[var(--gold)]' : star === 'half' ? 'text-[var(--gold)]/50' : 'text-[var(--text-muted)]/30'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[var(--text-secondary)]">{game.rating}/5</span>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed">{game.description}</p>
            </div>

            {/* Game Demo */}
            <GameDemo demoUrl={game.demoUrl} title={game.title} />

            {/* How to Play */}
            <section>
              <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">How to Play</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.howToPlay.map((step, i) => (
                  <div key={i} className="card-retro p-4 flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 border border-[var(--border-gold)]">
                      <span className="text-sm font-bold text-[var(--gold)]">{i + 1}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Tips &amp; Strategy</h2>
              <ul className="space-y-3">
                {game.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <svg className="h-5 w-5 flex-shrink-0 text-[var(--emerald)] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* Screenshots */}
            {game.screenshots.length > 0 && (
              <section>
                <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.screenshots.map((ss, i) => (
                    <div key={i} className="card-retro overflow-hidden">
                      <img src={ss.src} alt={ss.alt} className="w-full aspect-video object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {game.faq.length > 0 && <FAQ items={game.faq} />}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card-retro p-5">
              <h3 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-4">Game Details</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--text-muted)]">Provider</dt>
                  <dd className="text-[var(--text-primary)]">{game.provider}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--text-muted)]">Category</dt>
                  <dd className="text-[var(--text-primary)]">{categoryLabel}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--text-muted)]">Rating</dt>
                  <dd className="text-[var(--gold)]">{game.rating}/5</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--text-muted)]">Popularity</dt>
                  <dd className="text-[var(--text-primary)]">{game.popularity}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--text-muted)]">Added</dt>
                  <dd className="text-[var(--text-primary)]">{new Date(game.dateAdded).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</dd>
                </div>
              </dl>
            </div>

            <div className="card-retro p-5">
              <h3 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {game.features.map((f) => (
                  <span key={f} className="rounded-lg border border-[var(--border-gold)] px-3 py-1.5 text-xs text-[var(--text-secondary)]">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-retro p-5 text-center">
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                This is a free social game. No real money is wagered, won, or lost. Virtual currency only.
                <br />
                <a href="/legal/responsible" className="text-[var(--gold)] hover:underline">Play responsibly</a>
              </p>
            </div>
          </aside>
        </div>

        {/* Related Games */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">You Might Also Enjoy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
