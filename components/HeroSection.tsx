"use client";

import Image from "next/image";
import { motion } from "./motion";
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

      {/* Angular perspective grid using pure CSS, fully responsive, no black bars */}
      <div className="pointer-events-none absolute inset-x-0 top-[-100px] z-[12] h-[495px] overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0" style={{ background: "#08081E" }} />

        {/* Left half conic gradient centered at 25% from left */}
        <div
          className="absolute inset-0"
          style={{
            background: "conic-gradient(from 90deg at 25% 0%, rgba(248,248,248,1) 0deg, rgba(1,1,3,1) 0deg, rgba(170,170,170,1) 108deg, rgba(248,248,248,1) 360deg)",
            clipPath: "inset(0 50% 0 0)",
            mixBlendMode: "color-dodge",
            opacity: 0.92,
          }}
        />

        {/* Right half exact scaleX(-1) mirror of left half */}
        <div
          className="absolute inset-0"
          style={{
            background: "conic-gradient(from 90deg at 25% 0%, rgba(248,248,248,1) 0deg, rgba(1,1,3,1) 0deg, rgba(170,170,170,1) 108deg, rgba(248,248,248,1) 360deg)",
            clipPath: "inset(0 50% 0 0)",
            transform: "scaleX(-1)",
            transformOrigin: "center center",
            mixBlendMode: "color-dodge",
            opacity: 0.92,
          }}
        />

        {/* Vertical fade overlay fades top and bottom edges to #010103 */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #010103 0%, rgba(1,1,3,0) 50%, #010103 100%)",
          }}
        />

        {/* Lighting overlay */}
        <Image
          src="/assets/lighting.png"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-[0.92] mix-blend-screen"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[13] h-[372px] bg-[radial-gradient(circle_at_top,rgba(77,84,255,0.22)_0%,rgba(77,84,255,0.08)_30%,rgba(1,1,3,0)_76%)]" />

      <div className="pointer-events-none absolute inset-0 z-[19] bg-[linear-gradient(180deg,rgba(54,63,179,0.16)_0%,rgba(1,1,3,0)_22%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[-205px] z-[20] h-[1440px] w-[1440px] -translate-x-1/2 overflow-hidden">
        <Image
          src="/assets/Tunnel.svg"
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
          src="/assets/earth-image.png"
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
                <span className="leading-[1.16]">You scale the </span>
                <span 
                  className="bg-clip-text text-transparent leading-[1.16]" 
                  style={{ backgroundImage: "linear-gradient(90.7deg, #FFFFFF -100%, #4F46E5 100%)" }}
                >
                  business.
                </span>
                <span className="relative inline-flex h-[52px] w-[52px] items-center justify-center rounded-full overflow-hidden flex-shrink-0"
                  style={{ boxShadow: "0 0 8.4px 5px #0022CC, 0 0 114px 0 rgba(0,43,255,0.8)" }}
                >
                  {/* Blue sphere gradient background */}
                  <span className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 38% 38%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 55%), linear-gradient(225deg, #CCEEFF 0%, #001EB3 77.37%)" }} />

                  {/* Scrolling world map with 2 copies for seamless loop */}
                  <motion.span
                    className="absolute top-[5%] bottom-[1.5%] left-0 flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                  >
                    <img src="/assets/world-map.svg" alt="" className="h-full w-auto max-w-none opacity-45 brightness-150 saturate-0" />
                    <img src="/assets/world-map.svg" alt="" className="h-full w-auto max-w-none opacity-45 brightness-150 saturate-0" />
                  </motion.span>

                  {/* Inner glow for sphere depth */}
                  <span className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "inset 0 0 18px -3px #0022CC, inset -4px -4px 12px rgba(0,0,0,0.4)" }} />
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
                { src: "/logo/Feng%20shui%20white%20logo.png", alt: "Fengshui" },
                { src: "/logo/Prohose_white_logo.png", alt: "Prohose" },
                { src: "/logo/umami%20white%20logo.png", alt: "Umami" },
                { src: "/logo/Feng%20shui%20white%20logo.png", alt: "Fengshui" },
                { src: "/logo/Prohose_white_logo.png", alt: "Prohose" },
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
