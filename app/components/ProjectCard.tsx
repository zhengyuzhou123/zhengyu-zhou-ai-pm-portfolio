import type { Locale, Project } from "../data/portfolio";
import { siteCopy } from "../data/portfolio";

export function ProjectCard({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const prefix = locale === "zh" ? `${basePath}/zh` : basePath;
  const copy = siteCopy[locale];
  const secondaryLabel = project.slug === "signalroom" ? copy.explore : copy.walkthrough;
  const secondaryAnchor = project.slug === "signalroom" ? "prototype" : project.slug === "gaming-job-market-tracker" ? "workflow" : "architecture";

  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className="project-card-top">
        <span className="project-number">0{index + 1}</span>
        <span className="status-badge">{project.status}</span>
      </div>
      <p className="project-kicker">{project.kicker}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <dl className="project-quick-facts">
        <div><dt>{locale === "zh" ? "问题" : "Problem"}</dt><dd>{project.cardProblem}</dd></div>
        <div><dt>{locale === "zh" ? "职责" : "My role"}</dt><dd>{project.role}</dd></div>
        <div><dt>{locale === "zh" ? "主要收获" : "Main learning"}</dt><dd>{project.learning}</dd></div>
      </dl>
      <div className="tag-row project-tags">{project.skills.map((skill) => <i key={skill}>{skill}</i>)}</div>
      <div className="project-card-actions">
        <a className="button button-primary" href={`${prefix}/projects/${project.slug}/`}>{copy.viewCase} <span aria-hidden="true">↗</span></a>
        <a className="text-link" href={`${prefix}/projects/${project.slug}/#${secondaryAnchor}`}>{secondaryLabel} <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
