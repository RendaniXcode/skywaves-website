// app/layout.tsx
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Skywaves Engineers',
    default: 'Skywaves Engineers - Innovative Electrical Engineering Solutions',
  },
  description: 'Skywaves Engineers provides cutting-edge electrical engineering solutions with expertise in renewable energy, lighting design, control systems, and more.',
  keywords: ['electrical engineering', 'renewable energy', 'lighting design', 'control systems', 'engineering consultancy'],
  authors: [{ name: 'Skywaves Engineers' }],
  creator: 'Skywaves Engineers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skywavesengineers.com',
    siteName: 'Skywaves Engineers',
    title: 'Skywaves Engineers - Innovative Electrical Engineering Solutions',
    description: 'Cutting-edge electrical engineering solutions for a sustainable future',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skywaves Engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skywaves Engineers - Innovative Electrical Engineering Solutions',
    description: 'Cutting-edge electrical engineering solutions for a sustainable future',
    images: ['/images/og-image.jpg'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-background text-foreground font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}