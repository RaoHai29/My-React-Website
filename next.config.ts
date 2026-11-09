import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → `out/`, deployed to the default Firebase Hosting site (raoabdulhaireact.web.app).
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // No image server on static hosting; source images are pre-compressed WebP in assets/images/.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
