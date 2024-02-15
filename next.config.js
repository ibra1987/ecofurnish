/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "my-blob-store.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
