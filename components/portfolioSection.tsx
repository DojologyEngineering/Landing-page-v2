"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import ProjectAutoRail from "@/components/ProjectAutoRail";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-data";

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
  nsgcable: {
    src: "/logo/rnsg-crm.png",
    width: 1280,
    height: 720,
  },
  agritrace: {
    src: "/logo/argtech-project.png",
    width: 856,
    height: 616,
  },
};

const projectOrder = ["umami", "cashgrow", "prohose", "nsgcable", "agritrace"] as const;
const projectOrderIndex = new Map<string, number>(projectOrder.map((id, index) => [id, index]));
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
        padding: "8px 14px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontFamily: "Manrope, sans-serif",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "1.2",
        letterSpacing: "-0.12px",
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
        ? 200
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
        quality={100}
        sizes="(max-width: 768px) 92vw, 428px"
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

function ProjectCover({
  project,
  className = "",
}: {
  project: PortfolioProject;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-[250px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] sm:!h-[308px] ${className}`}
      style={{ background: project.bgColor }}
    >
      <ProjectLogo project={project} />
    </div>
  );
}

function MobileProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const glowColor = projectGlowColors[project.id] ?? project.bgColor;
  const blurGlow = `radial-gradient(circle at center, ${hexToRgba(glowColor, 0.2)} 0%, ${hexToRgba(glowColor, 0.06)} 42%, rgba(0, 0, 0, 0) 78%)`;

  return (
    <Link
      href={`/portfolio/${project.id}`}
      aria-label={`View ${project.title} project details`}
      className="block w-full text-inherit no-underline"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="overflow-hidden rounded-[26px] border border-white/8 bg-[#10131c] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.34)]"
      >
        <div className="relative h-[310px] overflow-hidden rounded-[20px] bg-[#0d1017]">
          <div className="absolute inset-0 scale-[1.01] blur-[4px] opacity-58">
            <ProjectCover project={project} className="h-full !rounded-[20px] sm:!h-full" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,5,10,0.01) 0%, rgba(3,5,10,0.05) 42%, rgba(3,5,10,0.16) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: blurGlow }}
          />
          <div className="relative z-10 flex h-full items-center justify-center p-4">
            <div className="flex w-full items-start justify-center pt-2">
              <ProjectCover
                project={project}
                className="h-[190px] w-[92%] !rounded-[8px] shadow-[0_22px_40px_rgba(0,0,0,0.18)] sm:!h-[190px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
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
        whileTap={{ scale: 0.985, y: -2 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="flex w-full cursor-pointer flex-col gap-8 overflow-hidden rounded-[24px] bg-[#10131c] p-4 pb-8 md:h-full"
      >
        <ProjectCover project={project} />

        <div className="flex w-full flex-1 flex-col gap-6">
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

          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
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
  const orderedProjects = useMemo(
    () =>
      [...portfolioProjects].sort(
      (left, right) =>
        (projectOrderIndex.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
        (projectOrderIndex.get(right.id) ?? Number.MAX_SAFE_INTEGER),
      ),
    [],
  );

  return (
    <section
      id="portfolio"
      className="w-full overflow-hidden bg-[#010103] px-4 py-[80px] sm:!px-8 lg:!py-[120px]"
    >
      <div className="mx-auto flex max-w-[1052px] flex-col gap-16">
        <div className="flex w-full flex-col items-center">
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
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {orderedProjects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="relative left-1/2 hidden w-[100vw] -translate-x-1/2 md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#010103] via-[#010103]/88 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[#010103] via-[#010103]/88 to-transparent lg:block" />
          <ProjectAutoRail
            className="px-[max(16px,calc((100vw-320px)/2))] md:px-[max(40px,calc((100vw-460px)/2))] lg:px-[max(194px,calc(50vw-526px))]"
            segmentClassName="gap-4 pr-4 md:gap-[30px] md:pr-[30px]"
            speed={42}
            resumeDelayMs={1900}
          >
            {orderedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </ProjectAutoRail>
        </div>
      </div>
    </section>
  );
}
