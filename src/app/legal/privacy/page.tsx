import Breadcrumbs from '@/components/Breadcrumbs';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Caledonia Games Privacy Policy. Learn how we collect, use, and protect your data when you use our free social casino platform.',
  path: '/legal/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Legal', href: '/legal' }, { label: 'Privacy Policy', href: '/legal/privacy' }]} />

      <article className="space-y-10">
        <header>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">Privacy Policy</h1>
          <p className="text-[var(--text-secondary)]">
            Last updated: February 2026
          </p>
        </header>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">1. Introduction</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Caledonia Games (&quot;Caledonia Games&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates caledoniagame.games, a free social entertainment platform offering casino-themed games using virtual currency only. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            By using our website, you consent to the practices described in this policy. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">2. Data We Collect</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We collect information that you provide directly and information that we obtain automatically when you use our platform.
          </p>
          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] mt-6 mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Contact form submissions:</strong> When you use our contact form, we collect your name, email address, subject, and message content.</li>
            <li><strong className="text-[var(--text-primary)]">Newsletter sign-ups:</strong> If you subscribe to our newsletter, we collect your email address.</li>
            <li><strong className="text-[var(--text-primary)]">Communications:</strong> Any correspondence you send to us, including emails to hello@caledoniagame.games or legal@caledoniagame.games.</li>
          </ul>
          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] mt-6 mb-2">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Usage data:</strong> Pages visited, time spent, click paths, referring URLs, and general interaction with our site.</li>
            <li><strong className="text-[var(--text-primary)]">Device and browser data:</strong> Browser type, operating system, screen resolution, and approximate location (country or region) derived from IP address.</li>
            <li><strong className="text-[var(--text-primary)]">Cookies and similar technologies:</strong> See our <Link href="/legal/cookies" className="text-[var(--gold)] hover:underline">Cookie Policy</Link> for details.</li>
          </ul>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">3. How We Use Your Data</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We use your data for the following purposes, based on our legitimate interests, your consent, or to perform a contract:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>To respond to your enquiries and provide customer support</li>
            <li>To send you our newsletter, if you have opted in</li>
            <li>To improve our website, games, and user experience through analytics</li>
            <li>To detect and prevent fraud, abuse, or security issues</li>
            <li>To comply with legal obligations and enforce our <Link href="/legal/terms" className="text-[var(--gold)] hover:underline">Terms of Use</Link></li>
            <li>To communicate important updates about our services or policies</li>
          </ul>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">4. Third-Party Services</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We use trusted third parties to operate our platform. These may process your data on our behalf:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Analytics:</strong> We may use analytics services to understand how visitors use our site. Data is typically aggregated and anonymised where possible.</li>
            <li><strong className="text-[var(--text-primary)]">Hosting:</strong> Our website is hosted by providers who store and transmit data securely. We select providers with strong data protection commitments.</li>
            <li><strong className="text-[var(--text-primary)]">Email delivery:</strong> Newsletter and contact form emails may be processed by email service providers.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            We require these processors to protect your data and use it only for the purposes we specify. We do not sell your personal data to third parties.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">5. Data Retention</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We retain your data only for as long as necessary to fulfil the purposes set out in this policy:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Contact form data:</strong> Typically retained for up to 24 months after your last enquiry, unless we need it longer for legal or support purposes.</li>
            <li><strong className="text-[var(--text-primary)]">Newsletter data:</strong> Retained until you unsubscribe. We may keep a record of your opt-out to honour your preference.</li>
            <li><strong className="text-[var(--text-primary)]">Analytics and logs:</strong> Usually retained for up to 26 months, after which data is aggregated or deleted.</li>
            <li><strong className="text-[var(--text-primary)]">Legal obligations:</strong> Some data may be retained longer where required by law.</li>
          </ul>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">6. Your Rights</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Under UK GDPR, you have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Right of access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li><strong className="text-[var(--text-primary)]">Right to rectification:</strong> You may ask us to correct inaccurate or incomplete data.</li>
            <li><strong className="text-[var(--text-primary)]">Right to erasure:</strong> You may request deletion of your personal data in certain circumstances.</li>
            <li><strong className="text-[var(--text-primary)]">Right to data portability:</strong> You may request your data in a structured, machine-readable format.</li>
            <li><strong className="text-[var(--text-primary)]">Right to object:</strong> You may object to processing based on legitimate interests.</li>
            <li><strong className="text-[var(--text-primary)]">Right to withdraw consent:</strong> Where we rely on consent, you may withdraw it at any time.</li>
            <li><strong className="text-[var(--text-primary)]">Right to complain:</strong> You may lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a>. We will respond within one month.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">7. Children&apos;s Privacy</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Caledonia Games is intended for adults aged 18 and over only. We do not knowingly collect personal data from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a> and we will delete it without delay.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">8. International Transfers</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Your data may be processed in the United Kingdom or in countries that the UK has deemed to provide adequate data protection. Where we transfer data to other countries, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the UK authorities.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">9. Security</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encryption in transit (HTTPS), secure hosting, and access controls. No method of transmission over the internet is 100% secure, but we strive to use industry best practices.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">10. Changes to This Policy</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We may update this Privacy Policy from time to time. We will post the revised version on this page and update the &quot;Last updated&quot; date. For material changes, we may notify you by email or a prominent notice on our site. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">11. Contact Us</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            For any questions about this Privacy Policy, to exercise your data rights, or to make a complaint, please contact:
          </p>
          <p className="text-[var(--text-primary)]">
            <strong>Caledonia Games</strong><br />
            Email: <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a>
          </p>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            For general enquiries: <a href="mailto:hello@caledoniagame.games" className="text-[var(--gold)] hover:underline">hello@caledoniagame.games</a>
          </p>
        </section>
      </article>
    </div>
  );
}
