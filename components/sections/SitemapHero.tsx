import { Map } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function SitemapHero() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Map className="h-4 w-4" />
            Website Navigation
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            HTML Sitemap
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Browse every important page on the LeadFlowProTeam website from one
            convenient location.
          </p>
        </div>
      </Container>
    </Section>
  );
}