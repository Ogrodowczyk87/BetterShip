import type { CaseStudy } from "../types/types";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Retail checkout rebuild",
    industry: "E-commerce",
    summary:
      "A frictionless checkout flow that reduced drop-off and raised average order value.",
    problem:
      "Mobile users were abandoning at the payment step and cart edits required too many screens.",
    process:
      "We mapped the journey, redesigned forms, and introduced a single-page checkout with smart defaults.",
    result:
      "A cleaner flow that shipped in four weeks with measurable lift across mobile and desktop.",
    metrics: [
      { label: "Conversion", value: "+34%" },
      { label: "Checkout time", value: "-28%" },
      { label: "Revenue per visit", value: "+19%" },
    ],
  },
  {
    id: 2,
    title: "B2B onboarding revamp",
    industry: "SaaS",
    summary:
      "A guided onboarding sequence that reduced setup time and improved trial activation.",
    problem:
      "New users struggled to connect data sources and bounced before reaching the first win.",
    process:
      "We introduced an onboarding wizard, in-product checklists, and contextual help.",
    result:
      "Activation jumped and support requests dropped within the first release.",
    metrics: [
      { label: "Activation", value: "+2.3x" },
      { label: "Support tickets", value: "-41%" },
      { label: "Time to value", value: "-36%" },
    ],
  },
  {
    id: 3,
    title: "Performance-first marketing site",
    industry: "Fintech",
    summary:
      "A content-rich site optimized for Core Web Vitals with a new visual system.",
    problem:
      "Slow load times and inconsistent styling were hurting SEO and brand trust.",
    process:
      "We rebuilt pages with a modular system, optimized assets, and introduced a new CMS flow.",
    result:
      "Lighthouse scores hit 98+ with a clear brand language across pages.",
    metrics: [
      { label: "Lighthouse", value: "98+" },
      { label: "Page weight", value: "-52%" },
      { label: "Organic leads", value: "+24%" },
    ],
  },
];
