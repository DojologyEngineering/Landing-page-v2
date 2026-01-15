"use client";

import { motion, fadeUp } from "./motion";

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
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6">
          We Engineer <br />
          You Scale 🚀
        </motion.h1>
        <motion.p variants={item} className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
        </motion.p>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Get Started
        </motion.button>
      </div>

      {/* Stats Section */}
      <motion.div
        variants={container}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
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
      </motion.div>
    </motion.section>
  );
}
