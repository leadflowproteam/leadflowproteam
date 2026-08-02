import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import CTA from "@/components/sections/CTA";
import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import ContactFaq from "@/components/sections/ContactFaq";

export const metadata: Metadata = generateSeo({
  title: "Contact LeadFlowProTeam",
  description:
    "Get in touch with LeadFlowProTeam to discuss your website, Technical SEO, AI Search Visibility, or Landing Page project.",
  path: "/contact",
  keywords: [
    "Contact Web Development Agency",
    "Technical SEO Contact",
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