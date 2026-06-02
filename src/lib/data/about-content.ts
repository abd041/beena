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

export const expertiseAreas = [
  { title: "Retina therapeutics", icon: Activity },
  { title: "Gene therapy", icon: Sparkles },
  { title: "Corneal disease", icon: Microscope },
  { title: "Rare ophthalmic disorders", icon: BadgeCheck },
  { title: "Clinical development", icon: GraduationCap },
  { title: "Commercial readiness", icon: HeartHandshake },
] as const;

export const globalRegions = [
  { label: "United States", x: 26, y: 42 },
  { label: "Europe", x: 53, y: 32 },
  { label: "Middle East", x: 63, y: 44 },
  { label: "Asia-Pacific", x: 76, y: 46 },
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
    focus: "Retina, endpoints, imaging, and evidence generation",
  },
  {
    name: "Regulatory Lead",
    role: "Global Pathway & Agency Strategy",
    focus: "FDA/EMA alignment, briefing packages, interaction planning",
  },
  {
    name: "Commercial & Access Partner",
    role: "Value, Access, and Launch Readiness",
    focus: "HEOR narrative, payer strategy, launch governance",
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

