export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
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
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export type NavigationItem = (typeof navigation)[number];