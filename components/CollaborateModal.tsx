"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CollaborateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollYRef = useRef(0);
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      e.preventDefault();
      setIsOpen(true);
    };
    window.addEventListener("open-collaborate-modal", handleOpen);
    return () => window.removeEventListener("open-collaborate-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousScrollBehavior = documentElement.style.scrollBehavior;

    scrollYRef.current = window.scrollY;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      documentElement.style.overflow = previousHtmlOverflow;
      documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollYRef.current);
      documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitError(null);
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          phone,
          interest,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const message = payload?.error ?? "Something went wrong. Please try again.";
        throw new Error(message);
      }

      setSubmitSuccess(true);
      setFullName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setInterest("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send message.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="hide-scrollbar relative w-full max-w-[480px] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[24px] border border-white/10 bg-[#10131c] px-6 pb-6 pt-6 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:px-8 sm:pb-8 sm:pt-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]"
            >
              <div
                className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(196,132,252,0.48) 0%, rgba(196,132,252,0.26) 42%, rgba(196,132,252,0.08) 62%, rgba(196,132,252,0) 78%)",
                }}
              />
            </div>

            {/* Header */}
            <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
              <h2
                className="font-[family-name:var(--font-manrope)] text-[28px] font-bold"
                style={{
                  backgroundImage: "linear-gradient(90.7deg, #FFFFFF -100%, #4F46E5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let&apos;s Collaborate
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent text-white/55 transition-colors [touch-action:manipulation] hover:text-white"
                aria-label="Close dialog"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Form */}
            <form className="relative z-10 flex flex-col gap-4 font-[family-name:var(--font-manrope)]" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-white/80">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="rounded-[8px] bg-[#111] border border-white/10 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none transition-all focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-white/80">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your company name" 
                  className="rounded-[8px] bg-[#111] border border-white/10 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none transition-all focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-white/80">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="rounded-[8px] bg-[#111] border border-white/10 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none transition-all focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-white/80">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="rounded-[8px] bg-[#111] border border-white/10 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none transition-all focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-white/80">Your Interest</label>
                <textarea 
                  placeholder="Tell us your interest about our services" 
                  rows={4}
                  className="resize-none rounded-[8px] bg-[#111] border border-white/10 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none transition-all focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>

              {submitError ? (
                <p className="text-[13px] text-red-400">{submitError}</p>
              ) : null}
              {submitSuccess ? (
                <p className="text-[13px] text-green-400">Message sent. We will reach out shortly.</p>
              ) : null}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-12 w-full rounded-[8px] bg-[#34CB4D] px-6 py-3 font-[family-name:var(--font-manrope)] text-base font-normal text-[#0A0A0A] transition-colors hover:bg-[#2fb846] disabled:cursor-not-allowed disabled:bg-[#2a8f3a]"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
