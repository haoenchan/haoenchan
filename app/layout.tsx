import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ScrollProgress } from '@/components/effects/scroll-progress'
import { MouseGlow } from '@/components/effects/mouse-glow'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: 'Haoenchan',
  description: 'Personal blog and articles on math and physics.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ScrollProgress />
        <MouseGlow />
        {children}
      </body>
    </html>
  )
}
