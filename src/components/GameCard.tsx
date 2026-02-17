'use client';

import Link from 'next/link';
import { Game } from '@/types';
import FavoriteButton from './FavoriteButton';

export default function GameCard({ game }: { game: Game }) {
  const categoryLabel = {
    'slots': 'Slots',
    'card-games': 'Card Games',
    'bingo': 'Bingo',
    'casual': 'Casual',
  }[game.category];

  return (
    <div className="card-retro group overflow-hidden flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={`/images/games/${game.slug}-thumb.webp`}
          alt={game.thumbnailAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-md bg-[var(--burgundy)]/90 px-2.5 py-1 text-xs font-medium text-[var(--text-primary)] backdrop-blur-sm">
            {categoryLabel}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <FavoriteButton slug={game.slug} />
        </div>
        {game.isTrending && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-block rounded-md bg-[var(--gold)]/90 px-2.5 py-1 text-xs font-bold text-[var(--bg-primary)]">
              Trending
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-[var(--gold)]">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" /></svg>
            <span>{game.rating}</span>
          </div>
        </div>
        <p className="text-xs text-[var(--text-muted)] mb-2">{game.provider}</p>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 flex-1">{game.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {game.features.slice(0, 3).map((f) => (
            <span key={f} className="rounded-md border border-[var(--border-gold)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
              {f}
            </span>
          ))}
        </div>

        <Link
          href={`/games/${game.slug}`}
          className="btn-gold mt-4 block text-center text-sm"
        >
          Play Free Demo
        </Link>
      </div>
    </div>
  );
}
