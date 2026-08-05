import type { Metadata } from "next";
import "./globals.css";

const publicSiteUrl = "https://zhengyuzhou123.github.io/zhengyu-zhou-ai-pm-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: "Zhengyu Zhou — AI Product Manager",
  description: "AI product manager portfolio spanning GTM analytics, experimentation, automation, and decision systems.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
  openGraph: {
    title: "Zhengyu Zhou — AI Product Manager",
    description: "I turn messy data into useful AI products.",
    url: publicSiteUrl,
    images: [{ url: "og-portfolio.png", width: 1200, height: 630, alt: "Zhengyu Zhou AI Product Manager portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["og-portfolio.png"] },
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
