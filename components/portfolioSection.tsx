"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import AutoHorizontalCarousel from "@/components/AutoHorizontalCarousel";
import {
  portfolioFilterLabels,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/portfolio-data";

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

const projectOrder = ["umami", "cashgrow", "prohose", "nsgcable", "agritrace"] as const;
const projectOrderIndex = new Map<string, number>(projectOrder.map((id, index) => [id, index]));
const preferredFilterOrder = ["All", "UMAMI", "CASHGROW68", "PROHOSE", "RNSG CRM", "ARG TECH"];
const filterOrderIndex = new Map(preferredFilterOrder.map((label, index) => [label, index]));
const projectGlowColors: Record<string, string> = {
  umami: "#005c3b",
  cashgrow: "#f59245",
  prohose: "#7ed321",
  nsgcable: "#6b3cff",
  agritrace: "#0a5a2b",
};
const projectGlowOpacity: Record<string, { strong: number; mid: number; soft: number }> = {
  cashgrow: { strong: 0.28, mid: 0.16, soft: 0.07 },
  prohose: { strong: 0.28, mid: 0.16, soft: 0.07 },
  nsgcable: { strong: 0.26, mid: 0.15, soft: 0.06 },
};
const projectDescriptionColors: Record<string, string> = {
  umami: "#cccccc",
  cashgrow: "#ffffff",
  prohose: "#ffffff",
  nsgcable: "#ffffff",
  agritrace: "#ffffff",
};

function hexToRgba(hex: string, alpha: number) {
  const normalizedHex = hex.replace("#", "");
  const safeHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((value) => value + value)
          .join("")
      : normalizedHex;

  const red = Number.parseInt(safeHex.slice(0, 2), 16);
  const green = Number.parseInt(safeHex.slice(2, 4), 16);
  const blue = Number.parseInt(safeHex.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// Service tag chips
function ServiceTag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "11px 31px",
        borderRadius: "40px",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontFamily: "Manrope, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24.375px",
        letterSpacing: "-0.2344px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}

function ProjectLogo({ project }: { project: PortfolioProject }) {
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
      style={{
        width: shouldFillCard ? "100%" : "200px",
        height: shouldFillCard ? "100%" : "200px",
        maxWidth: shouldFillCard ? "100%" : "82%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
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

// Single Project Card
function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const glowColor = projectGlowColors[project.id] ?? project.bgColor;
  const descriptionColor = projectDescriptionColors[project.id] ?? "#ffffff";
  const glowOpacity = projectGlowOpacity[project.id] ?? {
    strong: 0.42,
    mid: 0.24,
    soft: 0.11,
  };
  const brandedGlow = `radial-gradient(circle at center, ${hexToRgba(glowColor, glowOpacity.strong)} 0%, ${hexToRgba(glowColor, glowOpacity.mid)} 36%, ${hexToRgba(glowColor, glowOpacity.soft)} 58%, rgba(0, 0, 0, 0) 80%)`;

  return (
    <Link
      href={`/portfolio/${project.id}`}
      aria-label={`View ${project.title} project details`}
      className="block w-[320px] shrink-0 text-inherit no-underline md:h-[634px] md:w-[460px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="flex w-full cursor-pointer flex-col gap-8 overflow-hidden rounded-[24px] bg-[#10131c] p-4 pb-8 md:h-full"
      >
        <div
          className="relative flex h-[250px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] sm:!h-[308px]"
          style={{ background: project.bgColor }}
        >
          <ProjectLogo project={project} />
        </div>

        <div className="flex w-full flex-1 flex-col gap-9">
          <div className="flex w-full flex-col gap-4">
            <p
              style={{
                fontFamily: "'Nunito Sans', Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "normal",
                color: "#fff",
                margin: 0,
              }}
            >
              {project.title}
            </p>
            <div className="relative w-full overflow-visible py-1">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[72px] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] blur-[38px] md:h-[76px] md:w-[104%]"
                style={{ background: brandedGlow }}
              />
              <p
                className="relative z-10"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24.375px",
                  letterSpacing: "-0.2344px",
                  color: descriptionColor,
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>
          </div>

          <div
            className="tags-scroll"
            style={{
              overflowX: "auto",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "max-content",
              }}
            >
              {project.services.map((s) => (
                <ServiceTag key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Main Section
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const orderedFilterLabels = useMemo(
    () =>
      [...portfolioFilterLabels].sort(
        (left, right) =>
          (filterOrderIndex.get(left) ?? Number.MAX_SAFE_INTEGER) -
          (filterOrderIndex.get(right) ?? Number.MAX_SAFE_INTEGER),
      ),
    [],
  );

  const filteredProjects = useMemo(() => {
    const visibleProjects = portfolioProjects.filter((project) => {
      if (activeFilter === "All") {
        return true;
      }

      return project.label === activeFilter;
    });

    return visibleProjects.sort(
      (left, right) =>
        (projectOrderIndex.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
        (projectOrderIndex.get(right.id) ?? Number.MAX_SAFE_INTEGER),
    );
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      className="w-full overflow-hidden bg-[#010103] px-4 py-[80px] sm:!px-8 lg:!py-[120px]"
    >
      <div className="mx-auto flex max-w-[1052px] flex-col gap-16">
        <div className="flex w-full flex-col items-center gap-8">
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 10vw, 128px)",
              lineHeight: "1.0",
              letterSpacing: "clamp(-3px, -0.55vw, -7px)",
              color: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              userSelect: "none",
              position: "relative",
              textAlign: "center",
            }}
          >
            <p
              style={{
                backgroundImage: "linear-gradient(to bottom, #4f46e5, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
                letterSpacing: "clamp(-3px, -0.55vw, -7px)",
                lineHeight: "1.0",
              }}
            >
              OUR
            </p>
            <p
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: "-0.05em 0 0",
                letterSpacing: "clamp(-2px, -0.4vw, -5px)",
                lineHeight: "1.0",
              }}
            >
              PROJECT
            </p>
          </div>

          <div
            className="tags-scroll"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "90px",
              padding: "12px 24px",
              width: "100%",
              boxSizing: "border-box",
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-end",
                overflow: "visible",
              }}
            >
              {orderedFilterLabels.map((label) => {
                const isActive = activeFilter === label;
                return (
                  <button
                    key={label}
                    onClick={() => setActiveFilter(label)}
                    style={{
                      padding: "11px 31px",
                      borderRadius: "40px",
                      border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
                      background: isActive ? "#4f1ad6" : "transparent",
                      color: "#fff",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "16px",
                      fontWeight: isActive ? 700 : 400,
                      lineHeight: "24.375px",
                      letterSpacing: isActive ? "-0.2344px" : "-0.1504px",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "background 0.2s, border 0.2s",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative left-1/2 w-[100vw] -translate-x-1/2">
          <AutoHorizontalCarousel
            key={activeFilter}
            className="w-full overflow-x-auto overflow-y-hidden py-4"
            trackClassName="gap-4 pl-[max(16px,calc((100vw-320px)/2))] pr-[max(16px,calc((100vw-320px)/2))] md:gap-[30px] md:pl-[max(40px,calc((100vw-460px)/2))] md:pr-[max(40px,calc((100vw-460px)/2))] lg:pl-[max(194px,calc(50vw-526px))] lg:pr-[max(194px,calc(50vw-526px))]"
            itemSpan={490}
            itemWidth={460}
            logicalCount={filteredProjects.length}
            allowTrailingSpacer={false}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AutoHorizontalCarousel>
        </div>
      </div>
    </section>
  );
}
