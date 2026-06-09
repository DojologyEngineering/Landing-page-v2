import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
};

export default nextConfig;
