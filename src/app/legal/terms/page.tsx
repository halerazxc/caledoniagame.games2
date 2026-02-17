import Breadcrumbs from '@/components/Breadcrumbs';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Terms of Use',
  description: 'Caledonia Games Terms of Use. Read our terms governing your use of our free social casino platform and virtual currency games.',
  path: '/legal/terms',
});

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Legal', href: '/legal' }, { label: 'Terms of Use', href: '/legal/terms' }]} />

      <article className="space-y-10">
        <header>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">Terms of Use</h1>
          <p className="text-[var(--text-secondary)]">
            Last updated: February 2026
          </p>
        </header>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">1. Agreement to Terms</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Welcome to Caledonia Games. By accessing or using caledoniagame.games (&quot;the Site&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, you must not use our services. We may update these terms from time to time; continued use after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">2. Eligibility</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            You must be at least 18 years of age to use Caledonia Games. By using the Site, you represent and warrant that you are 18 or older and have the legal capacity to enter into this agreement. We reserve the right to verify your age and to refuse or terminate access to anyone who does not meet these requirements.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Our services are not available in jurisdictions where access to casino-themed entertainment is prohibited by law. It is your responsibility to ensure that your use complies with the laws of your country or region.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">3. Nature of Our Service</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Caledonia Games provides free social entertainment in the form of casino-themed games. It is essential that you understand the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">No real money gambling:</strong> We do not offer real-money gambling. You cannot wager, win, or lose real money on our platform.</li>
            <li><strong className="text-[var(--text-primary)]">Virtual currency only:</strong> All games use virtual currency (e.g. coins, credits) that has no monetary value and cannot be exchanged for cash or prizes.</li>
            <li><strong className="text-[var(--text-primary)]">Entertainment purpose:</strong> Our games are for entertainment only. They simulate casino-style experiences without financial risk.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Virtual currency cannot be purchased with real money, transferred to other users, or redeemed for anything of value. It is provided free of charge for gameplay purposes only.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">4. User Conduct</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            You agree to use the Site lawfully and respectfully. You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Use the Site for any illegal purpose or in violation of any applicable laws</li>
            <li>Attempt to gain unauthorised access to our systems, other users&apos; accounts, or any data</li>
            <li>Use bots, scripts, or automated tools to interact with the Site without our permission</li>
            <li>Harass, abuse, defame, or harm other users or our staff</li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Copy, modify, or reverse-engineer any part of the Site or our games</li>
            <li>Use the Site in any way that could damage, disable, or overburden our infrastructure</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            We reserve the right to suspend or terminate your access if we believe you have breached these terms.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">5. Intellectual Property</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            All content on the Site, including but not limited to text, graphics, logos, images, game designs, software, and the overall look and feel, is owned by Caledonia Games or our licensors and is protected by copyright, trade mark, and other intellectual property laws.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any of our content without our prior written consent. You are granted a limited, non-exclusive, non-transferable licence to access and use the Site for personal, non-commercial entertainment purposes only.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you believe that content on our Site infringes your intellectual property rights, please contact us at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a> with details of the alleged infringement.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">6. Disclaimers</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The Site and all content, games, and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Merchantability, fitness for a particular purpose, and non-infringement</li>
            <li>Uninterrupted, error-free, or secure operation of the Site</li>
            <li>Accuracy or completeness of any content</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            We do not guarantee that the Site will be available at all times. We may modify, suspend, or discontinue any part of the service without notice.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">7. Limitation of Liability</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            To the maximum extent permitted by applicable law, Caledonia Games, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Loss of data, profits, or goodwill</li>
            <li>Service interruptions or technical failures</li>
            <li>Any reliance you place on content or information on the Site</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Our total liability for any claims arising from these terms or your use of the Site shall not exceed the amount you have paid to us in the twelve months preceding the claim (which, for our free service, will be zero) or £100, whichever is greater. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">8. Termination</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            We may suspend or terminate your access to the Site at any time, with or without cause or notice. You may stop using the Site at any time. Upon termination, your right to use the Site ceases immediately.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Provisions of these terms that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, and governing law) shall survive.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">9. Governing Law</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or relating to these terms or the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you are a consumer, you may also have rights under the laws of your country of residence that cannot be waived by these terms.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">10. General</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            If any provision of these terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision shall not constitute a waiver of that right or provision. These terms constitute the entire agreement between you and Caledonia Games regarding the Site.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            For questions about these Terms of Use, please contact us at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a>. You may also wish to review our <Link href="/legal/privacy" className="text-[var(--gold)] hover:underline">Privacy Policy</Link> and <Link href="/legal/responsible" className="text-[var(--gold)] hover:underline">Responsible Gaming</Link> page.
          </p>
        </section>
      </article>
    </div>
  );
}
