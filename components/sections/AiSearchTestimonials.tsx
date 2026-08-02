import { Quote, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Home Services Company",
    role: "Business Owner",
    quote:
      "LeadFlowProTeam transformed our website into a modern AI-ready platform. The improvements in Technical SEO, structured data, and search visibility gave us a much stronger digital foundation for long-term growth.",
  },
  {
    name: "Healthcare Practice",
    role: "Marketing Director",
    quote:
      "The AI Search Visibility strategy was exactly what we needed. Our website is now easier for Google and AI systems to understand, and the overall user experience has improved dramatically.",
  },
  {
    name: "Legal Services Firm",
    role: "Managing Partner",
    quote:
      "We wanted more than traditional SEO. LeadFlowProTeam helped us prepare for the future of AI-powered search while improving website performance, entity optimization, and structured content.",
  },
];

export default function AiSearchTestimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Client Testimonials"
          title="Businesses Trust Our AI Search Visibility Strategy"
          description="We help service businesses build stronger Technical SEO foundations, improve AI Search Visibility, and prepare for the future of search."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <Quote className="h-10 w-10 text-blue-600" />

              <div className="mt-6 flex gap-1 text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}