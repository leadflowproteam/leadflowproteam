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
          title="Digital Solutions That Drive Business Growth"
          description="We build modern websites engineered for performance, Technical SEO, AI Search Visibility, and long-term lead generation—helping service businesses grow with confidence."
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
                      Learn More

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
            Need a Website That Actually Generates Leads?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're launching a new business or improving an existing
            website, we build fast, SEO-ready, AI-ready websites that help
            attract more qualified customers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Get Free Website Audit
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}