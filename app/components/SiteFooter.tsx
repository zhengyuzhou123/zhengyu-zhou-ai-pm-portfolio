import type { Locale } from "../data/portfolio";
import { siteCopy } from "../data/portfolio";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer id="contact">
      <span className="contact-kicker">{copy.contactKicker}</span>
      <h2>{copy.contactTitle}</h2>
      <div className="contact-row" aria-label={locale === "zh" ? "联系和资料链接" : "Contact and profile links"}>
        <a className="primary-contact" href="mailto:zhouzhengyu221@gmail.com">{copy.email} ↗</a>
        <a href="https://linkedin.com/in/zhengyu-zhou-ksgg" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/zhengyuzhou123/zhengyu-zhou-ai-pm-portfolio" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={`${basePath}/Zhengyu_Zhou_AI_Product_Resume.pdf`} target="_blank" rel="noreferrer">PDF {copy.resume} ↗</a>
      </div>
      <div className="footer-meta">
        <span>{locale === "zh" ? "周正宇 · 美国波士顿" : "ZHENGYU ZHOU · BOSTON, MA"}</span>
        <a href={`${basePath}/Zhengyu_Zhou_Resume.docx`} download>{copy.docx} ↓</a>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
