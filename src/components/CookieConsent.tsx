'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setShow(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-fade-in">
      <div className="mx-auto max-w-3xl card-retro p-6">
        <h4 className="font-[var(--font-subheading)] text-lg text-[var(--gold)] mb-2">Cookie Preferences</h4>
        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic.
          You may choose to accept all cookies or only essential ones.
          Read our{' '}
          <a href="/legal/cookies" className="text-[var(--gold)] hover:underline">Cookie Policy</a>{' '}
          for more details.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleAccept} className="btn-gold text-sm">
            Accept All
          </button>
          <button onClick={handleNecessaryOnly} className="btn-outline-gold text-sm">
            Necessary Only
          </button>
        </div>
      </div>
    </div>
  );
}
