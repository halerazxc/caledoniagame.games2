import Breadcrumbs from '@/components/Breadcrumbs';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Cookie Policy',
  description: 'Caledonia Games Cookie Policy. Learn about the cookies we use, why we use them, and how you can manage your preferences.',
  path: '/legal/cookies',
});

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Legal', href: '/legal' }, { label: 'Cookie Policy', href: '/legal/cookies' }]} />

      <article className="space-y-10">
        <header>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">Cookie Policy</h1>
          <p className="text-[var(--text-secondary)]">
            Last updated: February 2026
          </p>
        </header>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">1. What Are Cookies?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to the site owners. Cookies can be &quot;first-party&quot; (set by us) or &quot;third-party&quot; (set by other services we use).
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, though this may affect how our site functions for you.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">2. Types of Cookies We Use</h2>

          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] mt-6 mb-2">2.1 Strictly Necessary Cookies</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            These cookies are essential for the website to function. They enable core features such as security, network management, and accessibility. You cannot opt out of these cookies without affecting how the site works.
          </p>

          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] mt-6 mb-2">2.2 Analytics Cookies</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            These cookies help us understand how visitors interact with our site. They collect information such as which pages are visited most often, how long users spend on a page, and whether they encounter errors. This data is typically aggregated and anonymised to improve our service.
          </p>

          <h3 className="font-[var(--font-subheading)] text-lg text-[var(--text-primary)] mt-6 mb-2">2.3 Marketing Cookies</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            These cookies may be used to deliver relevant advertisements or to track the effectiveness of our marketing campaigns. They may be set by us or by third-party advertising partners. You can opt out of these cookies through our cookie consent banner or your browser settings.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">3. Specific Cookies We Use</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The table below lists the main cookies we use, their purpose, and how long they last:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[var(--border-gold)]">
              <thead>
                <tr className="bg-[var(--bg-surface)]">
                  <th className="border-b border-[var(--border-gold)] px-4 py-3 text-left font-[var(--font-subheading)] text-[var(--gold)]">Cookie Name</th>
                  <th className="border-b border-[var(--border-gold)] px-4 py-3 text-left font-[var(--font-subheading)] text-[var(--gold)]">Type</th>
                  <th className="border-b border-[var(--border-gold)] px-4 py-3 text-left font-[var(--font-subheading)] text-[var(--gold)]">Purpose</th>
                  <th className="border-b border-[var(--border-gold)] px-4 py-3 text-left font-[var(--font-subheading)] text-[var(--gold)]">Duration</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border-gold)]">
                  <td className="px-4 py-3">cookie_consent</td>
                  <td className="px-4 py-3">Necessary</td>
                  <td className="px-4 py-3">Stores your cookie consent preferences</td>
                  <td className="px-4 py-3">1 year</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]">
                  <td className="px-4 py-3">age_verified</td>
                  <td className="px-4 py-3">Necessary</td>
                  <td className="px-4 py-3">Remembers that you have verified your age (18+)</td>
                  <td className="px-4 py-3">Session</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]">
                  <td className="px-4 py-3">_ga</td>
                  <td className="px-4 py-3">Analytics</td>
                  <td className="px-4 py-3">Distinguishes unique users (Google Analytics)</td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
                <tr className="border-b border-[var(--border-gold)]">
                  <td className="px-4 py-3">_gid</td>
                  <td className="px-4 py-3">Analytics</td>
                  <td className="px-4 py-3">Distinguishes users (Google Analytics)</td>
                  <td className="px-4 py-3">24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">_gat</td>
                  <td className="px-4 py-3">Analytics</td>
                  <td className="px-4 py-3">Throttles request rate (Google Analytics)</td>
                  <td className="px-4 py-3">1 minute</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            This list may be updated as we add or change services. Check this page periodically for the latest information.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">4. How to Manage Cookies</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            You have several options for managing cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Cookie consent banner:</strong> When you first visit our site, you can accept or reject non-essential cookies through our cookie consent banner. You can change your preferences at any time by clearing your cookies and revisiting the site, or by using the cookie settings link in our footer if available.</li>
            <li><strong className="text-[var(--text-primary)]">Browser settings:</strong> Most browsers let you block or delete cookies. Instructions vary by browser: Chrome, Firefox, Safari, and Edge all have cookie controls in their settings or preferences menus.</li>
            <li><strong className="text-[var(--text-primary)]">Opt-out tools:</strong> For analytics cookies (e.g. Google Analytics), you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Please note that blocking or deleting cookies may affect your experience. Some features may not work correctly, and you may need to re-enter preferences or verify your age each time you visit.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">5. Third-Party Cookies</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Some cookies are set by third-party services that appear on our site. For example:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Analytics providers:</strong> Services such as Google Analytics may set cookies to help us understand site usage. These providers have their own privacy policies.</li>
            <li><strong className="text-[var(--text-primary)]">Embedded content:</strong> If we embed content from other sites (e.g. videos), those sites may set their own cookies.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            We do not control third-party cookies. We encourage you to review the privacy and cookie policies of these services if you have concerns.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">6. Updates to This Policy</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will post the revised version on this page and update the &quot;Last updated&quot; date. We recommend that you review this policy periodically. Your continued use of the site after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">7. More Information</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            For more details on how we handle your personal data, please see our <Link href="/legal/privacy" className="text-[var(--gold)] hover:underline">Privacy Policy</Link>. If you have questions about our use of cookies, please contact us at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
