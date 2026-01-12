import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../src/index.css'
import { Providers } from './providers'

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
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: 'VMC Media - Full-Service Digital Marketing & SEO Partner',
  description: 'Elevate your online presence with VMC Media. We craft customized digital marketing and SEO strategies to increase visibility, attract the right audience, and convert clicks into loyal customers.',
  authors: [{ name: 'VMC Media' }],
  keywords: ['digital marketing', 'SEO services', 'content marketing', 'social media marketing', 'PPC advertising', 'website optimization', 'branding'],
  metadataBase: new URL('https://vmcmedia.com'),
  alternates: {
    canonical: 'https://vmcmedia.com',
  },
  openGraph: {
    title: 'VMC Media - Full-Service Digital Marketing & SEO Partner',
    description: 'Custom digital marketing strategies for sustainable business growth',
    type: 'website',
    locale: 'en_IN',
    url: 'https://vmcmedia.com',
    siteName: 'VMC Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMC Media - Digital Marketing & SEO',
    description: 'Custom digital marketing strategies for sustainable business growth',
    creator: '@vmcmedia',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font preconnection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/logo-vm.png" />
        
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Analytics 4 - Async loading */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `,
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VMC Media',
              url: 'https://vmcmedia.com',
              logo: 'https://vmcmedia.com/logo-vm.png',
              description: 'Full-service digital marketing and SEO partner specializing in growth strategies for Indian businesses',
              sameAs: [
                'https://facebook.com/vmcmedia',
                'https://instagram.com/vmcmedia',
                'https://linkedin.com/company/vmcmedia',
                'https://youtube.com/@vmcmedia',
                'https://twitter.com/vmcmedia',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+91-XXXXXXXXXX',
                email: 'contact@vmcmedia.com',
              },
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Website',
              url: 'https://vmcmedia.com',
              name: 'VMC Media',
              description: 'Digital marketing and SEO services for Indian businesses',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://vmcmedia.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
