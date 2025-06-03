import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bullish Cafe - Coming Soon',
  description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration.',
  keywords: ['coffee', 'crypto', 'XRP', 'blockchain', 'cafe', 'bullish'],
  authors: [{ name: 'Bullish Cafe Team' }],
  creator: 'Bullish Cafe',
  publisher: 'Bullish Cafe',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bullishcafe.com',
    title: 'Bullish Cafe - Coming Soon',
    description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration.',
    siteName: 'Bullish Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bullish Cafe - Coming Soon',
    description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration.',
    creator: '@bullishcafe',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 