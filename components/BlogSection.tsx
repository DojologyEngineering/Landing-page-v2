"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts, BlogPost } from "../lib/blog-data";

// Blog Card

function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ flex: "1 1 0", minWidth: 0, textDecoration: "none", display: "flex", flexDirection: "column" }}>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: index * 0.12 }}
        style={{
          height: "100%",
          background: "#0a061e",
          borderRadius: "12px",
          border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "295px",
          overflow: "hidden",
          position: "relative",
          borderRadius: "12px 12px 0 0",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "12px",
        }}
      >
        {/* Date row */}
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "normal",
            color: "rgba(255,255,255,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          {post.date}
        </div>

        {/* Title + Excerpt */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "normal",
              color: "#fff",
              margin: 0,
            }}
          >
            {post.title}
          </p>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "normal",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </div>
    </motion.article>
    </Link>
  );
}

// Main Section

export default function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        background: "#000",
        width: "100%",
        padding: "80px 16px",
        boxSizing: "border-box",
      }}
      className="sm:!px-8 lg:!px-[194px] lg:!py-[120px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: "1052px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div>
          {/* "BLOGS" pill matches Figma Dotted Highlight Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "6px",
              paddingRight: "16px",
              borderRadius: "40px",
              backgroundImage:
                "linear-gradient(0.09deg, rgba(79,26,214,0.08) 0%, rgba(153,153,153,0.1) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Blue shimmer line at top */}
            <div
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
            {/* Pill outer border overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "40px",
                border: "1px solid rgba(255,255,255,0.05)",
                pointerEvents: "none",
              }}
            />
            {/* Icon is rounded square per Figma */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "30px",
                backgroundImage: "linear-gradient(180deg, #4f1ad6 0%, #8059e3 100%)",
                flexShrink: 0,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 22H4V6h24v20Z" />
                <path d="M8 12h16v2H8zm0 6h10v2H8z" />
              </svg>
              {/* Icon border overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "30px",
                  border: "2px solid rgba(255,255,255,0.15)",
                  pointerEvents: "none",
                }}
              />
            </div>
            {/* Label */}
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "26px",
                letterSpacing: "-0.5px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              BLOGS
            </span>
          </div>
        </div>

        {/* Second row: Headline + View All link */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          {/* Gradient headline */}
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "normal",
              backgroundImage:
                "linear-gradient(90.4deg, #ffffff 10.14%, #4f46e5 100.69%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              maxWidth: "508px",
            }}
          >
            TECHNICAL PERSPECTIVES ON THE DIGITAL FRONTIER.
          </p>

          {/* View All Insight link */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "normal",
              color: "#fff",
              textDecoration: "none",
              textTransform: "uppercase",
              borderBottom: "1px solid #fff",
              paddingBottom: "6px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            View all insight
            {/* Arrow icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-3 w-full">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
