import {
  ClipboardCheck,
  SearchCheck,
  Code2,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
const process = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Comprehensive Technical SEO Audit",
    description:
      "We analyze every technical aspect of your website including crawlability, indexing, Core Web Vitals, structured data, duplicate content, site architecture, security, mobile usability, XML sitemaps, robots directives, canonicalization, and overall search health.",
  },
  {
    step: "02",
    icon: SearchCheck,
    title: "Technical SEO Strategy & Prioritization",
    description:
      "After identifying issues, we build a prioritized optimization roadmap based on business goals, search visibility opportunities, AI Search readiness, implementation complexity, and expected SEO impact.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Implementation & Optimization",
    description:
      "Our team optimizes website architecture, internal linking, metadata, structured data, schema markup, page speed, Core Web Vitals, indexing signals, semantic HTML, XML sitemaps, robots directives, and technical performance across the entire website.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Validation & Quality Assurance",
    description:
      "Every optimization is validated using Google Search Console, Lighthouse, Schema Validation, Rich Results testing, accessibility standards, mobile usability testing, and AI Search optimization best practices.",
  },
  {
    step: "05",
    icon: LineChart,
    title: "Continuous Monitoring & Growth",
    description:
      "Technical SEO is never a one-time task. We continuously monitor indexing, performance, crawl health, structured data, AI Search visibility, and emerging technical opportunities to support sustainable long-term organic growth.",
  },
];

export default function TechnicalSeoProcess() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Our Technical SEO Process"
        title="A Proven Framework for Long-Term Search Success"
        description="Every Technical SEO project follows a structured workflow that strengthens your website's technical foundation, improves search visibility, enhances AI Search Optimization, and supports sustainable business growth."
      />

      <div className="mt-16 space-y-8">
        {process.map((item) => {
          const Icon = item.icon;

          return (
            <Card
  key={item.step}
  className="group relative overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl"
>
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-600" />

  <Card.Body className="p-8 lg:p-10">
    <div className="flex flex-col gap-10 lg:flex-row">

      {/* Left Column */}

      <div className="flex items-center gap-5 lg:w-72 lg:flex-col lg:items-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-extrabold text-white shadow-xl">
          {item.step}
        </div>

        <div className="rounded-2xl bg-cyan-50 p-5 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
          <Icon className="h-9 w-9" />
        </div>

      </div>

      {/* Right Column */}

      <div className="flex-1">

        <div className="flex items-center gap-3">

          <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            {item.title}
          </h3>

          <ArrowRight className="h-5 w-5 text-cyan-500 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

        </div>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {item.description}
        </p>

      </div>

    </div>
  </Card.Body>
</Card>
          );
        })}
      </div>

     {/* Bottom Summary */}

<div className="mt-20 overflow-hidden rounded-[36px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-xl">
  <div className="px-8 py-14 lg:px-16 lg:py-16">

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-700">
        Why Technical SEO Matters
      </span>

      <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
        Technical SEO Is the Foundation of
        <span className="block text-cyan-600">
          Sustainable Organic Growth
        </span>
      </h3>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
        Beautiful design and great content alone cannot achieve consistent search
        visibility. A technically optimized website allows search engines,
        AI-powered search systems, and users to access, understand, and trust
        your content more efficiently. The result is stronger rankings, improved
        user experience, higher visibility across Google AI Overviews, ChatGPT,
        Gemini, Claude, and long-term business growth.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">

        <div>
          <h4 className="text-4xl font-extrabold text-cyan-600">
            Faster
          </h4>

          <p className="mt-3 text-slate-600">
            Better Core Web Vitals & Website Performance
          </p>
        </div>

        <div>
          <h4 className="text-4xl font-extrabold text-cyan-600">
            Smarter
          </h4>

          <p className="mt-3 text-slate-600">
            Search Engine & AI Search Visibility
          </p>
        </div>

        <div>
          <h4 className="text-4xl font-extrabold text-cyan-600">
            Stronger
          </h4>

          <p className="mt-3 text-slate-600">
            Long-Term Organic Business Growth
          </p>
        </div>

      </div>

    </div>

  </div>
</div>
    </Section>
  );
}
