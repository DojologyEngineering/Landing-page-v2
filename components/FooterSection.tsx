"use client";

import { motion, fadeUp } from "./motion";

export default function FooterSection() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-purple-950/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Growth.
            <br />
            Agility.
            <br />
            <span className="text-purple-400">Commitment.</span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">WHAT CLIENTS SAY</p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="text-2xl font-bold text-gray-600">LOGO</div>
          <div className="text-2xl font-bold text-gray-600">LOGO</div>
          <div className="text-2xl font-bold text-gray-600">LOGO</div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 All rights reserved</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
