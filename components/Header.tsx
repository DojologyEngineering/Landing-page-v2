"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/assets/icons/icon-asset";

type MenuItem = {
  label: string;
  href?: string;
};

const menuItems: MenuItem[] = [
  { label: "About us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Service", href: "#services" },
  { label: "Studio Model", href: "#studio" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blogs", href: "#blog" },
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
  const pathname = usePathname();
  const isPortfolioDetailPage = pathname?.startsWith("/portfolio/");
  const isDetailPage = pathname?.startsWith("/blog/") || isPortfolioDetailPage;

  if (isDetailPage) {
    if (isPortfolioDetailPage) {
      return (
        <header className="absolute inset-x-0 top-0 z-[120] h-[98px] border-b border-white/20 bg-[rgba(5,5,5,0.01)] backdrop-blur-[142px]">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            <Link
              href="/"
              aria-label="Dojology home"
              className="absolute left-[159px] top-7 block h-[42px] w-[157px]"
            >
              <Image
                src="/assets/portfolio/header-logo-figma.png"
                alt="Dojology"
                width={157}
                height={42}
                priority
                className="h-[42px] w-[157px] object-contain"
              />
            </Link>

            <button
              type="button"
              aria-label="Open navigation"
              className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
              </span>
            </button>

            <div className="absolute left-[1145px] top-[39px] flex h-5 w-[130px] items-center justify-between">
              <a
                href="https://www.facebook.com/dojologytechandventures"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
              <a href="https://t.me/dojology" target="_blank" rel="noreferrer" aria-label="Telegram">
                <Icon name="telegram" />
              </a>
              <a
                href="https://www.linkedin.com/company/dojology-tech-and-ventures"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
            </div>
          </div>
        </header>
      );
    }

    return (
      <header className="absolute inset-x-0 top-0 z-[120] border-b border-white/20 bg-[rgba(5,5,5,0.01)] backdrop-blur-[142px]">
        <div className="mx-auto w-full max-w-[1440px] h-[98px] flex items-center justify-between px-6 md:px-[112px]">
          <Link href="/" aria-label="Dojology home">
            <Image
              src="/logo/logo.png"
              alt="Dojology"
              width={192}
              height={52}
              priority
              className="h-[52px] w-auto"
            />
          </Link>
          
          <Link 
            href="/#blog"
            className="flex items-center gap-[10px] px-[12px] py-[6px] rounded-[40px] relative overflow-hidden group"
            style={{ 
              backgroundImage: "linear-gradient(0deg, rgba(79, 26, 214, 0.08) 0%, rgba(153, 153, 153, 0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <div className="absolute top-0 left-[14.34%] right-[14.34%] h-[1px] bg-gradient-to-r from-transparent via-[#4e43fe] to-transparent z-0 group-hover:via-white transition-colors duration-300"></div>
            <div className="flex items-center justify-center p-[8px] rounded-[30px] bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] border-[2px] border-white/15 z-10 relative">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <span className="font-['Manrope'] font-normal text-[16px] text-white tracking-[-0.5px] leading-[26px] mr-2 z-10 relative">CLOSE</span>
          </Link>
        </div>
      </header>
    );
  }

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
                src="/logo/logo.png"
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
                src="/logo/logo.png"
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
