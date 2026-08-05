import type { MetadataRoute } from "next";
import { slugs } from "./data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio";
  return ["/", "/zh/", ...slugs.flatMap((slug) => [`/projects/${slug}/`, `/zh/projects/${slug}/`])].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: path === "/" ? 1 : path === "/zh/" ? 0.9 : 0.8 }));
}
