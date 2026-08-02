type LinkItem = {
  title: string;
  href: string;
};

const semanticMap: Record<string, LinkItem[]> = {
  "web-development": [
    {
      title: "Web Development Services",
      href: "/services/web-development",
    },
    {
      title: "Technical SEO",
      href: "/services/technical-seo",
    },
    {
      title: "Next.js Business Websites Guide",
      href: "/resources/nextjs-business-websites",
    },
    {
      title: "PhotoClippService Case Study",
      href: "/portfolio/photoclippservice",
    },
    {
      title: "Home Services Industry",
      href: "/industries/home-services",
    },
    {
      title: "Web Development in New York",
      href: "/locations/new-york-ny/web-development",
    },
  ],

  "technical-seo": [
    {
      title: "Technical SEO Services",
      href: "/services/technical-seo",
    },
    {
      title: "Website Audit",
      href: "/services/website-audit",
    },
    {
      title: "Technical SEO Checklist",
      href: "/resources/technical-seo-checklist",
    },
    {
      title: "Website Audit Entity",
      href: "/entities/website-audit",
    },
  ],

  "website-audit": [
    {
      title: "Website Audit Services",
      href: "/services/website-audit",
    },
    {
      title: "Technical SEO",
      href: "/services/technical-seo",
    },
    {
      title: "AI Search Visibility Guide",
      href: "/resources/ai-search-visibility-guide",
    },
  ],
};

export function getSemanticLinks(
  key: string,
): LinkItem[] {
  return semanticMap[key] ?? [];
}