"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type PortfolioDetailImageProps = ImageProps & {
  overlayClassName?: string;
  spinnerClassName?: string;
};

export default function PortfolioDetailImage({
  alt = "",
  className,
  overlayClassName,
  spinnerClassName,
  onLoad,
  ...props
}: PortfolioDetailImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity ${overlayClassName ?? ""}`}
        >
          <span
            className={`size-10 animate-spin rounded-full border-2 border-white/20 border-t-[#4f46e5] ${spinnerClassName ?? ""}`}
          />
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className ?? ""} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </>
  );
}
