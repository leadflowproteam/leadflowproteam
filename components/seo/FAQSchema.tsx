type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQ[];
};

export default function FAQSchema({
  items,
}: Props) {
  if (items.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: items.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}