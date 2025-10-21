import type { NextConfig } from "next";

// type { import('next').NextConfig}

const nextConfig = {
  experimental: {
    turbopack: {
    // Your previous turbo rules go here now
    },
  }
}

module.exports = nextConfig

export default nextConfig;
