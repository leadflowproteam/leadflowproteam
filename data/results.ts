export const results = [
  {
    title: "Lightning-Fast Performance",
    description:
      "Optimized Next.js websites designed to load quickly and deliver a smooth shopping experience.",
  },
  {
    title: "Higher Conversion Rates",
    description:
      "Conversion-focused layouts that help turn more visitors into paying customers.",
  },
  {
    title: "Better Search Visibility",
    description:
      "Technical SEO and AI search optimization to improve your visibility across modern search platforms.",
  },
  {
    title: "Built for Paid Traffic",
    description:
      "Designed specifically for businesses using Facebook Ads and Google Ads to maximize campaign performance.",
  },
  {
    title: "Mobile-First Experience",
    description:
      "Responsive websites that perform beautifully on phones, tablets, and desktops.",
  },
  {
    title: "Future-Ready Foundation",
    description:
      "Scalable architecture prepared for AI automation, business growth, and future integrations.",
  },
] as const;

export type Result = (typeof results)[number];