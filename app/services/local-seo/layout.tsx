import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

type LocalSeoLayoutProps = {
  children: ReactNode;
};

export default function LocalSeoLayout({ children }: LocalSeoLayoutProps) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="local-seo" />
    </>
  );
}
