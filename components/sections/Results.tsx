import {
  ArrowRight,
  Bot,
  Gauge,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const results = [
  {
    icon: Gauge,
    metric: "95+",
    title: "Lighthouse Performance",
    description:
      "Optimized Core Web Vitals, faster loading speed, smooth responsiveness, and exceptional user experience that supports stronger search performance.",
  },
  {
    icon: SearchCheck,
    metric: "100%",
    title: "Technical SEO Foundation",
    description:
      "Complete Technical SEO implementation including structured metadata, schema markup, crawl optimization, XML sitemap, robots.txt, and search-friendly architecture.",
  },
  {
    icon: Bot,
    metric: "AI",
    title: "AI Search Ready",
    description:
      "Engineered for Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, and future AI-powered search experiences using semantic architecture and entity optimization.",
  },
  {
    icon: TrendingUp,
    metric: "Growth",
    title: "Business Growth Focused",
    description:
      "Every website is strategically designed to generate qualified leads, improve conversions, strengthen trust, and support sustainable long-term business growth.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Technical SEO",
  "Schema.org",
  "Core Web Vitals",
  "Google Search Console",
  "Google Analytics",
];

export default function Results() {
  return (
    <section className="bg-linear-to-b from-slate-50 via-white to-cyan-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Proven Results"
          title="Engineered for Performance, Search Visibility & Long-Term Growth"
          description="Every LeadFlowProTeam website is built with measurable business outcomes in mind—combining modern web engineering, Technical SEO, AI Search Optimization, and conversion-focused architecture to help service businesses grow with confidence."
        />
        <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          We don't just design beautiful websites—we build high-performance digital
          platforms engineered for Google Search, AI-powered search experiences,
          faster loading speeds, stronger technical foundations, and sustainable
          business growth.
        </p>
      </div>
        {/* Result Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-300
                hover:shadow-2xl
                "
              >
                <div className="flex items-center justify-between">
                  <div
                  className="
                  inline-flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-50
                  text-cyan-600
                  transition-all
                  duration-300
                  group-hover:bg-cyan-600
                  group-hover:text-white
                "
                >
                    <Icon className="h-8 w-8" />
                  </div>

                  <span className="text-5xl font-extrabold tracking-tight text-cyan-600">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 grow leading-8 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-2 w-[96%] rounded-full bg-linear-to-r from-cyan-500 to-blue-600" />
</div>
              </article>
            );
          })}
        </div>

        {/* Technologies */}

        <div
          className="
            mt-24
            rounded-[36px]
            border
            border-cyan-100
            bg-linear-to-br
            from-cyan-50
            via-white
            to-blue-50
            p-10
            shadow-xl
          "
        >
        <h3 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Technologies & Best Practices
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            We use modern technologies and proven optimization strategies to
            build secure, scalable, SEO-friendly, and AI-ready business
            websites.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {technologies.map((tech) => (
             <div
              key={tech}
              className="
                rounded-2xl
                border
                border-cyan-100
                bg-white
                px-5
                py-5
                text-center
                font-semibold
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300
                hover:bg-cyan-600
                hover:text-white
                hover:shadow-lg
              "
            >
              {tech}
            </div> 
            ))}
          </div>
        </div>

        {/* CTA */}

        <div
  className="
    mt-24
    overflow-hidden
    rounded-[40px]
    bg-linear-to-r
    from-cyan-600
    via-blue-700
    to-slate-900
    px-10
    py-16
    text-center
    text-white
    shadow-2xl
  "
>
       <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Ready to Build a Website That
        <span className="block text-cyan-200">
          Generates More Leads?
        </span>
      </h3>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-blue-100">
          Whether you need a modern business website, Technical SEO,
          AI Search Optimization, or a complete website audit,
          LeadFlowProTeam helps service businesses improve search visibility,
          build trust, and generate qualified leads with long-term
          sustainable growth.
        </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
           <Link href="/free-audit">
  <Button
    variant="secondary"
    size="lg"
    className="group"
  >
    Get Free Website Audit

    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</Link>

<Link href="/contact">
  <Button
    variant="outline"
    size="lg"
    className="border-white text-white hover:bg-white hover:text-blue-700"
  >
    Contact Our Team
  </Button>
</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}