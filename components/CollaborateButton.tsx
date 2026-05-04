"use client";

import { ReactNode } from "react";

export default function CollaborateButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-collaborate-modal')); }}
      className={className}
    >
      {children}
    </button>
  );
}
