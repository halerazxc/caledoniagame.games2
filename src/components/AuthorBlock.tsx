import { TeamMember } from '@/types';

export default function AuthorBlock({ author, datePublished, dateUpdated }: { author: TeamMember; datePublished: string; dateUpdated: string }) {
  return (
    <div className="card-retro p-5 flex items-start gap-4">
      <div className="flex-shrink-0">
        <img
          src={`/images/team/${author.name.toLowerCase().replace(/\s/g, '-')}.webp`}
          alt={author.photoAlt}
          className="h-14 w-14 rounded-full object-cover border-2 border-[var(--border-gold)]"
          loading="lazy"
        />
      </div>
      <div>
        <p className="font-[var(--font-subheading)] text-base text-[var(--text-primary)]">{author.name}</p>
        <p className="text-xs text-[var(--gold)] mb-1">{author.role}</p>
        <p className="text-xs text-[var(--text-muted)]">
          Published: {new Date(datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          {dateUpdated !== datePublished && (
            <> &middot; Updated: {new Date(dateUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</>
          )}
        </p>
      </div>
    </div>
  );
}
