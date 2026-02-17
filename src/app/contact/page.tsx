'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Newsletter from '@/components/Newsletter';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMsg(data.message || 'Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please try again.');
    }
  };

  const inputClasses = 'w-full rounded-lg border border-[var(--border-gold)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] transition-colors';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />

      <div className="mb-10">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--gold)] mb-2">Get in Touch</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl">
          Whether you have a question, feedback, partnership proposal, or simply want to say hello — we would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          {status === 'success' ? (
            <div className="card-retro p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--emerald)]/10 border border-[var(--emerald)]">
                <svg className="h-8 w-8 text-[var(--emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[var(--font-subheading)] text-xl text-[var(--gold)] mb-2">Message Sent</h3>
              <p className="text-sm text-[var(--text-secondary)]">{msg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-retro p-6 space-y-4">
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What is this about?"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us more..."
                  className={inputClasses}
                />
              </div>
              {status === 'error' && <p className="text-xs text-[var(--burgundy-light)]">{msg}</p>}
              <button type="submit" className="btn-gold w-full text-sm" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="card-retro p-6">
            <h3 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-4">Other Ways to Reach Us</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[var(--text-muted)] mb-1">Email</dt>
                <dd className="text-[var(--text-primary)]">
                  <a href="mailto:hello@caledoniagame.games" className="hover:text-[var(--gold)] transition-colors">hello@caledoniagame.games</a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] mb-1">Response Time</dt>
                <dd className="text-[var(--text-primary)]">We typically respond within 24–48 hours</dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] mb-1">For Legal Enquiries</dt>
                <dd className="text-[var(--text-primary)]">
                  <a href="mailto:legal@caledoniagame.games" className="hover:text-[var(--gold)] transition-colors">legal@caledoniagame.games</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="card-retro p-6">
            <h3 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-3">Before You Write</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Check our <a href="/guides" className="text-[var(--gold)] hover:underline">Guides</a> section for answers to common gaming questions, or review our <a href="/legal/privacy" className="text-[var(--gold)] hover:underline">Privacy Policy</a> and <a href="/legal/terms" className="text-[var(--gold)] hover:underline">Terms of Use</a> for legal enquiries.
            </p>
          </div>

          <Newsletter />
        </div>
      </div>
    </div>
  );
}
