import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AgeVerification from '@/components/AgeVerification';

export const metadata: Metadata = {
  title: 'Caledonia Games — Free Social Casino Entertainment',
  description: 'Discover free social casino games including slots, blackjack, poker, bingo, and casual games. No real money gambling — pure entertainment for adults 18+.',
  metadataBase: new URL('https://caledoniagame.games'),
  openGraph: {
    title: 'Caledonia Games — Free Social Casino Entertainment',
    description: 'Discover free social casino games including slots, blackjack, poker, bingo, and casual games. No real money gambling — pure entertainment for adults 18+.',
    url: 'https://caledoniagame.games',
    siteName: 'Caledonia Games',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caledonia Games — Free Social Casino Entertainment',
    description: 'Free social casino games. Slots, poker, blackjack, bingo & more. No real money.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <AgeVerification />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
