import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ClickSparkEffect } from '@/components/ClickSparkEffect'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meco - Build Relationships Between Brands and Influencers',
  description: 'The ultimate platform for social media marketing and influencer collaboration. Analytics, engagement tracking, and growth insights in one place.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0E1F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background">
        <ClickSparkEffect />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
