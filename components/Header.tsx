"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type MenuItem = {
  label: string;
  href?: string;
};

const menuItems: MenuItem[] = [
  { label: "About us", href: "#about" },
  { label: "Our Team" },
  { label: "Service", href: "#services" },
  { label: "Studio Model" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blogs" },
];

function NavLabel({
  item,
  className,
  onActivate,
}: {
  item: MenuItem;
  className?: string;
  onActivate?: () => void;
}): React.ReactElement {
  const sharedClassName = `whitespace-nowrap text-white/95 transition-colors duration-200 hover:text-white ${className ?? ""}`;

  if (!item.href) {
    return (
      <span
        className={sharedClassName}
        title={`${item.label} section is not available on this page yet`}
      >
        {item.label}
      </span>
    );
  }

  return (
    <a className={sharedClassName} href={item.href} onClick={onActivate}>
      {item.label}
    </a>
  );
}

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-4 z-[120] px-4 md:top-8 md:px-8">
        <div className="mx-auto max-w-[1274px]">
          <div className="hidden h-[74px] items-center justify-between rounded-[72px] bg-[rgba(255,255,255,0.05)] px-12 py-3 text-[20px] font-light tracking-[0.4px] text-white lg:flex">
            <NavLabel
              item={menuItems[0]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
            <NavLabel
              item={menuItems[1]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
            <NavLabel
              item={menuItems[2]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
            <a
              href="#home"
              className="flex shrink-0 items-center justify-center rounded-full px-2"
              aria-label="Dojology home"
            >
              <Image
                src="/logo.png"
                alt="Dojology"
                width={186}
                height={50}
                priority
                className="h-[50px] w-auto"
              />
            </a>
            <NavLabel
              item={menuItems[3]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
            <NavLabel
              item={menuItems[4]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
            <NavLabel
              item={menuItems[5]}
              className="font-[family-name:var(--font-manrope)] leading-[1.16]"
            />
          </div>

          <div className="flex min-h-[64px] items-center justify-between rounded-[32px] bg-[rgba(255,255,255,0.05)] px-5 py-3 lg:hidden">
            <a href="#home" aria-label="Dojology home">
              <Image
                src="/logo.png"
                alt="Dojology"
                width={148}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-[5px]">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-5 rounded-full bg-white"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-5 rounded-full bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-xl lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="mx-4 mt-[92px] rounded-[32px] border border-white/12 bg-[#090909]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-5 text-center text-[22px] font-light tracking-[0.4px] text-white">
                {menuItems.map((item) => (
                  <NavLabel
                    key={item.label}
                    item={item}
                    className="font-[family-name:var(--font-manrope)] leading-[1.16]"
                    onActivate={() => setIsMenuOpen(false)}
                  />
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
