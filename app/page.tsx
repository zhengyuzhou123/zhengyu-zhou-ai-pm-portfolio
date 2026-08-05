"use client";

import { useMemo, useState } from "react";

type Segment = "SMB" | "Mid-market" | "Enterprise";
type View = "decision" | "experiments" | "evidence";

const segmentData = {
  SMB: { visitors: 42800, leads: 3424, demos: 548, wins: 82, cac: 1640, cycle: 19 },
  "Mid-market": { visitors: 24100, leads: 1446, demos: 304, wins: 61, cac: 2310, cycle: 34 },
  Enterprise: { visitors: 9200, leads: 368, demos: 96, wins: 14, cac: 7280, cycle: 73 },
};

const fmt = (value: number) => new Intl.NumberFormat("en-US").format(value);

export default function Home() {
  const [segment, setSegment] = useState<Segment>("Mid-market");
  const [view, setView] = useState<View>("decision");
  const [budget, setBudget] = useState(35);
  const [risk, setRisk] = useState(2);
  const [analyzed, setAnalyzed] = useState(true);

  const d = segmentData[segment];
  const model = useMemo(() => {
    const riskBoost = [0.65, 1, 1.38][risk - 1];
    const lift = Math.round((7 + budget * 0.19) * riskBoost);
    const extraWins = Math.max(3, Math.round(d.wins * lift / 100));
    const confidence = Math.min(93, Math.round(86 - Math.abs(budget - 35) * 0.12 - (risk - 1) * 6));
    return { lift, extraWins, confidence, pipeline: extraWins * (segment === "Enterprise" ? 52000 : segment === "Mid-market" ? 24000 : 7200) };
  }, [budget, d.wins, risk, segment]);

  const runAnalysis = () => {
    setAnalyzed(false);
    window.setTimeout(() => setAnalyzed(true), 850);
  };

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="SignalRoom home">
          <span className="brand-mark">S</span>
          <span>SignalRoom</span>
          <span className="beta">PROTOTYPE</span>
        </a>
        <div className="nav-links">
          <a href="#workspace">Demo</a>
          <a href="#case-study">Case study</a>
          <a className="nav-cta" href="mailto:zhouzhengyu221@gmail.com">Contact Zhengyu</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> AI GTM DECISION COPILOT</div>
        <h1>Turn noisy funnel data<br />into the <em>next best move.</em></h1>
        <p className="hero-copy">SignalRoom helps growth teams find the revenue leak, compare interventions, and launch a measurable experiment—with evidence attached.</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#workspace">Explore the live prototype <span>↘</span></a>
          <a className="text-link" href="#case-study">Read the product thinking <span>→</span></a>
        </div>
        <div className="principles" aria-label="Product principles">
          <div><b>01</b><span><strong>Evidence first</strong>Every claim links to a signal.</span></div>
          <div><b>02</b><span><strong>Decision, not dashboard</strong>One prioritized action at a time.</span></div>
          <div><b>03</b><span><strong>Human in control</strong>Assumptions stay visible and editable.</span></div>
        </div>
      </section>

      <section className="workspace-wrap" id="workspace">
        <div className="section-intro light">
          <span>INTERACTIVE PRODUCT DEMO</span>
          <div><h2>From signal to experiment.</h2><p>Sample data · Nimbus AI Workflow Suite · Q2 acquisition funnel</p></div>
        </div>

        <div className="app-shell">
          <header className="app-header">
            <div><span className="status-dot" /> LIVE WORKSPACE <b>/</b> Q2 Pipeline Review</div>
            <div className="data-status">Data synced 08:42 <span>✓</span></div>
          </header>

          <div className="app-body">
            <aside className="control-panel">
              <div className="control-title"><span>01</span><h3>Define the decision</h3></div>
              <label>Audience segment</label>
              <div className="segmented">
                {(Object.keys(segmentData) as Segment[]).map((s) => <button key={s} className={segment === s ? "active" : ""} onClick={() => setSegment(s)}>{s}</button>)}
              </div>

              <label>Incremental campaign budget <output>${budget}k</output></label>
              <input aria-label="Incremental campaign budget" type="range" min="10" max="80" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
              <div className="range-labels"><span>$10k</span><span>$80k</span></div>

              <label>Risk posture</label>
              <div className="risk-options">
                {["Conservative", "Balanced", "Aggressive"].map((r, i) => <button key={r} onClick={() => setRisk(i + 1)} className={risk === i + 1 ? "active" : ""}><i>{i + 1}</i><span>{r}<small>{i === 0 ? "Protect efficiency" : i === 1 ? "Optimize learning" : "Maximize upside"}</small></span></button>)}
              </div>

              <button className="analyze-btn" onClick={runAnalysis}>{analyzed ? "Re-run AI analysis" : "Analyzing signals…"}<span>{analyzed ? "↗" : "•••"}</span></button>
              <p className="prototype-note">Prototype simulation—no production AI model or customer data is used.</p>
            </aside>

            <section className={`decision-panel ${!analyzed ? "loading" : ""}`}>
              <div className="decision-top">
                <div><span className="mini-label">02 / DIAGNOSE</span><h3>{segment} funnel health</h3></div>
                <div className="confidence"><span>{model.confidence}%</span> MODEL CONFIDENCE</div>
              </div>

              <div className="funnel-metrics">
                <Metric label="Visitors" value={fmt(d.visitors)} rate="100%" />
                <Metric label="Qualified leads" value={fmt(d.leads)} rate={`${Math.round(d.leads / d.visitors * 100)}%`} alert={segment === "Enterprise"} />
                <Metric label="Demos held" value={fmt(d.demos)} rate={`${Math.round(d.demos / d.leads * 100)}%`} alert={segment === "Mid-market"} />
                <Metric label="Closed won" value={fmt(d.wins)} rate={`${Math.round(d.wins / d.demos * 100)}%`} />
              </div>

              <div className="tabs" role="tablist">
                {(["decision", "experiments", "evidence"] as View[]).map((v) => <button key={v} role="tab" aria-selected={view === v} className={view === v ? "active" : ""} onClick={() => setView(v)}>{v === "decision" ? "Recommended decision" : v === "experiments" ? "Experiment plan" : "Evidence trail"}</button>)}
              </div>

              {view === "decision" && <DecisionView segment={segment} budget={budget} model={model} cac={d.cac} cycle={d.cycle} />}
              {view === "experiments" && <ExperimentView segment={segment} />}
              {view === "evidence" && <EvidenceView segment={segment} />}
            </section>
          </div>
        </div>
      </section>

      <section className="case-study" id="case-study">
        <div className="section-intro dark">
          <span>BEHIND THE PRODUCT</span>
          <div><h2>Built around a real PM problem.</h2><p>A portfolio piece by Zhengyu Zhou</p></div>
        </div>

        <div className="case-grid">
          <article className="case-lead"><span>THE OPPORTUNITY</span><h3>Teams have more data than decisions.</h3><p>Growth tools surface dozens of metrics, while the operator still has to decide what changed, why it matters, and what to test next. SignalRoom compresses that path into a reviewable decision workflow.</p></article>
          <article><span>USER</span><h4>Growth & RevOps leads</h4><p>Analytical operators responsible for pipeline outcomes, working across marketing and sales.</p></article>
          <article><span>JOB TO BE DONE</span><h4>“Help me defend the next move.”</h4><p>When a funnel misses plan, identify the highest-leverage intervention and align the team around a test.</p></article>
          <article><span>AI ROLE</span><h4>Synthesize, simulate, explain</h4><p>AI ranks hypotheses and drafts experiments. It never hides the data, assumptions, or uncertainty.</p></article>
          <article><span>NORTH STAR</span><h4>Time to confident decision</h4><p>Primary: median time from anomaly detection to approved experiment. Guardrails: override rate and realized lift.</p></article>
        </div>

        <div className="experience-strip">
          <div><span className="big-number">200k+</span><p>customer records managed</p></div>
          <div><span className="big-number">+15%</span><p>engagement from SQL segmentation</p></div>
          <div><span className="big-number">−30%</span><p>recurring reporting time</p></div>
          <div className="bio"><span>WHY ME</span><p>I combine hands-on analytics with product judgment: segmentation, funnel analysis, experimentation, dashboards, and AI-assisted workflows.</p></div>
        </div>

        <div className="roadmap">
          <div><span>NOW / PROTOTYPE</span><p>Decision simulation, evidence trail, experiment brief</p></div>
          <div><span>NEXT / VALIDATE</span><p>5 operator interviews, benchmark time-to-decision, test trust cues</p></div>
          <div><span>LATER / SCALE</span><p>Warehouse connectors, monitored outcomes, team learning memory</p></div>
        </div>
      </section>

      <footer>
        <div><span className="footer-kicker">LET’S BUILD USEFUL AI.</span><h2>Looking for an AI Product Manager<br />who speaks data <em>and</em> decisions?</h2></div>
        <div className="footer-actions"><a href="mailto:zhouzhengyu221@gmail.com">Start a conversation ↗</a><a href="https://linkedin.com/in/zhengyu-zhou-ksgg" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <div className="footer-bottom"><span>ZHENGYU ZHOU · BOSTON, MA</span><span>DESIGNED & BUILT WITH AI · 2026</span></div>
      </footer>
    </main>
  );
}

