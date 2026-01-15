"use client";

import Image from "next/image";
import { motion, fadeUp } from "./motion";
import { BackgroundSVG, circleIconStyle, AngularBackground } from "../assets/icons/icon-asset";
import Icon from "../assets/icons/icon-asset";

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
      initial="hidden"
      animate="show"
      variants={container}
      className="relative h-screen flex flex-col items-center justify-center px-4 bg-[#010103] overflow-hidden"
    >
      {/* Background SVG (brought to front) */}
      <div className="absolute inset-0 z-[70] pointer-events-none overflow-hidden">
        <BackgroundSVG className="w-full h-full" />
      </div>
      {/* Lighting background image */}
      <div className="absolute inset-x-0 top-[-5rem] h-[calc(50vh+5rem)] z-50">
        <Image 
          src="/lighting.png"
          alt="" 
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      {/* Bottom circle (centered at bottom) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] pointer-events-none z-[70] flex justify-center">
        {circleIconStyle({ className: "w-full h-[220px] md:h-[320px]" })}
      </div>
      {/* Dark overlay moved behind background */}
      <div className="absolute inset-0 -z-40" />
      
      <div className="text-center max-w-4xl mx-auto relative z-[80]">
        <motion.div variants={item} className="mb-6 flex justify-center">
          <Image 
            src="/main-test.png" 
            alt="We Engineer You Scale" 
            width={600} 
            height={200}
            priority
          />
        </motion.div>
        <motion.div variants={item} className="mb-4 flex justify-center items-center gap-2">
          <Image 
            src="/sub-title.png" 
            alt="Subtitle" 
            width={364} 
            height={88}
            priority
          />
          <div className="w-20 h-20 flex items-center justify-center">
            <Icon name="earth" />
          </div>
        </motion.div>
        <motion.p variants={item} className="text-[#FFFFF] text-[24px] mb-8 max-w-5xl mx-auto">
          A hybrid Venture Studio and VC firm empowering startups and SMEs to scale faster
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#34CB4D] hover:bg-green-600 text-[#0A0A0A] px-6 py-4 rounded-[8px] transition-colors font-normal font-family: Manrope"
          >
            Start Your Journey Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-1 border-[#34CB4D] hover:bg-white hover:text-black text-white px-6 py-4 rounded-lg transition-colors font-medium"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Stats Section */}
      {/* <motion.div
        variants={container}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 relative z-10"
      >
        <motion.div variants={item} className="text-center">
          <div className="text-4xl font-bold mb-2">1</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </motion.div>
        <motion.div variants={item} className="text-center">
          <div className="text-4xl font-bold mb-2">6</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </motion.div>
        <motion.div variants={item} className="text-center">
          <div className="text-4xl font-bold mb-2">$.5M</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </motion.div>
        <motion.div variants={item} className="text-center">
          <div className="text-4xl font-bold mb-2">600k</div>
          <div className="text-gray-400 text-sm">Metric</div>
        </motion.div>
      </motion.div> */}
    </motion.section>
  );
}
