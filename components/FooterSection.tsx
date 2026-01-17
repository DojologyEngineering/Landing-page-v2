"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FooterSection(): React.ReactElement {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      className="px-[100] py-[30px] bg-[#2F1893] border-t border-white/10 footer-backdrop"
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Branding */}
          <div className="space-y-8">
            <div>
              <h2 className="branding">
                Growth.
                <br />
                Agility.
                <br />
                Commitment.
              </h2>
            </div>
            
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="DojoLogy" width={227} height={69} className="logo" />
            </div>
          </div>

          {/* Right Side - Contact Info (row on md+) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6 md:mt-37">
            <div className="text-left md:mr-8">
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-purple-200 text-sm">
                Lettuce Building, 3rd Floor, Street 371, Phnom Penh
              </p>
            </div>

            <div className="text-left md:mr-8">
              <h3 className="text-white font-semibold mb-3">Stay Tuned</h3>
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.897 8.945c-.143.637-.52.793-1.053.494l-2.907-2.142-1.403 1.35c-.155.155-.285.285-.585.285l.209-2.962 5.394-4.873c.234-.209-.051-.326-.364-.117l-6.667 4.198-2.873-.898c-.624-.195-.636-.624.131-.923l11.238-4.332c.52-.195.975.117.806.923z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-purple-200">
            copyright 2026 DojoDesign All Rights Reserved
          </div>
          <div className="text-purple-200">
            This page uses cookies. See cookies details{" "}
            <a href="#" className="underline hover:text-white transition-colors">
              here
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}