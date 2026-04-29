"use client";

import type { ReactNode, WheelEvent } from "react";

type HorizontalScrollAreaProps = {
  children: ReactNode;
  className?: string;
};

export default function HorizontalScrollArea({
  children,
  className = "",
}: HorizontalScrollAreaProps) {
  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    const shouldScrollSideways = Math.abs(event.deltaY) > Math.abs(event.deltaX);

    if (!shouldScrollSideways) {
      return;
    }

    target.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  return (
    <div
      className={`portfolio-horizontal-scroll tags-scroll ${className}`}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}
