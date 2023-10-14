import './globals.css'
import type { Metadata } from 'next'
import { MainNav } from '@/components/main-nav';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'
 
const publicSans = localFont({
  src: './PublicSans.woff2',
  display: 'swap',
  variable: '--font-public-sans'
});

const description =  `I'm a Software Engineer building full-stack web applications with React, Node.js, TypeScript, PostgresSQL and Next.js. I like designing and building user interfaces as well as experimenting with new technologies.`;
const title = 'Prashant Kumar';
const url = 'https://prashantkumar.space';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Prashant Kumar',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Framermotion', 'Tailwind', 'Full Stack', 'Software Engineer', 'Backend', 'Frontend', 'UI'],
  colorScheme: 'dark',
  creator: 'Prashant Kumar',
  publisher: 'Prashant Kumar',
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-neutral-900 text-neutral-100 ${publicSans.variable}`}>
      <body>
        <header className='px-4 max-w-3xl mx-auto'>
          <MainNav/>
        </header>
        <main className='px-4 max-w-3xl mx-auto'>
          {children}
        </main>
      </body>
      <Analytics/>
    </html>
  )
}
