import type { NextConfig } from "next";

const repositoryPath = "/zhengyu-zhou-ai-pm-portfolio";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.NEXT_PUBLIC_BASE_PATH === repositoryPath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repositoryPath : "",
  assetPrefix: isGitHubPages ? repositoryPath : "",
  images: { unoptimized: true },
  typescript: { tsconfigPath: "tsconfig.pages.json" },
};

export default nextConfig;
