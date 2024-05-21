/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPlugins([], nextConfig);

