"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
import type { PortfolioProject } from "@/lib/portfolio-data";

function RelatedProjectLogo({ project }: { project: PortfolioProject }) {
  const logoMaxSize =
    project.id === "umami" || project.id === "agritrace"
      ? 130
      : project.id === "nsgcable"
        ? 150
        : project.id === "prohose"
          ? 240
          : 200;

  return (
    <div className="flex h-[200px] w-[200px] max-w-[78%] shrink-0 items-center justify-center">
      <Image
        src={project.logo.src}
        alt={project.logo.alt}
        width={project.logo.width}
        height={project.logo.height}
        style={{
          height: "auto",
          maxHeight: `${logoMaxSize}px`,
          maxWidth: `${logoMaxSize}px`,
          objectFit: "contain",
          width: "auto",
        }}
      />
    </div>
  );
}

function RelatedProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="relative block h-[500px] md:h-[610px] w-[320px] md:w-[460px] shrink-0 overflow-hidden rounded-[24px] bg-[#10131c] p-4 text-white no-underline transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="flex h-[200px] md:h-[308px] items-center justify-center rounded-[12px]"
        style={{ background: project.bgColor }}
      >
        <RelatedProjectLogo project={project} />
      </div>
      <div className="mt-6 md:mt-8 flex w-[100%] md:w-[428px] max-w-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <p className="m-0 font-[family-name:var(--font-manrope)] text-[22px] md:text-[28px] font-bold leading-normal">
            {project.title}
          </p>
          <ArrowUpRight className="mt-2 shrink-0 text-white/50" size={22} />
        </div>
        <p className="m-0 line-clamp-4 font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px] font-normal leading-[1.5] tracking-[-0.2344px] text-white/60">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

type PortfolioMoreProjectsSectionProps = {
  filterLabels: string[];
  projects: PortfolioProject[];
};

export default function PortfolioMoreProjectsSection({
  filterLabels,
  projects,
}: PortfolioMoreProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.label === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <div className="w-full max-w-[1052px] mx-auto flex flex-col items-center gap-10 md:gap-[60px] mb-12">
        <div className="flex flex-col items-center text-center font-[family-name:var(--font-manrope)] text-[clamp(64px,10vw,128px)] font-extrabold leading-[0.86] text-transparent">
          <p className="m-0 bg-gradient-to-b from-[#4f46e5] to-white bg-clip-text tracking-[-2px] md:tracking-[-7px]">
            MORE
          </p>
          <p className="m-0 bg-gradient-to-b from-white to-[#4f46e5] bg-clip-text tracking-[-2px] md:tracking-[-5px]">
            PROJECTS
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-3 w-max mx-auto bg-white/[0.05] rounded-[90px] p-2 md:px-6 md:py-3">
            {filterLabels.map((label) => {
              const isActive = activeFilter === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveFilter(label)}
                  className={`flex h-[40px] md:h-[47px] shrink-0 items-center justify-center rounded-[40px] px-4 md:px-[31px] font-[family-name:var(--font-manrope)] text-[14px] md:text-[16px] leading-normal tracking-[-0.23px] text-white transition-colors ${
                    isActive ? "bg-[#4f1ad6] font-bold" : "border border-white/20 font-normal"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-32">
        <AutoHorizontalCarousel
          key={activeFilter}
          className="w-full overflow-x-auto overflow-y-hidden px-4 md:px-10 lg:px-0 py-4"
          trackClassName="gap-4 md:gap-[30px]"
          trackStyle={{
            paddingLeft: "max(194px, calc(50vw - 526px))",
            paddingRight: "max(194px, calc(50vw - 526px))",
          }}
          itemSpan={490}
          itemWidth={460}
          logicalCount={filteredProjects.length}
          allowTrailingSpacer={false}
        >
          {filteredProjects.map((project) => (
            <RelatedProjectCard key={project.id} project={project} />
          ))}
        </AutoHorizontalCarousel>
      </div>
    </>
  );
}
