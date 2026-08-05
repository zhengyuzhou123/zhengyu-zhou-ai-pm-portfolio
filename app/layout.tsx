import type { Metadata } from "next";
import "./globals.css";

const publicSiteUrl = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: "Zhengyu Zhou | AI Product Manager Portfolio",
  description: "AI product portfolio spanning decision systems, workflow automation, experimentation, analytics, evaluation, and human review.",
  icons: { icon: `${publicSiteUrl}/favicon.svg`, shortcut: `${publicSiteUrl}/favicon.svg` },
  alternates: { canonical: `${publicSiteUrl}/`, languages: { en: `${publicSiteUrl}/`, "zh-CN": `${publicSiteUrl}/zh/` } },
  openGraph: {
    title: "Zhengyu Zhou | AI Product Manager Portfolio",
    description: "I turn messy data into useful AI products.",
    url: publicSiteUrl,
    images: [{ url: `${publicSiteUrl}/og-portfolio.png`, width: 1200, height: 630, alt: "Zhengyu Zhou AI Product Manager portfolio" }],
  },
  twitter: { card: "summary_large_image", images: [`${publicSiteUrl}/og-portfolio.png`] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
