import Link from "next/link";
import {
  Award,
  Bot,
  Clock3,
  Gauge,
  HeartHandshake,
  SearchCheck,
  ArrowRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Gauge,
    title: "Lightning-Fast Performance",
    description:
      "Built with Next.js, optimized Core Web Vitals, and engineered for exceptional loading speed.",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO Foundation",
    description:
      "Every website includes structured metadata, schema markup, clean architecture, and crawl optimization.",
  },
  {
    icon: Bot,
    title: "AI Search Ready",
    description:
      "Prepared for Google AI Overviews, ChatGPT, Claude, Gemini, and future AI-powered search experiences.",
  },
  {
    icon: Award,
    title: "Modern Engineering",
    description:
      "Reusable components, scalable architecture, TypeScript safety, and long-term maintainability.",
  },
  {
    icon: HeartHandshake,
    title: "Business Growth Focus",
    description:
      "Every decision is made to improve trust, conversions, qualified leads, and long-term growth.",
  },
  {
    icon: Clock3,
    title: "Reliable Delivery",
    description:
      "Clear communication, transparent milestones, realistic timelines, and dependable execution.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Why LeadFlowProTeam"
        title="More Than Just Beautiful Websites"
        description="Every project is built with business growth, search visibility, user experience, and long-term scalability in mind."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <Card.Body className="p-8">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-5 leading-8">
                  {feature.description}
                </Card.Description>

                <div className="mt-8 flex items-center text-sm font-semibold text-blue-600">
                  Learn More

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900">
        <div className="grid items-center gap-10 px-10 py-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Let's Build Something Better
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white">
              Ready To Grow Your Business Online?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you need a high-performance website,
              Technical SEO, AI Search Visibility, or a complete
              website audit, we're ready to help.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <Link href="/free-audit">
              <Button
                variant="white"
                size="lg"
              >
                Get Free Website Audit
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}