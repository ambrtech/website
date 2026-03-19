import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['gsap', '@gsap/react'],
  turbopack: {
    root: __dirname,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Vercel image optimization — remote patterns for any future CMS/CDN images
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Permanent redirects for renamed routes
  async redirects() {
    return [
      { source: '/customisation', destination: '/customization', permanent: true },
    ]
  },

  // HTTP headers for CDN caching and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Long cache for static assets (Vercel CDN handles cache-busting via hashed filenames)
        source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|svg|png|jpg|jpeg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
