import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    name: "Home Services",
    description:
      "Professional websites for contractors, plumbers, electricians, HVAC, roofing, landscaping, and other local service businesses that depend on qualified leads.",
    href: "/industries/home-services",
  },
  {
    name: "Healthcare",
    description:
      "Modern, trustworthy websites for medical clinics, dental practices, wellness centers, and healthcare providers focused on patient acquisition.",
    href: "/industries/healthcare",
  },
  {
    name: "Legal",
    description:
      "Professional websites for law firms and attorneys that improve visibility, credibility, and client enquiries.",
    href: "/industries/legal",
  },
  {
    name: "Real Estate",
    description:
      "High-performance websites designed for real estate agencies, brokers, and property professionals seeking more qualified leads.",
    href: "/industries/real-estate",
  },
  {
    name: "Construction",
    description:
      "Professional websites that showcase projects, build trust, and generate consistent enquiries for construction companies.",
    href: "/industries/construction",
  },
  {
    name: "Professional Services",
    description:
      "Business websites for consultants, agencies, accountants, and B2B service providers focused on long-term business growth.",
    href: "/industries/professional-services",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-linear-to-b from-slate-50 via-white to-slate-50 py-20 lg:py-28">
      <Container>
      <SectionHeading
          badge="Industries We Serve"
          title="Professional Website Solutions for High-Growth Service Industries"
          description="LeadFlowProTeam designs high-performance websites, Technical SEO, and AI Search Visibility strategies for service-based businesses across the United States, Canada, the United Kingdom, and Australia. Every solution is tailored to improve online visibility, strengthen digital authority, and generate more qualified leads."
        />

        <div className="mx-auto mt-6 max-w-4xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Whether you operate a local home service company, healthcare practice,
            legal firm, or professional service business, we build scalable,
            conversion-focused websites that help your business become easier to
            discover through both traditional search engines and modern AI-powered
            search experiences.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {industries.map((industry) => (
    <Link
      key={industry.name}
      href={industry.href}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
    >
      <div className="flex h-full flex-col p-8">

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
          <span className="text-xl font-bold">
            {industry.name.charAt(0)}
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
          {industry.name}
        </h3>

        <p className="mt-5 grow leading-8 text-slate-600">
          {industry.description}
        </p>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <span className="inline-flex items-center font-semibold text-cyan-700 transition-all duration-300 group-hover:translate-x-1">
            View Industry Solutions →
            <span className="ml-2">→</span>
          </span>
        </div>

      </div>
    </Link>
  ))}
</div>
<div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
  <div className="mx-auto max-w-5xl text-center">
    <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Industry-Specific Websites Built for Long-Term Growth
    </h3>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Every industry has different customers, search intent, competition, and
      conversion goals. We build tailored website strategies that combine modern
      web development, Technical SEO, Entity SEO, and AI Search Visibility to
      help your business generate more qualified leads and sustainable organic
      growth.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Industry-Focused Strategy
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Every website is customized around your industry, customer behavior,
          local competition, and business objectives.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          AI Search Visibility
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Structured data, semantic architecture, and Entity SEO help AI systems
          better understand and recommend your business.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Sustainable Business Growth
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Build a scalable online presence that supports stronger rankings,
          qualified traffic, and long-term lead generation.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="mt-10 flex flex-wrap justify-center gap-4">
  <Link
    href="/industries"
    className="rounded-xl bg-cyan-600 px-7 py-3 font-semibold text-white transition hover:bg-cyan-700"
  >
    Explore All Industries
  </Link>

  <Link
    href="/free-audit"
    className="rounded-xl border border-cyan-300 px-7 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
  >
    Request Free Website Audit
  </Link>
</div>
      </Container>
    </section>
  );
}