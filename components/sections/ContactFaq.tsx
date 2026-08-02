import FAQ from "@/components/sections/FAQ";

const contactFaqs = [
  {
    question: "How quickly will you respond?",
    answer:
      "We typically respond to all inquiries within one business day.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We primarily serve businesses in the United States, Canada, the United Kingdom, and Australia.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We specialize in Web Development, Technical SEO, AI Search Visibility, Landing Page Development, Website Audits, and Website Performance Optimization.",
  },
  {
    question: "Can I request a free consultation?",
    answer:
      "Yes. You can contact us directly or request a Free Website Audit to discuss your project.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Absolutely. We can redesign, optimize, and modernize existing websites to improve performance and search visibility.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer continuous website maintenance, optimization, and long-term technical support after project completion.",
  },
];

export default function ContactFaq() {
  return (
    <FAQ
      badge="Contact FAQ"
      title="Frequently Asked Questions"
      description="Answers to common questions before starting your project."
      items={contactFaqs}
    />
  );
}