import type { MetadataRoute } from "next";

import { cities } from "@/data/cities";
import { entities } from "@/data/entities";
import { industries } from "@/data/industries";
import { portfolioProjects } from "@/data/portfolio";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

const baseUrl =
  "https://leadflowproteam.com";

const now = new Date();

const staticPages: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  },

  {
    url: `${baseUrl}/about`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    url: `${baseUrl}/services`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  },

  {
    url: `${baseUrl}/industries`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    url: `${baseUrl}/portfolio`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  },

  {
    url: `${baseUrl}/case-studies`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  },

  {
    url: `${baseUrl}/resources`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  },

  {
    url: `${baseUrl}/contact`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  },

  {
    url: `${baseUrl}/free-audit`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  },

  {
    url: `${baseUrl}/proof-of-work`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  },

  {
    url: `${baseUrl}/mission-driven-organizations`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  },

  // Dedicated service routes already present in the project.
  {
    url: `${baseUrl}/services/ai-search-visibility`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.98,
  },

  {
    url: `${baseUrl}/services/ai-search-visibility-audit`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.92,
  },

  {
    url: `${baseUrl}/services/ai-visibility-framework`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  },

  {
    url: `${baseUrl}/services/web-development`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  },

  {
    url: `${baseUrl}/services/technical-seo`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  },

  {
    url: `${baseUrl}/services/local-seo`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  },

  {
    url: `${baseUrl}/services/website-audit`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  },

  {
    url: `${baseUrl}/services/landing-page-development`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  },

  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.2,
  },

  {
    url: `${baseUrl}/terms`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

const servicePages: MetadataRoute.Sitemap =
  services.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority:
      service.slug === "ai-search-visibility"
        ? 0.98
        : service.featured
          ? 0.75
          : 0.6,
  }));

const industryPages: MetadataRoute.Sitemap =
  industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

const resourcePages: MetadataRoute.Sitemap =
  resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified:
      resource.updatedAt || resource.publishedAt
        ? new Date(
            resource.updatedAt ||
              resource.publishedAt,
          )
        : now,
    changeFrequency: "monthly",
    priority: resource.featured
      ? 0.72
      : 0.5,
  }));

const portfolioPages: MetadataRoute.Sitemap =
  portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: project.featured
      ? 0.65
      : 0.45,
  }));

const entityPages: MetadataRoute.Sitemap =
  entities
    .filter((entity) => entity.url.startsWith("/entities/"))
    .map((entity) => ({
      url: `${baseUrl}/entities/${entity.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: entity.featured
        ? 0.55
        : 0.4,
    }));

const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
  url: `${baseUrl}/locations/${city.slug}`,
  lastModified: now,
  changeFrequency: "weekly",
  priority: 0.7,
}));

const locationServicePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
  services.map((service) => ({
    url: `${baseUrl}/locations/${city.slug}/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  })),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...resourcePages,
    ...portfolioPages,
    ...entityPages,
    ...locationPages,
    ...locationServicePages,
  ];

  const uniquePages = Array.from(
    new Map(
      allPages.map((page) => [
        page.url,
        page,
      ]),
    ).values(),
  );

  return uniquePages;
}