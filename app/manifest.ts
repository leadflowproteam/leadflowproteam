import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LeadFlowProTeam",
    short_name: "LeadFlowProTeam",
    description:
      "Modern Web Development, Technical SEO, AI Search Optimization, and Website Performance Solutions.",

    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",

    lang: "en-US",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}