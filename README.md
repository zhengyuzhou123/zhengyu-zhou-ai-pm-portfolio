# Zhengyu Zhou — AI Product Manager Portfolio

Bilingual, statically exported portfolio built with Next.js, React, and TypeScript. It presents three complementary AI product case studies:

- SignalRoom — decision strategy and human-in-the-loop UX
- Gaming Job Market Tracker — structured extraction, validation, and review workflow
- SEC 10-K RAG — section-aware retrieval and trustworthy AI evaluation design

## Truth and scope

SignalRoom is a functional front-end portfolio prototype using synthetic GTM data. Its confidence and lift values are illustrative. The Gaming Job Market Tracker is a workflow prototype demonstrated with synthetic job postings. SEC 10-K RAG is a product concept and evaluation design; this repository does not claim a completed filing corpus or benchmark results.

## Run locally

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validate the static GitHub Pages build

```bash
NEXT_PUBLIC_BASE_PATH=/zhengyu-zhou-ai-pm-portfolio pnpm run build:pages
node --test tests/rendered-html.test.mjs
pnpm run lint
```

Pushing `main` deploys `out/` through `.github/workflows/deploy-pages.yml`.
