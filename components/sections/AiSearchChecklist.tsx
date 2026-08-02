import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const checklist = [
  "Complete AI Search Visibility Audit",
  "Entity SEO Strategy & Entity Mapping",
  "Schema.org Structured Data Implementation",
  "Organization, Service & FAQ Schema",
  "Knowledge Graph Readiness",
  "Semantic Content Architecture",
  "AI-Friendly Heading Structure",
  "Conversational Search Optimization",
  "Google AI Overviews Optimization",
  "ChatGPT, Gemini & Claude Readiness",
  "Generative Engine Optimization (GEO)",
  "Internal Linking Optimization",
  "Technical SEO Validation",
  "Core Web Vitals Review",
  "Crawlability & Indexability Analysis",
  "Search Console Health Review",
  "Duplicate Content Detection",
  "Canonical & Metadata Optimization",
  "AI Search Performance Recommendations",
  "Future AI Search Strategy Roadmap",
];

export default function AiSearchChecklist() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="What's Included"
          title="Everything Included in Our AI Search Visibility Service"
          description="Our AI Search Visibility framework combines Technical SEO, Entity SEO, structured data, semantic optimization, and Generative Engine Optimization (GEO) to prepare your business for the future of search."
        />

        <div className="mx-auto mt-16 max-w-5xl rounded-[36px] border border-gray-200 bg-white p-10 shadow-sm">
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />

                <span className="text-base leading-7 text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}

        <div className="mt-24 rounded-[36px] border border-blue-100 bg-blue-50 p-10">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              A Complete AI Search Optimization Framework
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI Search Visibility service goes beyond traditional SEO.
              Every project includes structured data, Entity SEO, semantic
              content optimization, AI-friendly architecture, Technical SEO,
              and ongoing recommendations that help your business become easier
              for AI systems to understand, trust, recommend, and reference
              across modern AI-powered search experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}