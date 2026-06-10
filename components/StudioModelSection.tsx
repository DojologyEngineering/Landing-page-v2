"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Cpu, Layout, Cloud, Palette, Target, FileText, Handshake,
  Wrench, Rocket, TrendingUp,
} from "lucide-react";

// CSS keyframe for the neon border spin
const NEON_CSS = `
@keyframes neon-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`;

// Neon border card wrapper
function NeonCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ position: "relative", padding: "1.5px", borderRadius: "20px", overflow: "hidden", height: "184px" }}>
      {/* Rotating indigo border beam with exact Figma colors */}
      <div
        style={{
          position: "absolute",
          inset: "-100%",
          background:
            "conic-gradient(from 0deg, rgb(5,2,47) 0%, rgba(24,8,84,0.5) 10%, rgba(43,14,120,0) 25%, rgba(52,28,148,0.25) 30%, rgba(61,42,175,0.5) 35%, rgba(70,56,202,0.75) 40%, rgb(79,70,229) 45%, rgb(60,53,183) 50%, rgb(42,36,138) 55%, rgb(23,19,92) 60%, rgb(5,2,47) 65%, rgba(24,8,84,0.5) 80%, rgba(33,11,102,0.0) 90%, rgb(5,2,47) 100%)",
          animation: "neon-spin 5s linear infinite",
          animationDelay: `${delay}s`,
        }}
      />
      {/* Inner card surface uses solid dark bg so only the 1.5px gap shows the neon */}
      <div
        className="group relative p-8 flex flex-col justify-end overflow-hidden transition-all"
        style={{ borderRadius: "18.5px", background: "#0d0d10", height: "100%" }}
      >
        {children}
      </div>
    </div>
  );
}

