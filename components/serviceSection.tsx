"use client";

import Image from "next/image";
import { motion, fadeUp } from "./motion";
import {
  ServicesBadge,
  ServiceIconA,
  ServiceIconB,
  ServiceIconC,
  ServiceIconD,
  AbstractDot,
  PurpleSpotlight,
} from "../assets/icons/icon-asset";

const services = [
  {
    icon: ServiceIconA,
    title: "Strategic Investment in Startups & SMEs",
    description:
      "We partner with startups and SMEs that have proven digital products, providing equity funding, payroll support, and strategic guidance to accelerate expansion.",
  },
  {
    icon: ServiceIconB,
    title: "Technical Talent Development & Outsourcing",
    description:
      "We source, train, and deploy highly skilled technical professionals to meet the growing demand for digital expertise across regional and global markets.",
  },
  {
    icon: ServiceIconC,
    title: "SaaS Product Development",
    description:
      "Design, build, and scale subscription-based software solutions that are innovative, market-ready, and built for growth.",
  },
  {
    icon: ServiceIconD,
    title: "End-to-End Digital Transformation Services",
    description:
      "From strategy to execution, we deliver full-cycle transformation solutions to ensure our clients stay ahead in today’s digital-first world.",
  },
];

export default function ServicesSection() {
  return (
    <motion.section id="services"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative flex w-full justify-center bg-black py-10 md:py-20 lg:py-24"
    >
      {/* Container */}
      <div
        className="
          relative
          w-full max-w-[1052px]
          flex flex-col items-center
          px-4 py-10 sm:px-8 sm:py-[72px] lg:px-[43px] lg:py-24
          gap-12 md:gap-[60px]
          rounded-[20px]
          border border-white/5
          overflow-hidden
        "
      >
        {/* Abstract dot background - top of container */}
        <div className="pointer-events-none absolute top-0 left-0 w-[1052px] h-[400px]">
          <Image
            src={AbstractDot}
            alt=""
            fill
            sizes="1052px"
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Purple spotlight - inside container */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[400px]">
          <Image
            src={PurpleSpotlight}
            alt=""
            fill
            sizes="(max-width: 1052px) 100vw, 1052px"
            className="object-cover"
            priority
          />
        </div>

        {/* Badge */}
        <div className="relative z-10">
          <ServicesBadge />
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-center text-white text-[42px] leading-[50px]">
          Transform your business with
          <br />
          <span className="font-bold">Advanced Technologies</span>
        </h2>

        {/* Book a call button */}
        <motion.button 
          onClick={() => window.dispatchEvent(new Event("open-collaborate-modal"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-6 py-3 font-semibold rounded-lg transition-colors cursor-pointer hover:opacity-90"
          style={{
            borderRadius: '8px',
            border: '3px solid var(--color-border-white-50)',
            background: 'linear-gradient(180deg, var(--color-primary-green-start) 0%, var(--color-primary-green-end) 100%)',
            color: 'var(--color-text-dark)'
          }}
        >
          Book a 15-min call
        </motion.button>

        {/* Cards grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.25 }}
              className="
                relative
                w-full h-[301px]
                rounded-[41.33px]
                overflow-hidden
                border border-white/10
                bg-black
              "
            >
              {/* Card dot background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/card_dot.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Top purple light */}
              <div
                className="
                  pointer-events-none
                  absolute top-0 left-10 right-10 z-[2]
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-[var(--color-primary-purple)]
                  to-transparent
                "
              />
              <div
                className="
                  pointer-events-none
                  absolute top-0 left-16 right-16 z-[2]
                  h-[10px]
                  bg-[var(--color-primary-purple)]/25
                  blur-xl
                "
              />

              {/* Content */}
              <div className="relative z-10 h-full pt-[29.51px] px-[24px] pb-[24px] flex flex-col items-center justify-start gap-[22px]">
                {/* Icon */}
                <div className="w-full flex justify-center">
                  {index === 0 && <ServiceIconA />}
                  {index === 1 && <ServiceIconB />}
                  {index === 2 && <ServiceIconC />}
                  {index === 3 && <ServiceIconD />}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-manrope)] text-[18px] font-medium leading-[26px] tracking-[-0.5px] text-white text-center m-0">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent shrink-0" />

                {/* Description */}
                <p className="font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[26px] tracking-[-0.2px] text-[rgba(255,255,255,0.5)] text-center m-0">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section - 3 Secondary Cards */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-[rgba(255,255,255,0.02)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.02)] md:my-8 lg:my-6" />
        <div className="relative z-10 grid w-full grid-cols-3 items-start gap-2 sm:gap-4 md:gap-8 lg:flex lg:flex-wrap lg:justify-between">
          {[
            { title: "Equity Shares", icon: "/assets/equity-share.svg", iconOffsetY: 2 },
            { title: "Revenue Share", icon: "/assets/revenue_share.svg", iconOffsetY: 0 },
            { title: "Cashflow", icon: "/assets/cashflow.svg", iconOffsetY: -1 },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="mx-auto flex w-full max-w-none min-w-0 shrink-0 flex-col items-center gap-3 lg:mx-0 lg:max-w-[203px]"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-visible md:h-11 md:w-11">
                <img
                  src={card.icon}
                  alt={card.title}
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  style={{ transform: `translateY(${card.iconOffsetY}px)` }}
                />
              </div>
              <div className="relative flex w-full items-center justify-center rounded-[30px] border-2 border-white/15 bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] px-1 py-2 sm:px-2 sm:py-2.5 md:px-4 md:py-3">
                <span className="whitespace-nowrap font-['Manrope'] text-center text-[9px] font-semibold leading-none text-white sm:text-[12px] md:text-base">
                  {card.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
