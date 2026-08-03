import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="High-Performance Digital Solutions Built for Search & Business Growth"
          description="We build high-performance websites engineered with Technical SEO, AI Search Visibility, Entity SEO, Core Web Vitals, and conversion-focused architecture that helps service businesses generate qualified leads, improve search visibility, and achieve sustainable long-term growth."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <Card.Body className="flex h-full flex-col p-8">

                  {/* Icon */}

                  <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}

                  <Card.Title className="text-2xl leading-tight">
                    {service.title}
                  </Card.Title>

                  {/* Description */}

                  <Card.Description className="mt-5 grow leading-8">
                    {service.description}
                  </Card.Description>
                                    {/* CTA */}

                  <div className="mt-10 border-t border-gray-100 pt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700"
                    >
                      Explore Service

                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                </Card.Body>
              </Card>
            );
          })}
        </div>
                {/* Bottom CTA */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 px-10 py-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold">
            Ready to Grow Your Business Online?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're launching a new business, redesigning an existing
            website, or improving your online visibility, our Next.js
            development, Technical SEO, and AI Search Visibility framework helps
            you attract more qualified customers, increase search visibility,
            and build sustainable long-term digital growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Get Your Free Website Audit
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}