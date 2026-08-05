export type Locale = "en" | "zh";
export type ProjectSlug = "signalroom" | "gaming-job-market-tracker" | "sec-10k-rag";

export type Project = {
  slug: ProjectSlug;
  title: string;
  seoTitle: string;
  kicker: string;
  summary: string;
  cardProblem: string;
  role: string;
  status: string;
  productType: string;
  dataType: string;
  timeline: string;
  tools: string;
  validation: string;
  skills: string[];
  learning: string;
  truthNote: string;
  completed: string[];
  planned: string[];
  context: string[];
  primaryPersona: string;
  secondaryPersonas: string[];
  jtbd: string;
  problemDetails: string[];
  aiRole: string;
  aiBoundary: string;
  hypothesis: string;
  alternatives: { name: string; decision: string }[];
  userFlow: string[];
  architecture: { label: string; owner: "Rules" | "Statistical" | "LLM" | "Human" }[];
  aiCan: string[];
  aiCannot: string[];
  mustHave: string[];
  shouldHave: string[];
  outOfScope: string[];
  metrics: { name: string; explanation: string }[];
  evaluationLabel: string;
  evaluation: string[];
  iterations: { version: string; change: string; issue: string }[];
  tradeoffs: { name: string; decision: string }[];
  reflection: {
    learned: string;
    next: string;
    realUsers: string;
    production: string;
  };
};

export const slugs: ProjectSlug[] = [
  "signalroom",
  "gaming-job-market-tracker",
  "sec-10k-rag",
];

export const siteCopy = {
  en: {
    nav: { projects: "Projects", about: "About", experience: "Experience", contact: "Contact" },
    language: "中文",
    resume: "Resume",
    status: "APPLIED BUSINESS ANALYTICS · AI PRODUCT & ANALYTICS ROLES · BOSTON / US",
    headline: <>I turn messy data<br />into <em>useful</em><br />AI products.</>,
    position: "Applied Business Analytics graduate building AI-assisted decision products, research workflows, and human-in-the-loop systems.",
    subtitle: "Product strategy, workflow automation, experimentation, and analytics—designed around evidence, constraints, and human review.",
    roles: "Open to Associate Product Manager, AI Product Analyst, Product Operations, Product Strategy, Business Analyst, and Data Analyst roles.",
    primaryCta: "View Case Studies",
    secondaryCta: "Try Live Demo",
    proofLabel: "VERIFIED EXPERIENCE",
    proofs: [
      { value: "200k+", text: "Built and maintained a customer dataset used for campaign segmentation and lifecycle analysis.", note: "Individual contribution within an internship team." },
      { value: "+15%", text: "Implemented SQL-based segmentation that supported an increase in campaign engagement.", note: "Reported internship outcome; team campaign context." },
      { value: "≈−30%", text: "Built Tableau and Grafana dashboards that reduced recurring reporting time.", note: "Approximate workflow improvement reported in project experience." },
    ],
    lensLabel: "MY PRODUCT LENS",
    lens: "Start with the decision. Show the evidence. Keep the human in control.",
    projectsLabel: "01 / SELECTED WORK",
    projectsTitle: "Three projects. Three layers of AI product judgment.",
    projectsIntro: "Strategy and decision UX · AI workflow design · Retrieval quality and evaluation",
    viewCase: "View Case Study",
    explore: "Explore Prototype",
    walkthrough: "View Product Walkthrough",
    aboutLabel: "02 / ABOUT",
    aboutKicker: "BUSINESS ANALYTICS WITH A PRODUCT BUILDER'S BIAS",
    aboutTitle: <>I connect business questions,<br /><em>evidence, and product action.</em></>,
    aboutBody: [
      "My background spans GTM and funnel analysis, customer segmentation, dashboards, financial research, and workflow automation. That foundation helps me frame ambiguous product questions in measurable terms.",
      "I am especially interested in gaming, enterprise research, and decision products where AI must expose evidence, uncertainty, and review points—not simply generate an answer.",
    ],
    howLabel: "HOW I WORK",
    how: ["Start with the user decision", "Define evidence and constraints", "Prototype the workflow", "Test failure cases", "Measure usefulness and reliability", "Keep humans in control"],
    experienceLabel: "03 / EXPERIENCE",
    experienceTitle: <>Experience across<br />the decision stack.</>,
    experienceNote: "Verified résumé experience",
    toolkitLabel: "04 / TOOLKIT",
    toolkitTitle: <>From “What does the data say?”<br />to <em>“What should we build?”</em></>,
    contactKicker: "OPEN TO AI PRODUCT, PRODUCT ANALYTICS, AND PRODUCT OPERATIONS ROLES",
    contactTitle: <>Let&apos;s build AI that earns<br />its place in the <em>workflow.</em></>,
    email: "Email",
    docx: "DOCX version",
  },
  zh: {
    nav: { projects: "项目", about: "关于", experience: "经历", contact: "联系" },
    language: "EN",
    resume: "简历",
    status: "应用商业分析 · AI 产品与分析岗位 · 美国波士顿",
    headline: <>把杂乱数据<br />变成<em>有用的</em><br />AI 产品。</>,
    position: "应用商业分析硕士，专注构建 AI 辅助决策产品、研究工作流和 Human-in-the-loop 系统。",
    subtitle: "连接产品策略、工作流自动化、实验与分析，并围绕证据、约束和人工审核进行设计。",
    roles: "正在寻找 APM、AI 产品分析、产品运营、产品策略、商业分析和数据分析岗位。",
    primaryCta: "查看案例研究",
    secondaryCta: "体验交互原型",
    proofLabel: "可验证的实践成果",
    proofs: [
      { value: "20万+", text: "构建并维护用于营销分群与生命周期分析的客户数据集。", note: "实习团队中的个人贡献。" },
      { value: "+15%", text: "实施 SQL 用户分群，支持营销活动参与度提升。", note: "实习项目记录结果，属于团队营销语境。" },
      { value: "≈−30%", text: "构建 Tableau 和 Grafana 看板，缩短周期性报告时间。", note: "项目经历中记录的近似流程改进。" },
    ],
    lensLabel: "我的产品原则",
    lens: "从决策出发，用证据说话，让人始终掌握控制权。",
    projectsLabel: "01 / 核心项目",
    projectsTitle: "三个项目，展示 AI 产品判断的三个层次。",
    projectsIntro: "产品策略与决策 UX · AI 工作流设计 · 检索质量与评估",
    viewCase: "查看案例研究",
    explore: "体验原型",
    walkthrough: "查看产品流程",
    aboutLabel: "02 / 关于",
    aboutKicker: "商业分析背景，产品构建者视角",
    aboutTitle: <>连接商业问题、<br /><em>证据与产品行动。</em></>,
    aboutBody: [
      "我的经历覆盖 GTM 与漏斗分析、客户分群、数据看板、金融研究和工作流自动化。这些基础帮助我把模糊的产品问题转化为可以衡量的决策。",
      "我尤其关注游戏、企业研究和决策类产品：AI 需要展示证据、不确定性和人工审核节点，而不只是生成一个答案。",
    ],
    howLabel: "我的工作方式",
    how: ["从用户决策开始", "定义证据和约束", "快速构建工作流原型", "测试失败场景", "衡量有用性与可靠性", "保留人工控制权"],
    experienceLabel: "03 / 经历",
    experienceTitle: <>贯穿完整<br />决策链路的实践。</>,
    experienceNote: "简历可验证经历",
    toolkitLabel: "04 / 能力组合",
    toolkitTitle: <>从“数据说明什么？”<br />到<em>“我们应该构建什么？”</em></>,
    contactKicker: "正在寻找 AI 产品、产品分析和产品运营岗位",
    contactTitle: <>一起构建真正融入<br />工作流的 <em>AI 产品。</em></>,
    email: "发送邮件",
    docx: "DOCX 版本",
  },
} as const;

