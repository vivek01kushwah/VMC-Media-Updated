import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'
import { Providers } from './providers'

// Viewport is correctly defined as separate export (not in metadata)

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'VMC Media - Full-Service Digital Marketing & SEO Partner',
  description: 'Elevate your online presence with VMC Media. We craft customized digital marketing and SEO strategies to increase visibility, attract the right audience, and convert clicks into loyal customers.',
  authors: [{ name: 'VMC Media' }],
  keywords: ['digital marketing', 'SEO services', 'content marketing', 'social media marketing', 'PPC advertising', 'website optimization'],
  openGraph: {
    title: 'VMC Media - Full-Service Digital Marketing & SEO Partner',
    description: 'Custom digital marketing strategies for sustainable business growth',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
