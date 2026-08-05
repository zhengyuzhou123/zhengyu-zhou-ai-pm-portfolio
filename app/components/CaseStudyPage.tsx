import type { Locale, Project } from "../data/portfolio";
import { labels } from "../data/portfolio";
import { SignalRoomDemo } from "./SignalRoomDemo";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const ownerClass = { Rules: "rules", Statistical: "statistical", LLM: "llm", Human: "human" } as const;

export function CaseStudyPage({ project, locale }: { project: Project; locale: Locale }) {
  const l = labels[locale];
  const isZh = locale === "zh";
  const toc = [
    ["overview", isZh ? "项目概览" : "Overview"], ["context", l.context], ["problem", l.problem],
    ["flow", l.flow], ["architecture", l.architecture], ["responsibilities", l.responsibilities],
    ["requirements", l.requirements], ["metrics", l.metrics], ["evaluation", l.evaluation],
    ["iterations", l.iterations], ["tradeoffs", l.tradeoffs], ["reflection", l.reflection],
  ];

  return <>
    <SiteHeader locale={locale} currentProject={project.slug} />
    <main id="main-content" className="case-main">
      <header className="case-hero">
        <a className="back-link" href={locale === "zh" ? "../../#projects" : "../../#projects"}>← {isZh ? "返回项目" : "Back to projects"}</a>
        <p className="project-kicker">{project.kicker}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p>
        <div className="case-facts"><Fact name={isZh ? "项目状态" : "Project status"} value={project.status} /><Fact name={isZh ? "产品类型" : "Product type"} value={project.productType} /><Fact name={isZh ? "数据类型" : "Data type"} value={project.dataType} /><Fact name={isZh ? "我的职责" : "My role"} value={project.role} /><Fact name={isZh ? "时间" : "Timeline"} value={project.timeline} /><Fact name={isZh ? "工具" : "Tools"} value={project.tools} /><Fact name={isZh ? "验证状态" : "Validation"} value={project.validation} /></div>
        <div className="truth-note"><b>{isZh ? "真实性说明" : "TRUTH & SCOPE"}</b><p>{project.truthNote}</p></div>
      </header>
      <div className="case-shell">
        <aside className="case-toc"><span>{isZh ? "本页目录" : "ON THIS PAGE"}</span><nav aria-label={isZh ? "案例研究目录" : "Case study table of contents"}>{toc.map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}</nav></aside>
        <article className="case-content">
          <CaseSection id="overview" number="01" title={isZh ? "项目概览" : "What is real today"}><div className="two-column-list"><ListBlock title={isZh ? "已经完成" : "Implemented"} items={project.completed} /><ListBlock title={isZh ? "计划功能" : "Planned"} items={project.planned} /></div></CaseSection>
          <CaseSection id="context" number="02" title={l.context}><div className="body-copy">{project.context.map((p) => <p key={p}>{p}</p>)}</div><div className="persona-card"><span>{isZh ? "主要用户" : "PRIMARY PERSONA"}</span><h3>{project.primaryPersona}</h3><p>{isZh ? "次要用户：" : "Secondary: "}{project.secondaryPersonas.join(" · ")}</p></div><blockquote><b>JTBD</b>{project.jtbd}</blockquote></CaseSection>
          <CaseSection id="problem" number="03" title={l.problem}><ul className="check-list">{project.problemDetails.map((x) => <li key={x}>{x}</li>)}</ul><div className="boundary-grid"><div><b>{isZh ? "AI 应该" : "AI SHOULD"}</b><p>{project.aiRole}</p></div><div><b>{isZh ? "AI 不应该" : "AI SHOULD NOT"}</b><p>{project.aiBoundary}</p></div></div><div className="hypothesis"><span>{isZh ? "产品假设" : "PRODUCT HYPOTHESIS"}</span><p>{project.hypothesis}</p></div><h3>{isZh ? "考虑过的替代方案" : "Alternatives considered"}</h3><div className="decision-table">{project.alternatives.map((item) => <div key={item.name}><b>{item.name}</b><p>{item.decision}</p></div>)}</div></CaseSection>
          <CaseSection id="flow" number="04" title={l.flow}><ol className="flow-diagram">{project.userFlow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></li>)}</ol>{project.slug === "gaming-job-market-tracker" && <WorkflowPreview locale={locale} />}</CaseSection>
          <CaseSection id="architecture" number="05" title={l.architecture}><div className="architecture-diagram">{project.architecture.map((node, index) => <div key={`${node.label}-${index}`} className={`architecture-node ${ownerClass[node.owner]}`}><span>{node.owner}</span><b>{node.label}</b></div>)}</div><div className="architecture-legend"><span className="rules">{isZh ? "规则" : "Rules"}</span><span className="statistical">{isZh ? "统计模型" : "Statistical"}</span><span className="llm">LLM</span><span className="human">{isZh ? "人工" : "Human"}</span></div>{project.slug === "sec-10k-rag" && <SecPreview locale={locale} />}</CaseSection>
          {project.slug === "signalroom" && <CaseSection id="prototype" number="06" title={isZh ? "交互原型" : "Interactive prototype"}><SignalRoomDemo locale={locale} /></CaseSection>}
          <CaseSection id="responsibilities" number={project.slug === "signalroom" ? "07" : "06"} title={l.responsibilities}><div className="boundary-grid"><ListBlock title={isZh ? "AI 可以" : "AI CAN"} items={project.aiCan} /><ListBlock title={isZh ? "AI 不可以" : "AI CANNOT"} items={project.aiCannot} /></div></CaseSection>
          <CaseSection id="requirements" number="08" title={l.requirements}><div className="requirements-grid"><ListBlock title="MUST HAVE" items={project.mustHave} /><ListBlock title="SHOULD HAVE" items={project.shouldHave} /><ListBlock title="OUT OF SCOPE" items={project.outOfScope} /></div></CaseSection>
          <CaseSection id="metrics" number="09" title={l.metrics}><div className="metrics-table" role="table" aria-label={l.metrics}>{project.metrics.map((metric) => <div role="row" key={metric.name}><b role="cell">{metric.name}</b><p role="cell">{metric.explanation}</p></div>)}</div></CaseSection>
          <CaseSection id="evaluation" number="10" title={l.evaluation}><p className="planned-label">{project.evaluationLabel}</p><ol className="evaluation-list">{project.evaluation.map((step) => <li key={step}>{step}</li>)}</ol></CaseSection>
          <CaseSection id="iterations" number="11" title={l.iterations}><div className="iteration-grid">{project.iterations.map((item) => <article key={item.version}><span>{item.version}</span><h3>{item.change}</h3><p><b>{isZh ? "发现的问题：" : "Problem: "}</b>{item.issue}</p></article>)}</div></CaseSection>
          <CaseSection id="tradeoffs" number="12" title={l.tradeoffs}><div className="decision-table">{project.tradeoffs.map((item) => <div key={item.name}><b>{item.name}</b><p>{item.decision}</p></div>)}</div></CaseSection>
          <CaseSection id="reflection" number="13" title={l.reflection}><div className="reflection-grid"><Reflection title={isZh ? "学到了什么" : "What I learned"} text={project.reflection.learned} /><Reflection title={isZh ? "下一步测试" : "What I would test next"} text={project.reflection.next} /><Reflection title={isZh ? "面对真实用户" : "With real users"} text={project.reflection.realUsers} /><Reflection title={isZh ? "上线前需要" : "Before production"} text={project.reflection.production} /></div></CaseSection>
          <div className="case-end-cta"><p>{isZh ? "想进一步了解产品判断、工作流和实现细节？" : "Want to discuss the product judgment, workflow, or implementation?"}</p><a className="button button-primary" href="mailto:zhouzhengyu221@gmail.com">{isZh ? "联系我" : "Contact me"}</a><a className="button button-secondary" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Zhengyu_Zhou_AI_Product_Resume.pdf`} target="_blank" rel="noreferrer">{isZh ? "查看简历" : "View resume"}</a></div>
        </article>
      </div>
    </main><SiteFooter locale={locale} />
  </>;
}

function Fact({ name, value }: { name: string; value: string }) { return <div><dt>{name}</dt><dd>{value}</dd></div>; }
function CaseSection({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) { return <section className="case-section" id={id}><div className="case-section-title"><span>{number}</span><h2>{title}</h2></div>{children}</section>; }
function ListBlock({ title, items }: { title: string; items: string[] }) { return <div className="list-block"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }
function Reflection({ title, text }: { title: string; text: string }) { return <div><span>{title}</span><p>{text}</p></div>; }

function WorkflowPreview({ locale }: { locale: Locale }) { const isZh = locale === "zh"; return <div id="workflow" className="workflow-preview"><p className="planned-label">{isZh ? "当前：使用模拟职位文本展示工作流；抓取器、生产数据库与趋势看板仍为计划功能。" : "Current scope: synthetic posting text demonstrates the workflow; a scraper, production database, and trend dashboard remain planned."}</p><div className="raw-to-clean"><div><span>RAW POSTING</span><p>{isZh ? "“产品分析师……签证支持未说明”" : '“Product Analyst… sponsorship not specified”'}</p></div><b>→</b><div><span>LLM EXTRACTION</span><p>role · location · skills · sponsorship</p></div><b>→</b><div><span>PYDANTIC</span><p>schema pass / review flag</p></div><b>→</b><div><span>HUMAN REVIEW</span><p>{isZh ? "低置信度字段" : "low-confidence fields"}</p></div><b>→</b><div><span>CLEAN DATA</span><p>{isZh ? "可分析记录" : "analysis-ready record"}</p></div></div></div>; }

function SecPreview({ locale }: { locale: Locale }) { const isZh = locale === "zh"; return <div className="sec-preview"><p className="planned-label">{isZh ? "概念交互：没有加载真实公司 10-K，也不展示虚构答案或评估分数。" : "Concept walkthrough: no company filing is loaded, and no answer or evaluation score is fabricated."}</p><div className="sec-trace"><div><span>QUERY</span><p>{isZh ? "选择公司、年份与章节" : "Select company, year, and section"}</p></div><div><span>RETRIEVAL</span><p>Item 6 / 7 / 7A / 8 only</p></div><div><span>ANSWER</span><p>{isZh ? "逐条引用证据；证据不足则拒答" : "Cite each claim; abstain if evidence is insufficient"}</p></div><div><span>VERIFY</span><p>{isZh ? "人工打开原始申报文件核验" : "Human opens the source filing to verify"}</p></div></div></div>; }
