import Container from "@/components/ui/Container";

const features = [
  {
    icon: "⚡",
    title: "Performance First",
    description:
      "Every website is optimized for Core Web Vitals, fast loading, and exceptional user experience.",
  },
  {
    icon: "📈",
    title: "Built for Conversions",
    description:
      "We design websites that help turn advertising traffic into real customers and sales.",
  },
  {
    icon: "🤖",
    title: "AI Search Ready",
    description:
      "Modern SEO, GEO, AEO, and LLM optimization help your business stay visible in the future of search.",
  },
  {
    icon: "🤝",
    title: "Growth Partnership",
    description:
      "We don't just launch your website—we help you improve and grow it over time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Built for Businesses That Want More Than Just a Website
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We combine modern development, search visibility, and conversion
            strategy to help your business grow online.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-5 text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}