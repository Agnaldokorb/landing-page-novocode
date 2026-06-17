"use client";

import * as React from "react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGit, FaGithub } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const technologies: { name: string; icon: IconType }[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "VS Code", icon: VscVscode },
  { name: "Git", icon: FaGit },
  { name: "GitHub", icon: FaGithub },
  { name: "Supabase", icon: RiSupabaseFill },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export function Tecnologies() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const autoplay = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }

      api.scrollTo(0);
    }, 2500);

    return () => window.clearInterval(autoplay);
  }, [api]);

  return (
    <section className="py-14 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Tecnologias que usamos
        </h2>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {technologies.map((tech) => {
              const TechIcon = tech.icon;

              return (
                <CarouselItem
                  key={tech.name}
                  className="basis-1/2 sm:basis-1/4 lg:basis-1/5 m-2"
                >
                  <Card className="h-40 w-40 hover:scale-105 transition-transform duration-200 gap-4 flex items-center justify-center">
                    <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
                      <TechIcon
                        aria-hidden="true"
                        className="w-14 h-14 text-orange-400 hover:text-orange-600 transition-colors duration-200"
                      />
                      <p className="font-semibold text-lg text-slate-800 text-center">
                        {tech.name}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
