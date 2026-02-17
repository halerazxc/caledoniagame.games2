'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="card-retro p-6 text-center">
      <h3 className="font-[var(--font-heading)] text-xl text-[var(--gold)] mb-2">Stay in the Loop</h3>
      <p className="text-sm text-[var(--text-secondary)] mb-4">
        Get weekly game recommendations, strategy tips, and platform updates delivered straight to your inbox.
      </p>
      {status === 'success' ? (
        <p className="text-[var(--emerald)] text-sm">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg border border-[var(--border-gold)] bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          />
          <button type="submit" className="btn-gold text-sm whitespace-nowrap" disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-[var(--burgundy-light)] text-xs mt-2">{message}</p>}
      <p className="text-[10px] text-[var(--text-muted)] mt-3">
        No spam, ever. Unsubscribe anytime. You must be 18+ to subscribe.
      </p>
    </div>
  );
}
