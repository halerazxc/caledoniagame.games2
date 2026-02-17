'use client';

import { useState, useEffect } from 'react';

export default function FavoriteButton({ slug }: { slug: string }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFav(favs.includes(slug));
  }, [slug]);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updated: string[];
    if (favs.includes(slug)) {
      updated = favs.filter((f) => f !== slug);
    } else {
      updated = [...favs, slug];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFav(!isFav);
    window.dispatchEvent(new CustomEvent('favorites-changed'));
  };

  return (
    <button
      onClick={toggle}
      aria-label={isFav ? 'Remove from favourites' : 'Add to favourites'}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-gold)] transition-all hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
    >
      <svg
        className={`h-4 w-4 transition-colors ${isFav ? 'fill-[var(--burgundy)] text-[var(--burgundy)]' : 'fill-none text-[var(--text-muted)]'}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  );
}
