import type { ReactNode } from "react";

import Container from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}