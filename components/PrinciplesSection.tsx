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
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="bg-black pt-[120px] pb-[120px] px-[194px] flex flex-col items-start gap-[124px]"
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
            filter: "drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))"
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
          className="text-center text-white max-w-[1052px] mx-auto text-[48px] font-medium leading-[56px] tracking-[-0.48px]"
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
        <div className="flex gap-6">
          {/* Card 1: Who we are ? */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            className="relative flex items-center justify-center w-[462px] h-[428px] flex-shrink-0 rounded-[20px] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:rounded-t-[20px] before:pointer-events-none"
            style={{
              background: "rgba(60, 60, 67, 0.30)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
              background: "linear-gradient(90deg, rgba(79, 26, 214, 0.00) 0%, #4E43FE 50%, rgba(79, 26, 214, 0.00) 100%)"
            }} />
            <div 
              className="flex flex-col justify-center items-center relative w-[422px] h-[388px] absolute rounded-xl overflow-hidden group"
              style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(79, 26, 214, 0.15) 100%)"
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
                  background: "linear-gradient(135deg, rgba(79, 26, 214, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)"
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
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
            className="relative flex items-center justify-center w-[562px] h-[428px] flex-shrink-0 rounded-[20px]"
            style={{
              background: "rgba(60, 60, 67, 0.30)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
              background: "linear-gradient(90deg, rgba(79, 26, 214, 0.00) 0%, #4E43FE 50%, rgba(79, 26, 214, 0.00) 100%)"
            }} />
            <div 
              className="flex flex-col justify-center items-center relative overflow-hidden w-[530px] h-[388px] gap-0.5 rounded-xl bg-cover bg-center bg-no-repeat group"
              style={{
                backgroundImage: `url(${PillBackground})`
              }}
            >
              {/* Semi-transparent overlay */}
              <div 
                className="absolute inset-0 rounded-xl opacity-70"
                style={{
                  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(79, 26, 214, 0.15) 100%)"
                }}
              />
              
              <h3 className="text-2xl font-semibold text-white text-center relative z-10">
                What we think ?
              </h3>
              
              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 rounded-xl flex items-center justify-center p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
                style={{
                  background: "linear-gradient(135deg, rgba(79, 26, 214, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)"
                }}
              >
                <p className="text-white text-center text-base leading-relaxed">
                  As investors and solution providers, we believe in empowering luxury brands with cutting-edge digital signage solutions. For over 15 years, we've delivered innovative, technical, and artistic solutions to elevate the visitor experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row - Full Width Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.01, y: -5, transition: { duration: 0.2 } }}
          className="relative flex items-center justify-center w-[1052px] h-[428px] flex-shrink-0 rounded-[20px]"
          style={{
            background: "rgba(60, 60, 67, 0.30)"
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] pointer-events-none" style={{
            background: "linear-gradient(90deg, rgba(79, 26, 214, 0.00) 0%, #4E43FE 50%, rgba(79, 26, 214, 0.00) 100%)"
          }} />
          <div 
            className="flex flex-row items-center justify-between px-12 w-[1012px] h-[388px] rounded-xl overflow-hidden group relative"
            style={{
              background: "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(79, 26, 214, 0.15) 100%)"
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
                background: "linear-gradient(135deg, rgba(79, 26, 214, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)"
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
