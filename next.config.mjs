/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "*.lemonsqueezy.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/links", destination: "/#links", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/pages/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
