export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export type NavigationItem = (typeof navigation)[number];

/**
 * Service sub-navigation — used in mega-menus or service dropdowns
 */
export const serviceNavigation = [
  {
    label: "AI Search Visibility",
    href: "/services/ai-search-visibility",
    description: "Audit & improve how AI engines represent your business",
  },
  {
    label: "AI Visibility Framework",
    href: "/services/ai-visibility-framework",
    description: "Our 5-question methodology for B2B AI visibility audits",
  },
  {
    label: "Technical SEO",
    href: "/services/technical-seo",
    description: "Technical foundations that AI and search engines trust",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "AI-ready, performance-first websites for B2B companies",
  },
  {
    label: "Landing Page Development",
    href: "/services/landing-page-development",
    description: "High-converting pages built for search and AI discoverability",
  },
  {
    label: "Website Audit",
    href: "/services/website-audit",
    description: "Full website audit covering technical, content, and AI signals",
  },
] as const;

export type ServiceNavigationItem = (typeof serviceNavigation)[number];