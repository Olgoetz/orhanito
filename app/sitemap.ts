import { MetadataRoute } from 'next';
import { WebURL } from '@/utils/contstants';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WebURL,
      lastModified: new Date(),
    },
  ];
}
