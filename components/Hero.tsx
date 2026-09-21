"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import HeroVisual from "./HeroVisual";

/* ─── Cinematic Ease Curve ──────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ isReady = true }: { isReady?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Intentional Scroll Transition: Hero visual subtly continues into About
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.65], [0, -50]);
  const heroContentScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.96]);

  // Visual sculpture translates down with depth, maintaining continuous presence
  const sculptureY = useTransform(scrollYProgress, [0, 1], [0, 95]);
  const sculptureScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.92]);
  const sculptureOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  // Vertical coordinate datum line linking Hero to About
  const datumLineHeight = useTransform(scrollYProgress, [0.15, 0.8], [24, 72]);
  const datumLineOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [0.4, 1, 0.3]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col justify-between overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        minHeight: "100svh",
      }}
      aria-label="Hero — Amogh Kalyanshetti"
    >
      {/* ── Background Atmosphere & Ambient Coordinate Grid ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 72% 38%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle fine architectural coordinate lines in background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ═══════════════════════════════════════════════════════
          INTEGRATED EDITORIAL BRAND HERO COMPOSITION
          - AMOGH KALYANSHETTI is the primary monumental visual object
          - Abstract engineering sculpture is integrated with spatial depth & overlap
          - Scaled mathematically across 1440, 1280, 1024, 390, 375 viewports
        ═══════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <motion.div
          style={{
            opacity: heroContentOpacity,
            y: heroContentY,
            scale: heroContentScale,
          }}
          className="container-editorial relative w-full"
        >
          {/* Top Identity Eyebrow / Coordinate Stamp */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span
              className="font-mono font-bold tracking-[0.22em] text-[0.62rem] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              AMOGH KALYANSHETTI // DEV
            </span>
            <span
              className="w-8 h-px bg-[var(--color-border)]"
              aria-hidden="true"
            />
            <span
              className="font-mono tracking-[0.14em] text-[0.62rem] uppercase hidden sm:inline"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              SOFTWARE DEVELOPER · MCA STUDENT
            </span>
          </motion.div>

          {/* Dynamic Integrated Composition: Monumental Typography + Integrated Sculpture */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-6 lg:gap-8 items-center">

            {/* ══ Primary Visual Object: Monumental Typographic Signature ══ */}
            <div className="relative z-20 flex flex-col max-w-full min-w-0">

              {/* AMOGH — Architectural, light, expansive */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.75, delay: 0.35, ease }}
                className="overflow-hidden"
              >
                <span
                  className="block font-light select-none text-[clamp(2.3rem,9.2vw,7.8rem)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    lineHeight: 0.94,
                    letterSpacing: "0.05em",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  AMOGH
                </span>
              </motion.div>

              {/* KALYANSHETTI — Monumental, bold, commanding */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                transition={{ duration: 0.85, delay: 0.52, ease }}
                className="overflow-hidden mt-[-0.04em] max-w-full"
              >
                <h1
                  className="block font-extrabold select-none text-[clamp(2.05rem,9.2vw,9.6rem)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.038em",
                    color: "var(--color-text-primary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  KALYANSHETTI
                </h1>
              </motion.div>

              {/* Engineering Role Positioning */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.65, delay: 0.85, ease }}
                className="mt-5 sm:mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem] sm:text-[0.78rem]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Software Developer
                </span>
                <span className="opacity-40">/</span>
                <span>MCA Student</span>
                <span className="opacity-40">/</span>
                <span>Full Stack Engineering &amp; Secure Systems</span>
              </motion.div>

              {/* Concise Authentic Statement */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.65, delay: 1.0, ease }}
                className="mt-4 max-w-[54ch] text-[0.88rem] sm:text-[0.96rem] leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Building resilient full-stack applications with Java, Python, React.js, Next.js, and Node.js — with a focused capstone specialization in secure systems and explainable artificial intelligence.
              </motion.p>

              {/* Actions & Touch-Optimized CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.65, delay: 1.15, ease }}
                className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                {/* PRIMARY: View My Work */}
                <button
                  onClick={() => scrollTo("#projects")}
                  className="btn-primary-lg group cursor-pointer"
                  aria-label="Navigate to selected projects"
                  type="button"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                {/* SECONDARY: Download Resume */}
                <a
                  href="/resume/resume.pdf"
                  download="Amogh_Kalyanshetti_Resume.pdf"
                  className="btn-secondary group"
                  aria-label="Download resume PDF"
                >
                  <FileText size={13} />
                  <span>DOWNLOAD RESUME</span>
                </a>

                {/* TERTIARY: Contact text link */}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="cursor-pointer transition-colors duration-150 inline-flex items-center gap-1 ml-0 sm:ml-1 py-2 px-1 text-[0.76rem] font-mono font-semibold"
                  style={{
                    color: "var(--color-text-tertiary)",
                    background: "none",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-tertiary)";
                  }}
                  type="button"
                  aria-label="Navigate to contact section"
                >
                  <span>CONTACT ME</span>
                  <ArrowUpRight size={12} className="opacity-70" />
                </button>
              </motion.div>

              {/* Mobile Adapted Visual Sculpture (Visible ONLY on small screens < lg) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.9, delay: 1.25 }}
                className="block lg:hidden mt-6 pt-4 border-t border-[var(--color-border)]"
              >
                <HeroVisual isReady={isReady} isMobile={true} />
              </motion.div>

              {/* Availability & Direct Channels Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="mt-6 sm:mt-8 pt-5 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[var(--color-border)]"
              >
                {/* Live Status */}
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-live-dot"
                    style={{ background: "var(--color-success)" }}
                    aria-hidden="true"
                  />
                  OPEN TO OPPORTUNITIES
                </span>

                <span
                  className="w-px h-3 hidden sm:block bg-[var(--color-border)]"
                  aria-hidden="true"
                />

                {/* Social Channels */}
                <div className="flex items-center gap-3.5">
                  {[
                    { href: "https://github.com/amogh2901", label: "GitHub", icon: <GithubIcon size={14} /> },
                    { href: "https://www.linkedin.com/in/amogh-kalyanshetti-20861a296", label: "LinkedIn", icon: <LinkedinIcon size={14} /> },
                    { href: "https://www.instagram.com/aamoghh.29/", label: "Instagram", icon: <InstagramIcon size={14} /> },
                  ].map(({ href, label, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-colors duration-150"
                      style={{ color: "var(--color-text-tertiary)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-tertiary)";
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>

                <span
                  className="w-px h-3 hidden sm:block bg-[var(--color-border)]"
                  aria-hidden="true"
                />

                <span
                  className="font-mono text-[0.62rem] uppercase tracking-wider"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  University of Mumbai · MCA
                </span>
              </motion.div>
            </div>

            {/* ══ Integrated Abstract Engineering Sculpture (Desktop & Tablet >= lg) ══
                Positioned with spatial depth, overlapping negative space of letters */}
            <motion.div
              style={{
                y: sculptureY,
                scale: sculptureScale,
                opacity: sculptureOpacity,
              }}
              className="relative hidden lg:flex items-center justify-center select-none z-10 -ml-8 xl:-ml-12 pointer-events-none"
            >
              <HeroVisual isReady={isReady} isMobile={false} />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          ARCHITECTURAL DATUM LINE — SCROLL TRANSITION INTO ABOUT
          A subtle physical coordinate line connecting Hero to About
        ═══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pb-3 pointer-events-none">
        <motion.div
          style={{
            height: datumLineHeight,
            opacity: datumLineOpacity,
          }}
          className="w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-border)]"
          aria-hidden="true"
        />
        <span
          className="font-mono text-[0.56rem] font-semibold uppercase tracking-[0.24em] mt-2 select-none"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          SCROLL // 01 ABOUT
        </span>
      </div>
    </section>
  );
}
