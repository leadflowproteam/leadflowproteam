import Container from "@/components/ui/Container";

const features = [
  {
    title: "High-Performance Websites",
    description:
      "Fast, secure, and scalable websites built with modern technologies for long-term business growth.",
    icon: "⚡",
  },
  {
    title: "Technical SEO",
    description:
      "Every project is built with SEO best practices to improve search visibility and website health.",
    icon: "🔍",
  },
  {
    title: "AI Search Ready",
    description:
      "Optimized for the future of AI-powered search experiences, including AEO and GEO strategies.",
    icon: "🤖",
  },
  {
    title: "Conversion Focused",
    description:
      "Designed to build trust, generate qualified leads, and turn more visitors into customers.",
    icon: "📈",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Businesses Choose LeadFlowProTeam
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Built for Performance, Visibility, and Growth
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We combine modern web development, technical SEO, and AI-ready
            optimization to help service businesses build credibility and
            generate more qualified leads.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}