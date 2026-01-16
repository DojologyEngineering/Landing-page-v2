import React from "react";

export default function StatsSection() {
  const items = [
    { value: "3", label: "Clients & Partners" },
    { value: "4", label: "Portfolio Companies" },
    { value: "$1M", label: "Venture Ecosystem Value" },
    { value: "800k", label: "Users Across Our Ventures" },
  ];

  return (
    <section className="relative -mt-2 md:-mt-8 flex items-center justify-center pointer-events-auto overflow-visible z-[9999]">
      <div className="max-w-6xl w-full px-4">
        <div className="relative z-[10000] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Glossy top strip */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/8 to-transparent pointer-events-none" />
          
          {/* Dark gradient background */}
          <div className="relative bg-gradient-to-b from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl py-8 md:py-12 px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {items.map((it) => (
                <div key={it.label} className="flex flex-col items-center">
                  <div className="text-white text-[48px] font-bold leading-[56px]">
                    {it.value}
                  </div>
                  <div className="text-[#34CB4D] text-sm md:text-base mt-3">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
