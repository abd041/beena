import { STOCK_IMAGES } from "@/lib/data/stock-images";

export type CaseStudy = {
  slug: string;
  title: string;
  clientLabel: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string[];
  metrics: { label: string; value: string }[];
  serviceSlugs: string[];
  imageGradient: string;
  imageUrl?: string;
};

export const staticCaseStudies: CaseStudy[] = [
  {
    slug: "global-launch-ophthalmic-biologic",
    title: "Global Launch Readiness for a Novel Ophthalmic Biologic",
    clientLabel: "Top-20 Biopharma Sponsor",
    summary:
      "End-to-end launch planning and medical affairs alignment for a first-in-class intravitreal therapy.",
    challenge:
      "The sponsor needed to synchronize medical, access, and commercial workstreams across US and EU with limited internal ophthalmic launch experience.",
    approach:
      "BEEÑA-E led a cross-functional readiness assessment, developed launch sequencing by market, and established medical narrative and KOL engagement plans.",
    results: [
      "Unified launch governance model across regions",
      "Approved medical core narrative and publication plan",
      "Successful first-wave launches in US and major EU markets",
    ],
    metrics: [
      { label: "Markets", value: "12" },
      { label: "Timeline", value: "9 mo" },
      { label: "Workstreams", value: "6" },
    ],
    serviceSlugs: ["commercialization", "market-access"],
    imageGradient: "from-forest via-emerald-900 to-forest-dark",
    imageUrl: STOCK_IMAGES.portfolioLaunch,
  },
  {
    slug: "regulatory-pathway-sustained-delivery",
    title: "Regulatory Pathway for Sustained-Delivery Ophthalmic Platform",
    clientLabel: "Emerging Biotech",
    summary:
      "FDA and EMA pathway strategy for a sustained-delivery platform with novel CMC and clinical considerations.",
    challenge:
      "Unclear regulatory expectations for a combination product with novel delivery technology delayed IND-enabling decisions.",
    approach:
      "We facilitated agency interaction strategy, gap analysis against ophthalmic precedents, and clinical protocol refinements.",
    results: [
      "Successful pre-IND and Scientific Advice outcomes",
      "Aligned CMC and clinical development plans",
      "Phase 2 initiation on accelerated timeline",
    ],
    metrics: [
      { label: "Agency meetings", value: "4" },
      { label: "Months saved", value: "5+" },
    ],
    serviceSlugs: ["regulatory-clinical", "product-development"],
    imageGradient: "from-teal-900 via-forest-elevated to-forest",
    imageUrl: STOCK_IMAGES.portfolioRegulatory,
  },
  {
    slug: "portfolio-strategy-gene-therapy",
    title: "Portfolio Strategy for Ophthalmic Gene Therapy Pipeline",
    clientLabel: "Specialty Pharma",
    summary:
      "Indication prioritization and partnership strategy for a multi-asset gene therapy portfolio.",
    challenge:
      "Multiple retinal indications competed for capital; the board required a defensible prioritization framework.",
    approach:
      "BEEÑA-E conducted scientific, regulatory, and commercial assessments to rank indications and identify partnership options.",
    results: [
      "Board-approved portfolio prioritization",
      "Structured BD outreach for ex-US rights",
      "Reallocated resources to lead indication",
    ],
    metrics: [
      { label: "Assets assessed", value: "5" },
      { label: "Partnership options", value: "3" },
    ],
    serviceSlugs: ["strategy-advisory"],
    imageGradient: "from-emerald-950 via-forest to-forest-dark",
    imageUrl: STOCK_IMAGES.portfolioStrategy,
  },
];
