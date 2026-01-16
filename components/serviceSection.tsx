"use client";

import Image from "next/image";
import { motion, fadeUp } from "./motion";
import {
  ServicesBadge,
  ServiceIconA,
  ServiceIconB,
  ServiceIconC,
  ServiceIconD,
  CardDot,
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
    <motion.section
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
        <h2 className="relative z-10 text-center text-white text-[42px] leading-[50px] font-semibold">
          Transform your business with
          <br />
          <span className="font-bold">Advanced Technologies</span>
        </h2>

        {/* Book a call button */}
        <button 
          className="relative z-10 px-6 py-3 font-semibold rounded-lg transition-colors"
          style={{
            borderRadius: '8px',
            border: '3px solid var(--color-border-white-50)',
            background: 'linear-gradient(180deg, var(--color-primary-green-start) 0%, var(--color-primary-green-end) 100%)',
            color: 'var(--color-text-dark)'
          }}
        >
          Book a 15-min call
        </button>

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
                  src="/card_dot.png"
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

        {/* Bottom section - 4 items */}
        <div className="w-full h-px bg-gradient-to-r from-[rgba(255,255,255,0.02)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.02)]" />
        <div className="relative z-10 grid grid-cols-4 gap-8 w-full mt-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold text-sm">All-in-One Partner</h4>
            <p className="text-white/60 text-xs">Funding, talent, and technology under one roof.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold text-sm">Proven Expertise</h4>
            <p className="text-white/60 text-xs">A track record of scaling businesses across industries.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold text-sm">Global Reach</h4>
            <p className="text-white/60 text-xs">Regional insights with international connections.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold text-sm">Results That Matter</h4>
            <p className="text-white/60 text-xs">Focused on measurable, long-term impact.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
