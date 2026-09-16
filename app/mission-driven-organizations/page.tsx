import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Church,
  Code2,
  HeartHandshake,
  Megaphone,
  ScanSearch,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

const solutions = [
  {
    icon: Code2,
    title: "Website Design & Development",
    href: "/services/web-development",
    description:
      "We design and build modern, high-performance websites built for mission-driven organizations — including fast loading (Core Web Vitals), AI Search Visibility Audit, Technical SEO, and GEO (Generative Engine Optimization).",
    features: [
      "Fast Loading & Core Web Vitals",
      "AI Search Visibility Audit",
      "Technical SEO",
      "GEO — Generative Engine Optimization",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Digital Fundraising Infrastructure",
    description:
      "Build clear digital pathways for donations, campaigns, sponsorships, recurring support, and other opportunities to connect supporters with your mission.",
  },
  {
    icon: ScanSearch,
    title: "AI Search Visibility Audit & Fixing",
    href: "/services/ai-search-visibility",
    description:
      "We audit your organization's current AI and search visibility, identify gaps, and implement fixes — including structured content, schema markup, GEO signals, and Technical SEO — so you get found in AI-powered search experiences.",
  },
  {
    icon: Megaphone,
    title: "Campaign & Communication",
    description:
      "Create landing pages and digital campaign assets that make it easier to communicate specific needs, projects, events, and opportunities.",
  },
  {
    icon: Users,
    title: "Supporter Growth",
    description:
      "Create better pathways for visitors to become supporters, volunteers, partners, donors, subscribers, or active members of your community.",
  },
  {
    icon: BarChart3,
    title: "Measurement & Growth",
    description:
      "Connect your digital presence with practical analytics so you can understand what is working and make better growth decisions over time.",
  },
];

const audiences = [
  "Christian Missions",
  "Churches",
  "Nonprofit Organizations",
  "Community Organizations",
  "Mission-Driven Initiatives",
  "Resource-Constrained Organizations",
];

export default function MissionDrivenOrganizationsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.16),transparent_35%)]" />

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
              Digital Growth & Fundraising Infrastructure
            </p>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Helping Resource-Constrained Organizations Grow Their Mission
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help nonprofits, churches, Christian missions, community
              organizations, and other mission-driven organizations build the
              digital infrastructure they need to communicate, reach
              supporters, generate opportunities, and grow sustainably.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3.5 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Request a Free Website Audit
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Serve */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-600">
                Who We Serve
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Digital support for organizations doing meaningful work
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Many organizations have a strong mission but limited access to
                the technical skills needed to build and maintain a modern
                digital presence. We help bridge that gap.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 font-semibold text-slate-800"
                >
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-600">
              What We Can Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A stronger digital foundation for your mission
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our goal is not simply to create another website. We build the
              digital foundations that help organizations communicate clearly,
              become easier to discover, and create meaningful pathways for
              people to participate and support the mission.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              const cardContent = (
                <>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  {solution.features && (
                    <ul className="mt-4 space-y-1.5">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm font-medium text-cyan-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {solution.href && (
                    <p className="mt-5 flex items-center gap-1 text-sm font-bold text-cyan-600 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </p>
                  )}
                </>
              );

              return solution.href ? (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl block"
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={solution.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mission Message */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-950 px-8 py-14 text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-100">
                Your Mission Deserves to Be Found
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Your mission may be bigger than your current digital
                infrastructure.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-50">
                You do not have to become a technology expert to build a
                stronger digital presence. We can help you identify the gaps,
                prioritize what matters most, and build practical systems that
                support your mission and your people.
              </p>

              <div className="mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 transition hover:bg-slate-100"
                >
                  Talk With Our Team
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Church className="mx-auto h-10 w-10 text-cyan-600" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Let&apos;s build the digital foundation your mission needs.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you are starting from scratch or trying to improve an
              existing website, we can begin by understanding your goals,
              resources, and current digital challenges.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 font-bold text-white transition hover:bg-cyan-700"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}