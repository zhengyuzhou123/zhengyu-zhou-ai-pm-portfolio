import type { Locale, ProjectSlug } from "../data/portfolio";
import { siteCopy } from "../data/portfolio";

export function SiteHeader({ locale, currentProject }: { locale: Locale; currentProject?: ProjectSlug }) {
  const copy = siteCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const root = locale === "zh" ? `${basePath}/zh/` : `${basePath}/`;
  const otherLanguage = currentProject
    ? locale === "zh" ? `${basePath}/projects/${currentProject}/` : `${basePath}/zh/projects/${currentProject}/`
    : locale === "zh" ? `${basePath}/` : `${basePath}/zh/`;

  return (
    <>
      <a className="skip-link" href="#main-content">{locale === "zh" ? "跳到主要内容" : "Skip to main content"}</a>
      <header className="site-nav">
        <a className="identity" href={root} aria-label={locale === "zh" ? "Z/Z — 周正宇首页" : "Z/Z — Zhengyu Zhou home"}>
          <b aria-hidden="true">Z/Z</b><span>{locale === "zh" ? "周正宇" : "ZHENGYU ZHOU"}</span>
        </a>
        <nav className="nav-menu" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          <a href={`${root}#projects`}>{copy.nav.projects}</a>
          <a href={`${root}#about`}>{copy.nav.about}</a>
          <a href={`${root}#experience`}>{copy.nav.experience}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <a className="language-link" href={otherLanguage} hrefLang={locale === "zh" ? "en" : "zh-CN"}>{copy.language}</a>
          <a className="resume-link" href={`${basePath}/Zhengyu_Zhou_AI_Product_Resume.pdf`} target="_blank" rel="noreferrer">{copy.resume} ↗</a>
        </div>
      </header>
    </>
  );
}
