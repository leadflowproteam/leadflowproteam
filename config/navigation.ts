export const navigation = {
  main: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Industries",
      href: "/industries",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  footer: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },

    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "FAQ", href: "/faq" },
      ],
    },

    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
} as const;

export type Navigation = typeof navigation;