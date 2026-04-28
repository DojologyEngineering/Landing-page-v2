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
    title: "Strategic Investment in Mature Startups",
    description:
      "We partner with established startups that have proven digital products, providing equity funding, payroll support, and strategic guidance to accelerate expansion.",
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
      className="relative w-full bg-black flex justify-center py-[120px]"
    >
      {/* Container */}
      <div
        className="
          relative
          w-[1052px]
          flex flex-col items-center
          px-[43px] py-[120px]
          gap-[60px]
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
          onClick={() => {}}
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
        <div className="relative z-10 grid grid-cols-2 gap-[24px] w-full">
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
              <div className="relative z-10 h-full pt-[29.51px] pl-[30px] pr-6 pb-6 flex flex-col gap-[22px]">
                {/* Icon */}
                {index === 0 && <ServiceIconA />}
                {index === 1 && <ServiceIconB />}
                {index === 2 && <ServiceIconC />}
                {index === 3 && <ServiceIconD />}

                {/* Title */}
                <h3 className="text-white text-lg font-semibold leading-snug">
                  {service.title}
                </h3>

                {/* Divider */}
                <div
                  className="
                    w-[230px] h-px
                    bg-gradient-to-r
                    from-[var(--color-divider-start)]
                    via-[var(--color-divider-mid)]
                    to-[var(--color-divider-end)]
                  "
                />

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section - 3 Secondary Cards */}
        <div className="w-full h-px bg-gradient-to-r from-[rgba(255,255,255,0.02)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.02)] my-8" />
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-8 w-full">
          {[
            { title: "Equity Shares", icon: "/assets/equity-share.svg" },
            { title: "Revenue Share", icon: "/assets/revenue_share.svg" },
            { title: "Cashflow", icon: "/assets/cashflow.svg" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex flex-col items-center gap-3 w-full max-w-[203px] shrink-0 mx-auto sm:mx-0"
            >
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <div className="relative flex w-full items-center justify-center rounded-[30px] bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] py-3 px-4 border-2 border-white/15">
                <span className="font-['Manrope'] font-semibold text-white text-center text-base leading-none">
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
