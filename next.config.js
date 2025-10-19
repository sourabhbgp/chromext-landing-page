/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: 'target' option has been removed in Next.js 12+
  // Serverless is now the default for most deployment platforms

  async redirects() {
    return [
      {
        source: "/:slug(best.*)/",
        destination: `/blog/:slug*/`,
        permanent: true,
      },
      {
        source: "/:slug(best.*)",
        destination: `/blog/:slug*`,
        permanent: true,
      },
      {
        source: "/ps5-price-restock-india",
        destination: `/blog/ps5-price-restock-india`,
        permanent: true,
      },
      {
        source: "/ps5-price-restock-india/",
        destination: `/blog/ps5-price-restock-india/`,
        permanent: true,
      },
    ];
  },

  trailingSlash: true,

  // Next.js 14 built-in image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
