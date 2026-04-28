"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layout,
  Cloud,
  Palette,
  Target,
  FileText,
  Handshake,
  Wrench,
  Rocket,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function StudioModelSection() {
  const resources = [
    { title: "Engineering Team", desc: "DEDICATED FULL-STACK POD.", icon: Code2 },
    { title: "Product Dev", desc: "AGILE ROADMAP EXECUTION.", icon: Cpu },
    { title: "UX/UI Design", desc: "PREMIUM INTERFACE SYSTEMS.", icon: Layout },
    { title: "Cloud & DevOps", desc: "SCALABLE INFRA ARCHITECTURE.", icon: Cloud },
    { title: "Branding", desc: "IDENTITY & CREATIVE ASSETS.", icon: Palette },
    { title: "Market Entry", desc: "GO-TO-MARKET STRATEGY.", icon: Target },
    { title: "Fundraising", desc: "PITCH DECK & NETWORK.", icon: FileText },
    { title: "Partnership", desc: "LONG-TERM PARTNERSHIP.", icon: Handshake },
  ];

  const phases = [
    {
      number: "01",
      title: "Build",
      desc: "We engineer the MVP or full product with world-class quality.",
      label: "MVP DELIVERY",
      icon: Wrench,
      active: true,
    },
    {
      number: "02",
      title: "Launch",
      desc: "We help founders go to market, optimize adoption, and refine product-market fit.",
      label: "MARKET ACTIVATION",
      icon: Rocket,
      active: false,
    },
    {
      number: "03",
      title: "Scale",
      desc: "We support growth, strengthen product stability, and prepare for investment rounds.",
      label: "HYPERGROWTH",
      icon: TrendingUp,
      active: false,
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-4 md:px-10 lg:px-[194px] w-full overflow-hidden font-[family-name:var(--font-manrope)]">
      <div className="max-w-[1052px] mx-auto flex flex-col items-center gap-16 lg:gap-32">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="font-extrabold text-[64px] md:text-[128px] leading-[1.1] md:leading-[102px] tracking-[0px] md:tracking-[-0.05em] flex flex-col md:inline-grid pb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#4f46e5] to-white md:col-start-1 md:row-start-1 md:z-10">Tech for</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#4f46e5] md:col-start-1 md:row-start-1 md:ml-[1.5em] md:mt-[0.6em] z-0">Equity.</span>
          </h2>
          <p className="text-[#99a1af] text-base md:text-[18px] leading-relaxed max-w-xl font-light">
            "We don't just back founders; we build the core of their vision as technical partners."
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#4f46e5]" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase">DOJOLOGY</span>
            <div className="h-px w-12 bg-[#4f46e5]" />
          </div>
        </div>

        {/* Resources */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-[#6a7282] text-xs font-extrabold tracking-[0.4em] uppercase">What Founders Receive:</h3>
            <span className="text-[#4a5565] text-[10px] font-bold tracking-wider uppercase hidden sm:block">Available Resources: 08</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="group relative bg-white/[0.02] border border-white/10 rounded-[20px] p-8 flex flex-col justify-end h-[184px] overflow-hidden transition-all hover:bg-white/[0.04]">
                  {/* Subtle Background Glow/Beam Effect placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-8 left-8 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="text-white text-[14px] font-bold mb-1">{res.title}</h4>
                    <p className="text-[#6a7282] text-[10px] uppercase font-medium tracking-wide">{res.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-center text-[#99a1af] text-[18px] mt-8 max-w-3xl mx-auto font-light">
            In return, we take equity ownership, aligning success for both sides.
          </p>
        </div>

        {/* Studio Phases */}
        <div className="w-full flex flex-col items-center gap-16 md:gap-[120px]">
          <h2 className="text-4xl md:text-[72px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4f46e5] text-center tracking-[-0.05em] leading-tight pb-2">
            Studio Phases
          </h2>

          <div className="w-full relative">
            {/* Horizontal Timeline Line */}
            <div className="hidden md:block absolute top-[16px] left-[10%] right-[10%] h-px bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
               <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-[#4f46e5]" />
               <div className="absolute top-[-3px] left-[0%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
               <div className="absolute top-[-3px] left-[50%] w-2 h-2 rounded-full bg-[#4f39f6] shadow-[0_0_10px_#4f46e5]" />
               <div className="absolute top-[-3px] right-[0%] w-2 h-2 rounded-full bg-[#4f39f6] shadow-[0_0_10px_#4f46e5]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10 pt-12 md:pt-16">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div 
                    key={i} 
                    className={`relative rounded-[32px] p-8 min-h-[290px] flex flex-col justify-between overflow-hidden border ${
                      phase.active 
                        ? 'bg-[linear-gradient(rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_100%),#0a0a0a] border-[#615fff]/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]' 
                        : 'bg-white/[0.01] border-white/5 opacity-40 hover:opacity-100 transition-opacity'
                    }`}
                  >
                    {phase.active && (
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#615fff]/50 to-transparent" />
                    )}
                    
                    <div className="flex justify-between items-start w-full">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${phase.active ? 'bg-[#4f39f6]/20' : 'bg-white/5'}`}>
                        <Icon className="w-[20px] h-[20px]" strokeWidth={1.5} />
                      </div>
                      <span className={`text-[20px] font-extrabold ${phase.active ? 'text-white' : 'text-white/5'}`}>
                        {phase.number}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 mt-8">
                      <h3 className={`text-[24px] font-bold ${phase.active ? 'text-white' : 'text-white/40'}`}>
                        {phase.title}
                      </h3>
                      <p className={`text-[12px] leading-[19.5px] ${phase.active ? 'text-white/60' : 'text-white/20'}`}>
                        {phase.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-12 w-full">
                      <span className={`text-[9px] uppercase tracking-[1.8px] ${phase.active ? 'text-[#7c86ff]' : 'text-white/20'}`}>
                        {phase.label}
                      </span>
                      {phase.active && <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <p className="text-center text-[#99a1af] text-[18px] max-w-3xl mx-auto font-light px-4">
            Dojology becomes part of your team — not as a vendor, but as a co-founder and technology partner.
          </p>
        </div>

      </div>
    </section>
  );
}
