import Container from "@/components/ui/Container";

const features = [
  {
    title: "Lightning Fast",
    description: "High-performance websites built with Next.js for maximum speed.",
    icon: "⚡",
  },
  {
    title: "Conversion Focused",
    description: "Designed to turn more visitors into paying customers.",
    icon: "📈",
  },
  {
    title: "Search Visibility",
    description: "SEO, GEO and AI Search optimization built into every project.",
    icon: "🔍",
  },
  {
    title: "Better Ad ROI",
    description: "Help your Facebook and Google Ads generate more sales.",
    icon: "💰",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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