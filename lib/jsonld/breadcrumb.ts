export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function generateBreadcrumbJsonLd(
  items: readonly BreadcrumbItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}