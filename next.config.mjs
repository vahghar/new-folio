/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com'], // Add the external image domain here
  },
  transpilePackages: ["@paper-design/shaders-react"],
};

export default nextConfig;