function Metric({ label, value, rate, alert = false }: { label: string; value: string; rate: string; alert?: boolean }) {
  return <div className={alert ? "metric alert" : "metric"}><span>{label}</span><strong>{value}</strong><small><i style={{ width: `${Math.max(16, Math.min(100, Number(rate.replace("%", "")) * 3))}%` }} />{rate} conversion</small></div>;
}

function DecisionView({ segment, budget, model, cac, cycle }: { segment: Segment; budget: number; model: { lift: number; extraWins: number; confidence: number; pipeline: number }; cac: number; cycle: number }) {
  return <div className="tab-content decision-view">
    <div className="recommendation">
      <div className="rec-rank">01</div>
      <div><span>HIGHEST-LEVERAGE MOVE</span><h4>{segment === "Enterprise" ? "Tighten account qualification before adding spend" : segment === "SMB" ? "Move social proof into the first-touch journey" : "Replace generic demo follow-up with role-based proof"}</h4><p>{segment === "Mid-market" ? "Demo attendance is healthy, but post-demo momentum decays in the first 72 hours. Tailored proof by buyer role should improve progression without increasing top-of-funnel volume." : segment === "SMB" ? "High intent volume is present. The largest controllable gap is confidence before the demo request, especially for operations-led buyers." : "Low lead quality and a long sales cycle make additional volume expensive. Narrow the ICP and score buying signals before routing accounts to sales."}</p></div>
    </div>
    <div className="impact-row">
      <div><span>PROJECTED WIN LIFT</span><strong>+{model.lift}%</strong><small>range: +{Math.max(2, model.lift - 6)}–{model.lift + 7}%</small></div>
      <div><span>INCREMENTAL WINS</span><strong>+{model.extraWins}</strong><small>per quarter</small></div>
      <div><span>PIPELINE IMPACT</span><strong>${Math.round(model.pipeline / 1000)}k</strong><small>modeled, not guaranteed</small></div>
      <div><span>CURRENT CAC / CYCLE</span><strong>${fmt(cac)}</strong><small>{cycle} day sales cycle</small></div>
    </div>
    <div className="assumption"><b>Key assumption</b><span>${budget}k can be reallocated without reducing branded search coverage. Validate channel overlap before launch.</span><button onClick={() => window.alert("Prototype action: in production, this opens the editable assumptions drawer.")}>Edit</button></div>
  </div>;
}

