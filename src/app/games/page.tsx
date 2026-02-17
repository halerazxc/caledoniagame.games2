import { Suspense } from 'react';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import GamesHubClient from './GamesHubClient';

export const metadata: Metadata = createMetadata({
  title: 'Free Games — Social Casino Collection',
  description: 'Browse 25+ free social casino games including slots, blackjack, poker, bingo, and casual games. All games are free to play with virtual currency.',
  path: '/games',
});

export default function GamesHubPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-64 bg-[var(--bg-surface)] rounded-lg" />
          <div className="h-6 w-96 bg-[var(--bg-surface)] rounded-lg" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card-retro h-80" />
            ))}
          </div>
        </div>
      </div>
    }>
      <GamesHubClient />
    </Suspense>
  );
}
