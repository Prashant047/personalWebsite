import './globals.css'
import type { Metadata } from 'next'
import { MainNav } from '@/components/main-nav';

export const metadata: Metadata = {
  title: 'Prashant Kumar',
  description: 'My Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-neutral-900 text-neutral-100'>
      <body>
        <header className='px-4 max-w-3xl mx-auto'>
          <MainNav/>
        </header>
        <main className='px-4 max-w-3xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
