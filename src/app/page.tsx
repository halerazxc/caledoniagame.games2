import Link from 'next/link';
import GameCard from '@/components/GameCard';
import GuideCard from '@/components/GuideCard';
import Newsletter from '@/components/Newsletter';
import ResponsibleGaming from '@/components/ResponsibleGaming';
import { getFeaturedGames, getTrendingGames } from '@/data/games';
import { guides } from '@/data/guides';

export default function HomePage() {
  const featured = getFeaturedGames();
  const trending = getTrendingGames();
  const recentGuides = guides.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)] via-[var(--bg-primary)] to-[var(--bg-primary)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,215,0,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139,0,0,0.1) 0%, transparent 50%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl gold-shimmer mb-6">
            Free Social Casino Games
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Experience the thrill of casino-style entertainment without risking a penny. Play slots, blackjack, poker, bingo, and casual games — all completely free, all purely for fun.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/games" className="btn-gold text-base">
              Explore Games
            </Link>
            <Link href="/guides" className="btn-outline-gold text-base">
              Read Our Guides
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--emerald)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--emerald)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              No Real Money
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--emerald)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Adults 18+
            </span>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-[var(--gold)]">Featured Games</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Hand-picked favourites from our editorial team</p>
            </div>
            <Link href="/games" className="text-sm text-[var(--gold)] hover:underline hidden sm:block">
              View all games &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* Trending Games */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-[var(--gold)]">Trending Now</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">The most popular games this week</p>
            </div>
            <Link href="/games" className="text-sm text-[var(--gold)] hover:underline hidden sm:block">
              View all games &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.slice(0, 6).map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* Beginner Guides Teaser */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-[var(--gold)]">Get Started</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Expert guides to elevate your gaming knowledge</p>
            </div>
            <Link href="/guides" className="text-sm text-[var(--gold)] hover:underline hidden sm:block">
              View all guides &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* About Snippet */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-[var(--gold)] mb-4">About Caledonia Games</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                We built Caledonia Games on a simple belief: casino-themed entertainment should be accessible to everyone without financial risk. Our platform offers a curated collection of free social games — from classic slots and card games to bingo and casual experiences.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Every game on our platform uses virtual currency only. There is no real-money gambling of any kind. Our editorial team researches, tests, and writes about the games and mechanics we feature, helping you get the most from your leisure time.
              </p>
              <Link href="/about" className="btn-outline-gold text-sm">
                Learn More About Us
              </Link>
            </div>
            <div className="card-retro p-8 text-center">
              <img
                src="/images/about-hero.webp"
                alt="Caledonia Games team working in a modern office with multiple screens displaying colourful game interfaces and analytics dashboards"
                className="w-full rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-xs text-[var(--text-muted)]">Our editorial team at work</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* Quick Links */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-[var(--gold)] mb-8 text-center">Explore Our Platform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Free Games', desc: '25+ social casino games across slots, cards, bingo & casual', href: '/games', icon: 'fa-solid fa-gamepad' },
              { title: 'Expert Guides', desc: 'In-depth articles on strategy, mechanics, and gaming culture', href: '/guides', icon: 'fa-solid fa-book-open' },
              { title: 'Learn', desc: 'Educational content about social gaming, RNG, and industry topics', href: '/learn', icon: 'fa-solid fa-graduation-cap' },
              { title: 'Contact Us', desc: 'Get in touch with our team for questions, feedback, or partnerships', href: '/contact', icon: 'fa-solid fa-envelope' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-retro p-6 text-center group">
                <div className="text-3xl mb-3 text-[var(--gold)]"><i className={item.icon} /></div>
                <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* Responsible Gaming Block */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResponsibleGaming />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
