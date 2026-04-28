"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// FAQ data

const faqs = [
  {
    question: "Who can partner with Dojology?",
    answer:
      "We work with startups, SMEs, and enterprises that are ready to scale and innovate.",
  },
  {
    question: "Do you work with clients globally?",
    answer:
      "Yes, we work with clients worldwide and have experience in various international markets.",
  },
  {
    question: "Can you develop custom software?",
    answer:
      "We specialize in custom software development tailored to your specific business needs.",
  },
  {
    question: "What is your investment model?",
    answer:
      "We offer strategic investment in mature startups with proven products and growth potential.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a call with us to discuss your needs and explore how we can help transform your business.",
  },
];

// Accordion Item

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "normal",
            color: "#fff",
          }}
        >
          {faq.question}
        </span>

        {/* + / × icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3v14M3 10h14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 28px 22px",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.55)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "16px",
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main Section

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      style={{
        position: "relative",
        zIndex: 1,
        background: "#000",
        width: "100%",
        padding: "120px 194px 285px",
        boxSizing: "border-box",

      }}
    >
      {/* Light rays background image */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          opacity: 0.7,
        }}
      >
        <img
          src="/assets/backImage.png"
          alt=""
          style={{
            position: "absolute",
            top: "-14.82%",
            left: 0,
            width: "100%",
            height: "129.63%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1052px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* ── Left: heading ── */}
        <div>
          {/* FAQs pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "6px",
              paddingRight: "16px",
              borderRadius: "40px",
              background:
                "linear-gradient(0.09deg, rgba(79,26,214,0.08) 0%, rgba(153,153,153,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "relative",
              marginBottom: "24px",
            }}
          >
            {/* shimmer line */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: "14.34%",
                right: "14.34%",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(79,26,214,0) 0%, #4e43fe 50%, rgba(79,26,214,0) 100%)",
              }}
            />
            {/* icon */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "30px",
                background: "linear-gradient(180deg, #4f1ad6 0%, #8059e3 100%)",
                border: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 12H6v-2h12v2Zm0-3H6V9h12v2Zm0-3H6V6h12v2Z" />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.5px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              FAQs
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "54px",
              lineHeight: "1.1",
              color: "#fff",
              margin: "0 0 4px",
            }}
          >
            Frequently
          </h2>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 300,
              fontSize: "36px",
              lineHeight: "1.1",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
            }}
          >
            Asked Questions
          </p>
        </div>

        {/* ── Right: accordion ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
