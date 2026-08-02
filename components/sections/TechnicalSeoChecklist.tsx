import { CheckCircle2 } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const technicalChecklist = [
  "Complete Technical SEO Audit",
  "XML Sitemap Optimization",
  "Robots.txt Configuration",
  "Canonical URL Optimization",
  "Indexability Improvements",
  "Crawl Budget Optimization",
  "Broken Link Detection & Repair",
  "Redirect Chain Optimization",
  "HTTPS & Security Validation",
  "Duplicate Content Resolution",
] as const;

const performanceChecklist = [
  "Core Web Vitals Optimization",
  "Largest Contentful Paint (LCP)",
  "Interaction to Next Paint (INP)",
  "Cumulative Layout Shift (CLS)",
  "Advanced Page Speed Optimization",
  "Image & Asset Optimization",
  "Mobile-First Performance",
  "Accessibility (WCAG) Review",
  "HTTPS & Security Hardening",
  "JavaScript & CSS Optimization",
] as const;

const aiChecklist = [
  "Schema.org Structured Data",
  "Entity SEO Optimization",
  "Semantic HTML Architecture",
  "Metadata Optimization",
  "Internal Linking Strategy",
  "AI Search Readiness",
  "Google AI Overviews Optimization",
  "ChatGPT & Gemini Visibility",
  "Knowledge Graph Signals",
  "Technical SEO Growth Roadmap",
] as const;

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="mb-8 flex items-center justify-between">
  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
    {title}
  </h3>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
    {items.length} Items
  </span>
</div>

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
         <li
          key={item}
          className="group flex items-start gap-4 rounded-xl p-2 transition-colors duration-300 hover:bg-slate-50"
        >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

            <span className="leading-7 text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
            {item}
          </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechnicalSeoChecklist() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Technical SEO Framework"
        title="Everything Included in Our Technical SEO Service"
        description="Our Technical SEO service goes far beyond fixing technical errors. We build a complete search-ready foundation that improves crawlability, indexability, Core Web Vitals, structured data, AI Search Visibility, user experience, and long-term organic growth."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <ChecklistCard
          title="Technical Foundation"
          items={technicalChecklist}
        />

        <ChecklistCard
          title="Performance & UX"
          items={performanceChecklist}
        />

        <ChecklistCard
          title="Search Visibility & AI"
          items={aiChecklist}
        />
      </div>

      <div className="mt-20 overflow-hidden rounded-[36px] border border-blue-100 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 p-10 text-white shadow-2xl lg:p-16">

        <div className="mx-auto max-w-4xl text-center">
  <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur">
    Technical SEO • AI Search Visibility • Long-Term Growth
  </span>
          <h3 className="mt-8 text-3xl font-extrabold leading-tight lg:text-5xl">
          Technical SEO Is the Foundation
          <br />
          Behind Every High-Ranking Website
        </h3>

          <p className="mt-8 text-lg leading-8 text-blue-100">
            Technical SEO isn't just about fixing errors. It creates the
            infrastructure that allows Google and AI-powered search engines to
            understand, crawl, index, and trust your website—while delivering a
            faster, more reliable experience for your visitors.
          </p>
        </div>
      </div>
    </Section>
  );
}