"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Project data

type Project = {
  id: string;
  label: string;
  bgColor: string;
  logo: React.ReactNode;
  title: string;
  description: string;
  services: string[];
};

// Umami SVG logo (green circle with fork-leaf)
const UmamiLogo = () => (
  <div className="flex items-center gap-3">
    <Image src="/logo/umami white logo.png" alt="Umami Logo" width={303} height={80} style={{ objectFit: "contain", width: "auto", height: "80px" }} />
  </div>
);

// Prohose logo
const ProhoseLogo = () => (
  <Image src="/logo/Prohose_white_logo.png" alt="Prohose Logo" width={300} height={200} style={{ objectFit: "contain", width: "300px", height: "200px" }} />
);

// CashGrow logo
const CashGrowLogo = () => (
  <Image src="/logo/cashgrow68.png" alt="CashGrow Logo" width={200} height={200} style={{ objectFit: "contain", width: "200px", height: "200px" }} />
);

// Feng Shui / My Destiny logo
const FengShuiLogo = () => (
  <Image src="/logo/Feng shui white logo.png" alt="Feng Shui Logo" width={200} height={200} style={{ objectFit: "contain", width: "200px", height: "200px" }} />
);

// Generic placeholder icon for projects without local logos
const GenericIcon = ({ color = "#ffffff" }: { color?: string }) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="3" />
    <path d="M28 40h24M40 28v24" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const projects: Project[] = [
  {
    id: "umami",
    label: "UMAMI",
    bgColor: "#003223",
    logo: <UmamiLogo />,
    title: "UMAMI",
    description:
      "Umami is a FoodTech platform dedicated to reducing food waste across Cambodia by connecting consumers with local restaurants and food vendors. Umami allows businesses to sell their surplus food at the end of the day.",
    services: ["Engineering", "UX/UI Design", "Web and Mobile Development", "Cloud Infrastructure"],
  },
  {
    id: "cashgrow",
    label: "CASHGROW68",
    bgColor: "#f59245",
    logo: <CashGrowLogo />,
    title: "CashGrow68",
    description:
      "A comprehensive digital ecosystem featuring a robust web portal for administrative teams and a user-friendly mobile app, empowering customers to seamlessly apply for low-interest, collateral-backed loans.",
    services: ["Engineering", "UX/UI Design", "Web and Mobile Development", "Cloud Infrastructure"],
  },
  {
    id: "prohose",
    label: "PROHOSE",
    bgColor: "#6cc51d",
    logo: <ProhoseLogo />,
    title: "Prohose Official",
    description:
      "A professional landing page showcasing Prohose's mission and story, dedicated to bringing Khmer agricultural produce to the digital marketplace.",
    services: ["Engineering", "UX/UI Design", "Web and Mobile Development", "Cloud Infrastructure"],
  },
  {
    id: "agritrace",
    label: "KHMER AGRITRACE",
    bgColor: "#006d30",
    logo: <UmamiLogo />,
    title: "Khmer Agritrace",
    description:
      "AgriTrace is an end-to-end agricultural management ecosystem designed to digitize the farming lifecycle in Cambodia. By connecting physical field data—such as land plots and crop cycles—to a digital marketplace.",
    services: ["Engineering", "UX/UI Design", "Web and Mobile Development", "Cloud Infrastructure"],
  },
  {
    id: "nsgcable",
    label: "NGS CABLE",
    bgColor: "#4f1ad6",
    logo: <GenericIcon color="#ffffff" />,
    title: "NSG Cable",
    description:
      "A comprehensive, dual-platform management ecosystem connecting field agents, warehouse operations, and retailers through a Telegram-based Field Intelligence Bot and a Centralized Command Center web portal.",
    services: ["Engineering", "UX/UI Design", "Web and Mobile Development", "Cloud Infrastructure"],
  },
  {
    id: "ecochef",
    label: "GREENSPROUT",
    bgColor: "#1a1a2e",
    logo: <FengShuiLogo />,
    title: "ECOCHEF",
    description:
      "EcoChef is an AI-powered meal planner that helps users minimize food waste by suggesting recipes based on ingredients they already have at home.",
    services: ["Data Science", "Interaction Design", "Backend Development", "Machine Learning"],
  },
];

const filterLabels = ["All", "UMAMI", "PROHOSE", "NGS CABLE", "CASHGROW68", "KHMER AGRITRACE", "GREENSPROUT", "ZENITH TECH"];

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

// Single Project Card
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
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
        {project.logo}
      </div>

      {/* Text + Tags — 428px inner width matching Figma */}
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

        {/* Service tags — natural height, horizontal scroll, no scrollbar */}
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
  );
}

// Main Section
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
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
        {/* ── Header ── */}
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
              {filterLabels.map((label) => {
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

        {/* ── Two-column Project Grid ── */}
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
          {/* Right column — offset downward like Figma's stagger */}
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
