type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}