import type { Metadata } from "next";

const chineseSiteUrl = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio/zh/";

export const metadata: Metadata = {
  title: "周正宇 — AI 产品经理",
  description: "AI 产品经理作品集，涵盖 GTM 分析、实验设计、自动化与决策系统。",
  icons: {
    icon: "/zhengyu-zhou-ai-pm-portfolio/favicon.svg",
    shortcut: "/zhengyu-zhou-ai-pm-portfolio/favicon.svg",
  },
  openGraph: {
    title: "周正宇 — AI 产品经理",
    description: "把杂乱数据变成真正有用的 AI 产品。",
    url: chineseSiteUrl,
    images: [{
      url: "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio/og-portfolio.png",
      width: 1200,
      height: 630,
      alt: "周正宇 AI 产品经理作品集",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "周正宇 — AI 产品经理",
    description: "把杂乱数据变成真正有用的 AI 产品。",
    images: ["https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio/og-portfolio.png"],
  },
  alternates: {
    canonical: chineseSiteUrl,
    languages: {
      "zh-CN": chineseSiteUrl,
      en: "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio/",
    },
  },
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
