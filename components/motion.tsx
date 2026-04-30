"use client";

import { motion as framerMotion, AnimatePresence } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import React from "react";

// Re-export with proper typing for React 19 compatibility
export const motion = framerMotion as any;
export { AnimatePresence };
export type { Variants, HTMLMotionProps };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease: "easeOut" } },
};

export type MotionDivProps = HTMLMotionProps<"div">;

export function MotionDiv(props: MotionDivProps) {
  return <framerMotion.div {...props} />;
}
