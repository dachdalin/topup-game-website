import React from "react"
import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans, IBM_Plex_Mono, Koulen } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono" });
const koulen = Koulen({ subsets: ["khmer", "latin"], weight: "400", variable: "--font-koulen" });

export const metadata: Metadata = {
  title: 'GameTopUp KH - Instant PUBG & MLBB Top-Up in Cambodia',
  description: 'Fast, safe game top-up for PUBG Mobile UC and Mobile Legends Diamonds. Pay with ABA PAY, Wing, KHQR or TrueMoney. No login required. Instant delivery.',
  generator: 'www.dachdalin.dev',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${jakarta.variable} ${plexMono.variable} ${koulen.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