function ExperimentView({ segment }: { segment: Segment }) {
  const steps = segment === "Enterprise" ? ["Re-score 120 open accounts", "Hold back 20% as control", "Compare SQL rate at day 21"] : segment === "SMB" ? ["Create 2 proof-led landing variants", "Split traffic 50 / 50", "Read demo conversion after 1,000 visits"] : ["Build role-based recap templates", "Randomize 50% of held demos", "Measure opportunity creation at day 14"];
  return <div className="tab-content experiment-view"><div className="experiment-header"><div><span>AI-DRAFTED TEST BRIEF</span><h4>{segment} momentum experiment</h4></div><button onClick={() => navigator.clipboard?.writeText(steps.join("\n"))}>Copy brief</button></div><div className="step-grid">{steps.map((s, i) => <div key={s}><i>{i + 1}</i><span>{["Prepare", "Run", "Decide"][i]}</span><p>{s}</p></div>)}</div><div className="guardrails"><b>Success threshold</b><span>≥ 12% relative lift with 80% directional confidence</span><b>Guardrails</b><span>Unsubscribe rate, lead quality, sales acceptance</span></div></div>;
}

function EvidenceView({ segment }: { segment: Segment }) {
  const rows = segment === "Mid-market" ? [["Post-demo progression", "−18% vs. target", "CRM funnel"], ["72-hour response gap", "43% of demos", "Sales activity"], ["Role-specific proof", "+11% in prior test", "Experiment log"]] : segment === "SMB" ? [["Landing → demo", "−14% vs. target", "GA4 funnel"], ["Proof content engaged", "2.3× intent", "Content events"], ["Operations persona", "61% of wins", "CRM segments"]] : [["MQL → SQL", "−27% vs. target", "CRM funnel"], ["Low-fit accounts", "38% of routed leads", "Lead scoring"], ["Sales cycle", "+19 days vs. plan", "Opportunity data"]];
  return <div className="tab-content evidence-view"><div className="evidence-head"><span>SIGNAL</span><span>OBSERVATION</span><span>SOURCE</span></div>{rows.map((r, i) => <div className="evidence-row" key={r[0]}><span><i>{i + 1}</i>{r[0]}</span><strong>{r[1]}</strong><small>{r[2]} ↗</small></div>)}<p className="evidence-foot">All recommendations require at least two independent signals. Conflicting evidence lowers confidence and is shown—not averaged away.</p></div>;
}
