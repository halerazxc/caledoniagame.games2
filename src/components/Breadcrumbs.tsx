import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-[var(--text-muted)]">/</span>
            )}
            {index === items.length - 1 ? (
              <span className="text-[var(--gold)]">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
