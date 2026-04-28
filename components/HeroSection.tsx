"use client";

import Image from "next/image";
import { motion } from "./motion";
import { AngularBackground } from "../assets/icons/icon-asset";
import Icon from "../assets/icons/icon-asset";
import LogoLoop from "@/components/LogoLoop";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      variants={container}
      className="relative h-[1024px] overflow-hidden bg-[#010103] text-white"
    >
      <div className="absolute inset-0 bg-[#010103]" />

      <div className="pointer-events-none absolute inset-x-0 top-[-100px] z-[12] h-[495px] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[495px] w-[1440px] -translate-x-1/2">
          <AngularBackground className="h-full w-full opacity-[0.92]" />
          <Image
            src="/lighting.png"
            alt=""
            fill
            priority
            className="object-contain object-top opacity-[0.92] mix-blend-screen"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[13] h-[372px] bg-[radial-gradient(circle_at_top,rgba(77,84,255,0.22)_0%,rgba(77,84,255,0.08)_30%,rgba(1,1,3,0)_76%)]" />

      <div className="pointer-events-none absolute inset-0 z-[19] bg-[linear-gradient(180deg,rgba(54,63,179,0.16)_0%,rgba(1,1,3,0)_22%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[-205px] z-[20] h-[1440px] w-[1440px] -translate-x-1/2 overflow-hidden">
        <Image
          src="/Tunnel.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[calc(50%-14px)] top-[646px] z-[25] h-[2279px] w-[2228px] -translate-x-1/2 overflow-hidden"
        style={{
          clipPath: "ellipse(50% 50% at 50% 50%)",
        }}
      >
        <Image
          src="/earth-image.png"
          alt=""
          fill
          priority
          className="object-fill"
        />
      </div>

      <div className="relative z-[40] mx-auto h-full w-full max-w-[1440px]">
        <div className="absolute left-1/2 top-[315px] flex w-[867px] -translate-x-1/2 flex-col items-center text-center">
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-[10px]"
          >
            <h1 className="font-[family-name:var(--font-russo-one)] text-[86px] leading-[1.16] tracking-[-5.16px] text-white">
              <span className="block whitespace-nowrap">
                We build the tech.
              </span>
              <span className="mt-[10px] flex items-center justify-center gap-[10px] whitespace-nowrap text-[76px] tracking-[-4.56px]">
                <span>You scale the </span>
                <span className="bg-[linear-gradient(90.7deg,#FFFFFF_10.14%,#4F46E5_100.69%)] bg-clip-text text-transparent">
                  business.
                </span>
                <span className="relative inline-flex h-[52px] w-[52px] items-center justify-center rounded-full shadow-[0_0_8.4px_5px_#0022CC,0_0_114px_0_rgba(0,43,255,0.8)]">
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_58%),linear-gradient(225deg,#CCEEFF_0%,#001EB3_77.37%)]" />
                  <span className="absolute inset-0 rounded-full shadow-[inset_0_0_38px_-5px_#0022CC]" />
                  <span className="relative scale-[0.66]">
                    <Icon name="earth" />
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 w-[810px] font-[family-name:var(--font-manrope)] text-[24px] font-medium leading-[1.16] tracking-[0.48px] text-white/80"
          >
            Dojology Tech &amp; Ventures partners with startups and SMEs to
            deliver real technology — in exchange for equity, revenue share, or
            cashflow arrangements that align our success with yours.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-[219px] rounded-[8px] bg-[#34CB4D] px-6 py-3 font-[family-name:var(--font-manrope)] text-base font-normal text-[#0A0A0A] transition-colors hover:bg-[#2fb846]"
            >
              Start Your Journey Now
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="pointer-events-none absolute left-[1019px] top-[607px] w-[126px] text-left"
        >
          <p className="whitespace-nowrap font-[family-name:var(--font-manrope)] text-[16px] font-semibold tracking-[-0.5px] text-white/60">
            -PEN Lymeng
          </p>
          <p className="whitespace-nowrap pl-[11px] font-[family-name:var(--font-manrope)] text-[10px] text-white/45">
            CEO &amp; Founder
          </p>
        </motion.div>

        <div className="pointer-events-none absolute left-1/2 top-[840px] z-[55] w-[430px] -translate-x-1/2">
          <div
            className="relative h-[80px] overflow-hidden pt-5"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <LogoLoop
              logos={[
                { src: "/Feng%20shui%20white%20logo.png", alt: "Fengshui" },
                { src: "/Prohose%20white%20logo.png", alt: "Prohose" },
                { src: "/umami%20white%20logo.png", alt: "Umami" },
                { src: "/Feng%20shui%20white%20logo.png", alt: "Fengshui" },
                { src: "/Prohose%20white%20logo.png", alt: "Prohose" },
              ]}
              speed={52}
              gap={40}
              logoHeight={44}
              fadeOut={false}
              className="mx-auto opacity-40"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
