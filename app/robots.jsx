import { WebURL } from '../utils/contstants';
export default function robots() 
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${WebURL}/sitemap.xml`,
  };
