import {
  Activity,
  Gauge,
  Search,
  ShieldCheck,
  Smartphone,
  Accessibility,
  Bot,
  FileSearch,
  Link2,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Activity,
    title: "Complete Website Health Assessment",
    description:
      "Perform a full technical review of your website to uncover hidden issues affecting search visibility, user experience, security, accessibility, and business growth.",
  },
  {
    icon: Search,
    title: "Advanced Technical SEO Audit",
    description:
      "Analyze crawlability, indexing, XML sitemaps, robots.txt, canonicalization, redirects, metadata, URL structures, duplicate content, and overall search engine health.",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description:
      "Measure loading speed, rendering efficiency, responsiveness, interaction performance, and Core Web Vitals to improve rankings and visitor satisfaction.",
  },
  {
    icon: Bot,
    title: "AI Search Visibility Analysis",
    description:
      "Evaluate your website's readiness for AI-powered search platforms including ChatGPT, Gemini, Claude, Google AI Overviews, Perplexity, and other answer engines.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & UX Review",
    description:
      "Identify accessibility issues, usability barriers, and user experience improvements that support both SEO performance and inclusive design standards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience Optimization",
    description:
      "Review responsive layouts, mobile usability, touch interactions, viewport configuration, and mobile performance across modern devices.",
  },
  {
    icon: ShieldCheck,
    title: "Security & SSL Inspection",
    description:
      "Verify HTTPS implementation, SSL configuration, security headers, mixed-content issues, and common website vulnerabilities that impact trust and SEO.",
  },
  {
    icon: Link2,
    title: "Site Architecture & Internal Linking",
    description:
      "Evaluate navigation, page hierarchy, internal linking, orphan pages, topical clusters, and overall information architecture for stronger authority.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization Review",
    description:
      "Assess CTAs, trust signals, landing page effectiveness, user flow, forms, and conversion opportunities to maximize lead generation and business growth.",
  },
  {
    icon: FileSearch,
    title: "Prioritized Action Plan",
    description:
      "Receive a comprehensive audit report with prioritized recommendations, implementation roadmap, business impact analysis, and clear next-step guidance.",
  },
];

export default function WebsiteAuditFeatures() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Website Audit Features"
        title="A Comprehensive Website Audit That Goes Beyond Traditional SEO"
        description="Our Website Audit evaluates every critical area of your online presence—from Technical SEO and Core Web Vitals to AI Search Visibility, accessibility, security, and conversion optimization—providing a clear roadmap for sustainable business growth."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="leading-tight">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-4 grow leading-8">
                  {feature.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}