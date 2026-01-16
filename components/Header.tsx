import React from "react";
import Image from "next/image";
import Icon from "@/assets/icons/icon-asset";

export default function Header(): React.ReactElement {
  return (
    <header className="site-header fixed top-0 left-0 right-0 text-white z-[100] border-b border-white/20" style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
      <div className="max-w-7xl mx-auto px-6 relative flex items-center h-20">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-3 z-10">
          <Image src="/logo.png" alt="DojoLogy" width={135} height={42} className="logo" />
        </a>

        {/* Center: Hamburger (2 bars) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <button className="hamburger flex flex-col justify-center items-center gap-2 bg-transparent border-0 p-2 cursor-pointer" aria-label="menu">
            <span className="block w-8 h-0.5 bg-white rounded"></span>
            <span className="block w-8 h-0.5 bg-white rounded"></span>
          </button>
        </div>

        {/* Right: Social icons */}
        <div className="ml-auto flex items-center gap-[35px] z-10">
          <a href="#" aria-label="facebook" >
            <Icon name="facebook" />
          </a>
          <a href="#" aria-label="telegram">
            <Icon name="telegram" />
          </a>
          <a href="#" aria-label="linkedin">
            <Icon name="linkedin" />
          </a>
        </div>
      </div>
      <div className="header-pattern" aria-hidden />
    </header>
  );
}
