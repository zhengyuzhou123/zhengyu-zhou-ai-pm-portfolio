import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "../../components/CaseStudyPage";
import { projectsByLocale, slugs, type ProjectSlug } from "../../data/portfolio";

const site = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio";
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug as ProjectSlug)) return {};
  const project = projectsByLocale.en[slug as ProjectSlug];
  return { title: project.seoTitle, description: project.summary, alternates: { canonical: `${site}/projects/${slug}/`, languages: { en: `${site}/projects/${slug}/`, "zh-CN": `${site}/zh/projects/${slug}/` } }, openGraph: { title: project.seoTitle, description: project.summary, url: `${site}/projects/${slug}/`, images: [{ url: `${site}/${slug === "signalroom" ? "og.png" : "og-portfolio.png"}`, alt: `${project.title} case study` }] } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as ProjectSlug)) notFound(); return <CaseStudyPage locale="en" project={projectsByLocale.en[slug as ProjectSlug]} />; }
