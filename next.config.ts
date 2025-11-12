import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolios",
  assetPrefix: "/Portfolios/",
};

export default nextConfig;
