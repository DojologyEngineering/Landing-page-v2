"use client";

import Icon from "@/assets/icons/icon-asset";
import Image from "next/image";

export default function FooterSection(): React.ReactElement {
  return (
    <footer
      style={{
        background: "#2f1893",
        width: "100%",
        position: "relative",
        zIndex: 10,
        boxSizing: "border-box",
        overflow: "hidden",
        // paddingTop: 130px pushes the footer CONTENT (logo, links, etc.) below the CTA card's bottom half
        paddingTop: "165px",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          width: "514px",
          height: "612px",
          transform: "translateY(-50%)",
          overflow: "hidden",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src="/assets/portfolio/footer-logo-figma.png"
          alt=""
          width={2279}
          height={612}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "2279px",
            height: "612px",
            maxWidth: "none",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Main footer content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "60px 100px 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <img
              src="/logo/logo.png"
              alt="Dojology"
              style={{ width: "200px", height: "auto" }}
            />
            <p
              className="branding"
              style={{ fontSize: "56px", lineHeight: "1.1", margin: 0 }}
            >
              Growth.
              <br />
              Agility.
              <br />
              Commitment.
            </p>
          </div>

          {/* Middle: Important Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              minWidth: "170px",
            }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#fff",
                margin: 0,
              }}
            >
              Important Link
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "About us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "FAQs", href: "#faqs" },
                { label: "Partnership", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {link.label}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Get in Touch */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              minWidth: "286px",
            }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#fff",
                margin: 0,
              }}
            >
              Get in Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "CONTACT", value: "(855) 98-992-895 / 89-992-895" },
                { label: "EMAIL", value: "info@dojology.com" },
                {
                  label: "HEAD QUARTER",
                  value: "TECHNICAL PERSPECTIVES ON THE DIGITAL FRONTIER.",
                },
                { label: "WORK HOUR", value: "Mon - Sat, 8:00AM - 5:00PM" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", flexDirection: "column", gap: "4px" }}
                >
                  <p
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.7)",
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "48px 100px 0",
          padding: "28px 0",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#fff",
            margin: 0,
          }}
        >
          Dojology © 2026 All Rights Reserved
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://www.facebook.com/dojologytechandventures"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ display: "flex", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Icon name="facebook" />
          </a>
          <a
            href="https://t.me/dojology"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            style={{ display: "flex", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Icon name="telegram" />
          </a>
          <a
            href="https://www.linkedin.com/company/dojology-tech-and-ventures"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ display: "flex", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Icon name="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
