import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env:{ NEXT_PUBLIC_GITHUB_AUTH_TOKEN : process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}
};

export default nextConfig;
