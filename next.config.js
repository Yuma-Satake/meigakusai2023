const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === 'true';
const prefixPath = isDevMode ? '' : process.env.NEXT_PUBLIC_PREFIX_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: prefixPath,
  basePath: prefixPath,
};

module.exports = nextConfig;