export const experienceCopy = {
  en: [
    { period: "2026 — NOW", company: "Lions Financial", role: "Business Advisory & Risk Management Intern", summary: "Built GTM conversion recommendations, financial models, and AI-assisted workflows for recurring market research.", tags: ["GTM strategy", "GA4", "Python", "Financial modeling"] },
    { period: "2025", company: "Bolun Bole Clothing Co.", role: "Business Analyst Intern", summary: "Managed 200k+ customer records; implemented SQL segmentation associated with a reported 15% campaign engagement increase.", tags: ["SQL", "Segmentation", "A/B testing", "Lifecycle analytics"] },
    { period: "2024", company: "Apexus-Tech", role: "Business Analyst Intern", summary: "Built Tableau and Grafana dashboards that reduced recurring reporting time by approximately 30%.", tags: ["Tableau", "Grafana", "Data infrastructure", "Predictive models"] },
  ],
  zh: [
    { period: "2026 — 至今", company: "Lions Financial", role: "商业咨询与风险管理实习生", summary: "负责 GTM 转化建议、财务模型与 AI 辅助工作流，用于周期性市场研究。", tags: ["GTM 策略", "GA4", "Python", "财务建模"] },
    { period: "2025", company: "Bolun Bole Clothing Co.", role: "商业分析实习生", summary: "管理 20 万+客户数据；实施 SQL 分群，与项目记录的 15% 活动参与度提升相关。", tags: ["SQL", "用户分群", "A/B 测试", "生命周期分析"] },
    { period: "2024", company: "Apexus-Tech", role: "商业分析实习生", summary: "构建 Tableau 与 Grafana 看板，将周期性报告时间缩短约 30%。", tags: ["Tableau", "Grafana", "数据基础设施", "预测模型"] },
  ],
} as const;

const signalroomEn: Project = {
  slug: "signalroom",
  title: "SignalRoom",
  seoTitle: "SignalRoom Case Study | AI Decision Support Product",
  kicker: "AI GTM DECISION COPILOT",
  summary: "A functional portfolio prototype that turns synthetic GTM funnel signals into reviewable decision options.",
  cardProblem: "Dashboards show what changed; operators still have to assemble evidence and defend the next action.",
  role: "Product strategy, UX, prototype implementation",
  status: "Functional portfolio prototype",
  productType: "Decision-support product",
  dataType: "Synthetic GTM funnel data",
  timeline: "2026 · Iterative prototype",
  tools: "Next.js, React, TypeScript, product analytics",
  validation: "Interaction implemented · Evaluation planned",
  skills: ["Product strategy", "Decision UX", "Experimentation", "Human review"],
  learning: "Make evidence and assumptions first-class product objects—not hidden model context.",
  truthNote: "Confidence scores, projected lift, visitor counts, and extra wins are illustrative interface values. They are not production predictions or customer results.",
  completed: ["Interactive segment and budget controls", "Recommendation, assumption, and outcome framing", "Responsive front-end prototype"],
  planned: ["Real data connectors", "Evidence retrieval", "Reviewer study", "Outcome tracking"],
  context: ["GTM teams work across analytics, CRM, campaign, and research tools.", "Traditional dashboards reveal movement but rarely structure the decision that follows.", "The product opportunity is a shorter, reviewable path from signal to action."],
  primaryPersona: "Growth manager accountable for pipeline outcomes",
  secondaryPersonas: ["Marketing operations manager", "Revenue operations analyst"],
  jtbd: "When a campaign or funnel metric changes unexpectedly, I want to understand why it happened and evaluate possible actions, so I can make a confident decision without manually reviewing multiple dashboards.",
  problemDetails: ["Operators inspect several dashboards and export evidence manually.", "Different teams interpret the same signal differently.", "Recommendations can lose their source evidence and assumptions.", "A dashboard is descriptive; the job is comparative and decision-oriented."],
  aiRole: "Synthesize signals, draft hypotheses, compare actions, and explain trade-offs.",
  aiBoundary: "AI must not launch campaigns, hide uncertainty, or present simulated lift as fact.",
  hypothesis: "If a decision-support system combines anomaly detection, evidence synthesis, scenario comparison, and human approval, GTM teams can reduce time to confident decision without increasing unsupported recommendations.",
  alternatives: [
    { name: "Traditional BI dashboard", decision: "Strong for monitoring; weak at structuring next-step trade-offs." },
    { name: "Weekly automated report", decision: "Useful summary, but too slow and static for active decisions." },
    { name: "Chatbot interface", decision: "Flexible, but can hide evidence and encourage unsupported answers." },
    { name: "Rules-based alerts", decision: "Reliable triggers, but limited synthesis and scenario comparison." },
    { name: "Decision copilot", decision: "Selected because it combines structure, evidence, options, and approval." },
  ],
  userFlow: ["Select decision context", "Detect meaningful change", "Summarize relevant evidence", "Generate multiple options", "Display assumptions", "Review confidence and evidence", "Approve, edit, or reject", "Track outcome"],
  architecture: [
    { label: "Data sources", owner: "Rules" }, { label: "Data validation", owner: "Rules" }, { label: "Anomaly detection", owner: "Statistical" }, { label: "Context retrieval", owner: "Rules" }, { label: "Recommendation generation", owner: "LLM" }, { label: "Evidence & assumptions", owner: "LLM" }, { label: "Confidence calibration", owner: "Statistical" }, { label: "Human review", owner: "Human" }, { label: "Outcome tracking", owner: "Rules" },
  ],
  aiCan: ["Summarize signals", "Compare possible actions", "Draft hypotheses", "Explain trade-offs", "Surface evidence"],
  aiCannot: ["Automatically launch campaigns", "Present simulated lift as fact", "Hide uncertainty", "Make irreversible decisions", "Generate unsupported claims"],
  mustHave: ["Evidence-backed recommendations", "Visible assumptions", "Human approval", "Confidence indicators", "Editable recommendations"],
  shouldHave: ["Historical outcome comparison", "Team comments", "Scenario simulation", "Decision log"],
  outOfScope: ["Autonomous campaign execution", "Real-time bidding", "Production CRM integration", "Causal claims without sufficient data"],
  metrics: [
    { name: "North star: Time to confident decision", explanation: "Measures elapsed time from detected signal to an approved next action." },
    { name: "Recommendation acceptance rate", explanation: "Shows whether recommendations are useful enough to act on." },
    { name: "Recommendation override rate", explanation: "Reveals where users correct or replace the proposed action." },
    { name: "Unsupported claim rate", explanation: "Tracks claims that cannot be traced to supplied evidence." },
    { name: "Evidence coverage", explanation: "Measures how much of a recommendation is supported by cited inputs." },
    { name: "Task completion rate", explanation: "Confirms users can finish the decision workflow without assistance." },
    { name: "Decision follow-through", explanation: "Checks whether approved experiments are actually launched and reviewed." },
    { name: "User-reported confidence", explanation: "Captures whether the workflow improves confidence without creating false certainty." },
  ],
  evaluationLabel: "Planned evaluation — no study results are claimed",
  evaluation: ["Create 20 representative GTM scenarios", "Define expected evidence for each scenario", "Compare the prototype with a baseline dashboard workflow", "Ask reviewers to score usefulness, groundedness, clarity, and actionability", "Measure unsupported claim rate", "Track edits, overrides, and rejections"],
  iterations: [
    { version: "V1", change: "Generic dashboard summaries", issue: "Recommendations were vague and disconnected from evidence." },
    { version: "V2", change: "Evidence cards and explicit assumptions", issue: "Users still could not compare alternatives." },
    { version: "V3", change: "Scenario comparison, confidence indicators, and approval", issue: "Current prototype; calibration and user testing remain planned." },
  ],
  tradeoffs: [
    { name: "Speed vs reliability", decision: "Prefer a slower evidence check over instant unsupported guidance." },
    { name: "Automation vs human control", decision: "Automate synthesis; require approval for consequential action." },
    { name: "Simple UI vs evidence depth", decision: "Progressively disclose evidence instead of hiding it." },
    { name: "Confidence vs false precision", decision: "Treat confidence as a calibration aid, never a factual probability without evaluation." },
  ],
  reflection: { learned: "Decision support needs explicit evidence, assumptions, and reversible actions.", next: "Test whether multiple options improve decisions or increase cognitive load.", realUsers: "Interview growth operators and observe a live weekly pipeline review.", production: "Validated connectors, access controls, monitoring, calibrated scoring, and a decision audit log." },
};

