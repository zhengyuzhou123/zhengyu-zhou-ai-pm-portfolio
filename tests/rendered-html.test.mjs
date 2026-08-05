import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);
const pages = [
  "index.html", "zh/index.html",
  "projects/signalroom/index.html", "projects/gaming-job-market-tracker/index.html", "projects/sec-10k-rag/index.html",
  "zh/projects/signalroom/index.html", "zh/projects/gaming-job-market-tracker/index.html", "zh/projects/sec-10k-rag/index.html",
];

test("exports every English and Chinese portfolio route", async () => {
  await Promise.all(pages.map((page) => access(new URL(page, root))));
});

test("home exposes recruiter-critical content and truthful project states", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /I turn messy data/);
  assert.match(html, /View Case Studies/);
  assert.match(html, /Gaming Job Market Tracker/);
  assert.match(html, /SEC 10-K RAG/);
  assert.match(html, /Zhengyu_Zhou_AI_Product_Resume\.pdf/);
  assert.match(html, /Functional portfolio prototype/);
});

test("case studies state evidence boundaries and evaluation status", async () => {
  const signal = await readFile(new URL("projects/signalroom/index.html", root), "utf8");
  const gaming = await readFile(new URL("projects/gaming-job-market-tracker/index.html", root), "utf8");
  const sec = await readFile(new URL("projects/sec-10k-rag/index.html", root), "utf8");
  assert.match(signal, /Synthetic GTM funnel data/);
  assert.match(signal, /Planned evaluation/);
  assert.match(gaming, /Synthetic sample postings/);
  assert.match(sec, /No filing corpus is shipped/i);
  assert.match(sec, /Benchmark not yet run/i);
});

test("exports SEO discovery assets and the PDF resume", async () => {
  await Promise.all(["sitemap.xml", "robots.txt", "Zhengyu_Zhou_AI_Product_Resume.pdf", "favicon.svg"].map((file) => access(new URL(file, root))));
});
