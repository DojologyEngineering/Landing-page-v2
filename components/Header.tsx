"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/assets/icons/icon-asset";
import { motion, AnimatePresence } from "framer-motion";

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faqs" },
  ];

  return (
    <>
      <header className="site-header fixed top-0 left-0 right-0 px-[159px] text-white z-[100] border-b border-white/20" style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
        <div className="w-full relative flex items-center h-20">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-3 z-10">
            <Image src="/logo.png" alt="DojoLogy" width={135} height={42} className="logo" />
          </a>

          {/* Center: Hamburger (2 bars) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger flex flex-col justify-center items-center gap-2 bg-transparent border-0 p-2 cursor-pointer" 
              aria-label="menu"
              aria-expanded={isMenuOpen}
            >
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-8 h-0.5 bg-white rounded"
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-8 h-0.5 bg-white rounded"
              />
            </button>
          </div>

        {/* Right: Social icons */}
        <div className="ml-auto flex items-center gap-[35px] z-10">
          <a href="https://www.facebook.com/dojologytechandventures?mibextid=wwXIfr&rdid=Lajhg3JWusgyQQ5d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FFBvVBNV3%2F%3Fmibextid%3DwwXIfr#" aria-label="facebook" >
            <Icon name="facebook" />
          </a>
          <a href="https://t.me/dojology" aria-label="telegram">
            <Icon name="telegram" />
          </a>
          <a href="https://www.linkedin.com/company/dojology-tech-and-ventures/posts/?feedView=all" aria-label="linkedin">
            <Icon name="linkedin" />
          </a>
        </div>
      </div>
      <div className="header-pattern" aria-hidden />
    </header>

    {/* Full Screen Menu Overlay */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[90] flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/70 hover:text-white text-2xl md:text-3xl font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
