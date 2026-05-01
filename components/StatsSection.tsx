import React from "react";
import Image from "next/image";

export default function StatsSection() {
  const logos = [
    { src: "/logo/umami-mark-figma.svg", alt: "Umami", width: 80, height: 80 },
    { src: "/logo/cashgrow68-figma.png", alt: "CashGrow68", width: 80, height: 80 },
    { src: "/logo/prohose-figma.png", alt: "Prohose Official", width: 80, height: 80 },
    { src: "/logo/csds-white-logo.png", alt: "CSDS", width: 80, height: 80 },
    { src: "/logo/nsg-cable-figma.png", alt: "NSG Cable", width: 80, height: 80 },
  ];

  return (
    <section className="relative -mt-2 md:-mt-8 flex items-center justify-center pointer-events-auto overflow-visible z-[80]">
      <div className="w-full max-w-[1240px] px-4">
        <div className="relative z-[81] overflow-hidden rounded-[20px] md:rounded-[32px] bg-[rgba(199,199,199,0.10)] px-4 py-6 md:px-16 md:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-[8px]">
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-10">
            {logos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="relative flex h-10 w-auto min-w-[50px] sm:h-12 sm:min-w-[60px] md:h-20 md:min-w-[120px] shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
