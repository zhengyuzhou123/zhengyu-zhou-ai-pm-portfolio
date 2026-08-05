"use client";

import { useMemo, useState } from "react";

type Segment = "中小企业" | "中型市场" | "企业客户";

const segmentData = {
  中小企业: { visitors: 42800, wins: 82, lift: 11, action: "把客户证明前置到首次触达流程" },
  中型市场: { visitors: 24100, wins: 61, lift: 17, action: "用角色化案例替代通用演示跟进" },
  企业客户: { visitors: 9200, wins: 14, lift: 8, action: "增加预算前，先收紧目标客户筛选" },
};

const experiences = [
  {
    period: "2026 — 至今",
    company: "Lions Financial",
    role: "商业咨询与风险管理实习生",
    summary: "负责 GTM 转化建议、财务模型与 AI 辅助工作流，加速周期性市场研究。",
    tags: ["GTM 策略", "GA4", "Python", "财务建模"],
  },
  {
    period: "2025",
    company: "Bolun Bole Clothing Co.",
    role: "商业分析实习生",
    summary: "管理 20 万+客户数据，通过 SQL 分群和实验设计，将营销活动参与度提升 15%。",
    tags: ["SQL", "用户分群", "A/B 测试", "生命周期分析"],
  },
  {
    period: "2024",
    company: "Apexus-Tech",
    role: "商业分析实习生",
    summary: "评估金融数据基础设施并构建运营看板，将周期性报告时间缩短 30%。",
    tags: ["Tableau", "Grafana", "数据基础设施", "预测模型"],
  },
];

