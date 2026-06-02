import {
  Activity,
  BadgeCheck,
  Clock,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Microscope,
  Sparkles,
  Target,
} from "lucide-react";

export const whyChoose = [
  {
    title: "Ophthalmic specialization",
    description:
      "Deep, category-specific expertise across retina, cornea, and rare ophthalmic disorders — not generalist consulting.",
    icon: Microscope,
  },
  {
    title: "Global regulatory expertise",
    description:
      "FDA, EMA, and key regional pathways mapped early to reduce friction and prevent late-stage surprises.",
    icon: BadgeCheck,
  },
  {
    title: "Science + commercial alignment",
    description:
      "Translating mechanism and evidence into narratives that resonate with physicians, payers, and partners.",
    icon: Sparkles,
  },
  {
    title: "Faster strategic execution",
    description:
      "Senior-level direction with practical deliverables that move programs forward—without layered bureaucracy.",
    icon: Clock,
  },
  {
    title: "Senior advisory model",
    description:
      "Work directly with seasoned experts; concise governance, clear accountability, and board-ready outputs.",
    icon: HeartHandshake,
  },
  {
    title: "Patient-centered outcomes",
    description:
      "Every recommendation ties back to meaningful endpoints and real-world impact for patients and caregivers.",
    icon: Target,
  },
] as const;

/** Homepage: fewer, larger trust pillars */
export const whyChooseHome = [
  whyChoose[0],
  whyChoose[1],
  whyChoose[2],
  whyChoose[5],
] as const;

export const expertiseAreas = [
  { title: "Retina therapeutics", icon: Activity },
  { title: "Gene therapy", icon: Sparkles },
  { title: "Ocular surface disease", icon: Microscope },
  { title: "Rare ophthalmic disorders", icon: BadgeCheck },
  { title: "Clinical development", icon: GraduationCap },
  { title: "Commercialization readiness", icon: HeartHandshake },
] as const;

/** Homepage: editorial expertise (no duplicate grid) */
export const expertiseHome = [
  {
    title: "Retina therapeutics",
    icon: Activity,
    description:
      "Endpoint strategy, imaging, and evidence generation for complex retinal programs.",
  },
  {
    title: "Gene therapy",
    icon: Sparkles,
    description:
      "Vector strategy, long-term follow-up, and access models for transformative modalities.",
  },
  {
    title: "Clinical development",
    icon: GraduationCap,
    description:
      "Trial architecture and operational planning designed for fundable, executable studies.",
  },
  {
    title: "Commercialization readiness",
    icon: HeartHandshake,
    description:
      "Launch governance, medical affairs alignment, and lifecycle strategy for first-in-class assets.",
  },
] as const;

export const globalRegions = [
  { label: "United States", x: 26, y: 42 },
  { label: "Europe", x: 53, y: 32 },
  { label: "MENA", x: 63, y: 44 },
  { label: "APAC", x: 76, y: 46 },
  { label: "Emerging Markets", x: 58, y: 58 },
] as const;

export const engagementSteps = [
  {
    title: "Strategic assessment",
    description:
      "Rapid program review to identify highest-leverage decisions across development, evidence, and positioning.",
  },
  {
    title: "Regulatory alignment",
    description:
      "Pathway mapping, agency interaction planning, and endpoint strategy aligned to ophthalmic precedents.",
  },
  {
    title: "Clinical planning",
    description:
      "Trial architecture, operational planning, and risk mitigation to keep programs fundable and executable.",
  },
  {
    title: "Market access strategy",
    description:
      "Evidence plans and value narratives aligned to payer and HTA expectations across key geographies.",
  },
  {
    title: "Commercialization support",
    description:
      "Launch readiness, medical affairs alignment, and lifecycle strategy for first-in-class assets.",
  },
] as const;

