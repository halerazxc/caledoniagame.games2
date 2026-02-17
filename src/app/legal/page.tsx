import Breadcrumbs from '@/components/Breadcrumbs';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Legal',
  description: 'Legal information for Caledonia Games. Privacy Policy, Terms of Use, Cookie Policy, and Responsible Gaming.',
  path: '/legal',
});

export default function LegalIndexPage() {
  const legalPages = [
    { title: 'Privacy Policy', href: '/legal/privacy', description: 'How we collect, use, and protect your data.' },
    { title: 'Terms of Use', href: '/legal/terms', description: 'Terms governing your use of our platform.' },
    { title: 'Cookie Policy', href: '/legal/cookies', description: 'Information about the cookies we use.' },
    { title: 'Responsible Gaming', href: '/legal/responsible', description: 'Our commitment to safe, balanced entertainment.' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Legal', href: '/legal' }]} />

      <header className="mb-12">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">Legal</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          Important legal information and policies for Caledonia Games. Please read these documents to understand your rights and our commitments.
        </p>
      </header>

      <div className="grid gap-4">
        {legalPages.map((page) => (
          <Link key={page.href} href={page.href} className="card-retro p-6 block group">
            <h2 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors mb-2">
              {page.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
