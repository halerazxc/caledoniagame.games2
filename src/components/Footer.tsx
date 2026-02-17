import Link from 'next/link';

const gamblingLogos = [
  { name: 'GamCare', src: '/images/gambling-logos/gamcare-logo.png', url: 'https://www.gamcare.org.uk/' },
  { name: 'BeGambleAware', src: '/images/gambling-logos/gamble-aware-logo.webp', url: 'https://www.begambleaware.org/' },
  { name: 'Gordon Moody', src: '/images/gambling-logos/gordon-moody-logo.webp', url: 'https://www.gordonmoody.org.uk/' }
];

const footerNav = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'Guides', href: '/guides' },
    { label: 'Learn', href: '/learn' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  games: [
    { label: 'Free Slots', href: '/games?category=slots' },
    { label: 'Card Games', href: '/games?category=card-games' },
    { label: 'Bingo', href: '/games?category=bingo' },
    { label: 'Casual Games', href: '/games?category=casual' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Use', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
    { label: 'Responsible Gaming', href: '/legal/responsible' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-gold)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Caledonia Games"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="font-[var(--font-heading)] text-base font-bold text-[var(--gold)]">
                Caledonia Games
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              A free social entertainment platform offering casino-themed games for pure enjoyment. No real money gambling.
            </p>
          </div>

          <div>
            <h4 className="font-[var(--font-subheading)] text-base text-[var(--gold)] mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerNav.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-subheading)] text-base text-[var(--gold)] mb-4">Games</h4>
            <ul className="space-y-2">
              {footerNav.games.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-subheading)] text-base text-[var(--gold)] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider" />

        <div className="flex flex-wrap items-center justify-center gap-8 mb-8 bg-white rounded-lg p-4 border border-[var(--border-gold)] w-full max-w-3xl mx-auto">
          {gamblingLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.url}
              target={logo.url.startsWith('http') ? '_blank' : undefined}
              rel={logo.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center w-[100px] h-[100px] opacity-60 hover:opacity-100 transition-opacity"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={200}
                height={200}
                className="max-w-full max-h-full object-contain"
              />
            </a>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto">
            Play responsibly. These are free social games. No real money gambling is offered on this platform.
            If you feel you may have a problem with gambling, please seek help at{' '}
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">GamCare</a>,{' '}
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">GambleAware</a>{' '}
            or{' '}
            <a href="https://www.gamblersanonymous.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">Gamblers Anonymous</a>.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Caledonia Games. All rights reserved. This site is intended for adults aged 18 and over.
          </p>
        </div>
      </div>
    </footer>
  );
}
