import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AutoEgo',
  description: 'AutoEgo: 크리에이터의 지식이 24시간 일하는 곳.',
  openGraph: {
    title: 'AutoEgo',
    description: '크리에이터의 지식이 24시간 일하는 곳.',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 600,
        alt: 'AutoEgo Thumbnail',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
