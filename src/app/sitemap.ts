import { MetadataRoute } from 'next'
import { SILO_PAGES } from '@/lib/routes'
import { CITIES_BAHRAIN } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://farhati.bh';
  
  const getAlternates = (path: string) => ({
    languages: {
      en: `${baseUrl}${path}`,
      ar: `${baseUrl}/ar${path}`
    }
  });

  const generateEntry = (path: string, priority: number, changeFrequency: any): any => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: getAlternates(path)
  });

  // Core Architectural Hubs
  const siteMapEntries: MetadataRoute.Sitemap = [
    generateEntry('', 1.0, 'daily'),
    generateEntry('/areas', 0.9, 'monthly'),
    generateEntry('/occasions', 0.9, 'monthly'),
    generateEntry('/contact-us', 0.5, 'yearly'),
  ];

  // Base Products (National Level)
  SILO_PAGES.forEach((slug) => {
    siteMapEntries.push(generateEntry(`/${slug}`, 0.8, 'weekly'));

    // Hyper-Local Geospatial Pages (City Level)
    CITIES_BAHRAIN.forEach((city) => {
      siteMapEntries.push(generateEntry(`/${city}/${slug}`, 0.7, 'weekly'));
    });
  });

  return siteMapEntries;
}
