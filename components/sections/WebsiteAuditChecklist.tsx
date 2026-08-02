import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const checklist = [
  "Technical SEO Audit & Website Health Analysis",
  "Google Indexability & Crawlability Review",
  "XML Sitemap & robots.txt Validation",
  "Core Web Vitals Assessment",
  "Page Speed & Performance Optimization Opportunities",
  "Mobile Usability & Responsive Design Review",
  "AI Search Visibility (AEO) Readiness",
  "Entity SEO & Semantic Structure Analysis",
  "Schema Markup & Structured Data Validation",
  "Internal Linking & Site Architecture Review",
  "Canonical Tags & URL Structure Analysis",
  "Broken Links, Redirect Chains & 404 Error Detection",
  "Duplicate Content & Thin Content Identification",
  "Meta Titles, Meta Descriptions & Heading Structure Review",
  "Image SEO & Media Optimization",
  "Accessibility (WCAG) Compliance Assessment",
  "HTTPS, SSL & Website Security Review",
  "Google Search Console & Index Coverage Analysis",
  "Conversion Rate Optimization (CRO) Review",
  "Prioritized Technical SEO Action Plan",
];

export default function WebsiteAuditChecklist() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Complete Audit Checklist"
          title="Everything Included in Our Professional Website Audit"
          description="Every Website Audit follows a comprehensive framework designed to identify technical issues, improve search visibility, strengthen AI Search readiness, optimize performance, and provide a practical roadmap for long-term digital growth."
        />

        <div className="mx-auto mt-14 max-w-6xl rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm lg:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
              >
                <div className="mt-0.5 rounded-full bg-blue-50 p-2 transition-colors duration-300 group-hover:bg-blue-600">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 group-hover:text-white" />
                </div>

                <span className="leading-7 text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}