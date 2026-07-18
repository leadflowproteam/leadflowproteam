import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}