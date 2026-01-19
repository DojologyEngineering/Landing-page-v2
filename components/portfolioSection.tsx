"use client";

import Image from "next/image";
import { motion, fadeUp } from "./motion";
import { useState, useRef } from "react";

const portfolios = [
  {
    image: "/umami_card.png",
    title: "UMAMI",
    description: "Umami is a modern digital platform that connects sustainable food producers with conscious consumers, creating a seamless ecosystem across mobile and web.",
  },
  {
    image: "/prohose_card.png",
    title: "Prohose",
    description: "Prohose is a digital platform that allows customers to easily purchase fresh ingredients for cooking, offering a convenient and seamless experience.",
  },
  {
    image: "/mydestiny_card.png",
    title: "My Destiny",
    description: "My Destiny is a Cambodian Feng Shui and destiny app that uses Bazi and related techniques to help users uncover personal insights, measure energy.",
  },
  {
    image: "/loanmaster_card.png",
    title: "Loan Master",
    description: "My Destiny is a Cambodian Feng Shui and destiny app that uses Bazi and related techniques to help users uncover personal insights, measure energy.",
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
    <motion.section id="portfolio"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full bg-black py-[120px]"
    >
      <div className="flex flex-col items-center gap-[10px]">
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
      </div>

      {/* Scrollable Cards Container - 60px spacing from heading */}
      <div className="w-full mt-[60px] overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-[32px] overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth px-[159px]"
        >
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex flex-col items-start rounded-[24px] bg-white/5"
              style={{
                width: "460px",
                height: "590px",
                padding: "16px"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Image */}
              <div className="w-full h-[308px] relative rounded-[20px] overflow-hidden mb-[20px]">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 
                className="text-white mb-[12px]"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "28px"
                }}
              >
                {portfolio.title}
              </h3>

              {/* Description */}
              <p 
                className="text-white/70 mb-[24px] flex-1"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22px"
                }}
              >
                {portfolio.description}
              </p>

              {/* View Button - Positioned at bottom left */}
              <motion.button 
                onClick={() => {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer hover:bg-white/25 transition-colors"
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
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500
                }}
              >
                View
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Below cards */}
      <div className="flex gap-4 mt-[40px] pl-[194px]">
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
          className="w-[48px] h-[48px] rounded-full border border-white/20 bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
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