const gamingEn: Project = {
  slug: "gaming-job-market-tracker",
  title: "Gaming Job Market Tracker",
  seoTitle: "Gaming Job Market Tracker | AI Workflow Case Study",
  kicker: "AI-ASSISTED DATA WORKFLOW",
  summary: "A workflow prototype for collecting, structuring, validating, and analyzing gaming-industry job postings.",
  cardProblem: "Gaming job data is fragmented, inconsistent, and difficult for international candidates to compare.",
  role: "Workflow design, schema definition, validation UX",
  status: "Workflow prototype",
  productType: "AI-assisted research workflow",
  dataType: "Synthetic sample postings in this portfolio",
  timeline: "2026 · Early-stage concept",
  tools: "Python workflow design, LLM extraction, Pydantic schema, dashboard UX",
  validation: "Front-end walkthrough · Pipeline evaluation planned",
  skills: ["Structured extraction", "Validation", "Data normalization", "Responsible AI"],
  learning: "LLM extraction becomes useful only when schema validation and a human review queue are part of the product.",
  truthNote: "The portfolio walkthrough uses synthetic job postings and illustrative sponsorship signals. It does not scrape live job boards or make immigration eligibility claims.",
  completed: ["Workflow and schema design", "Validation states", "Portfolio walkthrough", "Responsible-use boundaries"],
  planned: ["Live ingestion", "Source permissions review", "Extraction benchmark", "Reviewer queue analytics"],
  context: ["Gaming roles are spread across studio, publisher, platform, and agency sites.", "Job titles, locations, seniority, and sponsorship language are inconsistent.", "International candidates need searchable signals while preserving uncertainty and source context."],
  primaryPersona: "International graduate targeting gaming-industry roles",
  secondaryPersonas: ["University career advisor", "Gaming labor-market researcher"],
  jtbd: "When I review gaming job postings, I want consistent fields and clearly qualified sponsorship signals, so I can prioritize applications without rereading every posting manually.",
  problemDetails: ["Manual copying produces inconsistent fields.", "Free-text sponsorship language is ambiguous.", "Duplicate postings distort trend analysis.", "LLM extraction can confidently normalize the wrong value."],
  aiRole: "Extract candidate fields, suggest normalized labels, and flag uncertain records.",
  aiBoundary: "AI must not infer visa eligibility, fabricate missing requirements, or remove source text needed for review.",
  hypothesis: "If LLM extraction is constrained by a typed schema, deterministic validation, and a manual review queue, users can build a more useful job-market dataset without hiding uncertainty.",
  alternatives: [
    { name: "Manual spreadsheet", decision: "Transparent but slow and inconsistent at scale." },
    { name: "Keyword-only parser", decision: "Reliable for exact phrases, weak across varied posting language." },
    { name: "Unvalidated LLM extraction", decision: "Flexible but difficult to trust or audit." },
    { name: "LLM + schema + review queue", decision: "Selected to combine flexibility with visible controls." },
  ],
  userFlow: ["Collect permitted posting", "Preserve raw text and source", "Extract structured fields", "Validate schema", "Normalize controlled values", "Flag low-confidence fields", "Human reviews exceptions", "Publish aggregate dashboard"],
  architecture: [
    { label: "Raw posting", owner: "Rules" }, { label: "Source deduplication", owner: "Rules" }, { label: "Field extraction", owner: "LLM" }, { label: "Pydantic validation", owner: "Rules" }, { label: "Normalization", owner: "Rules" }, { label: "Confidence flag", owner: "Statistical" }, { label: "Review queue", owner: "Human" }, { label: "Clean database", owner: "Rules" }, { label: "Trend dashboard", owner: "Rules" },
  ],
  aiCan: ["Extract explicit fields", "Suggest normalized categories", "Highlight sponsorship language", "Summarize hiring patterns", "Route uncertain records"],
  aiCannot: ["Determine legal eligibility", "Invent missing salary or location", "Ignore source terms", "Treat an absent phrase as definite no-sponsorship", "Publish low-confidence records without review"],
  mustHave: ["Raw source preservation", "Typed extraction schema", "Validation errors", "Manual review queue", "Uncertainty flags"],
  shouldHave: ["Duplicate detection", "Taxonomy management", "Change history", "Aggregate trend views"],
  outOfScope: ["Automated applications", "Immigration advice", "Private-source scraping", "Candidate ranking"],
  metrics: [
    { name: "Schema pass rate", explanation: "Share of extracted records that satisfy required types and controlled values." },
    { name: "Field-level precision", explanation: "How often extracted values match a reviewed reference set." },
    { name: "Review queue rate", explanation: "How many records require human correction before use." },
    { name: "Normalization consistency", explanation: "Whether equivalent titles and locations map to the same taxonomy." },
    { name: "Source coverage", explanation: "Share of retained records with a traceable source and captured date." },
    { name: "Time per reviewed posting", explanation: "Compares assisted review with a manual spreadsheet baseline." },
  ],
  evaluationLabel: "Planned evaluation — synthetic benchmark first",
  evaluation: ["Create a labeled set of 100 permitted or synthetic postings", "Define field-level expected values", "Measure precision and schema failures by field", "Review sponsorship false positives separately", "Track correction time and reviewer disagreement", "Audit whether every dashboard record retains source context"],
  iterations: [
    { version: "V1", change: "Keyword extraction into a spreadsheet", issue: "Missed varied language and created inconsistent categories." },
    { version: "V2", change: "LLM extraction with a typed schema", issue: "Valid JSON could still contain semantically wrong values." },
    { version: "V3", change: "Confidence flags, normalization, and review queue", issue: "Current design; benchmark and live ingestion remain planned." },
  ],
  tradeoffs: [
    { name: "Coverage vs permission", decision: "Prefer fewer permitted sources over broad scraping without clear rights." },
    { name: "Automation vs correctness", decision: "Route ambiguous sponsorship fields to human review." },
    { name: "Normalization vs nuance", decision: "Keep both normalized values and original source text." },
    { name: "Personalization vs responsible use", decision: "Provide search signals, not eligibility or hiring predictions." },
  ],
  reflection: { learned: "The review queue is a core product surface, not a failure fallback.", next: "Benchmark extraction error by field and source type.", realUsers: "Observe how international students interpret ambiguous sponsorship language.", production: "Source permission controls, scheduled ingestion, reviewer governance, retention policy, and monitoring for taxonomy drift." },
};

