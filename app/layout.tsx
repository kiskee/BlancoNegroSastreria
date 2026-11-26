import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header2 from '@/components/Header2'
import { ADDRESS_STREET, googleMapsDirectionsUrl } from '@/lib/contact'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const SITE_URL = 'https://blancoynegrosastreria.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sastrería en Envigado | Blanco y Negro - Trajes a la Medida',
    template: '%s | Blanco y Negro Sastrería',
  },
  description:
    'Sastrería en Envigado, Antioquia. En Blanco y Negro confeccionamos trajes a la medida, arreglos, reparación de ropa y diseño personalizado. Calidad y elegancia cerca de ti.',
  keywords: [
    'sastrería envigado',
    'sastre envigado',
    'trajes a la medida envigado',
    'arreglos de ropa envigado',
    'confección envigado',
    'sastrería antioquia',
    'arreglo de trajes envigado',
    'diseño de ropa a medida envigado',
  ],
  authors: [{ name: 'Blanco y Negro Sastrería' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Sastrería en Envigado | Blanco y Negro',
    description:
      'Trajes a la medida, arreglos y confección en Envigado. Sastrería profesional con acabados de alta calidad.',
    url: SITE_URL,
    siteName: 'Blanco y Negro Sastrería',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sastrería en Envigado | Blanco y Negro',
    description:
      'Trajes a la medida, arreglos y confección en Envigado. Sastrería profesional con acabados de alta calidad.',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#negocio`,
      name: 'Blanco y Negro Sastrería',
      alternateName: 'Blanco y Negro',
      description:
        'Sastrería en Envigado, Antioquia. Confección de trajes a la medida, arreglos, reparación de ropa y diseño personalizado.',
      image: `${SITE_URL}/adri1.png`,
      url: SITE_URL,
      telephone: '+573003268025',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_STREET,
        addressLocality: 'Envigado',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      hasMap: googleMapsDirectionsUrl,
      areaServed: 'Envigado, Antioquia',
      inLanguage: 'es-CO',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: 'Blanco y Negro Sastrería',
      inLanguage: 'es-CO',
      publisher: { '@id': `${SITE_URL}/#negocio` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.className} antialiased min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header2 />
        {children}
      </body>
    </html>
  )
}
