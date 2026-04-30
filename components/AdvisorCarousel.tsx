"use client";

import { useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";

// Team / Advisor data

type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
};

const members: Member[] = [
  {
    name: "Lymeng PEN",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in technology innovation and strategic growth, driving Dojology's mission to empower startups through equity-based partnerships.",
    image: "/image/ceo-image.png",
    linkedIn: "#",
  },
  {
    name: "Dalen SIENG",
    role: "Co-founder & CFO",
    bio: "Financial and operational expert driving efficiency and scaling excellence across the organization, ensuring sustainable growth for every portfolio company.",
    image: "/image/cfo-image.png",
    linkedIn: "#",
  },
  {
    name: "Thai Sodalin",
    role: "IT Business Analyst",
    bio: "Bridges the gap between technical teams and clients, translating business requirements into precise, actionable engineering deliverables.",
    linkedIn: "#",
  },
  {
    name: "Kumari Laxmi Sharma",
    role: "Project Manager",
    bio: "Keeps every project on track with meticulous planning, cross-functional coordination, and a relentless focus on quality delivery.",
    linkedIn: "#",
  },
  {
    name: "Pak Maneth",
    role: "Backend Lead",
    bio: "Architects robust, scalable server-side systems and APIs, championing best practices in cloud infrastructure and database design.",
    linkedIn: "#",
  },
];

// Icons

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3.14 4.67H0.93V13.22H3.14V4.67ZM2.04 3.73C2.76 3.73 3.35 3.14 3.35 2.42C3.35 1.7 2.76 1.11 2.04 1.11C1.32 1.11 0.73 1.7 0.73 2.42C0.73 3.14 1.32 3.73 2.04 3.73ZM13.22 13.22H11.01V9.04C11.01 8.2 10.99 7.12 9.83 7.12C8.65 7.12 8.47 8.03 8.47 8.98V13.22H6.26V4.67H8.38V5.66H8.41C8.71 5.09 9.44 4.49 10.52 4.49C12.75 4.49 13.22 5.95 13.22 7.86V13.22Z"
      fill="white"
    />
  </svg>
);

// Avatar

function Avatar({ image, name, size }: { image?: string; name: string; size: number }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      style={{
        width: size, height: size, borderRadius: "9999px",
        background: "linear-gradient(135deg, #9333ea 0%, #4338ca 70.711%)",
        overflow: "hidden", flexShrink: 0, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {image ? (
        <img src={image} alt={name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: size * 0.28, color: "rgba(255,255,255,0.9)", position: "relative", zIndex: 1 }}>
          {initials}
        </span>
      )}
    </div>
  );
}

// Card

