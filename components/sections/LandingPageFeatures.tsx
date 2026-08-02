import {
  BarChart3,
  BrainCircuit,
  LayoutTemplate,
  LineChart,
  MousePointerClick,
  Search,
  Smartphone,
  Target,
  TimerReset,
  Zap,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Target,
    title: "Conversion Strategy First",
    description:
      "Every landing page is planned around measurable business goals, persuasive user journeys, and clear conversion paths that transform visitors into qualified leads and customers.",
  },
  {
    icon: LayoutTemplate,
    title: "Custom Enterprise Design",
    description:
      "Professionally designed landing pages tailored to your brand identity, audience, campaign objectives, and long-term business positioning.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused User Experience",
    description:
      "Strategic layouts, compelling calls-to-action, trust elements, and visual hierarchy work together to maximize engagement and conversion rates.",
  },
    {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Every landing page is designed responsively to deliver a seamless browsing experience across desktop, tablet, and mobile devices, ensuring maximum accessibility and engagement.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Built with Next.js and modern performance best practices to achieve fast loading speeds, excellent Core Web Vitals, and a smooth user experience that supports higher conversions.",
  },
  {
    icon: Search,
    title: "Technical SEO Foundation",
    description:
      "Every landing page includes clean semantic HTML, optimized metadata, crawlability improvements, structured information, and SEO best practices to strengthen long-term search visibility.",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Ready Architecture",
    description:
      "Landing pages are structured to support Entity SEO, semantic relevance, Answer Engine Optimization (AEO), and AI Search Visibility across modern AI-powered search platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    description:
      "Prepared for performance measurement with a structure that supports analytics platforms, campaign tracking, and conversion optimization initiatives.",
  },
  {
    icon: LineChart,
    title: "Built for Long-Term Growth",
    description:
      "Scalable architecture makes it easy to expand campaigns, add new landing pages, improve messaging, and continuously optimize performance as your business grows.",
  },
];
export default function LandingPageFeatures() {
  return (
    <Section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <SectionHeading
        badge="Enterprise Landing Page Framework"
        title="Everything Needed to Build a High-Converting Landing Page"
        description="Our landing page framework combines conversion strategy, premium user experience, Technical SEO, AI Search Readiness, and high-performance development to help businesses generate more qualified leads."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          We don't simply design attractive landing pages—we build strategic
          conversion assets engineered to support marketing campaigns,
          strengthen search visibility, and maximize long-term business growth.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-4 grow text-base leading-8">
                  {feature.description}
                </Card.Description>
                              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            More Than a Beautiful Landing Page
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every landing page we build is designed as a business asset—not just
            a marketing page. By combining conversion strategy, modern web
            development, Technical SEO, AI Search Readiness, and scalable
            architecture, we help businesses create landing pages that continue
            generating value long after launch.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Target className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Conversion Driven
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Every design decision is made to increase lead generation and
                maximize campaign performance.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Search className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Search Optimized
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Built with Technical SEO and AI Search best practices from the
                beginning—not added later.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <LineChart className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Built to Scale
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A scalable foundation that supports future marketing campaigns,
                optimization, and sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}