import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto",
        "w-full",

        // Professional Content Width
        "max-w-7xl",

        // Responsive Horizontal Padding
        "px-5",
        "sm:px-6",
        "md:px-8",
        "lg:px-10",
        "xl:px-12",
        "2xl:px-16",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}