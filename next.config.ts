import type { NextConfig } from "next";

let nextConfig: NextConfig = {
  /* config options here */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

nextConfig = withBundleAnalyzer(nextConfig);

export default nextConfig;