const secEn: Project = {
  slug: "sec-10k-rag",
  title: "SEC 10-K RAG",
  seoTitle: "SEC 10-K RAG | Trustworthy AI Research Case Study",
  kicker: "EVIDENCE-GROUNDED RESEARCH ASSISTANT",
  summary: "A trustworthy-AI product concept for section-aware retrieval and citation-based answers over selected SEC 10-K content.",
  cardProblem: "Generic document chat can retrieve the wrong section, lose table-of-contents boundaries, and answer without verifiable evidence.",
  role: "Product requirements, retrieval design, evaluation framework",
  status: "Concept + evaluation design",
  productType: "Enterprise research assistant",
  dataType: "No filing corpus is shipped in this portfolio",
  timeline: "2026 · Product concept",
  tools: "RAG architecture, section parsing, citations, evaluation design",
  validation: "Architecture specified · Benchmark not yet run",
  skills: ["RAG product design", "Retrieval quality", "Evaluation", "Trustworthy AI"],
  learning: "For enterprise research, abstention and section boundaries are product features—not backend details.",
  truthNote: "This page documents a product and evaluation design. It does not claim a deployed RAG system, filing-level accuracy, or completed benchmark results.",
  completed: ["Product requirements", "Section-aware architecture", "Failure taxonomy", "Evaluation plan"],
  planned: ["SEC filing parser", "Reference corpus", "Retrieval benchmark", "Human analyst study"],
  context: ["Analysts repeatedly inspect Item 6, 7, 7A, and 8 for financial and risk context.", "Long filings contain repeated headings, tables of contents, and cross-references that confuse naive chunking.", "Answers must be traceable to the correct filing section and easy to verify."],
  primaryPersona: "Research analyst reviewing company performance and risk disclosures",
  secondaryPersonas: ["Corporate strategy analyst", "Due diligence associate"],
  jtbd: "When I ask a question about a 10-K, I want the answer grounded in the correct filing section with citations, so I can verify the evidence without reading unrelated chunks.",
  problemDetails: ["Table-of-contents headings can be mistaken for real sections.", "Generic chunking can mix Item 7 with Item 7A or Item 8.", "High semantic similarity does not guarantee the correct section.", "A fluent answer can hide weak or incomplete evidence."],
  aiRole: "Synthesize retrieved evidence, explain limitations, and draft citation-linked answers.",
  aiBoundary: "AI must abstain when evidence is missing, never cross section boundaries silently, and never replace analyst verification.",
  hypothesis: "If retrieval is section-aware, citations are mandatory, and abstention is evaluated, analysts can review selected 10-K questions faster without increasing unsupported answers.",
  alternatives: [
    { name: "PDF keyword search", decision: "Precise for known terms, weak for synthesis and related concepts." },
    { name: "Generic document chatbot", decision: "Fast to build, but section leakage and weak citations reduce trust." },
    { name: "Full-document semantic RAG", decision: "Improves recall but can retrieve the wrong filing section." },
    { name: "Section-aware RAG", decision: "Selected to constrain retrieval before generation and preserve auditability." },
  ],
  userFlow: ["Upload or select filing", "Remove table of contents", "Extract Items 6/7/7A/8", "Chunk within section boundaries", "Ask research question", "Retrieve section-qualified evidence", "Generate cited answer or abstain", "Analyst verifies source"],
  architecture: [
    { label: "10-K filing", owner: "Rules" }, { label: "TOC removal", owner: "Rules" }, { label: "Section extraction", owner: "Rules" }, { label: "Section-aware chunks", owner: "Rules" }, { label: "Embedding & index", owner: "Statistical" }, { label: "Qualified retrieval", owner: "Statistical" }, { label: "Cited synthesis", owner: "LLM" }, { label: "Grounding checks", owner: "Rules" }, { label: "Analyst verification", owner: "Human" },
  ],
  aiCan: ["Synthesize retrieved passages", "Explain conflicting evidence", "Draft citation-linked answers", "State coverage limits", "Abstain when support is insufficient"],
  aiCannot: ["Use uncited claims", "Retrieve across excluded sections", "Invent financial figures", "Present incomplete coverage as comprehensive", "Replace analyst sign-off"],
  mustHave: ["Section-aware extraction", "Citation on every material claim", "Source passage view", "Abstention state", "Human verification"],
  shouldHave: ["Coverage indicator", "Query history", "Cross-filing comparison", "Reviewer feedback labels"],
  outOfScope: ["Investment recommendations", "Real-time market data", "All SEC form types", "Autonomous research publication"],
  metrics: [
    { name: "Groundedness", explanation: "Share of answer claims supported by the cited passages." },
    { name: "Retrieval precision", explanation: "Share of retrieved chunks that are relevant to the question and target section." },
    { name: "Coverage", explanation: "Whether the retrieved evidence includes the material facts needed for the answer." },
    { name: "Section leakage rate", explanation: "How often retrieval includes chunks outside the allowed filing section." },
    { name: "Hallucination rate", explanation: "Share of material claims unsupported by the retrieved evidence." },
    { name: "Citation correctness", explanation: "Whether each citation points to the passage that supports the associated claim." },
    { name: "Abstention quality", explanation: "Whether the system declines appropriately when evidence is insufficient." },
  ],
  evaluationLabel: "Planned evaluation — no accuracy results are claimed",
  evaluation: ["Select filings and questions across Items 6, 7, 7A, and 8", "Create analyst-reviewed expected evidence", "Test TOC removal and section boundary accuracy", "Measure retrieval precision, coverage, and leakage", "Score answer groundedness and citation correctness", "Track hallucinations, false answers, and missed abstentions"],
  iterations: [
    { version: "V1", change: "Whole-document vector search", issue: "Relevant language from the wrong section could rank highly." },
    { version: "V2", change: "Section metadata filters and TOC removal", issue: "Answers still needed stronger citation and abstention behavior." },
    { version: "V3", change: "Claim-level citations, coverage checks, and human verification", issue: "Current design; corpus implementation and benchmark remain planned." },
  ],
  tradeoffs: [
    { name: "Recall vs section precision", decision: "Constrain retrieval first, then show when coverage may be incomplete." },
    { name: "Answer completeness vs abstention", decision: "Prefer a scoped answer or abstention over unsupported completeness." },
    { name: "Chunk size vs citation clarity", decision: "Use section-aware chunks small enough to verify but large enough to preserve context." },
    { name: "Automation vs analyst control", decision: "Require source inspection before export or downstream use." },
  ],
  reflection: { learned: "RAG quality is a workflow and evaluation problem, not just a retrieval configuration.", next: "Implement a small reference corpus and test boundary failures before tuning generation.", realUsers: "Observe analysts verifying citations and identify where source views create friction.", production: "Licensed data handling, parser monitoring, access control, evaluation gates, model-change regression tests, and audit logs." },
};

