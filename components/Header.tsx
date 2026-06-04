"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

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
  { label: "Blogs" },
];

function NavLabel({
  item,
  className,
  onActivate,
  onUnavailable,
}: {
  item: MenuItem;
  className?: string;
  onActivate?: () => void;
  onUnavailable?: (label: string) => void;
}): React.ReactElement {
  const sharedClassName = `relative z-10 whitespace-nowrap text-white/95 transition-colors duration-200 hover:text-white ${className ?? ""}`;

  if (!item.href) {
    return (
      <button
        type="button"
        onClick={() => onUnavailable?.(item.label)}
        className={sharedClassName}
        title={`${item.label} section is not available on this page yet`}
        style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
      >
        {item.label}
      </button>
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
  const [notice, setNotice] = useState<string | null>(null);
  const noticeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const leftNavItems = menuItems.slice(0, 3);
  const rightNavItems = menuItems.slice(3);
  const isPortfolioDetailPage = pathname?.startsWith("/portfolio/");
  const isDetailPage = pathname?.startsWith("/blog/") || isPortfolioDetailPage;

  useEffect(() => {
    return () => {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
    };
  }, []);

  const showComingSoonMessage = (label: string) => {
    if (noticeTimeoutRef.current) {
      clearTimeout(noticeTimeoutRef.current);
    }

    setIsMenuOpen(false);
    setNotice(`${label} coming soon!`);
    noticeTimeoutRef.current = setTimeout(() => {
      setNotice(null);
      noticeTimeoutRef.current = null;
    }, 2400);
  };

  if (isDetailPage) {
    const closeHref = isPortfolioDetailPage ? "/#portfolio" : "/";

    return (
      <header className="sticky inset-x-0 top-0 z-[120] mb-[-98px] border-b border-white/20 bg-[rgba(5,5,5,0.01)] backdrop-blur-[142px]">
        <div className="mx-auto w-full max-w-[1440px] h-[98px] flex items-center justify-between px-6 md:px-[112px]">
          <Link href="/" aria-label="Dojology home">
            <Image
              src="/assets/portfolio/footer-logo-figma.png"
              alt="Dojology"
              width={192}
              height={52}
              priority
              className="h-[52px] w-auto"
            />
          </Link>
          
          <Link 
            href={closeHref}
            className="group relative flex items-center justify-center gap-[10px] overflow-hidden rounded-[40px] py-[6px] pl-[6px] pr-4"
            style={{ 
              backgroundImage: "linear-gradient(0.09deg, rgba(79,26,214,0.08) 0%, rgba(153,153,153,0.1) 100%)",
            }}
          >
            <div className="absolute left-[14.34%] right-[14.34%] top-0 h-px bg-gradient-to-r from-transparent via-[#4e43fe] to-transparent transition-colors duration-300 group-hover:via-white" />
            <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-white/[0.05]" />
            <div className="relative z-10 flex shrink-0 items-center justify-center rounded-[30px] bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <div className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-white/15" />
            </div>
            <span className="relative z-10 whitespace-nowrap font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[26px] tracking-[-0.5px] text-white">
              CLOSE
            </span>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-[120] mb-[-80px] px-4 pt-4 md:mb-[-106px] md:px-8 md:pt-8">
        <div className="mx-auto max-w-[1274px]">
          <div className="relative hidden h-[74px] items-center justify-between overflow-hidden rounded-[72px] border border-white/20 bg-white/[0.04] px-12 py-3 text-[20px] font-light tracking-[0.4px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.08)] backdrop-blur-[12px] lg:flex">
            <div className="pointer-events-none absolute inset-0 rounded-[72px] bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[72px] ring-1 ring-inset ring-white/10" />
            {leftNavItems.map((item) => (
              <NavLabel
                key={item.label}
                item={item}
                className="font-[family-name:var(--font-manrope)] leading-[1.16]"
                onUnavailable={showComingSoonMessage}
              />
            ))}
            <a
              href="#home"
              className="relative z-10 flex shrink-0 items-center justify-center rounded-full px-2"
              aria-label="Dojology home"
            >
              <Image
                src="/assets/portfolio/footer-logo-figma.png"
                alt="Dojology"
                width={186}
                height={50}
                priority
                className="h-[50px] w-auto"
              />
            </a>
            {rightNavItems.map((item) => (
              <NavLabel
                key={item.label}
                item={item}
                className="font-[family-name:var(--font-manrope)] leading-[1.16]"
                onUnavailable={showComingSoonMessage}
              />
            ))}
          </div>

          <div className="relative flex min-h-[64px] items-center justify-between overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.04] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.08)] backdrop-blur-[12px] lg:hidden">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
            <a href="#home" aria-label="Dojology home">
              <Image
                src="/assets/portfolio/footer-logo-figma.png"
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
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5"
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
                    onUnavailable={showComingSoonMessage}
                  />
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notice ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[96px] z-[130] -translate-x-1/2 rounded-full border border-white/12 bg-[#090909]/90 px-5 py-3 text-center text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-[12px] lg:top-[112px]"
          >
            <span className="font-[family-name:var(--font-manrope)] text-[14px] font-medium tracking-[-0.2px] text-white/95">
              {notice}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
