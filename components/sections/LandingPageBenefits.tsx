import {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  MousePointerClick,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: MousePointerClick,
    title: "Higher Conversion Rates",
    description:
      "Focused landing pages eliminate distractions and guide visitors toward a single conversion goal, helping generate more qualified leads, inquiries, bookings, and sales.",
  },
  {
    icon: Rocket,
    title: "Faster User Experience",
    description:
      "Built with modern Next.js architecture to deliver lightning-fast performance, excellent Core Web Vitals, lower bounce rates, and improved user satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Better Marketing ROI",
    description:
      "Optimized landing pages improve campaign efficiency across Google Ads, Meta Ads, email marketing, and organic acquisition channels by increasing conversion performance.",
  },
    {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Deliver a seamless browsing experience across desktop, tablet, and mobile devices, ensuring every visitor enjoys fast navigation and an intuitive user interface.",
  },
  {
    icon: Search,
    title: "Technical SEO Ready",
    description:
      "Every landing page follows Technical SEO best practices, including semantic HTML, optimized metadata, structured architecture, and crawl-friendly implementation.",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Ready",
    description:
      "Prepared for modern AI-powered search experiences through semantic structure, entity-based optimization, Answer Engine Optimization (AEO), and AI-friendly content architecture.",
  },
  {
    icon: BarChart3,
    title: "Scalable Growth Platform",
    description:
      "A flexible architecture that supports future campaigns, A/B testing, analytics integration, and continuous optimization as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Build Trust & Credibility",
    description:
      "Professional design, strong messaging, trust indicators, and conversion-focused content help establish credibility and encourage confident purchasing decisions.",
  },
  {
    icon: BadgeCheck,
    title: "Long-Term Business Value",
    description:
      "Your landing page becomes a reusable marketing asset capable of supporting multiple campaigns while continuously generating measurable business results.",
  },
];
export default function LandingPageBenefits() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <SectionHeading
        badge="Business Benefits"
        title="Why a High-Converting Landing Page Is a Smart Investment"
        description="A professionally built landing page is more than a marketing asset—it becomes a conversion engine designed to generate qualified leads, improve campaign performance, and support sustainable business growth."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Every landing page is strategically engineered to combine persuasive
          messaging, premium user experience, Technical SEO, AI Search
          Readiness, and measurable conversion optimization into one unified
          business solution.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
            <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Landing Page That Works Long After Launch
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We build landing pages that continue delivering value through
            better conversions, stronger search visibility, improved campaign
            performance, and a scalable foundation for future marketing growth.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <TrendingUp className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                More Qualified Leads
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve conversion quality with persuasive layouts,
                clear messaging, and strategically placed calls-to-action.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Search className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Stronger Search Visibility
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Technical SEO, semantic structure, and AI Search Readiness
                help your landing page perform beyond paid advertising.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Rocket className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Long-Term Business Growth
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                A scalable landing page framework that supports future
                campaigns, optimization, and sustainable revenue growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}