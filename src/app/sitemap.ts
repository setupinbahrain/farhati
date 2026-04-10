import { MetadataRoute } from 'next'
import { SILO_PAGES } from '@/lib/routes'
import { CITIES_BAHRAIN } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://farhati.bh';
  
  // Core Architectural Hubs
  const siteMapEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/occasions`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
  ];

  // Base Products (National Level)
  SILO_PAGES.forEach((slug) => {
    siteMapEntries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    });

    // Hyper-Local Geospatial Pages (City Level)
    CITIES_BAHRAIN.forEach((city) => {
      siteMapEntries.push({
        url: `${baseUrl}/${city}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7
      });
    });
  });

  return siteMapEntries;
}
