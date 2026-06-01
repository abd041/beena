export function OrganizationJsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BEEÑA-E Consulting",
    url: baseUrl,
    description:
      "Global ophthalmic biotech advisory and development partner.",
    areaServed: "Worldwide",
    serviceType: [
      "Ophthalmic Biotech Consulting",
      "Product Development",
      "Regulatory Affairs",
      "Market Access",
      "Commercialization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
