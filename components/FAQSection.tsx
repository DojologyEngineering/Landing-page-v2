"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQSection(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can partner with Dojology?",
      answer:
        "We work with startups, SMEs, and enterprises that are ready to scale and innovate.",
    },
    {
      question: "Do you work with client globally?",
      answer:
        "Yes, we work with clients worldwide and have experience in various international markets.",
    },
    {
      question: "Can you develop custom software?",
      answer:
        "We specialize in custom software development tailored to your specific business needs.",
    },
    {
      question: "What is your investment model?",
      answer:
        "We offer strategic investment in mature startups with proven products and growth potential.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply book a call with us to discuss your needs and explore how we can help transform your business.",
    },
  ];

  return (
    <motion.section id="faqs"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="bg-black pt-[120px] pb-[120px] px-[159px]"
      style={{ background: "black url('/backImage.png') 0px -124.002px / 100% 129.63% no-repeat" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left Side - Header */}
          <div className=" lg:top-24">
            <div className="flex items-center gap-3 mb-1">
              <img src="/Dotted%20Highlight%20Tag.png" alt="Dotted highlight" className="w-[100px] h-[44px] object-contain" />
            </div>
            <h2
              className="text-[54px] md:text-[58px] font-normal text-white leading-tight mb-2"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
            >
              Frequently
            </h2>
            <p
              className="text-2xl md:text-3xl text-gray-400 font-light"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
            >
              Asked Questions
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors group"
                >
                  <span className="font-medium text-white group-hover:text-purple-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
