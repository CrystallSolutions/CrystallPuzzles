import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/crystal_puzzles",
  assetPrefix: "/crystal_puzzles",
  sassOptions: {
    additionalData: `$color: red;`
  }
};

export default nextConfig;
