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
    linkedIn: "https://www.linkedin.com/in/penlymeng/",
  },
  {
    name: "Dalen SIENG",
    role: "Co-founder & CFO",
    bio: "Financial and operational expert driving efficiency and scaling excellence across the organization, ensuring sustainable growth for every portfolio company.",
    image: "/image/cfo-image.png",
    linkedIn: "https://www.linkedin.com/in/dalen-sieng-930769131/",
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
    role: "Co-Founder & CTO",
    bio: "Great products come from systems that stay reliable when the pressure rises. He leads the technical architecture behind scalable platforms, APIs, cloud infrastructure, and engineering standards.",
    image: "/image/Pak_Maneth.png",
    linkedIn: "https://www.linkedin.com/in/maneth-pak/",
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

function Avatar({ image, name, size, className }: { image?: string; name: string; size?: number; className?: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 relative flex items-center justify-center bg-[linear-gradient(135deg,#9333ea_0%,#4338ca_70.711%)] ${className || ""}`}
      style={size ? { width: size, height: size } : {}}
    >
      {image ? (
        <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span className="font-[family-name:var(--font-manrope)] font-bold text-white/90 relative z-10 text-[inherit]">
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
      className="w-[85vw] max-w-[800px] h-[480px] sm:h-[400px] rounded-[24px] overflow-hidden relative shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] flex items-center justify-center flex-shrink-0"
      style={{
        background: "linear-gradient(153.435deg, #9333ea 0%, #4338ca 70.711%)",
      }}
    >
      {/* decorative blobs */}
      <div className="absolute left-[80%] top-[-30%] w-[256px] h-[256px] rounded-full bg-white/10" />
      <div className="absolute left-[-12%] top-[60%] w-[192px] h-[192px] rounded-full bg-white/5" />

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:justify-between w-[90%] md:w-[688px] max-w-full h-auto md:h-[216px] relative z-10 gap-6 md:gap-0 px-4 md:px-0 text-center md:text-left">
        <div className="flex-shrink-0">
          <Avatar image={member.image} name={member.name} className="w-[100px] h-[100px] text-[28px] md:w-[160px] md:h-[160px] md:text-[45px]" />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[496px] flex-shrink-0 items-center md:items-start">
          <div className="flex flex-col gap-2 md:gap-[14px] w-full">
            <div className="flex flex-col gap-1 md:gap-[4px]">
              <p className="font-[family-name:var(--font-manrope)] font-bold text-[20px] md:text-[30px] leading-[1.2] text-white m-0">
                {member.name}
              </p>
              <p className="font-[family-name:var(--font-manrope)] font-bold text-[14px] md:text-[16px] leading-[1.2] text-[#34cb4d] m-0">
                {member.role}
              </p>
            </div>
            <p className="font-[family-name:var(--font-manrope)] font-normal text-[14px] md:text-[16px] leading-[1.5] text-white/90 m-0 line-clamp-4 md:line-clamp-3">
              {member.bio}
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            {member.linkedIn && (
              <a href={member.linkedIn} aria-label={`${member.name} LinkedIn`}
                className="w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 no-underline transition-colors hover:bg-white/30">
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

  const xPx      = useTransform(dist, [-2, -1, 0, 1, 2], ["-85%", "-47.5%", "0%", "47.5%", "85%"]);
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
        className="h-[480px] sm:h-[420px]"
        style={{
          position: "relative",
          width: "100%",
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
