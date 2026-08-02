import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div
      className={[
        "mx-auto",
        "mb-12",
        "sm:mb-14",
        "lg:mb-16",

        "flex",
        "max-w-4xl",
        "flex-col",

        alignment,

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {badge && (
        <span
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-blue-200

            bg-blue-50

            px-4
            py-2

            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]

            text-blue-700

            sm:text-sm
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-5

          text-3xl
          font-extrabold

          leading-tight
          tracking-tight

          text-gray-900

          sm:text-4xl

          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6

            max-w-3xl

            text-base
            leading-8

            text-gray-600

            sm:text-lg
            lg:text-xl
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}