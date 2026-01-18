"use client";
import { motion } from "framer-motion";
import Icon from "@/assets/icons/icon-asset";

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
        <div className="grid md:grid-cols-4 gap-12 items-start">
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

          {/* Spacer to shift columns right on md+ */}
          <div className="hidden md:block" />

          {/* Middle - Quick Links */}
            <div className="space-y-6 md:pl-6 lg:pl-12 mt-2 md:mt-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-white/70 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#faqs" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Right Side - Get in Touch */}
            <div className="space-y-6 md:pl-6 lg:pl-12 mt-2 md:mt-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <div className="flex items-start gap-3 flex-nowrap">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-white/70 whitespace-nowrap">(855) 98-992-895 / 89-992-895</p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/70">info@dojology.com</p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white/70">Phnom Penh</p>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white/70">Mon - Sat, 8:00AM - 5:00PM</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-4 md:mt-6">
                <a href="https://www.facebook.com/dojologytechandventures?mibextid=wwXIfr&rdid=Lajhg3JWusgyQQ5d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FFBvVBNV3%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-95 transition-transform duration-200 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20">
                  <Icon name="facebook" />
                </a>

                <a href="https://t.me/dojology" target="_blank" rel="noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-full  flex items-center justify-center hover:opacity-95 transition-transform duration-200 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20">
                  <Icon name="telegram" />
                </a>

                <a href="https://www.linkedin.com/company/dojology-tech-and-ventures/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-95 transition-transform duration-200 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20">
                  <Icon name="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-white/70">
            Dojology © 2025 All Rights Reserved.
          </div>
          <div className="text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}