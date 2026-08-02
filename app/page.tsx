import JsonLd from "@/components/seo/JsonLd";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedTechnologies from "@/components/sections/FeaturedTechnologies";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";
import FeaturedResources from "@/components/sections/FeaturedResources";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema()} />

      <main className="bg-white">
        <Hero />

        <TrustBar />

        <FeaturedTechnologies />

        <IndustriesWeServe />

        <Services />

        <FeaturedWork />

        <WhyChooseUs />

        <OurProcess />

        <Testimonials />

        <Results />

        <FeaturedResources />

        <FAQ />

        <CTA />
      </main>
    </>
  );
}