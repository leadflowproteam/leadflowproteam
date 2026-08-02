import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    name: "Home Services",
    description:
      "Professional websites for local service businesses focused on lead generation and growth.",
    href: "/industries",
  },
  {
    name: "Roofing",
    description:
      "High-converting websites built for roofing contractors and roofing companies.",
    href: "/industries",
  },
  {
    name: "HVAC",
    description:
      "Fast, SEO-friendly websites for heating and cooling businesses.",
    href: "/industries",
  },
  {
    name: "Plumbing",
    description:
      "Lead-focused websites that help plumbing businesses generate more enquiries.",
    href: "/industries",
  },
  {
    name: "Solar",
    description:
      "Modern websites designed for solar installation and renewable energy companies.",
    href: "/industries",
  },
  {
    name: "Landscaping",
    description:
      "Professional online presence for landscaping and outdoor service companies.",
    href: "/industries",
  },
  {
    name: "Cleaning Services",
    description:
      "Conversion-focused websites for residential and commercial cleaning businesses.",
    href: "/industries",
  },
  {
    name: "Dental Clinics",
    description:
      "Trust-building websites that help dental practices attract new patients.",
    href: "/industries",
  },
  {
    name: "Law Firms",
    description:
      "Professional websites optimized for visibility, credibility, and client enquiries.",
    href: "/industries",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-slate-50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Industries We Serve"
          title="Helping Service Businesses Grow Online"
          description="We build high-performance websites for service-based businesses that want better visibility, stronger credibility, and more qualified leads."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                {industry.name}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {industry.description}
              </p>

              <span className="mt-6 inline-flex items-center font-semibold text-blue-600">
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}