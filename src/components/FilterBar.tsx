'use client';

import { cn } from '@/lib/utils';

interface FilterOption {
  label: string;
  value: string;
}

export default function FilterBar({
  options,
  active,
  onSelect,
}: {
  options: FilterOption[];
  active: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={cn(
            'rounded-lg px-4 py-2 text-sm font-medium transition-all',
            active === opt.value
              ? 'bg-[var(--gold)] text-[var(--bg-primary)]'
              : 'border border-[var(--border-gold)] text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)]'
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
