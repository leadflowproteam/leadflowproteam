"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  Database,
  FileSearch,
  Globe,
  Layers,
  Network,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Tag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";

type Tab = "b2b" | "ecommerce";

const b2b = {
  label: "Commercial & B2B",
  icon: Briefcase,
  tagline: "Audit built for service businesses, agencies, consultancies, and B2B companies",
  color: {
    badge: "bg-blue-100 text-blue-700",
    accent: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border-blue-300 text-blue-700 hover:bg-blue-50",
    tab: "bg-blue-600 text-white",
    tabInactive: "text-blue-600 hover:bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
    cardBorder: "hover:border-blue-300",
    progressBg: "bg-blue-600",
    cta: "from-blue-600 via-blue-700 to-slate-900",
  },
  auditAreas: [
    {
      icon: Building2,
      title: "Organization Entity Audit",
      description:
        "We audit how AI and search engines understand your company's identity — checking Organization schema, business descriptions, authoritative mentions, and knowledge graph signals.",
    },
    {
      icon: Network,
      title: "B2B Service & Authority Signals",
      description:
        "We review your service pages, case studies, and thought leadership content to ensure AI systems recognize your professional expertise and recommend you to relevant buyer queries.",
    },
    {
      icon: FileSearch,
      title: "Buyer Query Visibility",
      description:
        "We test how you appear when B2B buyers ask ChatGPT, Gemini, or Perplexity about your services — identifying whether competitors are recommended instead of you.",
    },
    {
      icon: Layers,
      title: "LinkedIn & Professional Data Signals",
      description:
        "We check cross-platform consistency between your website, LinkedIn, and other professional data sources that AI uses to validate your business identity.",
    },
    {
      icon: BarChart3,
      title: "Lead Generation Funnel Analysis",
      description:
        "We examine whether your site's content structure and internal linking support the full B2B buyer journey — from discovery to decision — and is readable by AI answer engines.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Credibility Audit",
      description:
        "We review client testimonials, case study schema, review markup, and authority signals that build trust with both AI systems and prospective B2B buyers.",
    },
  ],
  problems: [
    {
      issue: "No Organization or Service schema",
      fix: "Implement full B2B Organization + Service + FAQ schema markup",
    },
    {
      issue: "Invisible to B2B buyer AI queries",
      fix: "GEO-optimize service pages for conversational buyer questions",
    },
    {
      issue: "No case study structured data",
      fix: "Add Case Study and Review schema to build credibility signals",
    },
    {
      issue: "No entity presence in knowledge graph",
      fix: "Build entity mapping and link to authoritative B2B data sources",
    },
    {
      issue: "Thin service page content",
      fix: "Expand with topical authority content structured for AI extraction",
    },
    {
      issue: "Competitors cited by ChatGPT / Gemini instead",
      fix: "Citation optimization strategy to improve AI referenceability",
    },
  ],
  stat: { value: "76%", label: "of B2B buyers use AI search to evaluate vendors before contact" },
};

const ecommerce = {
  label: "Ecommerce",
  icon: ShoppingCart,
  tagline: "Audit built for online stores, product brands, and ecommerce businesses",
  color: {
    badge: "bg-violet-100 text-violet-700",
    accent: "text-violet-600",
    border: "border-violet-200",
    bg: "bg-violet-50",
    button: "bg-violet-600 hover:bg-violet-700 text-white",
    outline: "border-violet-300 text-violet-700 hover:bg-violet-50",
    tab: "bg-violet-600 text-white",
    tabInactive: "text-violet-600 hover:bg-violet-50",
    iconBg: "bg-violet-100 text-violet-600",
    cardBorder: "hover:border-violet-300",
    progressBg: "bg-violet-600",
    cta: "from-violet-600 via-violet-700 to-slate-900",
  },
  auditAreas: [
    {
      icon: Package,
      title: "Product Schema Audit",
      description:
        "We audit every product page for Product schema — including price, availability, brand, SKU, and AggregateRating — so AI systems can surface your products in shopping-related AI answers.",
    },
    {
      icon: Star,
      title: "Review & Rating Markup",
      description:
        "We check whether your reviews and ratings are structured with schema markup, enabling AI engines to understand your product trust signals and surface them in AI-generated comparisons.",
    },
    {
      icon: Tag,
      title: "Category & Navigation Structure",
      description:
        "We audit BreadcrumbList schema, category page content, and navigation hierarchy to ensure AI can correctly understand your product catalog and present it in structured results.",
    },
    {
      icon: Zap,
      title: "Product Page Speed (Core Web Vitals)",
      description:
        "We audit page load performance for product and category pages, including image optimization, script loading, and LCP — critical for both AI search ranking and conversion rates.",
    },
    {
      icon: Search,
      title: "AI Shopping Query Visibility",
      description:
        "We test how your products appear when shoppers ask AI tools about products like yours — identifying whether your store is absent from AI-generated product recommendations.",
    },
    {
      icon: Globe,
      title: "Brand Entity & GEO for Products",
      description:
        "We review brand entity signals and implement GEO strategies so that AI systems reference your products when answering product-related queries and comparison questions.",
    },
  ],
  problems: [
    {
      issue: "Missing Product schema on product pages",
      fix: "Implement full Product schema with price, availability, SKU, brand, and ratings",
    },
    {
      issue: "No AggregateRating or Review schema",
      fix: "Add Review + AggregateRating schema to every eligible product page",
    },
    {
      issue: "Slow product page load times",
      fix: "Optimize images, defer scripts, and fix LCP to meet Core Web Vitals",
    },
    {
      issue: "Category pages have thin or no content",
      fix: "Add structured, AI-readable category descriptions and FAQ blocks",
    },
    {
      issue: "Products invisible in AI shopping answers",
      fix: "GEO-optimize product and category pages for AI product comparison queries",
    },
    {
      issue: "No brand entity signals",
      fix: "Build brand entity via Organization schema, consistent cross-platform data, and GEO signals",
    },
  ],
  stat: { value: "68%", label: "of online shoppers now use AI tools to research products before buying" },
};

