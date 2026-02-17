import Breadcrumbs from '@/components/Breadcrumbs';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Responsible Gaming',
  description: 'Caledonia Games Responsible Gaming commitment. Learn about our approach to safe, balanced entertainment and find support resources.',
  path: '/legal/responsible',
});

export default function ResponsibleGamingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Legal', href: '/legal' }, { label: 'Responsible Gaming', href: '/legal/responsible' }]} />

      <article className="space-y-10">
        <header>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-4">Responsible Gaming</h1>
          <p className="text-[var(--text-secondary)]">
            Last updated: February 2026
          </p>
        </header>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Our Commitment</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            At Caledonia Games, we are committed to providing entertainment that is enjoyable, safe, and balanced. Although our platform offers free social games with virtual currency only — no real money gambling — we recognise that any form of gaming can become problematic for some people. We take responsible entertainment seriously and encourage healthy habits.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            This page outlines our approach, the support resources available, and practical steps you can take to stay in control.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">A Social Platform, Not Gambling</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            It is important to understand what Caledonia Games is and is not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">No real money:</strong> You cannot wager, win, or lose real money on our site. All games use virtual currency that has no cash value.</li>
            <li><strong className="text-[var(--text-primary)]">Entertainment only:</strong> Our games are designed for fun and relaxation. They simulate casino-style experiences without financial risk.</li>
            <li><strong className="text-[var(--text-primary)]">Free to play:</strong> Virtual currency is provided free of charge. It cannot be purchased, sold, or exchanged.</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Even without real money at stake, we believe it is important to promote healthy gaming habits and to support anyone who may be struggling with gaming or gambling-related issues.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Signs of Problematic Gaming</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Gaming can become problematic when it starts to affect other areas of life. Be aware of these signs in yourself or others:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Spending more time gaming than intended, or neglecting work, studies, or relationships</li>
            <li>Feeling restless or irritable when unable to play</li>
            <li>Using gaming to escape from problems or negative emotions</li>
            <li>Lying to family or friends about how much time is spent gaming</li>
            <li>Difficulty cutting down or stopping, despite wanting to</li>
            <li>Continuing to play even when it causes harm or distress</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            If you recognise these patterns, consider reaching out to one of the support organisations listed below. Help is available, and you do not have to face this alone.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Self-Management Tips</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Here are some practical steps to keep your gaming balanced and enjoyable:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Set time limits:</strong> Decide in advance how long you will play and stick to it. Use a timer or alarm if it helps.</li>
            <li><strong className="text-[var(--text-primary)]">Take regular breaks:</strong> Step away from the screen every 30–60 minutes. Stretch, hydrate, and rest your eyes.</li>
            <li><strong className="text-[var(--text-primary)]">Balance with other activities:</strong> Make sure gaming does not crowd out exercise, socialising, or other hobbies.</li>
            <li><strong className="text-[var(--text-primary)]">Avoid playing when stressed or tired:</strong> Gaming to escape difficult emotions can become a habit. Try other coping strategies first.</li>
            <li><strong className="text-[var(--text-primary)]">Be honest with yourself:</strong> If you feel your gaming is getting out of hand, acknowledge it and seek support early.</li>
          </ul>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Support Organisations</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            If you or someone you know is struggling with gambling or gaming-related issues, the following organisations offer free, confidential support:
          </p>
          <ul className="space-y-4 text-[var(--text-secondary)]">
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline font-[var(--font-subheading)]">GamCare</a>
              <span className="text-[var(--text-muted)] text-sm">gamcare.org.uk — Free support, advice, and counselling for anyone affected by problem gambling</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline font-[var(--font-subheading)]">GambleAware</a>
              <span className="text-[var(--text-muted)] text-sm">begambleaware.org — Information, advice, and treatment for gambling harm</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <a href="https://www.gamblersanonymous.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline font-[var(--font-subheading)]">Gamblers Anonymous</a>
              <span className="text-[var(--text-muted)] text-sm">gamblersanonymous.org.uk — Peer support groups for those with a gambling problem</span>
            </li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
            These organisations support people affected by both real-money gambling and excessive gaming. You do not need to have lost money to reach out — if you are worried about your behaviour, they can help.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Age Verification</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Caledonia Games is intended for adults aged 18 and over. We use an age verification gate when you first visit our site. By confirming that you are 18 or older, you agree that you meet our eligibility requirements.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We do not knowingly allow anyone under 18 to access our platform. If you believe a minor has accessed our site, please contact us at{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a> so we can take appropriate action.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Parent Guidance</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            If you are a parent or guardian, we encourage you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Talk to your children about responsible screen time and the difference between games and real-money gambling</li>
            <li>Use parental controls and device settings to limit access to age-restricted content</li>
            <li>Monitor the amount of time young people spend on games and ensure it does not interfere with sleep, school, or social life</li>
            <li>Be aware of the games and sites your children use, and discuss any concerns openly</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Our site is designed for adults. We recommend that under-18s do not use Caledonia Games. For more information on keeping young people safe online, visit resources such as the UK Safer Internet Centre or the NSPCC.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8">
          <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-4">Contact Us</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            If you have concerns about our platform, our approach to responsible gaming, or if you would like to report something that worries you, please get in touch:
          </p>
          <p className="text-[var(--text-primary)]">
            <strong>Email:</strong>{' '}
            <a href="mailto:legal@caledoniagame.games" className="text-[var(--gold)] hover:underline">legal@caledoniagame.games</a>
          </p>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            For general enquiries: <a href="mailto:hello@caledoniagame.games" className="text-[var(--gold)] hover:underline">hello@caledoniagame.games</a>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            We take all feedback seriously and will respond as soon as we can. If you need immediate support, please contact one of the support organisations listed above — they are available 24/7.
          </p>
        </section>

        <section className="card-retro p-6 sm:p-8 border-2 border-[var(--border-gold)]">
          <h2 className="font-[var(--font-heading)] text-xl text-[var(--gold)] mb-4">Need Help Now?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            If you or someone you know needs support with gambling or gaming issues, these organisations are here to help:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
              GamCare
            </a>
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-sm">
              GambleAware
            </a>
            <a href="https://www.gamblersanonymous.org.uk/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-sm">
              Gamblers Anonymous
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
