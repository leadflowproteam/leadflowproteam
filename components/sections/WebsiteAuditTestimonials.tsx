import { Star, Quote } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "David Anderson",
    company: "Residential Service Business",
    quote:
      "The Website Audit revealed critical Technical SEO issues that had been preventing our website from reaching its full search potential. The report was clear, actionable, and gave our team a practical roadmap for improving crawlability, performance, and long-term search visibility.",
  },
  {
    name: "Sarah Mitchell",
    company: "Professional Consulting Firm",
    quote:
      "Instead of a generic SEO report, we received a comprehensive Website Audit covering Core Web Vitals, structured data, accessibility, AI Search Visibility, and conversion optimization. Every recommendation was practical, prioritized, and focused on measurable business growth.",
  },
];

export default function WebsiteAuditTestimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Client Success Stories"
          title="Real Businesses. Real Website Audit Results."
          description="Our Website Audit helps businesses uncover technical SEO issues, improve website performance, strengthen AI Search Visibility, and build a reliable foundation for long-term organic growth."
        />

        <div className="mt-12 grid gap-8 lg:mt-16 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-3xl border border-gray-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-current"
                    />
                  ))}
                </div>

                <Quote className="h-10 w-10 text-blue-100 transition-colors duration-300 group-hover:text-blue-200" />
              </div>

              <p className="mt-8 leading-8 text-gray-700">
                “{item.quote}”
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-blue-600 font-medium">
                  {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}