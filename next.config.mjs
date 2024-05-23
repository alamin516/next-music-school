/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  }
};

export default withPlugins([], nextConfig);

