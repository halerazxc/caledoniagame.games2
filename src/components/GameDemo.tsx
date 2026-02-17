'use client';

import { useEffect } from 'react';

export default function GameDemo({ demoUrl, title }: { demoUrl: string; title: string }) {
  const isExternal = demoUrl.startsWith('http');

  useEffect(() => {
    const pageSlug = window.location.pathname.split('/').pop() || '';
    const recentRaw = localStorage.getItem('recently_played');
    const recent: string[] = recentRaw ? JSON.parse(recentRaw) : [];
    const updated = [pageSlug, ...recent.filter((s) => s !== pageSlug)].slice(0, 10);
    localStorage.setItem('recently_played', JSON.stringify(updated));
  }, [demoUrl, title]);

  return (
    <div className="card-retro overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src={demoUrl}
          title={`${title} - Free Demo`}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          {...(!isExternal && { sandbox: 'allow-scripts allow-same-origin allow-popups' })}
        />
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-[var(--border-gold)]">
        <p className="text-xs text-[var(--text-muted)]">Free demo — no real money involved</p>
        <button
          onClick={() => {
            const iframe = document.querySelector('iframe');
            if (iframe) iframe.requestFullscreen?.();
          }}
          className="text-xs text-[var(--gold)] hover:underline"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}
