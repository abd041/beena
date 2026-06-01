import type { LucideIcon } from "lucide-react";
import {
  FlaskConical,
  Globe2,
  LineChart,
  Microscope,
  Target,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

export const staticServices: ServiceItem[] = [
  {
    slug: "strategy-advisory",
    title: "Strategy & Advisory",
    summary:
      "Portfolio strategy, indication prioritization, and partnership advisory for ophthalmic innovators.",
    icon: Target,
  },
  {
    slug: "product-development",
    title: "Product Development",
    summary:
      "Integrated development planning from preclinical through late-stage ophthalmic programs.",
    icon: FlaskConical,
  },
  {
    slug: "regulatory-clinical",
    title: "Regulatory & Clinical",
    summary:
      "Regulatory pathway design, clinical strategy, and global trial execution support.",
    icon: Microscope,
  },
  {
    slug: "market-access",
    title: "Market Access",
    summary:
      "Evidence generation and payer engagement tailored to ophthalmic markets worldwide.",
    icon: Globe2,
  },
  {
    slug: "commercialization",
    title: "Commercialization",
    summary:
      "Launch readiness, medical affairs alignment, and lifecycle commercial planning.",
    icon: LineChart,
  },
];
