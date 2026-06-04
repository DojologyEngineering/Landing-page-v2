"use client";

import { Children, type ReactNode, useEffect, useMemo, useRef, useState } from "react";

type ProjectAutoRailProps = {
  children: ReactNode;
  className?: string;
  segmentClassName?: string;
  speed?: number;
  resumeDelayMs?: number;
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function ProjectAutoRail({
  children,
  className = "",
  segmentClassName = "",
  speed = 46,
  resumeDelayMs = 1600,
}: ProjectAutoRailProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const segmentWidthRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const isPointerInsideRef = useRef(false);
  const isTouchingRef = useRef(false);
  const isFocusedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const dragPointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const draggedRef = useRef(false);
  const dragCaptureActiveRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [canLoop, setCanLoop] = useState(false);
  const items = useMemo(() => Children.toArray(children), [children]);
  const itemCount = items.length;
  const isLooping = canLoop && !prefersReducedMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const segment = segmentRef.current;

    if (!viewport || !segment) {
      return;
    }

    const syncSizing = () => {
      const segmentWidth = segment.scrollWidth;

      segmentWidthRef.current = segmentWidth;
      setCanLoop(itemCount > 1 && segmentWidth > viewport.clientWidth + 48);
    };

    syncSizing();

    const observer = new ResizeObserver(syncSizing);
    observer.observe(viewport);
    observer.observe(segment);

    return () => observer.disconnect();
  }, [itemCount]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const segmentWidth = segmentWidthRef.current;

    if (!viewport || segmentWidth <= 0) {
      return;
    }

    viewport.scrollLeft = isLooping ? segmentWidth : 0;
  }, [isLooping, itemCount]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.35 },
    );

    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const pauseAnimation = (delay = resumeDelayMs) => {
      pauseUntilRef.current = performance.now() + delay;
    };
    const rebaseLoopPosition = () => {
      const segmentWidth = segmentWidthRef.current;

      if (!isLooping || segmentWidth <= 0) {
        return;
      }

      if (viewport.scrollLeft < segmentWidth * 0.5) {
        viewport.scrollLeft += segmentWidth;
      } else if (viewport.scrollLeft > segmentWidth * 1.5) {
        viewport.scrollLeft -= segmentWidth;
      }
    };
    const handlePointerEnter = () => {
      isPointerInsideRef.current = true;
    };
    const handlePointerLeave = () => {
      isPointerInsideRef.current = false;
      pauseUntilRef.current = 0;
    };
    const handleFocusIn = () => {
      isFocusedRef.current = true;
    };
    const handleFocusOut = () => {
      isFocusedRef.current = viewport.contains(document.activeElement);

      if (!isFocusedRef.current) {
        pauseAnimation();
      }
    };
    const handleTouchStart = () => {
      isTouchingRef.current = true;
      pauseAnimation(0);
    };
    const handleTouchEnd = () => {
      isTouchingRef.current = false;
      pauseAnimation();
    };
    const handleScroll = () => {
      rebaseLoopPosition();
    };
    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };
    const handleWheel = (event: WheelEvent) => {
      pauseAnimation(900);

      if (!event.shiftKey || Math.abs(event.deltaY) <= 0) {
        return;
      }

      viewport.scrollLeft += event.deltaY;
      rebaseLoopPosition();
      event.preventDefault();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) {
        return;
      }

      dragPointerIdRef.current = event.pointerId;
      dragStartXRef.current = event.clientX;
      dragStartScrollLeftRef.current = viewport.scrollLeft;
      draggedRef.current = false;
      dragCaptureActiveRef.current = false;
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (dragPointerIdRef.current !== event.pointerId) {
        return;
      }

      const deltaX = event.clientX - dragStartXRef.current;

      if (!draggedRef.current) {
        if (Math.abs(deltaX) <= 4) {
          return;
        }

        draggedRef.current = true;
        dragCaptureActiveRef.current = true;
        viewport.setPointerCapture(event.pointerId);
        pauseAnimation(0);
      }

      viewport.scrollLeft = dragStartScrollLeftRef.current - deltaX;
      rebaseLoopPosition();
      event.preventDefault();
    };
    const finishPointerDrag = (event: PointerEvent) => {
      if (dragPointerIdRef.current !== event.pointerId) {
        return;
      }

      if (dragCaptureActiveRef.current && viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }

      dragPointerIdRef.current = null;
      dragCaptureActiveRef.current = false;

      if (draggedRef.current) {
        pauseAnimation(900);
      }
    };
    const handleClickCapture = (event: MouseEvent) => {
      if (!draggedRef.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      draggedRef.current = false;
    };

    viewport.addEventListener("pointerenter", handlePointerEnter);
    viewport.addEventListener("pointerleave", handlePointerLeave);
    viewport.addEventListener("focusin", handleFocusIn);
    viewport.addEventListener("focusout", handleFocusOut);
    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchend", handleTouchEnd, { passive: true });
    viewport.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    viewport.addEventListener("scroll", handleScroll, { passive: true });
    viewport.addEventListener("dragstart", handleDragStart);
    viewport.addEventListener("wheel", handleWheel, { passive: false });
    viewport.addEventListener("pointerdown", handlePointerDown);
    viewport.addEventListener("pointermove", handlePointerMove);
    viewport.addEventListener("pointerup", finishPointerDrag);
    viewport.addEventListener("pointercancel", finishPointerDrag);
    viewport.addEventListener("click", handleClickCapture, true);

    return () => {
      viewport.removeEventListener("pointerenter", handlePointerEnter);
      viewport.removeEventListener("pointerleave", handlePointerLeave);
      viewport.removeEventListener("focusin", handleFocusIn);
      viewport.removeEventListener("focusout", handleFocusOut);
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchend", handleTouchEnd);
      viewport.removeEventListener("touchcancel", handleTouchEnd);
      viewport.removeEventListener("scroll", handleScroll);
      viewport.removeEventListener("dragstart", handleDragStart);
      viewport.removeEventListener("wheel", handleWheel);
      viewport.removeEventListener("pointerdown", handlePointerDown);
      viewport.removeEventListener("pointermove", handlePointerMove);
      viewport.removeEventListener("pointerup", finishPointerDrag);
      viewport.removeEventListener("pointercancel", finishPointerDrag);
      viewport.removeEventListener("click", handleClickCapture, true);
    };
  }, [isLooping, resumeDelayMs]);

  useEffect(() => {
    if (!isLooping) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let animationFrame = 0;
    let lastTimestamp = 0;

    const step = (timestamp: number) => {
      const segmentWidth = segmentWidthRef.current;

      if (
        !isVisibleRef.current ||
        isPointerInsideRef.current ||
        isTouchingRef.current ||
        isFocusedRef.current ||
        prefersReducedMotionRef.current ||
        document.visibilityState !== "visible" ||
        segmentWidth <= 0
      ) {
        lastTimestamp = timestamp;
        animationFrame = window.requestAnimationFrame(step);
        return;
      }

      if (timestamp < pauseUntilRef.current) {
        lastTimestamp = timestamp;
        animationFrame = window.requestAnimationFrame(step);
        return;
      }

      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const elapsed = timestamp - lastTimestamp;

      viewport.scrollLeft += (elapsed / 1000) * speed;

      if (viewport.scrollLeft < segmentWidth * 0.5) {
        viewport.scrollLeft += segmentWidth;
      } else if (viewport.scrollLeft > segmentWidth * 1.5) {
        viewport.scrollLeft -= segmentWidth;
      }

      lastTimestamp = timestamp;
      animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isLooping, speed]);

  const renderItems = (suffix: string) =>
    items.map((item, index) => (
      <div key={`${suffix}-${index}`} className="shrink-0">
        {item}
      </div>
    ));

  return (
    <div
      ref={viewportRef}
      style={{ scrollBehavior: "auto" }}
      className={cx(
        "portfolio-horizontal-scroll tags-scroll relative w-full overflow-x-auto overflow-y-hidden py-4 cursor-grab active:cursor-grabbing select-none",
        className,
      )}
    >
      <div className="flex w-max">
        {isLooping ? (
          <>
            <div aria-hidden="true" className={cx("flex w-max shrink-0", segmentClassName)}>
              {renderItems("leading")}
            </div>
            <div ref={segmentRef} className={cx("flex w-max shrink-0", segmentClassName)}>
              {renderItems("primary")}
            </div>
            <div aria-hidden="true" className={cx("flex w-max shrink-0", segmentClassName)}>
              {renderItems("trailing")}
            </div>
          </>
        ) : (
          <div ref={segmentRef} className={cx("flex w-max shrink-0", segmentClassName)}>
            {renderItems("primary")}
          </div>
        )}
      </div>
    </div>
  );
}
