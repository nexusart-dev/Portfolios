import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolios",
  assetPrefix: "/Portfolios/",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
