"use client";

import {
  Children,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AutoHorizontalCarouselProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  itemSpan: number;
  itemWidth?: number;
  logicalCount: number;
  showIndicators?: boolean;
  indicatorsClassName?: string;
  allowTrailingSpacer?: boolean;
  trackStyle?: React.CSSProperties;
};

export default function AutoHorizontalCarousel({
  children,
  className = "",
  trackClassName = "",
  trackStyle,
  itemSpan,
  itemWidth = itemSpan,
  logicalCount,
  showIndicators = false,
  indicatorsClassName = "",
  allowTrailingSpacer = true,
}: AutoHorizontalCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const items = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const updateViewportWidth = () => {
      setViewportWidth(viewport.clientWidth);
    };

    updateViewportWidth();

    const observer = new ResizeObserver(updateViewportWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  const syncActiveIndex = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const currentScroll = Math.min(viewport.scrollLeft, maxScroll);
    let nextIndex = Math.min(
      logicalCount - 1,
      Math.max(0, Math.round(currentScroll / itemSpan)),
    );

    // If we've scrolled to the end (allowing a small 5px margin for rounding errors), force the last index
    if (currentScroll >= maxScroll - 5) {
      nextIndex = logicalCount - 1;
    }

    setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
  }, [itemSpan, logicalCount]);

  const trailingSpacerWidth = allowTrailingSpacer ? Math.max(0, viewportWidth - itemWidth) : 0;

  return (
    <>
      <div
        ref={viewportRef}
        className={`portfolio-horizontal-scroll tags-scroll overflow-x-auto overflow-y-hidden ${className}`}
        onScroll={syncActiveIndex}
      >
        <div className={`flex h-full w-max ${trackClassName}`} style={trackStyle}>
          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              {item}
            </div>
          ))}
          {trailingSpacerWidth > 0 ? (
            <div
              aria-hidden="true"
              className="shrink-0"
              style={{ width: `${trailingSpacerWidth}px` }}
            />
          ) : null}
        </div>
      </div>

      {showIndicators ? (
        <div className={`flex h-3 items-center gap-3 ${indicatorsClassName}`}>
          {Array.from({ length: logicalCount }).map((_, index) =>
            index === activeIndex ? (
              <span key={index} className="h-3 w-9 rounded-full bg-white" />
            ) : (
              <span key={index} className="size-3 rounded-full bg-white/40" />
            ),
          )}
        </div>
      ) : null}
    </>
  );
}
