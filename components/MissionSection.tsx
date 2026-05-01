"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets from Figma
const imgBgMission = "/assets/bg-mission.png";

// Mission steps data
const steps = [
  {
    number: "01",
    label: "CORE BELIEF",
    title: "BORN FROM A BOLD BELIEF",
    description:
      "Dojology was born from a singular, bold conviction—that every great idea deserves the chance to become a unicorn. We are the bridge that helps founders and businesses get there.",
  },
  {
    number: "02",
    label: "THE ORIGIN",
    title: "ENGINEERING STUDIO",
    description:
      "We started as an engineering studio—building products, platforms, and systems for startups and enterprises across Southeast Asia.",
  },
  {
    number: "03",
    label: "THE EVOLUTION",
    title: "HYBRID VC MODEL",
    description:
      "We evolved into a hybrid VC model—investing our expertise, network, and capital alongside founders who are ready to scale.",
  },
  {
    number: "04",
    label: "THE VISION",
    title: "ECOSYSTEM BUILDER",
    description:
      "Our vision is to become the definitive ecosystem builder in the region—connecting talent, capital, and technology to unlock transformative growth.",
  },
];

// Component
export default function MissionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <section
      id="mission"
      style={{
        background: "#000",
        width: "100%",
        padding: "80px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
      className="lg:!p-[120px_194px]"
    >
      {/* "Our Mission" pill tag */}
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingLeft: "6px",
            paddingRight: "16px",
            borderRadius: "40px",
            backgroundImage:
              "linear-gradient(0.07deg, rgba(79,26,214,0.08) 0%, rgba(153,153,153,0.1) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Blue shimmer line at top */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: "14.34%",
              right: "14.34%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(79,26,214,0) 0%, #4e43fe 50%, rgba(79,26,214,0) 100%)",
            }}
          />
          {/* Pill outer border overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "40px",
              border: "1px solid rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />
          {/* Icon is rounded square per Figma */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              borderRadius: "30px",
              backgroundImage: "linear-gradient(180deg, #4f1ad6 0%, #8059e3 100%)",
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Icon border overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "30px",
                border: "2px solid rgba(255,255,255,0.15)",
                pointerEvents: "none",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "-0.5px",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Our Mission
          </span>
        </div>
      </div>

      {/* Mission card */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1052px",
          height: "auto",
          minHeight: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#0a0a14",
        }}
      >
        {/* bg-mission nebula image */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.7,
            pointerEvents: "none",
          }}
        >
          <img
            src={imgBgMission}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Card content */}
        <div
          className="relative z-10 flex flex-row items-center justify-between h-full p-[24px_16px] md:p-[0_32px] gap-2 md:gap-8 min-h-[300px] md:min-h-[469px] w-full box-border"
        >
          {/* Left: step list */}
          <div className="w-[45%] lg:w-[305px] flex-shrink-0">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onFocus={() => setActiveIndex(i)}
                  onPointerEnter={() => setActiveIndex(i)}
                  className="w-full flex items-center gap-[6px] md:gap-[12px] p-[12px_0_12px_12px] md:p-[20px_0_20px_24px] border-b border-white/5 bg-transparent cursor-pointer text-left relative box-border transition-opacity duration-200"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {/* Active dot */}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#4f39f6",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div style={{ paddingLeft: "8px" }}>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(6px, 1.5vw, 9px)",
                        lineHeight: "1.2",
                        letterSpacing: "0.9px",
                        color: isActive ? "#4f39f6" : "rgba(255,255,255,0.4)",
                        margin: "0 0 4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.number} / {step.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(12px, 3vw, 20px)",
                        lineHeight: "1.2",
                        letterSpacing: "-0.5px",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.2)",
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: active content */}
          <div className="w-[55%] lg:w-[561px] flex-shrink-0 relative overflow-hidden pt-0 pl-4 md:pl-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(16px, 4vw, 48px)",
                    lineHeight: "1.2",
                    letterSpacing: "-1.5px",
                    color: "#fff",
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {active.title}
                </p>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(10px, 2.5vw, 20px)",
                    lineHeight: "1.5",
                    color: "rgba(255,255,255,0.9)",
                    margin: 0,
                  }}
                >
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
