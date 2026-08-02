import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    company: "Professional Services Business",
    role: "Business Owner",
    quote:
      "LeadFlowProTeam delivered a landing page that loads fast, looks professional, and gives our visitors a much better experience. We now have a stronger foundation for lead generation.",
  },
  {
    company: "Home Services Company",
    role: "Marketing Manager",
    quote:
      "The combination of modern design, Technical SEO, and AI Search Optimization gave us confidence that our landing page is built for both today's search engines and future AI platforms.",
  },
];

export default function LandingPageTestimonials() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          badge="Client Feedback"
          title="Businesses Trust Our Landing Page Solutions"
          description="Our landing pages are designed to improve user experience, strengthen search visibility, and support long-term business growth."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-lg leading-8 text-slate-700">
                “{item.quote}”
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.company}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}