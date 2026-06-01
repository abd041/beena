/** Homepage copy and assets */

import { STOCK_IMAGES } from "@/lib/data/stock-images";

export const HOME_IMAGES = {
  heroEye: STOCK_IMAGES.heroEye,
  aboutLab: STOCK_IMAGES.aboutLab,
  insight1: STOCK_IMAGES.insightEmerging,
  insight2: STOCK_IMAGES.insightRegulatory,
  insight3: STOCK_IMAGES.insightBiomarkers,
} as const;

export const heroCopy = {
  headline: "Global Ophthalmic Biotech Advisory & Development Partner",
  subheadline:
    "Deep scientific insight meets purposeful execution. We deliver evidence-based strategies and bespoke solutions for ophthalmic biotech innovators worldwide.",
};

export const valueProps = [
  {
    title: "Science-Driven",
    description: "Evidence-based strategies grounded in ophthalmic science.",
    icon: "flask" as const,
  },
  {
    title: "Global Perspective",
    description:
      "Decades of experience across U.S., Europe, and emerging markets.",
    icon: "globe" as const,
  },
  {
    title: "Bespoke Solutions",
    description: "Tailored advisory and development solutions for your program.",
    icon: "target" as const,
  },
  {
    title: "Better Outcomes",
    description: "Focused on delivering meaningful impact for patients.",
    icon: "chart" as const,
  },
];

export const homeStats = [
  { value: "30+", label: "Years of Combined Experience", icon: "users" as const },
  {
    value: "14",
    label: "Ophthalmic Products Launched Globally",
    icon: "package" as const,
  },
  {
    value: "100%",
    label: "Focus on Ophthalmic & Vision Sciences",
    icon: "globe" as const,
  },
  {
    value: "Global",
    label: "Network of Partners & Experts",
    icon: "handshake" as const,
  },
];

export const aboutHomeCopy = {
  body: "BEEÑA-E Consulting brings decades of ophthalmic biotech experience to sponsors worldwide — combining scientific rigor, global regulatory insight, and patient-centered strategies that accelerate meaningful outcomes for patients and partners alike.",
};

export const footerContact = {
  phone: "+1 (925) 555-0199",
  email: "info@beena-e.com",
  address: "Danville, CA, United States",
};
