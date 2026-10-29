/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build run alongside `next dev` without sharing .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
