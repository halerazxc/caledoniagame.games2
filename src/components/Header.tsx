'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Games', href: '/games' },
  { label: 'Guides', href: '/guides' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-gold)] bg-[var(--bg-primary)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Caledonia Games"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-contain"
          />
          <span className="font-[var(--font-heading)] text-lg font-bold text-[var(--gold)] hidden sm:block">
            Caledonia Games
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'text-[var(--gold)] bg-[var(--gold)]/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--gold)] hover:bg-[var(--gold)]/5'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--gold)]/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={cn('block h-0.5 w-6 bg-[var(--gold)] transition-all duration-300', isMenuOpen && 'translate-y-2 rotate-45')} />
          <span className={cn('block h-0.5 w-6 bg-[var(--gold)] transition-all duration-300', isMenuOpen && 'opacity-0')} />
          <span className={cn('block h-0.5 w-6 bg-[var(--gold)] transition-all duration-300', isMenuOpen && '-translate-y-2 -rotate-45')} />
        </button>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 border-t border-[var(--border-gold)]',
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-[var(--bg-primary)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                  isActive
                    ? 'text-[var(--gold)] bg-[var(--gold)]/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--gold)] hover:bg-[var(--gold)]/5'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
