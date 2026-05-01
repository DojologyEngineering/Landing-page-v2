"use client";

export default function CTASection() {
  return (
    // This element floats BETWEEN FAQ (black) and Footer (purple).
    // marginTop pulls it UP into the FAQ's black area.
    // marginBottom lets the footer start higher, showing purple UNDER the card's bottom half.
    // zIndex: 20 keeps it painted above both section backgrounds.
    <div
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-100px",
        marginBottom: "-130px",
        padding: "0 16px",
        boxSizing: "border-box",
      }}
      className="sm:!px-[40px] lg:!px-[100px]"
    >
      {/* Banner card */}
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          padding: "32px 24px",
          boxSizing: "border-box",
          overflow: "hidden",
          // Exact Figma gradient: indigo to indigo 60% to pure white
          background:
            "linear-gradient(89.9618deg, rgb(79,70,229) 0%, rgba(79,70,229,0.6) 24.064%, rgb(255,255,255) 82.033%)",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
        className="sm:!p-[32px_40px]"
      >
        {/* Conic vignette with full-card black fade matching Figma */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "conic-gradient(from 90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Headline */}
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "normal",
              color: "#fff",
              margin: "0 0 16px",
              maxWidth: "592px",
            }}
            className="sm:!mb-[32px]"
          >
            Ready to Unlock Your Business Potential?
          </p>

          {/* Subtext + Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "normal",
                color: "#fff",
                margin: 0,
                maxWidth: "534px",
              }}
            >
              {`Let's collaborate to innovate, grow, and transform your business for lasting success.`}
            </p>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                height: "52px",
                padding: "0 48px",
                borderRadius: "30px",
                background:
                  "linear-gradient(180deg, #2f1893 17.08%, #190c39 73.84%)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span
                style={{
                  fontFamily: "'Nunito Sans', Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#fbfbfd",
                }}
              >
                Start Your Journey
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7v10"
                  stroke="#fbfbfd"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
