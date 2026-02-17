'use client';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="card-retro p-5 mb-8">
      <h4 className="font-[var(--font-subheading)] text-base text-[var(--gold)] mb-3">Table of Contents</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
            <button
              onClick={() => handleClick(item.id)}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors text-left"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
