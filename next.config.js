/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "static.wixstatic.com",
      "www.hiltonhotels.de",
      "images.ctfassets.net",
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
