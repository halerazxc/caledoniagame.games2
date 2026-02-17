import Link from 'next/link';
import { Guide } from '@/types';
import { formatDate } from '@/lib/utils';

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="card-retro group overflow-hidden flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={`/images/guides/${guide.slug}-thumb.webp`}
          alt={guide.thumbnailAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-md bg-[var(--gold)]/90 px-2.5 py-1 text-xs font-bold text-[var(--bg-primary)]">
            {guide.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mb-2">
          {guide.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 flex-1">{guide.excerpt}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>{guide.readTime} min read</span>
          <span>{formatDate(guide.datePublished)}</span>
        </div>
      </div>
    </Link>
  );
}
