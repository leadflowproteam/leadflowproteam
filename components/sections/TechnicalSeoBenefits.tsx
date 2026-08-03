import {
  BarChart3,
  Gauge,
  Search,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Gauge,
    title: "Faster Website Performance",
    description:
      "Improve Core Web Vitals, loading speed, visual stability, and responsiveness to deliver a faster user experience while strengthening search visibility and AI readiness.",
  },
  {
    icon: Search,
    title: "Better Crawlability & Indexing",
    description:
      "Ensure Google Search and AI-powered search systems can efficiently crawl, understand, and index your most valuable pages without technical barriers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Optimization",
    description:
      "Deliver consistent performance across desktop, tablet, and mobile devices with responsive architecture that supports Google's mobile-first indexing.",
  },
  {
    icon: Wrench,
    title: "Strong Technical Foundation",
    description:
      "Resolve crawl errors, broken links, redirect chains, duplicate content, indexing issues, XML sitemap problems, and other technical weaknesses that limit visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Ready Website",
    description:
      "Build a secure, scalable, technically optimized website that remains prepared for future Google algorithm updates and AI-powered search experiences.",
  },
  {
    icon: BarChart3,
    title: "Sustainable Organic Growth",
    description:
      "Create a long-term Technical SEO foundation that supports higher rankings, qualified organic traffic, improved conversions, and sustainable business growth.",
  },
];

export default function TechnicalSeoBenefits() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Technical SEO Benefits"
        title="Why Technical SEO Is Essential for Long-Term Search Success"
        description="Technical SEO provides the infrastructure that allows search engines and AI-powered search platforms to efficiently crawl, index, understand, and trust your website. Without a strong technical foundation, even the best content and backlinks cannot achieve their full potential."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Technical SEO is the backbone of every high-performing website.
          It improves website speed, crawlability, indexing, Core Web Vitals,
          mobile usability, structured data, and overall search visibility while
          preparing your business for the future of AI-powered search.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl leading-tight">
                  {benefit.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {benefit.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technical SEO Powers Every Digital Growth Strategy
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Content marketing, Entity SEO, Local SEO, backlinks, and AI Search
            Visibility all depend on a technically healthy website. Our Technical
            SEO framework creates a solid infrastructure that helps Google Search,
            Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot,
            Perplexity, and future AI systems efficiently understand, trust, and
            recommend your business.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Stronger Search Performance
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve crawl efficiency, indexing quality, Core Web Vitals,
                structured data, and overall technical health to support higher
                search visibility.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                AI Search Ready
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build a technically optimized website that modern AI assistants
                can efficiently crawl, interpret, summarize, and confidently
                recommend to potential customers.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Sustainable Business Growth
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Create a future-proof technical foundation that supports higher
                rankings, better user experience, stronger authority, and
                sustainable long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}