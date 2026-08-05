import type { Locale } from "../data/portfolio";
import { experienceCopy, projectsByLocale, siteCopy } from "../data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const prefix = locale === "zh" ? `${basePath}/zh` : basePath;
  const isZh = locale === "zh";

  return <>
    <SiteHeader locale={locale} />
    <main id="main-content">
      <section className="portfolio-hero">
        <p className="availability"><i />{copy.status}</p>
        <div className="hero-grid">
          <div><h1>{copy.headline}</h1><p className="hero-position">{copy.position}</p><p className="hero-subtitle">{copy.subtitle}</p><p className="role-line">{copy.roles}</p><div className="hero-cta"><a className="button button-primary" href="#projects">{copy.primaryCta}</a><a className="button button-secondary" href={`${prefix}/projects/signalroom/#prototype`}>{copy.secondaryCta}</a></div><div className="utility-links"><a href={`${basePath}/Zhengyu_Zhou_AI_Product_Resume.pdf`} target="_blank" rel="noreferrer">PDF {copy.resume} ↗</a><a href="https://github.com/zhengyuzhou123" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/zhengyu-zhou-ksgg" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:zhouzhengyu221@gmail.com">{copy.email} ↗</a></div></div>
          <aside className="hero-aside"><div className="portrait-mark" aria-hidden="true"><span>ZZ</span><i>AI · DATA · DECISIONS</i></div><p>{copy.subtitle}</p></aside>
        </div>
        <div className="proof-label">{copy.proofLabel}</div>
        <div className="hero-proof">{copy.proofs.map((proof) => <div key={proof.value}><strong>{proof.value}</strong><span>{proof.text}<small>{proof.note}</small></span></div>)}<div className="proof-note"><b>{copy.lensLabel}</b><p>{copy.lens}</p></div></div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-head"><span>{copy.projectsLabel}</span><h2 id="projects-title">{copy.projectsTitle}</h2><p>{copy.projectsIntro}</p></div>
        <div className="project-grid">{Object.values(projectsByLocale[locale]).map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} index={index} />)}</div>
      </section>

      <section className="about-section" id="about"><span className="vertical-label">{copy.aboutLabel}</span><div className="about-copy"><span className="section-kicker">{copy.aboutKicker}</span><h2>{copy.aboutTitle}</h2><div className="about-columns">{copy.aboutBody.map((text) => <p key={text}>{text}</p>)}</div><div className="how-panel"><h3>{copy.howLabel}</h3><ol>{copy.how.map((step) => <li key={step}>{step}</li>)}</ol></div></div></section>

      <section className="experience-section" id="experience"><div className="section-head"><span>{copy.experienceLabel}</span><h2>{copy.experienceTitle}</h2><p>{copy.experienceNote}</p></div><div className="timeline">{experienceCopy[locale].map((item, index) => <article key={item.company}><span className="timeline-index">0{index + 1}</span><span className="timeline-period">{item.period}</span><div className="timeline-main"><span>{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p><div className="tag-row">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div></div></article>)}</div></section>

      <section className="capability-section"><div className="capability-title"><span>{copy.toolkitLabel}</span><h2>{copy.toolkitTitle}</h2></div><div className="capability-grid"><div><b>01 / PRODUCT</b><p>{isZh ? "问题定义 · 用户流程 · PRD · 路线图 · 取舍" : "Problem framing · User flows · PRDs · Roadmaps · Trade-offs"}</p></div><div><b>02 / AI WORKFLOWS</b><p>{isZh ? "检索 · 结构化提取 · 评估 · Guardrails · 人工审核" : "Retrieval · Structured extraction · Evaluation · Guardrails · Human review"}</p></div><div><b>03 / ANALYTICS</b><p>SQL · Python · Tableau · GA4 · Experiment design</p></div><div><b>04 / BUILD</b><p>Next.js · React · TypeScript · Prototyping · GitHub</p></div></div></section>
      <section className="education-section"><div><span>MS · 2026</span><h3>Boston University</h3><p>Applied Business Analytics · GPA 3.5 / 4.0</p></div><div><span>BA · 2024</span><h3>Gordon College</h3><p>Business Administration and Management · Magna Cum Laude</p></div><div><span>FOCUS</span><h3>{isZh ? "可靠 AI 产品" : "Trustworthy AI products"}</h3><p>{isZh ? "决策系统 · 企业研究 · 游戏行业" : "Decision systems · Enterprise research · Gaming"}</p></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
