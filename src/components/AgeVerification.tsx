'use client';

import { useState, useEffect } from 'react';

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (!verified) {
      setShow(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('age_verified', 'true');
    setShow(false);
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="card-retro mx-4 max-w-md p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-[var(--gold)]/10">
          <span className="text-2xl font-bold text-[var(--gold)]">18+</span>
        </div>
        <h2 className="font-[var(--font-heading)] text-xl text-[var(--gold)] mb-3">Age Verification</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
          This site is intended for adults aged 18 and over. We offer social games only — no real money gambling is available on this platform.
          By continuing, you confirm that you are at least 18 years old.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={handleConfirm} className="btn-gold text-sm">
            I Am 18 or Over
          </button>
          <button onClick={handleDeny} className="btn-outline-gold text-sm">
            I Am Under 18
          </button>
        </div>
      </div>
    </div>
  );
}
