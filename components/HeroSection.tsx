"use client";

import Image from "next/image";
import { motion } from "./motion";
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
      className="relative min-h-[600px] h-auto lg:h-[1024px] overflow-hidden bg-[#010103] text-white"
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
          src="/assets/ligtningv2.png"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-[0.92] mix-blend-screen"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[13] h-[372px] bg-[radial-gradient(circle_at_top,rgba(77,84,255,0.22)_0%,rgba(77,84,255,0.08)_30%,rgba(1,1,3,0)_76%)]" />

      <div className="pointer-events-none absolute inset-0 z-[19] bg-[linear-gradient(180deg,rgba(54,63,179,0.16)_0%,rgba(1,1,3,0)_22%)]" />

      <div className="pointer-events-none absolute left-1/2 top-[-205px] z-[20] h-[1440px] w-[1440px] -translate-x-1/2 scale-[2.1] overflow-hidden">
        <Image
          src="/assets/Tunnelv2.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[calc(50%-14px)] z-[25] -translate-x-1/2 overflow-hidden top-[400px] h-[1200px] w-[1200px] sm:top-[500px] sm:h-[1600px] sm:w-[1600px] lg:top-[646px] lg:h-[2279px] lg:w-[2228px]"
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
        <div className="px-4 pt-[180px] pb-[80px] sm:px-8 sm:pt-[220px] lg:absolute lg:left-1/2 lg:top-[315px] lg:flex lg:w-[867px] lg:-translate-x-1/2 lg:flex-col lg:items-center lg:text-center lg:px-0 lg:pt-0 lg:pb-0 flex flex-col items-center text-center">
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-[10px]"
          >
            <h1 className="font-[family-name:var(--font-russo-one)] text-[40px] leading-[1.16] tracking-[-2px] text-white sm:text-[56px] sm:tracking-[-3px] lg:text-[86px] lg:tracking-[-5.16px]">
              <span className="block whitespace-nowrap">
                We build the tech.
              </span>
              <span className="mt-[6px] flex flex-wrap items-center justify-center gap-[6px] text-[36px] tracking-[-2px] sm:mt-[10px] sm:gap-[10px] sm:text-[50px] sm:tracking-[-3px] lg:mt-[10px] lg:gap-[10px] lg:whitespace-nowrap lg:text-[76px] lg:tracking-[-4.56px]">
                <span className="leading-[1.16]">You scale the </span>
                <span 
                  className="bg-clip-text text-transparent leading-[1.16]" 
                  style={{ backgroundImage: "linear-gradient(90.7deg, #FFFFFF -100%, #4F46E5 100%)" }}
                >
                  business.
                </span>
                <span className="relative inline-flex h-[36px] w-[36px] items-center justify-center rounded-full overflow-hidden flex-shrink-0 sm:h-[44px] sm:w-[44px] lg:h-[52px] lg:w-[52px]"
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
            className="mt-6 w-full max-w-[600px] font-[family-name:var(--font-manrope)] text-[16px] font-medium leading-[1.4] tracking-[0.48px] text-white/80 sm:text-[18px] lg:mt-8 lg:w-[810px] lg:max-w-none lg:text-[24px] lg:leading-[1.16]"
          >
            Dojology Tech &amp; Ventures partners with startups and SMEs to
            deliver real technology — in exchange for equity, revenue share, or
            cashflow arrangements that align our success with yours.
          </motion.p>

          <motion.div
            variants={item}
            className="pointer-events-none mt-4 w-full flex flex-col items-center lg:m-0 lg:absolute lg:left-[732.5px] lg:top-[292px] lg:block lg:w-[126px] lg:p-0"
          >
            <div className="text-left">
              <p className="whitespace-nowrap font-[family-name:var(--font-manrope)] text-[16px] font-semibold tracking-[-0.5px] text-white/60">
                -PEN Lymeng
              </p>
              <p className="whitespace-nowrap pl-[11px] font-[family-name:var(--font-manrope)] text-[10px] text-white/45">
                CEO &amp; Founder
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center lg:mt-[50px]"
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

        <div className="pointer-events-none absolute left-1/2 top-[500px] z-[55] w-[90vw] max-w-[430px] -translate-x-1/2 sm:top-[620px] lg:top-[840px] lg:w-[430px]">
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
                { src: "/logo/yeac-figma.png", alt: "YEAC" },
                { src: "/logo/partner-emblem-figma.png", alt: "Partner emblem" },
                { src: "/logo/yeac-figma.png", alt: "YEAC" },
                { src: "/logo/partner-emblem-figma.png", alt: "Partner emblem" },
              ]}
              speed={52}
              gap={56}
              logoHeight={52}
              fadeOut={false}
              className="mx-auto opacity-40"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
