import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  User2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { resources } from "@/data/resources";

export default function FeaturedResources() {
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <Container className="relative z-10">

        <SectionHeading
          badge="Knowledge Center"
          title="Resources That Help Businesses Grow Smarter"
          description="Practical insights covering Next.js, Technical SEO, AI Search Visibility, website optimization, and digital growth strategies designed for real businesses."
        />

        {/* Featured Cards */}

        <div className="mt-20 grid gap-8 xl:grid-cols-3">
          {featuredResources.map((resource) => (
            <article
              key={resource.slug}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-2xl
              "
            >

              {/* Thumbnail */}

              <div className="relative h-60 overflow-hidden">

                <Image
                  src={
                    resource.coverImage ??
                    "/images/resources/resource-placeholder.webp"
                  }
                  alt={resource.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />

                {/* Category */}

                <div className="absolute left-6 top-6 flex items-center gap-2">

                  <span className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-white/90
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    tracking-wide
                    text-blue-700
                    backdrop-blur
                  ">
                    <BookOpen className="mr-1 h-3.5 w-3.5" />

                    {resource.category}
                  </span>

                  <span className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-blue-600
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-white
                  ">
                    <Sparkles className="mr-1 h-3.5 w-3.5" />

                    Featured
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-8">

                <h3 className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                ">
                  {resource.title}
                </h3>

                <p className="
                  mt-5
                  grow
                  leading-8
                  text-slate-600
                ">
                  {resource.description}
                </p>

                {/* Meta */}

                <div className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-5
                  border-t
                  border-slate-100
                  pt-6
                  text-sm
                  text-slate-500
                ">

                  <div className="flex items-center gap-2">
                    <User2 className="h-4 w-4" />

                    {resource.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />

                    {resource.readingTime}
                  </div>

                </div>



                <Link
                  href={`/resources/${resource.slug}`}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    font-semibold
                    text-blue-600
                    transition-colors
                    duration-300
                    hover:text-blue-700
                  "
                >
                  Read Complete Guide

                  <ChevronRight className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  " />
                </Link>

              </div>
            </article>
          ))}
        </div>


        {/* Bottom CTA */}

        <div className="
          mt-24
          overflow-hidden
          rounded-[36px]
          bg-linear-to-r
          from-slate-900
          via-blue-700
          to-blue-600
          px-10
          py-16
          text-center
          shadow-2xl
        ">

          <span className="
            inline-flex
            items-center
            rounded-full
            bg-white/10
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-100
            backdrop-blur
          ">
            <Sparkles className="mr-2 h-4 w-4" />
            Free Learning Resources
          </span>

          <h2 className="
            mt-6
            text-4xl
            font-extrabold
            text-white
          ">
            Keep Learning. Keep Growing.
          </h2>

          <p className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-blue-100
          ">
            Explore practical guides covering Technical SEO,
            AI Search Visibility,
            Entity SEO,
            Next.js development,
            website performance,
            lead generation,
            and long-term digital growth.
          </p>


          <div className="mt-10 flex justify-center">

            <Link href="/resources">

              <Button
                variant="secondary"
                size="lg"
                className="group"
              >
                Browse All Resources

                <ArrowRight
                  className="
                    ml-2
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Button>

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}
