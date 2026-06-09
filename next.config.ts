import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  // Allow 127.0.0.1 / LAN IP during local dev (avoids cross-origin asset warnings)
  allowedDevOrigins: ["127.0.0.1", "192.168.88.116"],
  experimental: {
    // Avoid SegmentViewNode devtools RSC manifest errors in local dev
    devtoolSegmentExplorer: false,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
