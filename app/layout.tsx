import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Bullish Cafe - Coming Soon',
    template: '%s | Bullish Cafe'
  },
  description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration, revolutionary blockchain technology, and premium coffee experiences.',
  keywords: ['coffee', 'crypto', 'XRP', 'blockchain', 'cafe', 'bullish', 'coming soon', 'macOS', 'simulator'],
  authors: [{ name: 'Bullish Cafe Team', url: 'https://bullishcafe.com' }],
  creator: 'Bullish Cafe',
  publisher: 'Bullish Cafe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://macos-comingsoon.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1a1a1a' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://macos-comingsoon.vercel.app',
    title: 'Bullish Cafe - Coming Soon',
    description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration.',
    siteName: 'Bullish Cafe',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bullish Cafe - Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bullish Cafe - Coming Soon',
    description: 'The future of crypto-coffee is brewing. Experience the new Bullish Cafe with XRP Ledger integration.',
    creator: '@bullishcafe',
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Bullish Cafe',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 