function translateProject(project: Project, overrides: Partial<Project>): Project {
  return { ...project, ...overrides };
}

const signalroomZh = translateProject(signalroomEn, {
  seoTitle: "SignalRoom 案例研究 | AI 决策支持产品",
  kicker: "AI GTM 决策助手",
  summary: "一个使用模拟 GTM 漏斗数据，将信号转化为可审核决策方案的功能型作品集原型。",
  cardProblem: "仪表盘可以显示变化，但业务人员仍需手工整理证据并证明下一步行动。",
  role: "产品策略、UX、原型开发",
  status: "功能型作品集原型",
  productType: "决策支持产品",
  dataType: "模拟 GTM 漏斗数据",
  timeline: "2026 · 迭代原型",
  tools: "Next.js、React、TypeScript、产品分析",
  validation: "交互已实现 · 评估待进行",
  skills: ["产品策略", "决策 UX", "实验设计", "人工审核"],
  learning: "证据和假设应该成为产品中的一等对象，而不是隐藏的模型上下文。",
  truthNote: "置信度、预计提升、访客数和新增成交均为界面演示数据，不是生产预测或客户结果。",
  completed: ["客户类型与预算交互", "建议、假设和结果框架", "响应式前端原型"],
  planned: ["真实数据连接", "证据检索", "评审者测试", "结果追踪"],
  context: ["GTM 团队需要在分析、CRM、营销活动和研究工具之间工作。", "传统仪表盘可以显示指标变化，却很少组织后续决策。", "产品机会是缩短从信号到可审核行动的路径。"],
  primaryPersona: "对管道结果负责的增长经理",
  secondaryPersonas: ["营销运营经理", "营收运营分析师"],
  jtbd: "当营销活动或漏斗指标出现意外变化时，我希望理解原因并比较可行行动，从而无需手工检查多个仪表盘也能做出可信决策。",
  problemDetails: ["业务人员需要检查多个仪表盘并手工导出证据。", "不同团队对同一信号可能得出不同解释。", "建议容易失去来源证据和关键假设。", "仪表盘描述发生了什么，而用户真正需要的是比较和决策。"],
  aiRole: "汇总信号、起草假设、比较行动并解释取舍。",
  aiBoundary: "AI 不得自动启动营销活动、隐藏不确定性或把模拟提升当作事实。",
  hypothesis: "如果决策支持系统结合异常检测、证据汇总、方案比较和人工批准，GTM 团队可以缩短做出可信决策的时间，同时不增加无依据建议。",
  alternatives: [
    { name: "传统 BI 看板", decision: "适合监控，但难以组织下一步行动的取舍。" }, { name: "每周自动报告", decision: "可以总结，但对正在发生的决策过慢且静态。" }, { name: "聊天机器人", decision: "灵活，但可能隐藏证据并诱发无依据回答。" }, { name: "规则告警", decision: "触发可靠，但综合和方案比较能力有限。" }, { name: "决策助手", decision: "最终选择：把结构、证据、备选方案和审批结合起来。" },
  ],
  userFlow: ["选择决策场景", "识别有意义的变化", "汇总相关证据", "生成多个方案", "展示关键假设", "审核置信度与证据", "批准、编辑或拒绝", "追踪结果"],
  architecture: [{ label: "数据源", owner: "Rules" }, { label: "数据验证", owner: "Rules" }, { label: "异常检测", owner: "Statistical" }, { label: "上下文检索", owner: "Rules" }, { label: "生成建议", owner: "LLM" }, { label: "证据与假设", owner: "LLM" }, { label: "置信度校准", owner: "Statistical" }, { label: "人工审核", owner: "Human" }, { label: "结果追踪", owner: "Rules" }],
  aiCan: ["汇总信号", "比较可行行动", "起草假设", "解释取舍", "呈现证据"],
  aiCannot: ["自动启动营销活动", "把模拟提升当作事实", "隐藏不确定性", "做出不可逆决策", "生成无依据结论"],
  mustHave: ["有证据支持的建议", "可见的假设", "人工批准", "置信度提示", "可编辑建议"],
  shouldHave: ["历史结果比较", "团队评论", "场景模拟", "决策日志"],
  outOfScope: ["全自动营销执行", "实时竞价", "生产级 CRM 集成", "数据不足时声称因果关系"],
  metrics: [{ name: "北极星：做出可信决策的时间", explanation: "衡量从发现信号到批准下一步行动的用时。" }, { name: "建议采纳率", explanation: "反映建议是否有足够价值让用户采取行动。" }, { name: "建议覆盖率", explanation: "显示用户纠正或替换建议的频率。" }, { name: "无依据结论率", explanation: "追踪无法从输入证据中找到来源的结论。" }, { name: "证据覆盖度", explanation: "衡量建议中有多少内容得到引用输入的支持。" }, { name: "任务完成率", explanation: "确认用户能否无需帮助完成决策流程。" }, { name: "决策执行率", explanation: "检查获批实验是否真正上线并复盘。" }, { name: "用户自评信心", explanation: "判断流程是否提升信心且没有制造虚假确定性。" }],
  evaluationLabel: "计划评估 — 当前不声称已有研究结果",
  evaluation: ["创建 20 个代表性 GTM 场景", "为每个场景定义预期证据", "与基础看板流程进行对照", "由评审者对有用性、依据充分度、清晰度和可行动性评分", "衡量无依据结论率", "追踪编辑、覆盖与拒绝行为"],
  iterations: [{ version: "V1", change: "通用看板摘要", issue: "建议模糊且与证据脱节。" }, { version: "V2", change: "证据卡片与显式假设", issue: "用户仍无法比较不同方案。" }, { version: "V3", change: "场景比较、置信度与人工批准", issue: "当前原型；校准和用户测试仍待进行。" }],
  tradeoffs: [{ name: "速度 vs 可靠性", decision: "宁可增加一次证据检查，也不提供即时但无依据的建议。" }, { name: "自动化 vs 人工控制", decision: "自动综合信息；重要行动必须人工批准。" }, { name: "简洁界面 vs 证据深度", decision: "渐进式展示证据，而不是隐藏证据。" }, { name: "置信度 vs 虚假精确", decision: "在完成评估前，置信度仅作为校准提示，不是事实概率。" }],
  reflection: { learned: "决策支持需要明确证据、假设和可逆行动。", next: "测试多方案比较是改善决策还是增加认知负担。", realUsers: "访谈增长运营人员并观察真实的每周管道复盘。", production: "需要验证过的数据连接、权限、监控、校准评分和决策审计日志。" },
});

