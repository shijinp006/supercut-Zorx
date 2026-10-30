/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build run alongside `next dev` without sharing .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // pino runs its pretty-printer in a worker thread; it must load from node_modules, not the bundle
  serverExternalPackages: ["pino", "pino-pretty", "thread-stream"],
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
