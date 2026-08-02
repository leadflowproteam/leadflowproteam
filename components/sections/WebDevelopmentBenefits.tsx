import {
  CheckCircle2,
  Gauge,
  Globe,
  Lock,
  Search,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Gauge,
    title: "Lightning-Fast Performance",
    description:
      "Deliver an exceptional user experience with ultra-fast loading speeds, optimized Core Web Vitals, intelligent caching, and modern performance optimization techniques.",
  },
  {
    icon: Search,
    title: "Technical SEO & AI Search Ready",
    description:
      "Every website is built with semantic HTML, clean architecture, structured metadata, schema readiness, and AI Search Optimization best practices from day one.",
  },
  {
    icon: Globe,
    title: "Responsive Across Every Device",
    description:
      "Provide a seamless browsing experience across desktop, tablet, and mobile devices using a modern mobile-first responsive design approach.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable Development",
    description:
      "Enterprise-grade coding standards, accessibility compliance, and secure development practices ensure long-term stability and easier maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale With Your Business",
    description:
      "Future-proof architecture allows your website to grow alongside your services, content strategy, marketing campaigns, and automation initiatives.",
  },
  {
    icon: CheckCircle2,
    title: "Higher Conversion Potential",
    description:
      "Conversion-focused layouts, intuitive navigation, strategic calls-to-action, and optimized user journeys help transform visitors into qualified customers.",
  },
];

export default function WebDevelopmentBenefits() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Business Benefits"
        title="Why Modern Businesses Invest in Professional Web Development"
        description="Our websites combine performance, Technical SEO, AI Search Readiness, scalability, security, and conversion optimization to create long-term business value."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl">
                  {benefit.title}
                </Card.Title>

                <Card.Description className="grow">
                  {benefit.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            A Website That Works for Your Business
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Your website should do more than simply look professional. It should
            strengthen your brand, improve search visibility, build trust,
            support marketing campaigns, generate qualified leads, and provide
            the technical foundation needed for long-term business growth. Every
            website we build is designed with these objectives in mind.
          </p>
        </div>
      </div>
      </Section>
);
}
