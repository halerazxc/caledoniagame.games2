import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ResponsibleGaming from '@/components/ResponsibleGaming';
import { team } from '@/data/team';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Us',
  description: 'Caledonia Games is a free social casino entertainment platform. Learn about our mission, editorial team, and commitment to responsible gaming.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />

      <div className="max-w-3xl mb-12">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">About Caledonia Games</h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          We believe casino-style entertainment should be accessible, enjoyable, and entirely risk-free.
        </p>
      </div>

      {/* Hero Image */}
      <div className="card-retro overflow-hidden mb-12">
        <img
          src="/images/about-hero-wide.webp"
          alt="Panoramic view of the Caledonia Games editorial office with team members collaborating around large screens showing game interfaces and analytics"
          className="w-full aspect-[21/9] object-cover"
        />
      </div>

      {/* Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Our Mission</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Caledonia Games was founded on a simple premise: the entertainment value of casino-themed games should be available to everyone, without the financial risks associated with real-money gambling.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Our platform hosts a curated collection of free social games — from classic slots and card games to bingo and casual experiences. Every game uses virtual currency only. There is no mechanism to wager, win, or lose real money.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Beyond the games themselves, we produce educational content, strategic guides, and industry analysis to help our community understand and appreciate the craft behind digital gaming entertainment.
          </p>
        </div>
        <div className="card-retro p-6">
          <img
            src="/images/about-mission.webp"
            alt="Artistic illustration of the Caledonia Games mission concept showing a shield with gaming icons surrounded by trust symbols and community figures"
            className="w-full rounded-lg mb-4"
            loading="lazy"
          />
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--gold)]">25+</p>
              <p className="text-xs text-[var(--text-muted)]">Free Games</p>
            </div>
            <div className="p-3">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--gold)]">15</p>
              <p className="text-xs text-[var(--text-muted)]">Expert Guides</p>
            </div>
            <div className="p-3">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--gold)]">0</p>
              <p className="text-xs text-[var(--text-muted)]">Real Money Risk</p>
            </div>
            <div className="p-3">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--gold)]">100%</p>
              <p className="text-xs text-[var(--text-muted)]">Entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-12">
        <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">Our Philosophy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Entertainment First',
              desc: 'Every decision we make prioritises genuine entertainment value. Our games are designed to be enjoyable, not exploitative. Engagement should come from quality, not manipulation.',
              imgAlt: 'Illustration of a happy player enjoying games on a tablet with sparkles and entertainment icons surrounding them',
            },
            {
              title: 'Transparency Always',
              desc: 'We clearly communicate that our platform is a social entertainment service with no real-money gambling. Our legal pages are real, readable, and honest — not legal jargon designed to confuse.',
              imgAlt: 'Illustration of a magnifying glass over clear transparent text documents with checkmarks indicating verified content',
            },
            {
              title: 'Player Safety',
              desc: 'We implement age verification, responsible gaming resources, and clear disclaimers not because regulation demands it, but because it is the right thing to do for our community.',
              imgAlt: 'Illustration of a protective shield around a group of diverse players with safety and responsible gaming icons',
            },
          ].map((item) => (
            <div key={item.title} className="card-retro p-6">
              <img
                src={`/images/about-${item.title.toLowerCase().replace(/\s/g, '-')}.webp`}
                alt={item.imgAlt}
                className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card-retro p-6 text-center">
              <img
                src={`/images/team/${member.name.toLowerCase().replace(/\s/g, '-')}.webp`}
                alt={member.photoAlt}
                className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-[var(--border-gold)] mb-4"
                loading="lazy"
              />
              <h3 className="font-[var(--font-subheading)] text-base text-[var(--text-primary)]">{member.name}</h3>
              <p className="text-xs text-[var(--gold)] mb-2">{member.role}</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <ResponsibleGaming />
    </div>
  );
}
