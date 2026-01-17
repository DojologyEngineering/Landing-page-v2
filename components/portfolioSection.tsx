"use client";

import Image from "next/image";
import { motion, fadeUp } from "./motion";
import { useState, useRef } from "react";

const portfolios = [
  {
    image: "/umami_card.png",
    title: "UMAMI",
    description: "Umami is an open-source platform that connects sustainable food producers with conscious consumers, creating a seamless ecosystem across mobile and web.",
  },
  {
    image: "/prohose_card.png",
    title: "Prohose",
    description: "Prohose is a digital platform that allows users to easily purchase their ingredients for cooking, offering a convenient and seamless experience.",
  },
  {
    image: "/mydestiny_card.png",
    title: "My Destiny",
    description: "MyDestiny is a Camry.cab-branded app that empowers users to play and related techniques to provide personalized insights, measurable brand awareness.",
  },
  {
    image: "/loanmaster_card.png",
    title: "Loan Master",
    description: "A comprehensive loan management platform that streamlines the lending process with advanced features and user-friendly interface.",
  },
];

export default function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 460 + 32; // card width + gap
      const scrollPosition = direction === "left" 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full bg-black flex justify-center"
    >
      <div className="flex w-[1440px] px-[194px] py-[120px] flex-col items-center gap-[10px]">
        {/* Portfolio Icon */}
        <div className="w-[131px] h-[44px]">
          <Image
            src="/portfolio_icon.png"
            alt="Portfolio"
            width={131}
            height={44}
            priority
          />
        </div>

        {/* Heading - 30px spacing from icon */}
        <h2 
          className="text-white text-center mt-[30px]"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "48px",
            fontWeight: 500,
            lineHeight: "56px",
            letterSpacing: "-0.48px"
          }}
        >
          Showcasing our experience in designing and
          <br />
          delivering reliable digital products.
        </h2>

        {/* Scrollable Cards Container - 60px spacing from heading */}
        <div className="w-full mt-[60px] relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-[32px] overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              width: "1052px",
              margin: "0 auto"
            }}
          >
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex flex-col rounded-[24px] bg-white/5"
                style={{
                  width: "460px",
                  height: "590px",
                  paddingTop: "16px",
                  paddingRight: "16px",
                  paddingBottom: "32px",
                  paddingLeft: "16px"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Image */}
                <div className="w-full h-[308px] relative rounded-[20px] overflow-hidden">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title - 32px spacing from image */}
                <h3 className="text-white text-xl font-semibold mt-[32px]">
                  {portfolio.title}
                </h3>

                {/* Description - 16px spacing from title */}
                <p className="text-white/70 text-sm leading-relaxed mt-[16px] flex-1">
                  {portfolio.description}
                </p>

                {/* View Button - 36px spacing from description */}
                <button 
                  className="mt-[36px] self-start"
                  style={{
                    display: "flex",
                    padding: "11px 31px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "40px",
                    border: "1px solid rgba(255, 255, 255, 0.20)",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 500
                  }}
                >
                  View
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Below cards */}
        <div className="flex gap-4 mt-[40px]">
          <button
            onClick={() => scroll("left")}
            className="w-[48px] h-[48px] rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-[48px] h-[48px] rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}