function MemberCard({ member }: { member: Member }) {
  return (
    <div
      style={{
        width: 800, height: 400, borderRadius: "24px",
        background: "linear-gradient(153.435deg, #9333ea 0%, #4338ca 70.711%)",
        overflow: "hidden", position: "relative",
        boxShadow: "0px 25px 50px 0px rgba(0,0,0,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}
    >
      {/* decorative blobs */}
      <div style={{ position: "absolute", left: "640px", top: "-128px", width: "256px", height: "256px", borderRadius: "9999px", background: "rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", left: "-96px", top: "254px", width: "192px", height: "192px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)" }} />

      {/* Content */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "688px", height: "216px", position: "relative", zIndex: 1,
        }}
      >
        <Avatar image={member.image} name={member.name} size={160} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: 496, flexShrink: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "30px", lineHeight: "36px", color: "#fff", margin: 0 }}>
                {member.name}
              </p>
              <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "28px", color: "#34cb4d", margin: 0 }}>
                {member.role}
              </p>
            </div>
            <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(243,232,255,0.9)", margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {member.bio}
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {member.linkedIn && (
              <a href={member.linkedIn} aria-label={`${member.name} LinkedIn`}
                style={{ width: "40px", height: "40px", borderRadius: "9999px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, textDecoration: "none" }}>
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Per-card slide derives all visual state from shared MotionValue

function CarouselSlide({
  member, cardIndex, total, indexMV, onActivate,
}: {
  member: Member; cardIndex: number; total: number;
  indexMV: MotionValue<number>; onActivate: () => void;
}) {
  const dist = useTransform(indexMV, (v) => {
    const raw = ((cardIndex - v) % total + total) % total;
    return raw > total / 2 ? raw - total : raw;
  });

  const xPx      = useTransform(dist, [-2, -1, 0, 1, 2], [-680, -380, 0, 380, 680]);
  const scale     = useTransform(dist, [-2, -1, 0, 1, 2], [0.55, 0.75, 1, 0.75, 0.55]);
  // Fade to 0 beyond ±1.5 so wrapping teleport is invisible
  const opacity   = useTransform(dist, [-1.6, -1, 0, 1, 1.6], [0, 1, 1, 1, 0]);
  const filterCSS = useTransform(dist, [-1, 0, 1], [0.65, 1, 0.65],
    { clamp: false }
  );
  const filterStr = useTransform(filterCSS, (b) => `brightness(${Math.max(0, b).toFixed(3)})`);
  const zIndex    = useTransform(dist, (v) => {
    const a = Math.abs(v);
    return a < 0.5 ? 10 : a < 1.5 ? 5 : 1;
  });

  // isActive is only used for cursor with no state and no re-render
  const isAdjacent = useTransform(dist, (v) => Math.abs(v) > 0.3);

  return (
    <motion.div
      style={{
        position: "absolute",
        x: xPx,
        scale,
        opacity,
        filter: filterStr,
        zIndex,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter",
        cursor: "pointer",
      }}
      onClick={onActivate}
    >
      <MemberCard member={member} />
    </motion.div>
  );
}

// Main Carousel

export default function AdvisorCarousel() {
  const total = members.length;
  const indexMV = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (absoluteIndex: number) => {
      const current = indexMV.get();
      const currentMod = ((Math.round(current) % total) + total) % total;
      let delta = absoluteIndex - currentMod;
      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;
      setActiveIndex(absoluteIndex);
      animate(indexMV, current + delta, {
        type: "tween",
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      });
    },
    [indexMV, total]
  );

  const prev = useCallback(() => {
    const mod = ((Math.round(indexMV.get()) % total) + total) % total;
    goTo(((mod - 1) + total) % total);
  }, [goTo, indexMV, total]);

  const next = useCallback(() => {
    const mod = ((Math.round(indexMV.get()) % total) + total) % total;
    goTo((mod + 1) % total);
  }, [goTo, indexMV, total]);

  return (
    <section
      style={{
        background: "#010103",
        width: "100%",
        padding: "80px 0 60px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1200px",
        }}
      >
        {members.map((member, i) => (
          <CarouselSlide
            key={member.name}
            member={member}
            cardIndex={i}
            total={total}
            indexMV={indexMV}
            onActivate={() => {
              const current = indexMV.get();
              const currentMod = ((Math.round(current) % total) + total) % total;
              const raw = ((i - currentMod) % total + total) % total;
              const offset = raw > total / 2 ? raw - total : raw;
              goTo(((currentMod + offset) % total + total) % total);
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px" }}>
        <button onClick={prev} aria-label="Previous"
          style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px" }}>
          {members.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === activeIndex ? "16px" : "12px",
                height: i === activeIndex ? "16px" : "12px",
                borderRadius: "9999px",
                background: i === activeIndex ? "#9333ea" : "rgba(255,255,255,0.4)",
                border: i === activeIndex ? "2px solid rgba(255,255,255,0.6)" : "none",
                cursor: "pointer", padding: 0,
                transition: "all 0.25s ease",
                opacity: i === activeIndex ? 1 : 0.5,
              }}
            />
          ))}
        </div>

        <button onClick={next} aria-label="Next"
          style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
