"use client";

import { useMemo, useState } from "react";

type Segment = "SMB" | "Mid-market" | "Enterprise";

const segmentData = {
  SMB: { visitors: 42800, wins: 82, lift: 11, action: "Move social proof into the first-touch journey" },
  "Mid-market": { visitors: 24100, wins: 61, lift: 17, action: "Replace generic demo follow-up with role-based proof" },
  Enterprise: { visitors: 9200, wins: 14, lift: 8, action: "Tighten account qualification before adding spend" },
};

const experiences = [
  {
    period: "2026 — NOW",
    company: "Lions Financial",
    role: "Business Advisory & Risk Management Intern",
    summary: "Built GTM conversion recommendations, financial models, and AI-assisted workflows that accelerated recurring market research.",
    tags: ["GTM strategy", "GA4", "Python", "Financial modeling"],
  },
  {
    period: "2025",
    company: "Bolun Bole Clothing Co.",
    role: "Business Analyst Intern",
    summary: "Managed 200k+ customer records; SQL segmentation and experimentation improved campaign engagement by 15%.",
    tags: ["SQL", "Segmentation", "A/B testing", "Lifecycle analytics"],
  },
  {
    period: "2024",
    company: "Apexus-Tech",
    role: "Business Analyst Intern",
    summary: "Evaluated financial data infrastructure and built operational dashboards that reduced recurring reporting time by 30%.",
    tags: ["Tableau", "Grafana", "Data infrastructure", "Predictive models"],
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [segment, setSegment] = useState<Segment>("Mid-market");
  const [budget, setBudget] = useState(35);
  const data = segmentData[segment];
  const impact = useMemo(() => Math.round(data.wins * (data.lift + budget / 12) / 100), [budget, data]);

  return (
    <main>
      <nav className="site-nav">
        <a className="identity" href="#top" aria-label="Zhengyu Zhou home"><b>Z/Z</b><span>ZHENGYU ZHOU</span></a>
        <div className="nav-menu">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="resume-link" href={`${basePath}/Zhengyu_Zhou_Resume.docx`} download>Résumé ↓</a>
      </nav>

      <header className="portfolio-hero" id="top">
        <div className="availability"><i /> AI PRODUCT MANAGER · OPEN TO ROLES · BOSTON / US</div>
        <div className="hero-grid">
          <h1>I turn messy data<br />into <em>useful</em><br />AI products.</h1>
          <div className="hero-aside">
            <div className="portrait-mark"><span>ZZ</span><i>AI × DATA × BUSINESS</i></div>
            <p>Applied Business Analytics graduate student with hands-on experience across GTM strategy, experimentation, automation, and decision systems.</p>
            <div className="hero-links">
              <a href="#work">See selected work <span>↘</span></a>
              <a href="mailto:zhouzhengyu221@gmail.com">zhouzhengyu221@gmail.com ↗</a>
            </div>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>200k+</strong><span>customer records<br />operationalized</span></div>
          <div><strong>+15%</strong><span>campaign engagement<br />from segmentation</span></div>
          <div><strong>−30%</strong><span>recurring reporting<br />time</span></div>
          <div className="proof-note"><b>MY PRODUCT LENS</b><p>Start with the decision. Show the evidence. Keep the human in control.</p></div>
        </div>
      </header>

      <section className="work-section" id="work">
        <div className="section-head inverted"><span>01 / SELECTED WORK</span><h2>One flagship product.<br />Built end to end.</h2><p>Product strategy · UX prototyping · AI-assisted development</p></div>
        <div className="project-intro">
          <div><span>CASE STUDY 01 · 2026</span><h3>SignalRoom</h3><p>An AI GTM Decision Copilot that turns noisy funnel data into a prioritized, reviewable experiment.</p></div>
          <div className="project-thesis"><b>THE THESIS</b><p>Growth teams don&apos;t need another dashboard. They need a faster path from anomaly to confident action.</p></div>
        </div>

        <div className="process-strip" aria-label="SignalRoom product process">
          <span><b>01</b> Frame the decision</span><i>→</i><span><b>02</b> Synthesize signals</span><i>→</i><span><b>03</b> Simulate options</span><i>→</i><span><b>04</b> Human review</span><i>→</i><span><b>05</b> Measure lift</span>
        </div>

        <div className="demo-window">
          <div className="demo-bar"><span><i /> SIGNALROOM / Q2 PIPELINE REVIEW</span><span>INTERACTIVE PROTOTYPE</span></div>
          <div className="demo-layout">
            <aside>
              <span className="demo-step">01 / SET CONTEXT</span>
              <label>Audience segment</label>
              <div className="segment-buttons">{(Object.keys(segmentData) as Segment[]).map((item) => <button key={item} onClick={() => setSegment(item)} className={segment === item ? "active" : ""} aria-pressed={segment === item}>{item}</button>)}</div>
              <label>Incremental budget <output>${budget}k</output></label>
              <input type="range" min="10" max="80" value={budget} onChange={(event) => setBudget(Number(event.target.value))} aria-label="Incremental budget" />
              <div className="demo-assumption"><b>ASSUMPTION</b><p>Budget can be reallocated without reducing branded search coverage.</p></div>
            </aside>
            <div className="demo-result">
              <div className="result-top"><div><span className="demo-step">02 / RECOMMEND</span><h4>{segment} growth decision</h4></div><div className="confidence"><strong>{84 - Math.round(Math.abs(budget - 35) / 8)}%</strong>CONFIDENCE</div></div>
              <div className="recommendation-card"><span>HIGHEST-LEVERAGE MOVE</span><h5>{data.action}</h5><p>SignalRoom connects observed funnel behavior to a testable intervention, then exposes the assumptions behind the recommendation.</p></div>
              <div className="impact-grid">
                <div><span>VISITORS</span><strong>{data.visitors.toLocaleString()}</strong></div>
                <div><span>BASE WINS</span><strong>{data.wins}</strong></div>
                <div><span>PROJECTED LIFT</span><strong>+{data.lift + Math.round(budget / 12)}%</strong></div>
                <div><span>EXTRA WINS</span><strong>+{impact}</strong></div>
              </div>
              <div className="experiment-strip"><b>NEXT EXPERIMENT</b><span>Run a controlled 21-day test · Measure opportunity creation · Protect lead quality</span><button onClick={() => navigator.clipboard?.writeText(`${segment}: ${data.action}`)}>Copy brief</button></div>
            </div>
          </div>
        </div>

        <div className="case-logic">
          <div><span>USER</span><h4>Growth & RevOps leads</h4><p>Operators accountable for pipeline outcomes across marketing and sales.</p></div>
          <div><span>JOB TO BE DONE</span><h4>Defend the next move</h4><p>Identify the highest-leverage intervention and align a team around a test.</p></div>
          <div><span>NORTH STAR</span><h4>Time to confident decision</h4><p>Guardrails: override rate, realized lift, and evidence coverage.</p></div>
          <div><span>AI&apos;S ROLE</span><h4>Synthesize, simulate, explain</h4><p>AI drafts the decision. People inspect evidence and approve the action.</p></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="vertical-label">02 / ABOUT</div>
        <div className="about-copy">
          <span className="section-kicker">A BUSINESS MIND WITH A BUILDER&apos;S BIAS</span>
          <h2>Not just analyzing what happened.<br /><em>Designing what should happen next.</em></h2>
          <div className="about-columns">
            <p>I work at the intersection of data, business, and AI. My background spans funnel analysis, customer segmentation, financial modeling, dashboards, and workflow automation—so I naturally think in both user problems and measurable outcomes.</p>
            <p>I&apos;m especially interested in AI products that help people make better decisions: systems that synthesize complexity, make uncertainty visible, and turn insight into action without hiding the reasoning.</p>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-head"><span>03 / EXPERIENCE</span><h2>Learning across<br />the full decision stack.</h2><p>Strategy → Data → Action</p></div>
        <div className="timeline">
          {experiences.map((item, index) => <article key={item.company}>
            <div className="timeline-index">0{index + 1}</div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-main"><span>{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p><div className="tag-row">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="capability-section">
        <div className="capability-title"><span>04 / TOOLKIT</span><h2>I bridge the gap between<br /><em>“What does the data say?”</em><br />and “What should we build?”</h2></div>
        <div className="capability-grid">
          <div><b>PRODUCT</b><p>Problem framing<br />User journeys<br />Experiment design<br />North-star metrics<br />Roadmapping</p></div>
          <div><b>ANALYTICS</b><p>SQL & Python<br />Funnel analysis<br />Customer segmentation<br />Predictive modeling<br />A/B testing</p></div>
          <div><b>BUSINESS</b><p>GTM strategy<br />Financial modeling<br />Market research<br />Process improvement<br />Stakeholder storytelling</p></div>
          <div><b>PLATFORMS</b><p>Tableau & Power BI<br />GA4<br />Excel & VBA<br />AWS<br />AI-assisted workflows</p></div>
        </div>
      </section>

      <section className="education-section">
        <div><span>EDUCATION</span><h3>Boston University</h3><p>MS Applied Business Analytics · 2024—2026</p></div>
        <div><span>FOUNDATION</span><h3>Gordon College</h3><p>BA Business Administration · Magna Cum Laude</p></div>
        <div><span>RECOGNITION</span><h3>DSI 2025</h3><p>Presenter & Session Chair · Business Analytics</p></div>
      </section>

      <footer id="contact">
        <span className="contact-kicker">AVAILABLE FOR AI PRODUCT MANAGER OPPORTUNITIES</span>
        <h2>Let&apos;s build AI that earns<br />its place in the <em>workflow.</em></h2>
        <div className="contact-row"><a href="mailto:zhouzhengyu221@gmail.com">Email me ↗</a><a href="https://linkedin.com/in/zhengyu-zhou-ksgg" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`${basePath}/Zhengyu_Zhou_Resume.docx`} download>Download résumé ↓</a></div>
        <div className="footer-meta"><span>ZHENGYU ZHOU · BOSTON, MA</span><span>ENGLISH / 中文</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
