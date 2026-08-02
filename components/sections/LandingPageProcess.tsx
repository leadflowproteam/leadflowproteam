import {
  BarChart3,
  Brush,
  Compass,
  LineChart,
  Rocket,
  SearchCheck,
  Target,
  Wrench,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: SearchCheck,
    title: "Business Discovery & Research",
    description:
      "We begin by understanding your business objectives, target audience, competitors, marketing channels, and conversion goals to create a strong strategic foundation.",
  },
  {
    icon: Compass,
    title: "Conversion Strategy & Information Architecture",
    description:
      "We develop a conversion-focused structure, persuasive messaging, user journey, content hierarchy, and SEO framework before any design begins.",
  },
  {
    icon: Brush,
    title: "Premium UI/UX Design",
    description:
      "Modern, clean, and mobile-first interfaces are crafted to strengthen credibility, improve engagement, and encourage visitors to take meaningful action.",
  },
    {
    icon: Wrench,
    title: "Development & Technical SEO",
    description:
      "We build your landing page using Next.js with clean code, responsive architecture, Technical SEO best practices, Core Web Vitals optimization, and semantic HTML.",
  },
  {
    icon: Target,
    title: "AI Search Readiness",
    description:
      "Entity SEO, structured content, semantic relevance, and Answer Engine Optimization (AEO) are incorporated to improve discoverability across AI-powered search platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    description:
      "We prepare your landing page for analytics, campaign tracking, and performance measurement so every marketing decision can be supported by data.",
  },
  {
    icon: LineChart,
    title: "Continuous Optimization",
    description:
      "After launch, we review user behavior, conversion performance, search visibility, and campaign insights to continuously improve business results.",
  },
  {
    icon: Rocket,
    title: "Launch & Business Growth",
    description:
      "Your landing page is deployed on a scalable architecture designed to support future campaigns, ongoing optimization, and sustainable business growth.",
  },
];
export default function LandingPageProcess() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <SectionHeading
        badge="Enterprise Development Workflow"
        title="A Proven Process Designed for Better Business Results"
        description="Every landing page follows a structured workflow that combines business strategy, premium design, Technical SEO, AI Search Readiness, and conversion optimization to deliver measurable long-term value."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Rather than simply designing pages, we follow a repeatable framework
          that aligns technology, marketing, user experience, and search
          visibility into one integrated business solution.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="group h-full overflow-hidden border border-slate-200 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col items-center p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  Step {index + 1}
                </span>

                <Card.Title className="text-xl">
                  {step.title}
                </Card.Title>

                <Card.Description className="mt-4 grow text-base leading-8">
                  {step.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
            <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Process Focused on Measurable Business Growth
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every phase of our workflow is designed to reduce guesswork,
            improve conversion performance, strengthen search visibility,
            and create a landing page that continues producing value long
            after launch.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Target className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Strategic Planning
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Every project begins with research, audience analysis,
                and conversion planning—not assumptions.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Rocket className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                High-Performance Delivery
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Modern development, Technical SEO, and AI Search
                Readiness combine to deliver a fast, scalable landing page.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <LineChart className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Continuous Improvement
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We monitor performance, analyze user behavior,
                and continuously optimize for stronger business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}