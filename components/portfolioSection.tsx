"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  portfolioFilterLabels,
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/portfolio-data";

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
  return (
    <Image
      src={project.logo.src}
      alt={project.logo.alt}
      width={project.logo.width}
      height={project.logo.height}
      style={{
        height: "auto",
        maxHeight: project.id === "umami" || project.id === "agritrace" ? "80px" : "200px",
        maxWidth: "82%",
        objectFit: "contain",
        width: "auto",
      }}
    />
  );
}

// Single Project Card
function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      aria-label={`View ${project.title} project details`}
      style={{
        width: "460px",
        flexShrink: 0,
        color: "inherit",
        display: "block",
        textDecoration: "none",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        style={{
          background: "#10131c",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          paddingTop: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "32px",
          gap: "32px",
          width: "460px",
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        {/* Image / Logo area */}
        <div
          style={{
            position: "relative",
            width: "428px",
            height: "308px",
            borderRadius: "12px",
            background: project.bgColor,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ProjectLogo project={project} />
        </div>

        {/* Text and tags use 428px inner width matching Figma */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px", width: "428px" }}>
          {/* Title + Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24.375px",
                letterSpacing: "-0.2344px",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Service tags use natural height, horizontal scroll, no scrollbar */}
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

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.label === activeFilter;
  });

  // Split into two columns (alternating)
  const leftCol = filteredProjects.filter((_, i) => i % 2 === 0);
  const rightCol = filteredProjects.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="portfolio"
      style={{
        background: "#010103",
        width: "100%",
        padding: "120px 194px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1052px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Stacked gradient title */}
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "128px",
              lineHeight: "102.4px",
              letterSpacing: "-7px",
              color: "transparent",
              display: "grid",
              gridTemplateColumns: "max-content",
              gridTemplateRows: "max-content",
              placeItems: "start",
              userSelect: "none",
              position: "relative",
            }}
          >
            {/* OUR */}
            <p
              style={{
                backgroundImage: "linear-gradient(to bottom, #4f46e5, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                gridColumn: 1,
                gridRow: 1,
                marginLeft: "187px",
                marginTop: 0,
                letterSpacing: "-7px",
                lineHeight: "102.4px",
              }}
            >
              OUR{" "}
            </p>
            {/* RECENT */}
            <p
              style={{
                backgroundImage: "linear-gradient(89.49deg, #ffffff 2.08%, #4f46e5 107.66%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                gridColumn: 1,
                gridRow: 1,
                marginLeft: "76px",
                marginTop: "100px",
                letterSpacing: "-5px",
                lineHeight: "102.4px",
              }}
            >
              RECENT
            </p>
            {/* PROJECTS */}
            <p
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                gridColumn: 1,
                gridRow: 1,
                marginLeft: 0,
                marginTop: "200px",
                letterSpacing: "-5px",
                lineHeight: "102.4px",
              }}
            >
              PROJECTS
            </p>
          </div>

          {/* Filter tabs */}
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
              {portfolioFilterLabels.map((label) => {
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

        {/* Two-column Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "460px 460px",
            columnGap: "120px",
            rowGap: "60px",
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {leftCol.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i * 2} />
            ))}
          </div>
          {/* Right column offset downward like Figma stagger */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {rightCol.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
