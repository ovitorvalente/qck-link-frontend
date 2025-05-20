import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:code",
        destination: "https://qck-link-backend.onrender.com/:code",
      },
    ];
  },
};

export default nextConfig;
