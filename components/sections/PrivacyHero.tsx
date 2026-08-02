import { ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function PrivacyHero() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            Privacy & Data Protection
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            At LeadFlowProTeam, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            what information we collect, how we use it, and the choices you
            have regarding your data when using our website and services.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Transparent Data Practices
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              GDPR-Friendly Principles
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Secure Communication
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}