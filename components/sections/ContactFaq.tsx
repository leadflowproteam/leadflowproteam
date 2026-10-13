import FAQ from "@/components/sections/FAQ";

import { getContactFAQs } from "@/lib/faq-engine";

export default function ContactFaq() {
  const contactFaqs = getContactFAQs();

  return (
    <FAQ
      badge="Contact FAQ"
      title="Frequently Asked Questions"
      description="Answers to common questions before starting your project."
      items={contactFaqs}
    />
  );
}