export const leadership = [
  {
    name: "Senior Ophthalmic Advisor",
    role: "Clinical & Translational Strategy",
    years: "25+ years",
    focus: "Retina, endpoints, imaging, and evidence generation",
  },
  {
    name: "Regulatory Lead",
    role: "Global Pathway & Agency Strategy",
    years: "20+ years",
    focus: "FDA/EMA alignment, briefing packages, interaction planning",
  },
  {
    name: "Commercial & Access Partner",
    role: "Value, Access, and Launch Readiness",
    years: "18+ years",
    focus: "HEOR narrative, payer strategy, launch governance",
  },
] as const;

export const impactMetrics = [
  {
    value: 14,
    suffix: "",
    label: "Ophthalmic products launched globally",
    icon: "package" as const,
  },
  {
    value: 30,
    suffix: "+",
    label: "Years of combined leadership experience",
    icon: "users" as const,
  },
  {
    value: 40,
    suffix: "+",
    label: "Regulatory pathways supported",
    icon: "badge" as const,
  },
  {
    value: 25,
    suffix: "+",
    label: "Markets reached across major regions",
    icon: "globe" as const,
  },
  {
    value: 100,
    suffix: "+",
    label: "Clinical programs advised",
    icon: "activity" as const,
  },
] as const;

/** Homepage: investor-grade metrics row */
export const impactMetricsHome = [
  impactMetrics[0],
  impactMetrics[1],
  impactMetrics[2],
  impactMetrics[3],
] as const;

export const publicationTypes = [
  {
    title: "Whitepapers",
    description:
      "Deep-dive perspectives on ophthalmic development strategy and evidence design.",
    category: "Research",
  },
  {
    title: "Regulatory insights",
    description:
      "FDA, EMA, and regional pathway intelligence for ophthalmic sponsors.",
    category: "Regulation",
  },
  {
    title: "Market outlooks",
    description:
      "Competitive landscape and access dynamics across retina and rare disease.",
    category: "Commercial",
  },
  {
    title: "Clinical perspectives",
    description:
      "Endpoint strategy, trial design, and operational excellence in ophthalmology.",
    category: "Clinical",
  },
  {
    title: "Innovation reports",
    description:
      "Gene therapy, delivery science, and next-generation modality trends.",
    category: "Innovation",
  },
] as const;

export const futureTopics = [
  {
    title: "AI in ophthalmology",
    description:
      "Imaging analytics, trial enrichment, and decision support for development teams.",
  },
  {
    title: "Precision medicine",
    description:
      "Biomarker-led segmentation and targeted evidence for differentiated assets.",
  },
  {
    title: "Gene therapies",
    description:
      "Vector strategy, long-term follow-up, and access models for transformative modalities.",
  },
  {
    title: "Drug delivery innovation",
    description:
      "Sustained-release platforms and ocular pharmacology advancing patient adherence.",
  },
  {
    title: "Real-world evidence",
    description:
      "RWE frameworks that strengthen payer narratives and lifecycle strategy.",
  },
  {
    title: "Vision science innovation",
    description:
      "Translational science connecting mechanism to meaningful visual function outcomes.",
  },
] as const;

export const trustPillars = [
  {
    title: "Confidentiality",
    description:
      "NDA-first engagement with disciplined information governance for sensitive programs.",
  },
  {
    title: "Scientific rigor",
    description:
      "Evidence-led recommendations grounded in ophthalmic precedents and clinical reality.",
  },
  {
    title: "Ethical standards",
    description:
      "Patient-centered advisory aligned to integrity, transparency, and responsible innovation.",
  },
  {
    title: "Regulatory alignment",
    description:
      "Pathway strategy designed for agency dialogue and defensible decision-making.",
  },
  {
    title: "Patient-centered approach",
    description:
      "Every recommendation ties to meaningful endpoints and real-world impact.",
  },
] as const;

export const partners = [
  "CRO partners",
  "Specialty pharma",
  "Biotech sponsors",
  "Academic research",
  "Healthcare innovation",
  "Diagnostics & imaging",
] as const;

