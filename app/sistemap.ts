import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.forestagro.com.ar', // Cambiá esto por tu URL real
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}