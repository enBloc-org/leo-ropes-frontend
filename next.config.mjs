/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'leo-ropes-space.ams3.digitaloceanspaces.com',
        port: ''
      },
    ],
  },
};

export default nextConfig;
