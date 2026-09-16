import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Core Services"
          title="Services That Support the Visibility Journey"
          description="Explore the core services we use to strengthen AI visibility, search foundations, websites, and conversion experiences when implementation is needed."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.slug}
                className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <Card.Body className="flex h-full flex-col p-7">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <Card.Title className="mt-6 text-xl leading-tight">
                    {service.title}
                  </Card.Title>

                  <Card.Description className="mt-4 grow leading-7">
                    {service.description}
                  </Card.Description>

                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-6 text-gray-500">
            Not sure which service you need? Start with the visibility audit
            and let the findings guide the next step.
          </p>

          <Link
            href="/free-audit"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            Start With an AI Visibility Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}