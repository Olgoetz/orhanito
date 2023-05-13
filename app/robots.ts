import { MetadataRoute } from 'next';
import { WebURL } from '@/utils/contstants';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${WebURL}/sitemap.xml`,
  };
}