"use client";

import { motion, fadeUp } from "./motion";
import Image from "next/image";
import { AboutUsTag, WhoWeAreIcon, PillBackground, Card3Image } from "../assets/icons/icon-asset";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrinciplesSection() {
  return (
    <motion.section id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="bg-black pt-[80px] pb-[80px] px-4 sm:px-8 md:px-12 lg:pt-[120px] lg:pb-[120px] lg:px-[194px] flex flex-col items-start gap-[64px] lg:gap-[124px]"
    >
      <div className="w-full flex flex-col items-center gap-8">
        {/* About Us Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
          style={{
            filter: "drop-shadow(0 0 20px var(--color-glow-purple))"
          }}
        >
          <Image 
            src={AboutUsTag}
            alt="About Us" 
            width={129} 
            height={44}
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-[1052px] text-center text-[28px] leading-[1.18] tracking-[-0.28px] text-white sm:text-[36px] sm:leading-[1.14] lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.48px] font-medium"
          style={{
            fontFamily: "Manrope, sans-serif"
          }}
        >
          The essence of who we are, what drives us, and the principles that guide everything we do.
        </motion.h2>
      </div>

      {/* Cards Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center gap-6 w-full"
      >
        {/* First Row - Two Cards */}
        <div className="flex flex-col gap-6 w-full xl:flex-row xl:justify-center max-w-[1052px]">
          {/* Card 1: Who we are ? */}
          <motion.div
            variants={item}
            className="relative flex items-center justify-center w-full xl:w-[462px] h-[300px] sm:h-[360px] lg:h-[428px] flex-shrink-0 rounded-[20px] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:rounded-t-[20px] before:pointer-events-none"
            style={{
              background: "var(--color-card-bg)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
              background: "linear-gradient(90deg, transparent 0%, var(--color-primary-purple-light) 50%, transparent 100%)"
            }} />
            <div 
              className="flex flex-col justify-center items-center relative w-full xl:w-[422px] h-full lg:h-[388px] absolute rounded-xl overflow-hidden group"
              style={{
                background: "linear-gradient(0deg, var(--color-card-overlay-start) 0%, var(--color-card-overlay-end) 100%)"
              }}
            >
              <div className="flex flex-col justify-center items-center relative max-w-[1000px] gap-1.5 flex-1">
                <Image 
                  src={WhoWeAreIcon}
                  alt="Who we are" 
                  width={382} 
                  height={212}
                  className="max-w-full h-auto"
                />
                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-2xl font-semibold text-white text-center">
                  Who we are ?
                </h3>
              </div>
              
              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 rounded-xl flex items-center justify-center p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
                style={{
                  background: "linear-gradient(135deg, var(--color-hover-gradient-start) 0%, var(--color-hover-gradient-end) 100%)"
                }}
              >
                <p className="text-white text-center text-base leading-relaxed">
                  We empower SMEs through strategic investments and tailored solutions, fostering growth and innovation in a competitive market.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: What we think ? */}
          <motion.div
            variants={item}
            className="relative flex items-center justify-center w-full xl:w-[562px] h-[300px] sm:h-[360px] lg:h-[428px] flex-shrink-0 rounded-[20px]"
            style={{
              background: "var(--color-card-bg)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
              background: "linear-gradient(90deg, transparent 0%, var(--color-primary-purple-light) 50%, transparent 100%)"
            }} />
            <div 
              className="flex flex-col justify-center items-center relative overflow-hidden w-full xl:w-[530px] h-full lg:h-[388px] gap-0.5 rounded-xl bg-cover bg-center bg-no-repeat group"
              style={{
                backgroundImage: `url(${PillBackground})`
              }}
            >
              {/* Semi-transparent overlay */}
              <div 
                className="absolute inset-0 rounded-xl opacity-70"
                style={{
                  background: "linear-gradient(0deg, var(--color-card-overlay-start) 0%, var(--color-card-overlay-end) 100%)"
                }}
              />
              
              <h3 className="text-2xl font-semibold text-white text-center relative z-10">
                What we think ?
              </h3>
              
              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 rounded-xl flex items-center justify-center p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
                style={{
                  background: "linear-gradient(135deg, var(--color-hover-gradient-start) 0%, var(--color-hover-gradient-end) 100%)"
                }}
              >
                <p className="text-white text-center text-base leading-relaxed">
                  As investors and solution providers, we believe in empowering luxury brands with cutting-edge digital signage solutions. For over 15 years, we&apos;ve delivered innovative, technical, and artistic solutions to elevate the visitor experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row - Full Width Card */}
        <motion.div
          variants={item}
          className="relative flex items-center justify-center w-full xl:w-[1052px] max-w-[1052px] h-auto lg:h-[428px] flex-shrink-0 rounded-[20px]"
          style={{
            background: "var(--color-card-bg)"
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
            background: "linear-gradient(90deg, transparent 0%, var(--color-primary-purple-light) 50%, transparent 100%)"
          }} />
          <div 
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-12 w-full xl:w-[1012px] py-8 lg:py-0 lg:h-[388px] rounded-xl overflow-hidden group relative"
            style={{
              background: "linear-gradient(0deg, var(--color-card-overlay-start) 0%, var(--color-card-overlay-end) 100%)"
            }}
          >
            {/* Left: Text */}
            <div className="flex-1">
              <h3 
                className="text-white text-[32px] font-semibold leading-[32px] tracking-[-0.8px]"
                style={{
                  fontFamily: "Manrope, sans-serif"
                }}
              >
                What we stand for ?
              </h3>
            </div>

            {/* Right: Illustration */}
            <div className="flex items-center justify-end">
              <Image 
                src={Card3Image}
                alt="What we stand for" 
                width={561.5} 
                height={333.6}
                className="max-w-full h-auto"
              />
            </div>
            
            {/* Hover Overlay */}
            <div 
              className="absolute inset-0 rounded-xl flex items-center justify-center p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
              style={{
                background: "linear-gradient(135deg, var(--color-hover-gradient-start) 0%, var(--color-hover-gradient-end) 100%)"
              }}
            >
              <div className="text-white text-left space-y-4">
                <p className="text-lg font-semibold">Excellence. Flexibility. Trust. Accountability.</p>
                <p className="text-base leading-relaxed">Those are our values.</p>
                <p className="text-base leading-relaxed">
                  Because customer satisfaction is our DNA, we always strive to offer you the best possible solution, no matter what.
                  It is equally essential for us to be reliable partners for our clients and to establish trusting relationships with our suppliers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