export default function AiSearchAudienceAudit() {
  const [activeTab, setActiveTab] = useState<Tab>("b2b");
  const data = activeTab === "b2b" ? b2b : ecommerce;
  const { color } = data;

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Who We Audit
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Targeted Audits for Your Business Type
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Not all websites have the same AI visibility challenges. Our audits
            are specifically designed for the problems and opportunities that
            matter most to your type of business.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mx-auto mt-10 flex max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
          {(["b2b", "ecommerce"] as Tab[]).map((tab) => {
            const tabData = tab === "b2b" ? b2b : ecommerce;
            const TabIcon = tabData.icon;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? tab === "b2b"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-violet-600 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {tabData.label}
              </button>
            );
          })}
        </div>

        {/* Audience Tagline */}
        <div className={`mx-auto mt-6 max-w-xl rounded-2xl border px-6 py-4 text-center text-sm font-medium ${color.border} ${color.bg} ${color.accent}`}>
          {data.tagline}
        </div>

        {/* Stat Banner */}
        <div className="mx-auto mt-6 max-w-lg text-center">
          <span className={`text-4xl font-black ${color.accent}`}>
            {data.stat.value}
          </span>
          <p className="mt-1 text-sm text-gray-500">{data.stat.label}</p>
        </div>

        {/* Audit Areas Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.auditAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color.cardBorder}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color.iconBg}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Problems & Fixes */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className={`border-b border-slate-200 px-8 py-5 ${color.bg}`}>
            <div className="flex items-center gap-3">
              <FileSearch className={`h-5 w-5 ${color.accent}`} />
              <p className={`font-bold ${color.accent}`}>
                Common {data.label} AI Audit Findings & Fixes
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {data.problems.map((p, i) => (
              <div
                key={i}
                className="grid gap-4 px-8 py-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
              >
                {/* Problem */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-red-100 p-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{p.issue}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:justify-center">
                  <ArrowRight className={`h-4 w-4 ${color.accent}`} />
                </div>

                {/* Fix */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${color.accent}`} />
                  <p className="text-sm font-medium text-gray-700">{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included summary */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: FileSearch, text: "Full website AI readiness audit" },
            { icon: TrendingUp, text: "Prioritized fixing proposal report" },
            { icon: Users, text: "Tailored to your business type" },
            { icon: Bot, text: "AI & GEO visibility testing" },
            { icon: Database, text: "Structured data gap analysis" },
            { icon: BadgeCheck, text: "Competitive visibility comparison" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-700 shadow-sm"
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${color.accent}`} />
                {item.text}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`mt-12 overflow-hidden rounded-[32px] bg-gradient-to-br ${color.cta} px-8 py-12 text-center text-white shadow-2xl sm:px-12`}>
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">
            {data.label} Audit
          </p>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">
            Ready to see exactly where your{" "}
            {activeTab === "b2b" ? "B2B website" : "ecommerce store"} stands?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">
            We will audit your website specifically for{" "}
            {activeTab === "b2b"
              ? "B2B and commercial visibility issues"
              : "ecommerce AI and search visibility gaps"}
            , then deliver a clear, prioritized fixing proposal.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold transition hover:bg-slate-100"
              style={{ color: activeTab === "b2b" ? "#2563eb" : "#7c3aed" }}
            >
              Request a Free {data.label} Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk With Our Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
