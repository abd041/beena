import { HOME_IMAGES } from "@/lib/data/home-content";

export type InsightPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTimeMin: number;
  imageGradient: string;
  imageUrl?: string;
  content?: string[];
};

export type InsightPostFull = InsightPost & {
  content: string[];
};

export const staticInsightPosts: InsightPost[] = [
  {
    slug: "emerging-therapies-ophthalmology",
    title: "Emerging Therapies Shaping the Future of Ophthalmology",
    category: "Industry Trends",
    excerpt:
      "Gene therapy, sustained delivery, and next-generation biologics are reshaping development priorities across retina and beyond.",
    publishedAt: "2026-04-02",
    readTimeMin: 6,
    imageGradient: "from-forest via-forest-elevated to-forest-dark",
    imageUrl: HOME_IMAGES.insight1,
  },
  {
    slug: "regulatory-pathways-ophthalmology",
    title: "Navigating Global Regulatory Pathways in Ophthalmology",
    category: "Regulatory",
    excerpt:
      "A practical lens on FDA, EMA, and emerging market requirements for novel ophthalmic products.",
    publishedAt: "2026-03-18",
    readTimeMin: 8,
    imageGradient: "from-emerald-900 via-forest to-forest-dark",
    imageUrl: HOME_IMAGES.insight2,
  },
  {
    slug: "biomarkers-ophthalmic-drug-development",
    title: "Biomarkers in Ophthalmic Drug Development",
    category: "Industry Trends",
    excerpt:
      "How translational biomarkers accelerate decision-making from early clinical proof-of-concept through pivotal trials.",
    publishedAt: "2026-02-10",
    readTimeMin: 5,
    imageGradient: "from-teal-900 via-forest-elevated to-forest",
    imageUrl: HOME_IMAGES.insight3,
  },
];

const postBodies: Record<string, string[]> = {
  "emerging-therapies-ophthalmology": [
    "Ophthalmic biotech continues to attract significant investment as gene therapy, sustained delivery platforms, and targeted biologics mature.",
    "Sponsors are increasingly expected to articulate differentiated science early — before capital-intensive clinical phases.",
    "BEEÑA-E advises teams to align development, HEOR, and commercial narratives from Phase 2 onward.",
  ],
  "regulatory-pathways-ophthalmology": [
    "Global ophthalmic development requires navigating distinct FDA, EMA, and regional expectations for clinical endpoints and combination products.",
    "Early agency engagement remains one of the highest-leverage activities for novel mechanisms.",
    "Structured gap analysis against ophthalmic precedents helps teams prioritize investments with confidence.",
  ],
  "biomarkers-ophthalmic-drug-development": [
    "Biomarkers are increasingly central to ophthalmic trials, linking mechanistic activity to clinically meaningful endpoints.",
    "Imaging, fluid biomarkers, and genetic stratification can de-risk programs when applied early.",
    "BEEÑA-E supports sponsors in biomarker strategy aligned to regulatory and payer expectations.",
  ],
};

export function getStaticPostContent(slug: string): string[] {
  return (
    postBodies[slug] ?? [
      "This article is being prepared. Check back soon for the full perspective from BEEÑA-E Consulting.",
    ]
  );
}

export function toFullPost(post: InsightPost): InsightPostFull {
  return {
    ...post,
    content: post.content ?? getStaticPostContent(post.slug),
  };
}
