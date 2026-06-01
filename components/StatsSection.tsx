import React from "react";
import Image from "next/image";

export default function StatsSection() {
  const logos = [
    {
      src: "/logo/umami white logo.png",
      alt: "Umami",
      width: 1563,
      height: 1563,
      className: "scale-[0.9] md:scale-[1.05]",
    },
    {
      src: "/logo/cashgrow68-figma.png",
      alt: "CashGrow68",
      width: 1024,
      height: 1024,
      className: "scale-[1.18] md:scale-[1.35]",
    },
    {
      src: "/logo/prohose-figma.png",
      alt: "Prohose Official",
      width: 1536,
      height: 1024,
      className: "scale-[1.12] md:scale-[1.25]",
    },
    {
      src: "/logo/csds-white-logo.png",
      alt: "CSDS",
      width: 1500,
      height: 1500,
      className: "translate-y-[3px] scale-[1.35] md:translate-y-[6px] md:scale-[1.65]",
    },
    { src: "/logo/nsg-cable-figma.png", alt: "RNSG CRM", width: 1000, height: 1024 },
  ];

  return (
    <section className="relative mt-6 md:-mt-8 flex items-center justify-center pointer-events-auto overflow-visible z-[80]">
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
                  className={`max-h-full w-auto max-w-full object-contain ${logo.className ?? ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
