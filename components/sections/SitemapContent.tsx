import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const pages = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" },
      { name: "Free Website Audit", href: "/free-audit" },
    ],
  },
  {
    title: "Service Pages",
    links: [
      {
        name: "Web Development",
        href: "/services/web-development",
      },
      {
        name: "Technical SEO",
        href: "/services/technical-seo",
      },
      {
        name: "AI Search Visibility",
        href: "/services/ai-search-visibility",
      },
      {
        name: "Landing Page Development",
        href: "/services/landing-page-development",
      },
      {
        name: "Website Audit",
        href: "/services/website-audit",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms of Service",
        href: "/terms",
      },
    ],
  },
];

export default function SitemapContent() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {pages.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {group.title}
              </h2>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 transition hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}