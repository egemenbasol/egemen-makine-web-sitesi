import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "standalone",
  outputFileTracingIncludes: {
    "/*": ["./content/**/*"],
    "/api/**/*": ["./content/**/*"],
  },
};

export default nextConfig;
