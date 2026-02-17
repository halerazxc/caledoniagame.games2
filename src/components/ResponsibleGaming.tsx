import Link from 'next/link';

export default function ResponsibleGaming() {
  return (
    <section className="card-retro p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-[var(--gold)]/10">
          <span className="text-lg font-bold text-[var(--gold)]">18+</span>
        </div>
        <div>
          <h3 className="font-[var(--font-heading)] text-lg text-[var(--gold)] mb-2">Play Responsibly</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
            Caledonia Games is a social entertainment platform. All games use virtual currency only — no real money is wagered, won, or lost. We are committed to responsible gaming and encourage all players to enjoy our games as a form of leisure entertainment.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link href="/legal/responsible" className="btn-outline-gold text-xs">
              Responsible Gaming
            </Link>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors underline"
            >
              GamCare
            </a>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors underline"
            >
              GambleAware
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
