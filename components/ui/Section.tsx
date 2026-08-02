import type { ReactNode } from "react";

import Container from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        // Professional Responsive Vertical Spacing
        "py-16",
        "sm:py-20",
        "lg:py-24",
        "xl:py-28",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}