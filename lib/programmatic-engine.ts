import { cities } from "@/data/cities";
import { programmaticServices } from "@/data/programmatic-services";

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getService(slug: string) {
  return programmaticServices.find(
    (service) => service.slug === slug,
  );
}

export function getLocationServiceData(
  citySlug: string,
  serviceSlug: string,
) {
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  if (!city || !service) {
    return null;
  }

  const title = `${service.name} in ${city.name}`;

  const description = `${service.shortDescription} for businesses in ${city.name}. LeadFlowProTeam delivers fast, SEO-friendly, AI-ready websites and digital growth solutions.`;

  const canonical = `https://leadflowproteam.com/locations/${city.slug}/${service.slug}`;

  return {
    city,
    service,
    title,
    description,
    canonical,
  };
}

export function getAllLocationPages() {
  return cities.flatMap((city) =>
    programmaticServices.map((service) => ({
      city: city.slug,
      service: service.slug,
    })),
  );
}