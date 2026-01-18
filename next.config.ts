import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Static export for GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;