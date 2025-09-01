import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**"
      }
    ],
    domains: ["picsum.photos", "res.cloudinary.com"]
  }
};

export default nextConfig;
