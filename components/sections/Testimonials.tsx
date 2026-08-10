import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  MapPin,
  Quote,
  Star,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Photo Clipp Service",
    role: "Professional Image Editing Company",
    location: "United States",
    project: "Next.js Website Development",
    result: "Performance • SEO • AI Search Ready",
    quote:
      "LeadFlowProTeam developed a modern, lightning-fast business website with outstanding Core Web Vitals, Technical SEO, structured data, and long-term scalability.",
  },
  {
    name: "Clipping Path Agent",
    role: "SEO Growth Project",
    location: "United States",
    project: "Technical SEO",
    result: "Technical SEO Improvement",
    quote:
      "Our long-term SEO optimization project demonstrates practical experience in improving search visibility, crawlability, indexing, and website performance.",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading
        badge="Client Success Stories"
        title="Helping Businesses Build Stronger Online Presence"
        description="Every project is engineered for performance, Technical SEO, AI Search Visibility, and measurable business growth using modern web technologies."
      />

      {/* =========================================================
          TESTIMONIAL GRID
          Two balanced columns on desktop.
          ========================================================= */}

      <div className="mx-auto mt-14 w-full max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="group flex h-full flex-col overflow-hidden"
            >
              <Card.Body className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
                {/* Rating + Verified */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <BadgeCheck className="mr-1 h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Quote className="h-7 w-7" />
                </div>

                {/* Quote */}
                <blockquote className="mt-6 flex-1">
                  <p className="leading-7 text-slate-600">
                    “{item.quote}”
                  </p>
                </blockquote>

                {/* Client Information */}
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.role}
                  </p>

                  {/* Location + Project */}
                  <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 shrink-0" />
                      <span>{item.project}</span>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-5 rounded-xl bg-blue-50 px-4 py-3">
                    <p className="text-sm font-semibold text-blue-700">
                      {item.result}
                    </p>
                  </div>

                  {/* Case Study Link */}
                  <Link
                    href="/portfolio"
                    className="mt-6 inline-flex items-center font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
                  >
                    Read Case Study

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}