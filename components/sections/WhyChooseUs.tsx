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
    href: "/services/web-development",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO Foundation",
    description:
      "Every website includes structured metadata, schema markup, clean architecture, and crawl optimization.",
    href: "/services/technical-seo",
  },
  {
    icon: Bot,
    title: "AI Search Ready",
    description:
      "Prepared for Google AI Overviews, ChatGPT, Claude, Gemini, and future AI-powered search experiences.",
    href: "/services/ai-search-visibility",
  },
  {
    icon: Award,
    title: "Modern Engineering",
    description:
      "Reusable components, scalable architecture, TypeScript safety, and long-term maintainability.",
    href: "/services/web-development",
  },
  {
    icon: HeartHandshake,
    title: "Business Growth Focus",
    description:
      "Every decision is made to improve trust, conversions, qualified leads, and long-term growth.",
    href: "/services/website-audit",
  },
  {
    icon: Clock3,
    title: "Reliable Delivery",
    description:
      "Clear communication, transparent milestones, realistic timelines, and dependable execution.",
    href: "/contact",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Why Choose LeadFlowProTeam"
        title="A Strategic Partner for Search Visibility, AI Readiness & Sustainable Business Growth"
        description="We build more than visually impressive websites. Every project is strategically engineered using modern web technologies, Technical SEO, Entity SEO, AI Search Optimization, and conversion-focused architecture to help service businesses improve visibility, generate qualified leads, and achieve long-term digital growth."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Our approach combines technical excellence, search intelligence,
          performance optimization, and business strategy into one unified
          framework. Every website is designed to perform exceptionally across
          Google Search, Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft
          Copilot, and future AI-powered search experiences.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-300
                hover:shadow-2xl
              "
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl leading-tight">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {feature.description}
                </Card.Description>

                <Link
                  href={feature.href}
                  className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-700 transition-colors duration-300 hover:text-cyan-800"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-24 overflow-hidden rounded-[36px] border border-cyan-200 bg-linear-to-r from-cyan-600 via-blue-700 to-slate-900 shadow-2xl">
        <div className="grid items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:px-16">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-sm">
              Build Faster &bull; Rank Smarter &bull; Grow Better
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build a Website That
              <span className="block text-cyan-200">
                Ranks, Converts &amp; Grows?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you&apos;re launching a new business, redesigning an
              existing website, or improving your visibility through Technical
              SEO and AI Search Optimization, our team builds modern digital
              experiences engineered for sustainable business growth.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-5 sm:items-center lg:items-end">
            <Link href="/free-audit" className="w-full sm:w-auto">
              <Button
                variant="white"
                size="lg"
                className="w-full min-w-0 justify-center sm:min-w-62.5"
              >
                Get Free Website Audit
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full min-w-0 justify-center border-white text-white hover:bg-white hover:text-blue-700 sm:min-w-62.5"
              >
                Schedule Free Consultation
              </Button>
            </Link>

            <p className="max-w-xs text-center text-sm leading-7 text-blue-100 lg:text-right">
              <span className="block">✓ No obligation consultation</span>
              <span className="block">✓ Custom growth strategy</span>
              <span className="block">✓ Transparent pricing</span>
              <span className="block">✓ Long-term partnership</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}