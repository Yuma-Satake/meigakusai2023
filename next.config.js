/** @type {import('next').NextConfig} */
const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === 'true';
const prefixPath = isDevMode ? '' : process.env.NEXT_PUBLIC_REFIX_PATH;

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  assetPrefix: prefixPath,
  basePath: prefixPath,
};

module.exports = nextConfig;