// Main component
export default function StudioModelSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [beamKey, setBeamKey] = useState(0);
  const prevPhaseRef = useRef(0); // tracks where horizontal beam starts from

  function selectPhase(i: number) {
    prevPhaseRef.current = activePhase; // capture current before updating
    setActivePhase(i);
    setBeamKey((k) => k + 1);
  }

  const resources = [
    { title: "Engineering Team",  desc: "DEDICATED FULL-STACK POD.",      icon: Code2 },
    { title: "Product Dev",       desc: "AGILE ROADMAP EXECUTION.",        icon: Cpu },
    { title: "UX/UI Design",      desc: "PREMIUM INTERFACE SYSTEMS.",      icon: Layout },
    { title: "Cloud & DevOps",    desc: "SCALABLE INFRA ARCHITECTURE.",    icon: Cloud },
    { title: "Branding",          desc: "IDENTITY & CREATIVE ASSETS.",     icon: Palette },
    { title: "Market Entry",      desc: "GO-TO-MARKET STRATEGY.",          icon: Target },
    { title: "Fundraising",       desc: "PITCH DECK & NETWORK.",           icon: FileText },
    { title: "Partnership",       desc: "LONG-TERM PARTNERSHIP.",          icon: Handshake },
  ];

  const phases = [
    { number: "01", title: "Build",  desc: "We engineer the MVP or full product with world-class quality.",                                              label: "MVP DELIVERY",       icon: Wrench },
    { number: "02", title: "Launch", desc: "We help founders go to market, optimize adoption, and refine product-market fit.",                           label: "MARKET ACTIVATION",  icon: Rocket },
    { number: "03", title: "Scale",  desc: "We support growth, strengthen product stability, and prepare for investment rounds.",                        label: "HYPERGROWTH",        icon: TrendingUp },
  ];

  // Timeline geometry with dots centered over each of the 3 equal columns
  const DOT_SIZE     = 14;
  const CONNECTOR_H  = 90;
  const DOT_X        = ["16.67%", "50%", "83.33%"];
  const fillPct      = (activePhase / (phases.length - 1)) * 100;

  return (
    <section id="studio" className="w-full overflow-hidden bg-black px-4 pt-10 pb-16 text-white md:px-10 md:py-24 lg:px-[194px] lg:pt-20 lg:pb-20 font-[family-name:var(--font-inter)]">
      <style>{NEON_CSS}</style>

      <div className="mx-auto flex max-w-[1052px] flex-col items-center gap-10 md:gap-16 lg:gap-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[64px] md:text-[128px] leading-[1.1] md:leading-[102.4px] flex flex-col md:inline-grid pb-6 overflow-visible text-left md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#4f46e5] to-white md:col-start-1 md:row-start-1 md:z-10 pb-4 tracking-[-3px] md:tracking-[-7px]">Tech for</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#4f46e5] md:col-start-1 md:row-start-1 md:ml-[56px] md:mt-[73px] z-0 pb-4 tracking-[-2px] md:tracking-[-5px]">Equity.</span>
          </h2>
          <p className="text-[#99a1af] text-base md:text-[18px] leading-relaxed max-w-xl font-light font-[family-name:var(--font-manrope)]">
            "We don't just back founders; we build the core of their vision as technical partners."
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#4f46e5]" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase">DOJOLOGY</span>
            <div className="h-px w-12 bg-[#4f46e5]" />
          </div>
        </div>

        {/* Tech for Equity cards, each wrapped in NeonCard */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-[#6a7282] text-xs font-extrabold tracking-[0.4em] uppercase font-[family-name:var(--font-manrope)]">What Founders Receive:</h3>
            <span className="text-[#4a5565] text-[10px] font-bold tracking-wider uppercase hidden sm:block">Available Resources: 08</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <NeonCard key={i} delay={i * 0.45}>
                  <div className="absolute top-8 left-8 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white text-[14px] font-bold mb-1">{res.title}</h4>
                    <p className="text-[#6a7282] text-[10px] uppercase font-medium tracking-wide">{res.desc}</p>
                  </div>
                </NeonCard>
              );
            })}
          </div>

          <p className="text-center text-[#99a1af] text-[18px] mt-8 max-w-3xl mx-auto font-light font-[family-name:var(--font-manrope)]">
            In return, we take equity ownership, aligning success for both sides.
          </p>
        </div>

        {/* Studio Phases */}
        <div className="w-full flex flex-col items-center gap-8 md:gap-16">
          <h2 className="text-4xl md:text-[72px] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-[#4f46e5] text-center tracking-[-2px] md:tracking-[-4.2px] leading-tight md:leading-[72px] pb-6 overflow-visible">
            Studio Phases
          </h2>

          <div className="w-full relative">
            {/* Timeline row */}
            <div style={{ position: "relative", width: "100%", height: DOT_SIZE + CONNECTOR_H }}>

              {/* Horizontal line bloom */}
              {/* Outer wide diffuse glow */}
              <div style={{ position: "absolute", top: DOT_SIZE / 2 - 16, left: DOT_X[0], right: DOT_X[0], height: "32px", background: "rgba(79,70,229,0.10)", filter: "blur(16px)", borderRadius: "50%", pointerEvents: "none" }} />
              {/* Mid tighter glow */}
              <div style={{ position: "absolute", top: DOT_SIZE / 2 - 5, left: DOT_X[0], right: DOT_X[0], height: "10px", background: "rgba(100,90,240,0.22)", filter: "blur(6px)", borderRadius: "8px", pointerEvents: "none" }} />
              {/* The line itself */}
              <div style={{ position: "absolute", top: DOT_SIZE / 2 - 0.5, left: DOT_X[0], right: DOT_X[0], height: "1.5px", background: "rgba(255,255,255,0.75)", boxShadow: "0 0 4px 1px rgba(255,255,255,0.4), 0 0 12px 2px rgba(100,90,240,0.5), 0 0 24px 4px rgba(79,70,229,0.2)", pointerEvents: "none" }} />

              {/* Animated fill from phase 0 to activePhase */}
              <motion.div
                animate={{ width: `${fillPct * (1 - 2 * 0.1667)}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{ position: "absolute", top: DOT_SIZE / 2 - 1, left: DOT_X[0], height: "2px", background: "linear-gradient(90deg, rgba(79,70,229,0.9), rgba(255,255,255,0.85))", boxShadow: "0 0 10px rgba(255,255,255,0.5)" }}
              />

              {/* Horizontal travel beam from prevPhase dot to activePhase dot */}
              <AnimatePresence>
                {activePhase !== prevPhaseRef.current && (
                  <motion.div
                    key={`h-beam-${beamKey}`}
                    initial={{ left: DOT_X[prevPhaseRef.current], opacity: 1, width: "8px" }}
                    animate={{ left: DOT_X[activePhase], opacity: [1, 1, 0], width: "8px" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ position: "absolute", top: DOT_SIZE / 2 - 4, height: "8px", borderRadius: "4px", background: "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(79,70,229,0.5) 100%)", boxShadow: "0 0 12px 3px rgba(255,255,255,0.8), 0 0 24px rgba(79,70,229,0.9)" }}
                  />
                )}
              </AnimatePresence>

              {/* Dots + vertical connector lines */}
              {phases.map((_, i) => {
                const isActive = i === activePhase;
                return (
                  <div key={i} style={{ position: "absolute", top: 0, left: DOT_X[i], transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>

                    {/* Checkpoint dot with outer ring and inner white fill */}
                    <button
                      onMouseEnter={() => selectPhase(i)}
                      aria-label={`Select phase ${i + 1}`}
                      style={{
                        width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", border: "none", padding: 0, cursor: "pointer",
                        flexShrink: 0, zIndex: 2, position: "relative",
                        background: isActive
                          ? "radial-gradient(circle, #ffffff 38%, rgba(255,255,255,0.0) 42%, rgba(79,70,229,0.6) 60%, rgba(79,70,229,0.3) 100%)"
                          : "radial-gradient(circle, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.0) 35%, rgba(79,57,246,0.7) 55%, rgba(79,57,246,0.3) 100%)",
                        boxShadow: isActive ? "0 0 16px 4px rgba(255,255,255,0.85)" : "0 0 8px rgba(79,57,246,0.7)",
                        transition: "all 0.3s ease",
                      }}
                    />

                    {/* Vertical connector line + drop beam */}
                    <div style={{ width: "1px", height: CONNECTOR_H, marginTop: "4px", position: "relative", background: isActive ? "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(79,70,229,0.2))" : "rgba(255,255,255,0.08)", transition: "background 0.4s" }}>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key={`v-${beamKey}`}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: CONNECTOR_H - 12, opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 0.45, ease: "easeIn", delay: 0.38 }}
                            exit={{ opacity: 0 }}
                            style={{ position: "absolute", left: "-3px", top: 0, width: "7px", height: "12px", borderRadius: "4px", background: "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(79,70,229,0.5) 100%)", boxShadow: "0 0 8px 2px rgba(255,255,255,0.8), 0 0 18px rgba(79,70,229,0.9)" }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Phase cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 relative z-10 mt-2">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                const isActive = i === activePhase;
                return (
                  <motion.div
                    key={i}
                    onClick={() => selectPhase(i)}
                    onMouseEnter={() => selectPhase(i)}
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    whileHover={{ opacity: isActive ? 1 : 0.75 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-[16px] md:rounded-[32px] p-3 sm:p-5 md:p-8 min-h-[220px] md:min-h-[290px] flex flex-col justify-between overflow-hidden border cursor-pointer ${
                      isActive
                        ? "bg-[linear-gradient(rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_100%),#0a0a0a] border-[#615fff]/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]"
                        : "bg-white/[0.01] border-white/5"
                    }`}
                  >
                    {isActive && <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#615fff]/50 to-transparent" />}

                    <div className="flex justify-between items-start w-full">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex items-center justify-center ${isActive ? "bg-[#4f39f6]/20" : "bg-white/5"}`}>
                        <Icon className="w-[14px] h-[14px] md:w-[20px] md:h-[20px]" strokeWidth={1.5} />
                      </div>
                      <span className={`text-[12px] md:text-[20px] font-extrabold ${isActive ? "text-white" : "text-white/5"}`}>{phase.number}</span>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-8">
                      <h3 className={`text-[14px] md:text-[24px] font-bold ${isActive ? "text-white" : "text-white/40"}`}>{phase.title}</h3>
                      <p className={`text-[9px] md:text-[12px] leading-[1.4] md:leading-[19.5px] line-clamp-4 md:line-clamp-none ${isActive ? "text-white/60" : "text-white/20"}`}>{phase.desc}</p>
                    </div>

                    <div className="flex justify-between items-center mt-6 md:mt-12 w-full">
                      <span className={`text-[7px] md:text-[9px] uppercase tracking-[1px] md:tracking-[1.8px] truncate pr-1 ${isActive ? "text-[#7c86ff]" : "text-white/20"}`}>{phase.label}</span>
                      {isActive && <Icon className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" strokeWidth={1.5} />}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-[#99a1af] text-[18px] max-w-3xl mx-auto font-light px-4 font-[family-name:var(--font-manrope)]">
            Dojology becomes part of your team — not as a vendor, but as a co-founder and technology partner.
          </p>
        </div>

      </div>
    </section>
  );
}
