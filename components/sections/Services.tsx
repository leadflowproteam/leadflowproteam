import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const services = [
  {
    icon: "🚀",
    title: "High-Performance eCommerce Websites",
    description:
      "Lightning-fast Next.js websites built to maximize conversions from Facebook and Google Ads.",
  },
  {
    icon: "🔍",
    title: "SEO + GEO + AI Search Optimization",
    description:
      "Improve your visibility across Google Search and AI-powered search platforms with modern optimization.",
  },
  {
    icon: "📈",
    title: "Conversion Rate Optimization",
    description:
      "Optimize landing pages, product pages, and user journeys to turn more visitors into customers.",
  },
  {
    icon: "🤖",
    title: "AI Inbox Automation",
    description:
      "Automate customer conversations on Facebook, Instagram, and WhatsApp. (Coming Soon)",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            Everything You Need to Grow Your eCommerce Business
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We help advertising-driven eCommerce businesses build faster
            websites, increase search visibility, and convert more visitors
            into paying customers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button>Book Free Strategy Call</Button>
        </div>
      </Container>
    </section>
  );
}