export default function ChineseHome() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [segment, setSegment] = useState<Segment>("中型市场");
  const [budget, setBudget] = useState(35);
  const data = segmentData[segment];
  const impact = useMemo(() => Math.round(data.wins * (data.lift + budget / 12) / 100), [budget, data]);

  return (
    <main lang="zh-CN">
      <nav className="site-nav">
        <a className="identity" href="#top" aria-label="周正宇首页"><b>Z/Z</b><span>周正宇</span></a>
        <div className="nav-menu">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#experience">经历</a>
          <a href="#contact">联系</a>
        </div>
        <div className="nav-actions">
          <a className="language-link" href={`${basePath}/`} lang="en">EN</a>
          <a className="resume-link" href={`${basePath}/Zhengyu_Zhou_Resume.docx`} download>简历 ↓</a>
        </div>
      </nav>

      <header className="portfolio-hero" id="top">
        <div className="availability"><i /> AI 产品经理 · 正在寻找机会 · 波士顿 / 美国</div>
        <div className="hero-grid">
          <h1>把杂乱数据<br />变成<em>有用的</em><br />AI 产品。</h1>
          <div className="hero-aside">
            <div className="portrait-mark"><span>ZZ</span><i>AI × 数据 × 商业</i></div>
            <p>波士顿大学应用商业分析硕士，拥有 GTM 策略、实验设计、自动化与决策系统的实践经验。</p>
            <div className="hero-links">
              <a href="#work">查看核心作品 <span>↘</span></a>
              <a href="mailto:zhouzhengyu221@gmail.com">zhouzhengyu221@gmail.com ↗</a>
            </div>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>20万+</strong><span>客户数据<br />完成运营应用</span></div>
          <div><strong>+15%</strong><span>用户分群带来的<br />活动参与度提升</span></div>
          <div><strong>−30%</strong><span>周期性报告<br />时间缩短</span></div>
          <div className="proof-note"><b>我的产品原则</b><p>从决策出发，用证据说话，让人始终掌握控制权。</p></div>
        </div>
      </header>

      <section className="work-section" id="work">
        <div className="section-head inverted"><span>01 / 核心作品</span><h2>一个旗舰产品。<br />从策略到原型。</h2><p>产品策略 · UX 原型 · AI 辅助开发</p></div>
        <div className="project-intro">
          <div><span>案例 01 · 2026</span><h3>SignalRoom</h3><p>一款 AI GTM 决策助手，把嘈杂的漏斗数据转化为可排序、可审核的增长实验。</p></div>
          <div className="project-thesis"><b>产品判断</b><p>增长团队不需要又一个仪表盘。他们需要的是从异常信号到可信行动的更短路径。</p></div>
        </div>

        <div className="process-strip" aria-label="SignalRoom 产品流程">
          <span><b>01</b> 定义决策</span><i>→</i><span><b>02</b> 汇总信号</span><i>→</i><span><b>03</b> 模拟方案</span><i>→</i><span><b>04</b> 人工审核</span><i>→</i><span><b>05</b> 衡量提升</span>
        </div>

        <div className="demo-window">
          <div className="demo-bar"><span><i /> SIGNALROOM / 第二季度管道复盘</span><span>交互式原型</span></div>
          <div className="demo-layout">
            <aside>
              <span className="demo-step">01 / 设置背景</span>
              <label>客户类型</label>
              <div className="segment-buttons">{(Object.keys(segmentData) as Segment[]).map((item) => <button key={item} onClick={() => setSegment(item)} className={segment === item ? "active" : ""} aria-pressed={segment === item}>{item}</button>)}</div>
              <label>增量预算 <output>${budget}k</output></label>
              <input type="range" min="10" max="80" value={budget} onChange={(event) => setBudget(Number(event.target.value))} aria-label="增量预算" />
              <div className="demo-assumption"><b>关键假设</b><p>在不降低品牌搜索覆盖的前提下，可以重新分配预算。</p></div>
            </aside>
            <div className="demo-result">
              <div className="result-top"><div><span className="demo-step">02 / 给出建议</span><h4>{segment}增长决策</h4></div><div className="confidence"><strong>{84 - Math.round(Math.abs(budget - 35) / 8)}%</strong>置信度</div></div>
              <div className="recommendation-card"><span>最高杠杆行动</span><h5>{data.action}</h5><p>SignalRoom 将漏斗行为连接到可测试的干预措施，并把建议背后的假设透明呈现。</p></div>
              <div className="impact-grid">
                <div><span>访客数</span><strong>{data.visitors.toLocaleString()}</strong></div>
                <div><span>基础成交</span><strong>{data.wins}</strong></div>
                <div><span>预计提升</span><strong>+{data.lift + Math.round(budget / 12)}%</strong></div>
                <div><span>新增成交</span><strong>+{impact}</strong></div>
              </div>
              <div className="experiment-strip"><b>下一步实验</b><span>运行 21 天对照测试 · 衡量商机创建 · 保护线索质量</span><button onClick={() => navigator.clipboard?.writeText(`${segment}：${data.action}`)}>复制方案</button></div>
            </div>
          </div>
        </div>

        <div className="case-logic">
          <div><span>目标用户</span><h4>增长与 RevOps 负责人</h4><p>对营销和销售管道结果负责的业务运营者。</p></div>
          <div><span>核心任务</span><h4>证明下一步行动</h4><p>识别最高杠杆的干预措施，并推动团队对实验达成一致。</p></div>
          <div><span>北极星指标</span><h4>做出可信决策的时间</h4><p>护栏指标：人工覆盖率、实际提升与证据覆盖度。</p></div>
          <div><span>AI 的角色</span><h4>汇总、模拟、解释</h4><p>AI 起草决策，人类检查证据并批准最终行动。</p></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="vertical-label">02 / 关于</div>
        <div className="about-copy">
          <span className="section-kicker">商业思维，构建者心态</span>
          <h2>不只是分析发生了什么。<br /><em>更要设计下一步应该发生什么。</em></h2>
          <div className="about-columns">
            <p>我工作在数据、商业和 AI 的交叉点。我的经历覆盖漏斗分析、客户分群、财务建模、数据看板和工作流自动化，因此会同时从用户问题和可衡量结果出发思考产品。</p>
            <p>我尤其关注能够帮助人们做出更好决策的 AI 产品：它们应当综合复杂信息、呈现不确定性，并在不隐藏推理依据的情况下把洞察转化为行动。</p>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-head"><span>03 / 经历</span><h2>贯穿完整<br />决策链路的实践。</h2><p>策略 → 数据 → 行动</p></div>
        <div className="timeline">
          {experiences.map((item, index) => <article key={item.company}>
            <div className="timeline-index">0{index + 1}</div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-main"><span>{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p><div className="tag-row">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="capability-section">
        <div className="capability-title"><span>04 / 能力组合</span><h2>连接两个问题：<br /><em>“数据说明了什么？”</em><br />与“我们应该构建什么？”</h2></div>
        <div className="capability-grid">
          <div><b>产品</b><p>问题定义<br />用户旅程<br />实验设计<br />北极星指标<br />产品路线图</p></div>
          <div><b>分析</b><p>SQL 与 Python<br />漏斗分析<br />客户分群<br />预测建模<br />A/B 测试</p></div>
          <div><b>商业</b><p>GTM 策略<br />财务建模<br />市场研究<br />流程优化<br />利益相关者沟通</p></div>
          <div><b>平台</b><p>Tableau 与 Power BI<br />GA4<br />Excel 与 VBA<br />AWS<br />AI 辅助工作流</p></div>
        </div>
      </section>

      <section className="education-section">
        <div><span>教育</span><h3>波士顿大学</h3><p>应用商业分析硕士 · 2024—2026</p></div>
        <div><span>本科</span><h3>戈登学院</h3><p>工商管理学士 · 优等毕业</p></div>
        <div><span>学术认可</span><h3>DSI 2025</h3><p>商业分析方向演讲者与分会主席</p></div>
      </section>

      <footer id="contact">
        <span className="contact-kicker">正在寻找 AI 产品经理机会</span>
        <h2>一起构建真正融入<br />工作流的 <em>AI 产品。</em></h2>
        <div className="contact-row"><a href="mailto:zhouzhengyu221@gmail.com">发送邮件 ↗</a><a href="https://linkedin.com/in/zhengyu-zhou-ksgg" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`${basePath}/Zhengyu_Zhou_Resume.docx`} download>下载简历 ↓</a></div>
        <div className="footer-meta"><span>周正宇 · 美国波士顿</span><span>中文 / ENGLISH</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
