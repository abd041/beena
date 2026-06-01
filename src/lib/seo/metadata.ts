import type { Metadata } from "next";

const siteName = "BEEÑA-E Consulting";

export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const defaultMetadata: Metadata = {
  ...buildPageMetadata({
    title: "Global Ophthalmic Biotech Advisory & Development Partner",
    description:
      "BEEÑA-E Consulting delivers science-driven ophthalmic biotech advisory, product development, regulatory, and commercialization services worldwide.",
    path: "/",
  }),
  icons: {
    icon: "/images/beena-e-logo.png",
    apple: "/images/beena-e-logo.png",
  },
};
