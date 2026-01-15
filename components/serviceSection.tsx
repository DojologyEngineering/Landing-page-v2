"use client";

import { motion, fadeUp } from "./motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechnologiesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "🔗",
      title: "Blockchain Solutions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform your business with
            <br />
            <span className="text-blue-500">Advanced Technologies</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, borderColor: "rgba(59, 130, 246, 0.5)", transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
