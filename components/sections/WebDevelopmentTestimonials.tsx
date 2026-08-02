import {
  Building2,
  MapPin,
  Quote,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Home Service Business",
    location: "New York, USA",
    industry: "Home Services",
    quote:
      "LeadFlowProTeam completely transformed our website. The new site is significantly faster, looks modern, and helped us generate more qualified leads within weeks.",
  },
  {
    name: "Michael Davis",
    company: "Healthcare Practice",
    location: "Texas, USA",
    industry: "Healthcare",
    quote:
      "The combination of Technical SEO, clean design, and excellent performance made a noticeable difference. We now have a professional website we are proud to share.",
  },
  {
    name: "Emily Wilson",
    company: "Legal Firm",
    location: "California, USA",
    industry: "Legal Services",
    quote:
      "Communication was excellent throughout the project. The website is responsive, SEO-ready, and built with a solid technical foundation for long-term growth.",
  },
];

export default function WebDevelopmentTestimonials() {
  return (
    <Section>
<div className="mt-16 grid gap-8 lg:grid-cols-3">
  {testimonials.map((item) => (
    <Card
      key={item.name}
      className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
    >
      <Card.Body className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <Quote className="h-10 w-10 text-cyan-500" />

          <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-700">
            {item.industry}
          </span>
        </div>

        <div className="mt-6 flex gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-current"
            />
          ))}
        </div>

        <p className="mt-8 grow text-lg italic leading-8 text-slate-600">
          "{item.quote}"
        </p>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <h3 className="text-lg font-bold text-slate-900">
            {item.name}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-slate-600">
            <Building2 className="h-4 w-4 text-cyan-600" />

            <span>{item.company}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-slate-500">
            <MapPin className="h-4 w-4 text-cyan-600" />

            <span>{item.location}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  ))}
</div>

<div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
  <div className="mx-auto max-w-4xl text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
      <Star className="h-4 w-4 fill-current text-amber-400" />
      Client Satisfaction
    </div>

    <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
      Websites Built Around Long-Term Business Success
    </h3>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Every project is developed with performance, Technical SEO, AI Search
      Visibility, security, scalability, and measurable business growth in
      mind. Our goal is not simply delivering a website—but creating a digital
      asset that continues generating value for years.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <div>
        <h4 className="text-4xl font-extrabold text-cyan-600">5★</h4>

        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Client Satisfaction
        </p>
      </div>

      <div>
        <h4 className="text-4xl font-extrabold text-cyan-600">100%</h4>

        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Custom Development
        </p>
      </div>

      <div>
        <h4 className="text-4xl font-extrabold text-cyan-600">SEO</h4>

        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Growth Focused
        </p>
      </div>
    </div>
  </div>
</div>
  </Section>
);
}