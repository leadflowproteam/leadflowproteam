import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowAISeesYourBusiness from "@/components/sections/HowAISeesYourBusiness";
import AIVisibilityAudit from "@/components/sections/AIVisibilityAudit";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustBar from "@/components/sections/TrustBar";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";
import DigitalGrowth from "@/components/sections/DigitalGrowth";
import ImplementationServices from "@/components/sections/ImplementationServices";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedResources from "@/components/sections/FeaturedResources";
import ProofOfWork from "@/components/sections/ProofOfWork";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* 01 — Core Positioning */}
      <Hero />

      {/* 02 — Explain the Problem */}
      <HowAISeesYourBusiness />

      {/* 03 — Core Commercial Offer */}
      <AIVisibilityAudit />

      {/* 04 — Explain the Delivery Model */}
      <HowItWorks />

      {/* 05 — Capability / Trust Signals */}
      <TrustBar />

      {/* 06 — Narrow the Initial Market */}
      <IndustriesWeServe />

      {/* 07 — Secondary Organizational Pathway */}
      <DigitalGrowth />

      {/* 08 — Audit Findings → Implementation */}
      <ImplementationServices />

      {/* 09 — Supporting Service Architecture */}
      <Services />

      {/* 10 — Evidence / Future Case Studies */}
      <FeaturedWork />

      {/*11 - Proof of Work */}
      <ProofOfWork />

      {/* 12 — Differentiation */}
      <WhyChooseUs />

      {/* 13 — Authority Building */}
      <FeaturedResources />

      {/* 14 — Objection Handling */}
      <FAQ />

      {/* 15 — Conversion */}
      <CTA />
    </main>
  );
}