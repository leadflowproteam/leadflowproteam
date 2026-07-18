type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}