import React from "react";
import Image from "next/image";

export default function StatsSection() {
  const logos = [
    { src: "/logo/umami-mark-figma.svg", alt: "Umami", width: 80, height: 80 },
    { src: "/logo/cashgrow68-figma.png", alt: "CashGrow68", width: 80, height: 80 },
    { src: "/logo/prohose-figma.png", alt: "Prohose Official", width: 120, height: 80 },
    { src: "/logo/nsg-cable-figma.png", alt: "NSG Cable", width: 80, height: 80 },
    { src: "/logo/umami-mark-figma.svg", alt: "Umami", width: 80, height: 80 },
  ];

  return (
    <section className="relative -mt-2 md:-mt-8 flex items-center justify-center pointer-events-auto overflow-visible z-[80]">
      <div className="w-full max-w-[1240px] px-4">
        <div className="relative z-[81] overflow-hidden rounded-[32px] bg-[rgba(199,199,199,0.10)] px-10 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-[8px] md:px-16">
          <div className="flex items-center justify-between gap-10">
            {logos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="relative flex h-20 w-[120px] shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
