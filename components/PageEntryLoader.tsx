"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "@/components/motion";

const MINIMUM_LOADER_MS = 1500;

export default function PageEntryLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const previousOverflow = document.body.style.overflow;
    const completeLoader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MINIMUM_LOADER_MS - elapsed, 0);

      window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = previousOverflow;
      }, remaining);
    };

    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      completeLoader();
    } else {
      window.addEventListener("load", completeLoader, { once: true });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("load", completeLoader);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[240] overflow-hidden bg-[#020205]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,26,214,0.28),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(78,67,254,0.22),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(23,143,43,0.15),transparent_32%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative flex items-center justify-center rounded-[30px] border border-white/12 bg-white/[0.05] px-8 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-[18px]">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <Image
                  src="/assets/portfolio/footer-logo-figma.png"
                  alt="Dojology"
                  width={260}
                  height={70}
                  priority
                  className="h-auto w-[220px] md:w-[260px]"
                />
              </div>

              <div className="relative h-[4px] w-[180px] overflow-hidden rounded-full bg-white/10 md:w-[240px]">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.15, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.1 }}
                  className="absolute inset-y-0 w-1/2 rounded-full bg-[linear-gradient(90deg,rgba(79,26,214,0),#4f1ad6,#4e43fe,rgba(78,67,254,0))]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
