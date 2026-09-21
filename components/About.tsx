"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="About Amogh Kalyanshetti"
    >
      {/* ── Architectural Datum Notch from Hero ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-[var(--color-accent)] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-editorial">

        {/* ── Top Editorial Header ── */}
        <div className="mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            ABOUT // PROFILE &amp; PHILOSOPHY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "var(--color-text-primary)",
            }}
          >
            Engineering
            <br />
            with purpose.
          </motion.h2>
        </div>

        {/* ── Asymmetric Magazine Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">

          {/* ══ LEFT: Integrated Formal Portrait ══
              Note: Appears EXACTLY ONCE on the entire site. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
              {/* Fine architectural corner registration marks */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--color-text-tertiary)] pointer-events-none z-20"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--color-text-tertiary)] pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Portrait Frame */}
              <div
                className="relative overflow-hidden rounded-md"
                style={{
                  aspectRatio: "3 / 4",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-surface)",
                }}
              >
                <Image
                  src="/images/formal photo.png"
                  alt="Amogh Kalyanshetti — Software Developer and MCA Student"
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-top filter grayscale-[15%] contrast-[102%]"
                  priority
                />

                {/* Subtle depth vignette at base */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(9,11,16,0.5) 0%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Minimal caption strip */}
              <div className="mt-3 flex items-center justify-between text-[0.62rem] font-mono" style={{ color: "var(--color-text-tertiary)" }}>
                <span>AMOGH KALYANSHETTI</span>
                <span>PANVEL, MAHARASHTRA</span>
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT: Narrative & Editorial Metadata ══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.75, delay: 0.3, ease }}
            className="flex flex-col justify-start"
          >
            {/* Primary Paragraphs */}
            <div
              className="space-y-6 text-[0.95rem] sm:text-[1.05rem] leading-[1.78]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                I am a{" "}
                <strong className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Master of Computer Applications (MCA) student
                </strong>{" "}
                at Pillai HOC College of Engineering &amp; Technology (University of Mumbai), built upon a solid BSc IT foundation from Changu Kana Thakur College.
              </p>

              <p>
                My engineering approach is rooted in understanding systems from the ground up. Whether architecting database schemas, crafting modular React/Next.js interfaces, or implementing server-side REST APIs in Node.js and Java, I prioritize{" "}
                <strong className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  clarity, reliability, and security
                </strong>.
              </p>

              <p>
                Currently, my primary research focus is directed toward Explainable AI (XAI) applied to cybersecurity — building neural threat detection models whose internal classifications can be audited and trusted in mission-critical environments.
              </p>
            </div>

            {/* Editorial Metadata Strip (No cards, pure typography) */}
            <div className="mt-10 pt-8 border-t border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: "var(--color-text-tertiary)" }}>
                  LOCATION
                </p>
                <p className="font-medium text-[0.85rem]" style={{ color: "var(--color-text-primary)" }}>
                  Panvel, MH
                </p>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: "var(--color-text-tertiary)" }}>
                  EDUCATION
                </p>
                <p className="font-medium text-[0.85rem]" style={{ color: "var(--color-text-primary)" }}>
                  MCA · Mumbai Univ.
                </p>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: "var(--color-text-tertiary)" }}>
                  FOUNDATION
                </p>
                <p className="font-medium text-[0.85rem]" style={{ color: "var(--color-text-primary)" }}>
                  BSc IT · Distinction
                </p>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: "var(--color-text-tertiary)" }}>
                  CORE FOCUS
                </p>
                <p className="font-medium text-[0.85rem]" style={{ color: "var(--color-text-primary)" }}>
                  Full Stack · Secure AI
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
