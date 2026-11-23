import type { MetadataRoute } from 'next'

const SITE_URL = 'https://blancoynegrosastreria.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${SITE_URL}/adri1.png`, `${SITE_URL}/women1.png`],
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${SITE_URL}/arreglos.png`],
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${SITE_URL}/adri1.png`],
    },
  ]
}
