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
        padding: "120px 194px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {/* ── "Our Mission" pill tag ── */}
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
          {/* Icon — rounded square per Figma */}
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

      {/* ── Mission card ── */}
      <div
        style={{
          position: "relative",
          width: "1052px",
          height: "469px",
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
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 32px",
            boxSizing: "border-box",
          }}
        >
          {/* ── Left: step list ── */}
          <div style={{ width: "305px", flexShrink: 0 }}>
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "20px 0 20px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: "transparent",
                    border: "none",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    textAlign: "left",
                    opacity: isActive ? 1 : 0.4,
                    transition: "opacity 0.2s",
                    position: "relative",
                    boxSizing: "border-box",
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
                        fontSize: "9px",
                        lineHeight: "13.5px",
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
                        fontSize: "20px",
                        lineHeight: "28px",
                        letterSpacing: "-0.95px",
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

          {/* ── Right: active content ── */}
          <div
            style={{
              width: "561px",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
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
                    fontSize: "48px",
                    lineHeight: "54px",
                    letterSpacing: "-2.74px",
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
                    fontSize: "20px",
                    lineHeight: "normal",
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
