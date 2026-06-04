"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
import type { PortfolioProject } from "@/lib/portfolio-data";

const projectLogoOverrides: Record<
  string,
  { src: string; width: number; height: number }
> = {
  umami: {
    src: "/logo/umami-project.png",
    width: 1284,
    height: 924,
  },
  cashgrow: {
    src: "/logo/cashgrow-project.png",
    width: 1284,
    height: 924,
  },
  prohose: {
    src: "/logo/prohouse-project.png",
    width: 1284,
    height: 924,
  },
  agritrace: {
    src: "/logo/argtech-project.png",
    width: 856,
    height: 616,
  },
};

function ServiceTag({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/[0.05] px-[14px] py-[8px] font-[family-name:var(--font-manrope)] text-[12px] font-medium leading-[1.2] tracking-[-0.12px] text-white">
      {label}
    </span>
  );
}

function RelatedProjectLogo({ project }: { project: PortfolioProject }) {
  const logo = projectLogoOverrides[project.id] ?? project.logo;
  const shouldFillCard = project.id in projectLogoOverrides;
  const logoMaxSize =
    project.id === "umami" || project.id === "agritrace"
      ? 130
      : project.id === "nsgcable"
        ? 150
        : project.id === "prohose"
          ? 240
          : 200;

  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{
        width: shouldFillCard ? "100%" : "200px",
        height: shouldFillCard ? "100%" : "200px",
        maxWidth: shouldFillCard ? "100%" : "78%",
      }}
    >
      <Image
        src={logo.src}
        alt={project.logo.alt}
        width={logo.width}
        height={logo.height}
        style={{
          height: shouldFillCard ? "100%" : "auto",
          maxHeight: shouldFillCard ? "100%" : `${logoMaxSize}px`,
          maxWidth: shouldFillCard ? "100%" : `${logoMaxSize}px`,
          objectFit: "contain",
          width: shouldFillCard ? "100%" : "auto",
        }}
      />
    </div>
  );
}

function RelatedProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="relative block h-[540px] md:h-[650px] w-[320px] md:w-[460px] shrink-0 overflow-hidden rounded-[24px] bg-[#10131c] p-4 text-white no-underline transition-transform duration-200 hover:-translate-y-1"
    >
      <motion.div whileTap={{ scale: 0.985, y: -2 }} transition={{ duration: 0.18 }} className="h-full">
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
          <div className="flex flex-wrap items-center gap-[10px] pt-2">
            {project.services.map((service) => (
              <ServiceTag key={service} label={service} />
            ))}
          </div>
        </div>
      </motion.div>
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
          className="portfolio-detail-scroll w-full overflow-x-auto overflow-y-hidden py-4"
          trackClassName="gap-4 pl-[max(16px,calc((100vw-320px)/2))] pr-[max(16px,calc((100vw-320px)/2))] md:gap-[30px] md:pl-[max(40px,calc((100vw-460px)/2))] md:pr-[max(40px,calc((100vw-460px)/2))] lg:pl-[max(194px,calc(50vw-526px))] lg:pr-[max(194px,calc(50vw-526px))]"
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
