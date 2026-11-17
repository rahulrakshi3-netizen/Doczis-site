import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export so the site can be served from GitHub Pages at doczis.got-a.page
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
