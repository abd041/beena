import { STOCK_IMAGES } from "@/lib/data/stock-images";
import type { AccordionItem } from "@/components/ui/accordion";

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  outcomes: string[];
  imageUrl: string;
  faqs: AccordionItem[];
};

const strategyFaqs: AccordionItem[] = [
  {
    id: "strategy-1",
    question: "When should we engage strategy advisory?",
    answer:
      "Ideally before major portfolio, partnership, or financing decisions — and whenever leadership needs an independent ophthalmic lens on indication priority or deal structure.",
  },
  {
    id: "strategy-2",
    question: "Do you support investor or board materials?",
    answer:
      "Yes. We help craft science-led narratives, diligence responses, and development scenarios that withstand scrutiny from boards and investors.",
  },
  {
    id: "strategy-3",
    question: "Can you work alongside our internal team?",
    answer:
      "We routinely embed with internal R&D, regulatory, and BD teams as an extension of leadership — not a parallel workstream.",
  },
];

export const staticServiceDetails: Record<string, ServiceDetail> = {
  "strategy-advisory": {
    slug: "strategy-advisory",
    title: "Strategy & Advisory",
    summary:
      "Portfolio strategy, indication prioritization, and partnership advisory for ophthalmic innovators.",
    body: [
      "We help sponsors define clear development and commercialization strategies aligned with scientific differentiation and market opportunity in ophthalmology.",
      "Our advisors bring hands-on experience across asset valuation, indication sequencing, licensing, and alliance structuring — supporting decisions that stand up to investor, board, and regulatory scrutiny.",
    ],
    outcomes: [
      "Prioritized indication and development roadmaps",
      "Partnership and licensing strategy support",
      "Board-ready strategic narratives and diligence materials",
    ],
    imageUrl: STOCK_IMAGES.portfolioStrategy,
    faqs: strategyFaqs,
  },
  "product-development": {
    slug: "product-development",
    title: "Product Development",
    summary:
      "Integrated development planning from preclinical through late-stage ophthalmic programs.",
    body: [
      "BEEÑA-E partners with teams to design integrated development plans spanning CMC, nonclinical, and clinical milestones tailored to ophthalmic delivery and endpoints.",
      "We align timelines, budgets, and risk registers so programs remain fundable and executable across global development footprints.",
    ],
    outcomes: [
      "Integrated development plans (IDPs)",
      "Clinical endpoint and trial design input",
      "Vendor and CRO selection advisory",
    ],
    imageUrl: STOCK_IMAGES.portfolioLab,
    faqs: [
      {
        id: "dev-1",
        question: "What program stages do you support?",
        answer:
          "From preclinical through Phase 3 and launch preparation — with emphasis on de-risking clinical and CMC decisions early.",
      },
      {
        id: "dev-2",
        question: "How do you approach ophthalmic endpoints?",
        answer:
          "We align endpoint strategy to mechanism, precedent trials, and regulatory expectations — including imaging and functional outcomes.",
      },
      {
        id: "dev-3",
        question: "Can you help select CROs and vendors?",
        answer:
          "Yes. We advise on RFP design, capability fit, and governance for ophthalmic-specialist CROs and core labs.",
      },
    ],
  },
  "regulatory-clinical": {
    slug: "regulatory-clinical",
    title: "Regulatory & Clinical",
    summary:
      "Regulatory pathway design, clinical strategy, and global trial execution support.",
    body: [
      "Our regulatory and clinical experts guide ophthalmic sponsors through FDA, EMA, and rest-of-world requirements — from pre-IND/Scientific Advice through approval and post-marketing commitments.",
      "We support protocol design, briefing packages, agency interactions, and clinical operations planning for complex ophthalmic trials.",
    ],
    outcomes: [
      "Global regulatory pathway assessments",
      "Agency meeting preparation and response strategy",
      "Clinical program governance and oversight",
    ],
    imageUrl: STOCK_IMAGES.insightRegulatory,
    faqs: [
      {
        id: "reg-1",
        question: "Which agencies do you cover?",
        answer:
          "FDA, EMA, PMDA, and key emerging markets — with ophthalmic-specific precedents and interaction strategies.",
      },
      {
        id: "reg-2",
        question: "Do you attend agency meetings?",
        answer:
          "We prepare briefing packages, Q&A, and response strategies; attendance depends on sponsor preference and meeting format.",
      },
      {
        id: "reg-3",
        question: "Can you support combination products?",
        answer:
          "Yes — including drug-device combinations and novel delivery platforms common in ophthalmology.",
      },
    ],
  },
  "market-access": {
    slug: "market-access",
    title: "Market Access",
    summary:
      "Evidence generation and payer engagement tailored to ophthalmic markets worldwide.",
    body: [
      "We design evidence plans that connect clinical value to payer and HTA expectations in major ophthalmic markets.",
      "From early health economics framing to launch access strategy, we help teams articulate differentiated value for patients and health systems.",
    ],
    outcomes: [
      "HEOR and value dossier planning",
      "Payer engagement and narrative development",
      "Launch access sequencing by market",
    ],
    imageUrl: STOCK_IMAGES.contactHero,
    faqs: [
      {
        id: "access-1",
        question: "When should access planning begin?",
        answer:
          "Early — often by Phase 2 — so endpoints and subgroup strategy support payer-relevant evidence.",
      },
      {
        id: "access-2",
        question: "Do you support HTA submissions?",
        answer:
          "We advise on evidence gaps, dossier narrative, and country sequencing; specialist HEOR partners execute submissions where needed.",
      },
      {
        id: "access-3",
        question: "How do you handle US vs EU differences?",
        answer:
          "We map parallel payer and HTA pathways and align global evidence generation to both.",
      },
    ],
  },
  commercialization: {
    slug: "commercialization",
    title: "Commercialization",
    summary:
      "Launch readiness, medical affairs alignment, and lifecycle commercial planning.",
    body: [
      "Commercial success in ophthalmology requires tight alignment across medical, marketing, access, and field teams from pre-launch through lifecycle expansion.",
      "BEEÑA-E supports launch planning, KOL engagement strategy, and post-launch optimization for novel mechanisms and first-in-class assets.",
    ],
    outcomes: [
      "Launch readiness assessments and playbooks",
      "Medical affairs and MSL planning",
      "Lifecycle and indication expansion strategy",
    ],
    imageUrl: STOCK_IMAGES.portfolioLaunch,
    faqs: [
      {
        id: "comm-1",
        question: "How far before launch should we start?",
        answer:
          "Typically 12–18 months for first-in-class assets — earlier when medical narrative and access must align.",
      },
      {
        id: "comm-2",
        question: "Do you support medical affairs planning?",
        answer:
          "Yes — publication planning, MSL priorities, and congress strategy tied to launch milestones.",
      },
      {
        id: "comm-3",
        question: "Can you help post-launch?",
        answer:
          "We support lifecycle expansion, indication sequencing, and optimization as real-world evidence emerges.",
      },
    ],
  },
};