const gamingZh = translateProject(gamingEn, {
  seoTitle: "游戏行业职位追踪器 | AI 工作流案例研究",
  kicker: "AI 辅助数据工作流",
  summary: "用于采集、结构化、验证和分析游戏行业职位信息的工作流原型。",
  cardProblem: "游戏行业职位信息分散且格式不一致，国际候选人难以有效比较。",
  role: "工作流设计、数据结构定义、验证 UX",
  status: "工作流原型",
  productType: "AI 辅助研究工作流",
  dataType: "作品集中使用模拟职位信息",
  timeline: "2026 · 早期概念",
  tools: "Python 工作流、LLM 抽取、Pydantic 数据结构、看板 UX",
  validation: "前端流程演示 · 管道评估待进行",
  skills: ["结构化抽取", "数据验证", "数据标准化", "负责任 AI"],
  learning: "只有把数据结构验证和人工复核队列作为产品的一部分，LLM 抽取才真正有用。",
  truthNote: "作品集流程使用模拟职位和示意性的签证支持信号，不抓取实时招聘网站，也不提供移民资格判断。",
  completed: ["工作流与数据结构设计", "验证状态", "作品集流程演示", "负责任使用边界"],
  planned: ["实时采集", "来源权限审查", "抽取基准测试", "复核队列分析"],
  context: ["游戏职位分散在工作室、发行商、平台和代理机构网站。", "职位名称、地点、级别和签证支持语言并不统一。", "国际候选人需要可搜索的信号，同时保留不确定性和原始上下文。"],
  primaryPersona: "寻找游戏行业岗位的国际毕业生",
  secondaryPersonas: ["大学职业顾问", "游戏劳动力市场研究人员"],
  jtbd: "当我查看游戏行业职位时，希望获得一致字段和带有不确定性说明的签证支持信号，从而无需逐条重读也能确定申请优先级。",
  problemDetails: ["手工复制会产生不一致字段。", "签证支持的自然语言表达通常模糊。", "重复职位会扭曲趋势分析。", "LLM 可能非常自信地标准化出错误值。"],
  aiRole: "抽取候选字段、建议标准标签并标记不确定记录。",
  aiBoundary: "AI 不得判断签证资格、编造缺失要求或删除复核所需的原文。",
  hypothesis: "如果使用类型化数据结构、确定性验证和人工复核队列约束 LLM 抽取，用户可以建立更有用的职位数据集，同时不隐藏不确定性。",
  alternatives: [{ name: "手工表格", decision: "透明但速度慢，字段也容易不一致。" }, { name: "关键词抓取", decision: "确定性较强，但很难理解多样化的职位表达。" }, { name: "仅用 LLM 抽取", decision: "覆盖广，但缺少数据结构和复核会造成隐性错误。" }, { name: "LLM + 数据结构 + 人工复核", decision: "最终选择：兼顾抽取覆盖、确定性验证和人工判断。" }],
  userFlow: ["导入获准使用的职位页面", "保存原文和来源", "LLM 抽取候选字段", "Pydantic 验证数据结构", "标准化公司、地点和技能", "标记低置信度字段", "人工复核", "发布至分析看板"],
  architecture: [{ label: "获准来源", owner: "Rules" }, { label: "原文存档", owner: "Rules" }, { label: "字段抽取", owner: "LLM" }, { label: "Pydantic 验证", owner: "Rules" }, { label: "实体标准化", owner: "Rules" }, { label: "置信度标记", owner: "Statistical" }, { label: "复核队列", owner: "Human" }, { label: "清洗数据库", owner: "Rules" }, { label: "趋势看板", owner: "Human" }],
  aiCan: ["抽取明确字段", "建议标准标签", "识别模糊措辞", "把记录送入复核队列", "汇总招聘趋势"],
  aiCannot: ["确定签证资格", "把未说明解释为不支持", "绕过来源条款", "删除原始文本", "把推断当作招聘承诺"],
  mustHave: ["带类型的数据结构", "原文可追溯", "验证错误处理", "人工复核队列", "不确定性标签"],
  shouldHave: ["去重", "来源质量评分", "按时间比较趋势", "用户反馈纠正"],
  outOfScope: ["法律或移民建议", "自动提交申请", "未授权抓取", "对候选人进行排序"],
  metrics: [{ name: "字段抽取准确率", explanation: "按字段和来源对照人工标注参考集。" }, { name: "数据结构验证通过率", explanation: "显示模型输出满足类型约束的频率。" }, { name: "人工纠正率", explanation: "揭示哪些字段仍需复核者频繁干预。" }, { name: "低置信度召回率", explanation: "检查模糊记录是否真正进入复核队列。" }, { name: "重复记录率", explanation: "控制重复职位对趋势分析造成的偏差。" }, { name: "来源覆盖率", explanation: "衡量目标游戏公司或职位板块的代表性。" }, { name: "从导入到发布的时间", explanation: "衡量工作流效率，但不牺牲质量。" }, { name: "不确定性保留率", explanation: "确认模糊的签证支持信号没有被错误变成确定标签。" }],
  evaluationLabel: "计划评估 — 先使用模拟基准集",
  evaluation: ["建立 100 条去标识化模拟职位的标注集", "定义职位、地点、技能、级别和签证信号标准", "按字段衡量 precision、recall 与数据结构错误", "分别测试明确、模糊和缺失的签证措辞", "记录人工修正和复核耗时", "在任何实时采集前审查来源权限"],
  iterations: [{ version: "V1", change: "把 LLM 输出直接写入表格", issue: "格式不一致，也无法区分缺失与不确定。" }, { version: "V2", change: "Pydantic 数据结构与标准化规则", issue: "有效但模糊的记录需要显式复核路径。" }, { version: "V3", change: "置信度标记、人工队列和原文并排展示", issue: "当前设计；基准测试和看板仍待实现。" }],
  tradeoffs: [{ name: "自动化速度 vs 数据完整性", decision: "验证失败就停止记录，而不是静默填充。" }, { name: "标准化 vs 细节", decision: "同时保存标准字段和原始表达。" }, { name: "覆盖率 vs 来源许可", decision: "宁可减少来源，也不使用不清晰的数据权限。" }, { name: "有用信号 vs 法律判断", decision: "把签证支持作为可验证文本信号，而非资格建议。" }],
  reflection: { learned: "复核队列是核心产品界面，而不是失败后的备用方案。", next: "按字段和来源类型评估抽取错误。", realUsers: "观察国际学生如何理解模糊的签证支持语言。", production: "需要来源权限、定时采集、复核治理、数据保留规则和分类漂移监控。" },
});

