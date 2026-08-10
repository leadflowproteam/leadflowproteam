import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import ContactFaq from "@/components/sections/ContactFaq";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = generateSeo({
  title: "Contact LeadFlowProTeam",
  description:
    "Contact LeadFlowProTeam to discuss Web Development, Technical SEO, AI Search Visibility, Website Audits, or Landing Page Development.",
  path: "/contact",
  keywords: [
    "Contact LeadFlowProTeam",
    "Contact Web Development Agency",
    "Technical SEO Consultation",
    "AI Search Optimization Consultation",
    "Website Development Consultation",
    "Free Consultation",
  ],
});

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactFaq />

      <CTA />
    </main>
  );
}