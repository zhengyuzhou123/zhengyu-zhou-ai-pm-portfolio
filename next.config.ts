import type { NextConfig } from "next";

const repositoryPath = "/zhengyu-zhou-ai-pm-portfolio";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repositoryPath : "",
  assetPrefix: isGitHubPages ? repositoryPath : "",
  images: { unoptimized: true },
  typescript: { tsconfigPath: "tsconfig.pages.json" },
};

export default nextConfig;
