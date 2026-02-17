'use client';

import { cn } from '@/lib/utils';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1
  );

  const items: (number | 'dots')[] = [];
  let lastPage = 0;
  for (const page of visiblePages) {
    if (page - lastPage > 1) items.push('dots');
    items.push(page);
    lastPage = page;
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-outline-gold text-xs px-3 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {items.map((item, i) =>
        item === 'dots' ? (
          <span key={`dots-${i}`} className="text-[var(--text-muted)] px-1">...</span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={cn(
              'h-9 w-9 rounded-lg text-sm font-medium transition-all',
              currentPage === item
                ? 'bg-[var(--gold)] text-[var(--bg-primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--gold)] hover:bg-[var(--gold)]/5 border border-[var(--border-gold)]'
            )}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn-outline-gold text-xs px-3 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  );
}
