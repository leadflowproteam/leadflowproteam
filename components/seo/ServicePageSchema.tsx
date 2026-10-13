import { company } from "@/config/company";
import { services } from "@/data/services";

import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

type Props = {
  slug: string;
};

export default function ServicePageSchema({ slug }: Props) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const canonicalUrl = `${company.url}${service.href}`;

  const serviceJsonLd = serviceSchema({
    name: service.title,
    description: service.description,
    url: canonicalUrl,
    entitySlug: slug,
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Services", url: `${company.url}/services` },
    { name: service.title, url: canonicalUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
