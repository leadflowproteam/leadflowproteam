import {
  BadgeCheck,
  Gem,
  Handshake,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and building long-term relationships based on trust.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We embrace modern technologies to deliver future-ready websites and digital solutions.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description:
      "Every strategy is focused on measurable growth, better rankings, and higher conversions.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work as an extension of your team, helping your business grow every step of the way.",
  },
  {
    icon: Gem,
    title: "Excellence",
    description:
      "Attention to detail, clean code, and premium user experiences are at the heart of everything we build.",
  },
  {
    icon: BadgeCheck,
    title: "Client Success",
    description:
      "Your success defines our success. We measure our work by the value it creates for your business.",
  },
];

export default function CoreValues() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Our Core Values"
        title="The Principles That Guide Everything We Do"
        description="These values shape every decision we make, every project we build, and every relationship we create with our clients."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <Card
              key={value.title}
              className="group h-full"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title>
                  {value.title}
                </Card.Title>

                <Card.Description className="grow">
                  {value.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}