const secZh = translateProject(secEn, {
  seoTitle: "SEC 10-K RAG | 可信 AI 研究案例",
  kicker: "证据驱动的研究助手",
  summary: "针对 SEC 10-K 指定章节进行分区检索和引用式回答的可信 AI 产品概念。",
  cardProblem: "通用文档聊天可能检索错误章节、混淆目录边界，并给出没有可验证证据的回答。",
  role: "产品需求、检索设计、评估框架",
  status: "产品概念 + 评估设计",
  productType: "企业研究助手",
  dataType: "作品集中未包含真实申报文件语料库",
  timeline: "2026 · 产品概念",
  tools: "RAG 架构、章节解析、引用、评估设计",
  validation: "架构已定义 · 基准测试未运行",
  skills: ["RAG 产品设计", "检索质量", "评估", "可信 AI"],
  learning: "对企业研究产品而言，拒答和章节边界是产品功能，而不只是后端细节。",
  truthNote: "本页记录产品和评估设计，不声称系统已部署，也不声称已有申报文件准确率或基准测试结果。",
  completed: ["产品需求", "章节感知架构", "失败类型", "评估计划"],
  planned: ["SEC 文件解析器", "参考语料库", "检索基准测试", "分析师用户研究"],
  context: ["分析师会反复查看 Item 6、7、7A 和 8，以理解财务表现和风险。", "长篇申报文件包含重复标题、目录和交叉引用，容易干扰简单分块。", "回答必须可以追溯到正确章节，并方便人工验证。"],
  primaryPersona: "审查公司表现和风险披露的研究分析师",
  secondaryPersonas: ["企业战略分析师", "尽调分析人员"],
  jtbd: "当我询问 10-K 内容时，希望回答基于正确章节并附带引用，从而无需阅读无关片段也能验证证据。",
  problemDetails: ["目录标题可能被误认为真实章节。", "通用分块可能混合 Item 7、7A 或 8。", "高语义相似度并不代表检索到了正确章节。", "流畅的回答可能掩盖证据薄弱或覆盖不完整。"],
  aiRole: "综合检索证据、解释限制并起草带引用的回答。",
  aiBoundary: "证据不足时必须拒答，不得静默跨越章节边界，也不能替代分析师验证。",
  hypothesis: "如果检索具备章节约束、强制引用并评估拒答，分析师可以更快处理指定 10-K 问题，同时不增加无依据回答。",
  alternatives: [{ name: "关键词搜索", decision: "可审计，但难以综合跨段落证据。" }, { name: "整篇文档聊天", decision: "易用，但容易发生章节泄漏和模糊引用。" }, { name: "摘要索引", decision: "适合浏览，但会删除验证所需细节。" }, { name: "章节感知 RAG", decision: "最终选择：先限定章节，再检索、回答和引用。" }],
  userFlow: ["选择公司和申报年份", "选择 Item 6、7、7A 或 8", "输入研究问题", "在章节内检索", "查看引用式回答", "展开证据片段", "打开原始申报文件核验", "保存或拒绝答案"],
  architecture: [{ label: "SEC 申报文件", owner: "Rules" }, { label: "解析与目录移除", owner: "Rules" }, { label: "章节边界", owner: "Rules" }, { label: "章节感知分块", owner: "Rules" }, { label: "嵌入与索引", owner: "Statistical" }, { label: "章节过滤检索", owner: "Statistical" }, { label: "引用式生成", owner: "LLM" }, { label: "覆盖与泄漏检查", owner: "Rules" }, { label: "人工验证", owner: "Human" }],
  aiCan: ["汇总检索证据", "比较同一章节中的披露", "起草带引用回答", "指出证据缺口", "在证据不足时拒答"],
  aiCannot: ["无引用回答", "静默跨章节检索", "编造缺失财务数据", "把相似度当作事实", "替代分析师核验"],
  mustHave: ["Item 6/7/7A/8 准确抽取", "目录移除", "章节元数据过滤", "逐结论引用", "证据不足时拒答"],
  shouldHave: ["相邻章节比较", "来源页面预览", "可导出研究记录", "模型版本审计轨迹"],
  outOfScope: ["投资建议", "无证据财务预测", "全套 SEC 表单覆盖", "自动交易或报告发布"],
  metrics: [{ name: "Groundedness", explanation: "衡量回答中的结论是否得到引用片段支持。" }, { name: "检索 precision", explanation: "检查返回片段是否回答问题且来自正确章节。" }, { name: "章节覆盖率", explanation: "追踪基准问题所需证据是否被检索到。" }, { name: "跨章节泄漏率", explanation: "衡量禁止章节内容进入上下文的频率。" }, { name: "无依据结论率", explanation: "统计无法对应引用证据的回答结论。" }, { name: "拒答质量", explanation: "检查系统能否在证据不足时避免猜测。" }, { name: "引用验证时间", explanation: "衡量分析师定位并确认每条证据的速度。" }, { name: "人工覆盖率", explanation: "追踪分析师在保存前纠正或拒绝答案的频率。" }],
  evaluationLabel: "计划评估 — 当前不声称已有准确率结果",
  evaluation: ["选择一小组公开 10-K 和 Item 6/7/7A/8 问题", "由人工标记章节边界和支持段落", "测试目录移除以及相邻章节边界", "衡量检索 precision、coverage 和 leakage", "对 groundedness、引用完整度和拒答进行评分", "运行模型或分块变更前后的回归测试"],
  iterations: [{ version: "V1", change: "整篇文档向量搜索", issue: "错误章节中的相似语言可能得到高排名。" }, { version: "V2", change: "章节元数据过滤与目录移除", issue: "回答仍需更严格的引用与拒答行为。" }, { version: "V3", change: "逐结论引用、覆盖检查和人工验证", issue: "当前设计；语料实现和基准测试仍待进行。" }],
  tradeoffs: [{ name: "召回率 vs 章节精度", decision: "先限制章节，并明确提示覆盖可能不完整。" }, { name: "完整回答 vs 拒答", decision: "宁可提供范围受限的回答或拒答，也不追求无依据的完整。" }, { name: "分块大小 vs 引用清晰度", decision: "分块既要便于核验，也要保留足够上下文。" }, { name: "自动化 vs 分析师控制", decision: "导出或下游使用前必须查看原始来源。" }],
  reflection: { learned: "RAG 质量是工作流和评估问题，而不只是检索参数问题。", next: "先实现小型参考语料库并测试章节边界失败，再调整生成。", realUsers: "观察分析师如何验证引用，以及来源查看界面中的摩擦点。", production: "需要数据许可、解析监控、权限、评估门槛、模型变更回归测试和审计日志。" },
});

