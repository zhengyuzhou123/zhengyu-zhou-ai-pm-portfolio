"use client";

import { useMemo, useState } from "react";
import type { Locale } from "../data/portfolio";

const segments = {
  en: ["Mid-market", "SMB", "Enterprise"],
  zh: ["中型企业", "小型企业", "大型企业"],
} as const;

export function SignalRoomDemo({ locale }: { locale: Locale }) {
  const [segment, setSegment] = useState(0);
  const [budget, setBudget] = useState(48);
  const [copied, setCopied] = useState(false);
  const isZh = locale === "zh";
  const result = useMemo(() => ({
    lift: Math.round(6 + budget / 8 + segment * 2),
    confidence: Math.min(82, 58 + Math.round(budget / 4) - segment * 3),
  }), [budget, segment]);

  async function copyPlan() {
    const text = isZh
      ? `说明性方案：将 ${segments.zh[segment]} 的 ${budget}% 预算用于高意向再营销实验。`
      : `Illustrative plan: allocate ${budget}% of budget to a high-intent retargeting experiment for ${segments.en[segment]}.`;
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="demo-window" aria-label={isZh ? "SignalRoom 交互原型" : "SignalRoom interactive prototype"}>
      <div className="simulation-banner"><b>{isZh ? "模拟界面" : "SIMULATED INTERFACE"}</b> {isZh ? "所有数值均为说明性数据，不代表预测或真实业务结果。" : "All values are illustrative—not predictions or business results."}</div>
      <div className="demo-bar"><span><i />SIGNALROOM / DECISION REVIEW</span><span>{isZh ? "人工审核必需" : "HUMAN REVIEW REQUIRED"}</span></div>
      <div className="demo-layout">
        <aside>
          <span className="demo-step">01 / {isZh ? "定义决策" : "FRAME DECISION"}</span>
          <label>{isZh ? "客户分群" : "Customer segment"}</label>
          <div className="segment-buttons" role="group" aria-label={isZh ? "选择客户分群" : "Choose customer segment"}>
            {segments[locale].map((label, index) => <button key={label} type="button" className={index === segment ? "active" : ""} aria-pressed={index === segment} onClick={() => setSegment(index)}>{label}</button>)}
          </div>
          <label htmlFor={`budget-${locale}`}>{isZh ? "实验预算比例" : "Experiment budget"}<output htmlFor={`budget-${locale}`}>{budget}%</output></label>
          <input id={`budget-${locale}`} type="range" min="20" max="80" value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
          <div className="demo-assumption"><b>{isZh ? "显式假设" : "EXPLICIT ASSUMPTION"}</b><p>{isZh ? "近期高意向访问代表再营销机会；上线前需要用真实数据验证。" : "Recent high-intent visits indicate a retargeting opportunity; real data is required before launch."}</p></div>
        </aside>
        <div className="demo-result" aria-live="polite">
          <div className="result-top"><div><span className="demo-step">02 / {isZh ? "比较行动" : "COMPARE ACTIONS"}</span><h4>{isZh ? "建议审核" : "Recommendation review"}</h4></div><div className="confidence">{isZh ? "说明性置信度" : "ILLUSTRATIVE CONFIDENCE"}<strong>{result.confidence}%</strong></div></div>
          <div className="recommendation-card"><span>{isZh ? "方案 A · 可编辑" : "OPTION A · EDITABLE"}</span><h5>{isZh ? `优先测试${segments.zh[segment]}再营销` : `Test ${segments.en[segment]} retargeting first`}</h5><p>{isZh ? "将有限预算用于行为信号更强的受众，同时保留对照组。建议基于界面假设生成，必须由负责人审核。" : "Direct a limited budget to the audience with stronger behavioral signals while preserving a control group. This option is generated from interface assumptions and requires owner review."}</p></div>
          <div className="impact-grid"><div><span>{isZh ? "预算" : "BUDGET"}</span><strong>{budget}%</strong></div><div><span>{isZh ? "说明性提升" : "ILLUSTRATIVE LIFT"}</span><strong>+{result.lift}%</strong></div><div><span>{isZh ? "证据状态" : "EVIDENCE"}</span><strong>{isZh ? "模拟" : "SYNTHETIC"}</strong></div><div><span>{isZh ? "操作" : "ACTION"}</span><strong>{isZh ? "需审核" : "REVIEW"}</strong></div></div>
          <div className="experiment-strip"><b>{isZh ? "下一步" : "NEXT STEP"}</b><span>{isZh ? "编辑实验设计、确认证据，并由负责人批准或拒绝。" : "Edit the experiment, verify evidence, then approve or reject with an accountable owner."}</span><button type="button" onClick={copyPlan}>{copied ? (isZh ? "已复制" : "Copied") : (isZh ? "复制说明性方案" : "Copy illustrative plan")}</button></div>
        </div>
      </div>
    </div>
  );
}
