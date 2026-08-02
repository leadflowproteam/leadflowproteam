import {
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Photo Clipp Service",
    role: "Professional Image Editing Company",
    quote:
      "LeadFlowProTeam developed a modern, high-performance website focused on Core Web Vitals, Technical SEO, and long-term business growth.",
    project: "Next.js Website Development",
  },
  {
    name: "Clipping Path Agent",
    role: "SEO Growth Project",
    quote:
      "Our long-term SEO optimization demonstrates consistent experience in improving search visibility and technical website performance.",
    project: "Technical SEO",
  },
  {
    name: "Your Business Could Be Next",
    role: "Future Success Story",
    quote:
      "We help service businesses build modern websites that generate trust, qualified leads, and sustainable online growth.",
    project: "Business Growth",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Client Success Stories"
        title="Trusted By Growing Businesses"
        description="Every website we build is engineered for performance, Technical SEO, AI Search Visibility, and measurable business growth."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.name}
            className="group overflow-hidden rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
          >
            <Card.Body className="p-8">
              {/* Stars */}

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Quote className="h-7 w-7" />
              </div>

              <p className="mt-8 leading-8 text-gray-600">
                "{item.quote}"
              </p>

              {/* Footer */}

              <div className="mt-10 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.role}
                </p>

                <div className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.project}
                </div>
              </div>

              <div className="mt-8 flex items-center font-semibold text-blue-600">
                Read Case Study

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Section>
  );
}