export const projectsByLocale: Record<Locale, Record<ProjectSlug, Project>> = {
  en: { signalroom: signalroomEn, "gaming-job-market-tracker": gamingEn, "sec-10k-rag": secEn },
  zh: { signalroom: signalroomZh, "gaming-job-market-tracker": gamingZh, "sec-10k-rag": secZh },
};

export const labels = {
  en: {
    status: "Project status", type: "Product type", data: "Data type", role: "My role", timeline: "Timeline", tools: "Tools", validation: "Validation status",
    truth: "Reality check", built: "Implemented in this portfolio", planned: "Planned / not yet implemented", context: "Context", user: "Target user", primary: "Primary persona", secondary: "Secondary personas", jtbd: "Jobs to be done", problem: "Problem statement", hypothesis: "Product hypothesis", alternatives: "Alternatives considered", flow: "User flow", architecture: "System architecture", responsibilities: "AI responsibilities", can: "AI can", cannot: "AI cannot", requirements: "Product requirements", must: "Must have", should: "Should have", out: "Out of scope", metrics: "Success metrics", evaluation: "Evaluation plan", iterations: "Iteration story", tradeoffs: "Key trade-offs", reflection: "Reflection", learned: "What I learned", next: "What I would test next", real: "What I would change with real users", production: "Required before production", prototype: "Interactive prototype", raw: "Synthetic raw posting", extracted: "LLM extraction", schema: "Schema validation", review: "Human review", database: "Clean database", dashboard: "Dashboard insight", toc: "On this page", back: "Back to projects", resume: "View Resume", source: "View portfolio source",
  },
  zh: {
    status: "项目状态", type: "产品类型", data: "数据类型", role: "我的职责", timeline: "时间线", tools: "工具", validation: "验证状态",
    truth: "真实性说明", built: "作品集中已完成", planned: "计划中 / 尚未实现", context: "业务背景", user: "目标用户", primary: "主要用户", secondary: "次要用户", jtbd: "用户任务", problem: "问题定义", hypothesis: "产品假设", alternatives: "考虑过的方案", flow: "用户流程", architecture: "系统架构", responsibilities: "AI 职责边界", can: "AI 可以", cannot: "AI 不可以", requirements: "产品需求", must: "必须有", should: "应该有", out: "不在范围内", metrics: "成功指标", evaluation: "评估计划", iterations: "版本迭代", tradeoffs: "关键取舍", reflection: "反思", learned: "学到了什么", next: "下一步测试", real: "有真实用户后会改变什么", production: "生产部署前需要什么", prototype: "交互原型", raw: "模拟原始职位", extracted: "LLM 抽取", schema: "数据结构验证", review: "人工复核", database: "清洗数据库", dashboard: "看板洞察", toc: "本页目录", back: "返回项目", resume: "查看简历", source: "查看作品集源码",
  },
} as const;
