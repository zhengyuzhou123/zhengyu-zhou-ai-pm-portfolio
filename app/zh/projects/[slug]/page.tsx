import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "../../../components/CaseStudyPage";
import { projectsByLocale, slugs, type ProjectSlug } from "../../../data/portfolio";

const site = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio";
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; if (!slugs.includes(slug as ProjectSlug)) return {}; const project = projectsByLocale.zh[slug as ProjectSlug]; return { title: project.seoTitle, description: project.summary, alternates: { canonical: `${site}/zh/projects/${slug}/`, languages: { en: `${site}/projects/${slug}/`, "zh-CN": `${site}/zh/projects/${slug}/` } }, openGraph: { title: project.seoTitle, description: project.summary, url: `${site}/zh/projects/${slug}/`, locale: "zh_CN", images: [{ url: `${site}/${slug === "signalroom" ? "og.png" : "og-portfolio.png"}`, alt: `${project.title} 案例研究` }] } }; }
export default async function ChineseProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as ProjectSlug)) notFound(); return <CaseStudyPage locale="zh" project={projectsByLocale.zh[slug as ProjectSlug]} />; }
