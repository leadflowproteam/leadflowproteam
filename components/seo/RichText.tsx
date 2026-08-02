import EntityLink from "@/components/seo/EntityLink";

type RichTextProps = {
  paragraphs: readonly string[];
};

export default function RichText({
  paragraphs,
}: RichTextProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mb-6 leading-8 text-gray-700"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}