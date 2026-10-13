import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function LandingPageDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="landing-page-development" />
    </>
  );
}
