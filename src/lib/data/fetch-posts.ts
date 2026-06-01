import { createClient } from "@/lib/supabase/server";
import { staticInsightPosts, type InsightPost } from "@/lib/data/posts";

const gradients = [
  "from-forest via-forest-elevated to-forest-dark",
  "from-emerald-900 via-forest to-forest-dark",
  "from-teal-900 via-forest-elevated to-forest",
];

export async function getFeaturedPosts(limit = 3): Promise<InsightPost[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return staticInsightPosts.slice(0, limit);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("slug, title, excerpt, published_at, read_time_min")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error || !data?.length) {
      return staticInsightPosts.slice(0, limit);
    }

    const homeImages = [
      "/images/home/insight-1.png",
      "/images/home/insight-2.png",
      "/images/home/insight-3.png",
    ];

    return data.map((row, i) => ({
      slug: row.slug,
      title: row.title,
      category: "Insights",
      excerpt: row.excerpt ?? "",
      publishedAt: row.published_at ?? new Date().toISOString(),
      readTimeMin: row.read_time_min ?? 5,
      imageGradient: gradients[i % gradients.length]!,
      imageUrl: homeImages[i % homeImages.length],
    }));
  } catch {
    return staticInsightPosts.slice(0, limit);
  }
}
