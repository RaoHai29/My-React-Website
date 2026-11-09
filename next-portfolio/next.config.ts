import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → `out/`, deployed to the default Firebase Hosting site (raoabdulhaireact.web.app).
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  // This app lives inside the legacy CRA folder; pin the root so Turbopack ignores the parent lockfile.
  turbopack: { root: __dirname },
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
