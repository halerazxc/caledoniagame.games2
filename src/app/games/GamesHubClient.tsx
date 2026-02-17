'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import GameCard from '@/components/GameCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import Pagination from '@/components/Pagination';
import Breadcrumbs from '@/components/Breadcrumbs';
import { games, searchGames } from '@/data/games';

const ITEMS_PER_PAGE = 12;

const categoryFilters = [
  { label: 'All Games', value: 'all' },
  { label: 'Slots', value: 'slots' },
  { label: 'Card Games', value: 'card-games' },
  { label: 'Bingo', value: 'bingo' },
  { label: 'Casual', value: 'casual' },
  { label: 'Favourites', value: 'favourites' },
];

const sortOptions = [
  { label: 'Most Popular', value: 'popularity' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'A–Z', value: 'alpha' },
];

export default function GamesHubClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('popularity');
  const [page, setPage] = useState(1);
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const readFavs = () => {
      const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavourites(favs);
    };
    readFavs();
    window.addEventListener('favorites-changed', readFavs);
    return () => window.removeEventListener('favorites-changed', readFavs);
  }, []);

  const filtered = useMemo(() => {
    let result = query ? searchGames(query) : [...games];

    if (category === 'favourites') {
      result = result.filter((g) => favourites.includes(g.slug));
    } else if (category !== 'all') {
      result = result.filter((g) => g.category === category);
    }

    switch (sort) {
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'alpha':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [query, category, sort, favourites]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setPage(1);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Games', href: '/games' }]} />

      <div className="mb-8">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-2">Game Library</h1>
        <p className="text-[var(--text-secondary)]">
          Browse our complete collection of {games.length} free social casino games. Every game is free to play with virtual currency — no real money involved.
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} placeholder="Search by name, provider, or category..." />
          </div>
          <div className="sm:w-48">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-lg border border-[var(--border-gold)] bg-[var(--bg-surface)] py-2.5 px-3 text-sm text-[var(--text-primary)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
        <FilterBar options={categoryFilters} active={category} onSelect={handleCategoryChange} />
      </div>

      {paginated.length === 0 ? (
        <div className="card-retro p-12 text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-2">No games found</p>
          <p className="text-sm text-[var(--text-muted)]">Try adjusting your search or filters</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-[var(--text-muted)] mb-4">{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
