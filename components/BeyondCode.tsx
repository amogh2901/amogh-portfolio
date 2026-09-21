"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Music, Trophy } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BeyondCode() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const facets = [
    {
      num: "01",
      title: "Photography",
      tag: "Observation & Framing",
      icon: Camera,
      narrative:
        "Developing an eye for architectural lines, negative space, and natural light. Photography trains attention to visual balance and detail that directly translates to frontend craft.",
    },
    {
      num: "02",
      title: "Music",
      tag: "Rhythm & Focus",
      icon: Music,
      narrative:
        "The essential acoustic canvas for long programming sessions. Music provides steady momentum, clears mental clutter, and helps maintain deep flow during complex debugging.",
    },
    {
      num: "03",
      title: "Cricket",
      tag: "Strategy & Execution",
      icon: Trophy,
      narrative:
        "A lifelong sport teaching tactical patience, game awareness, and collaborative execution under pressure. Real software engineering mirrors the discipline of team athletics.",
    },
  ];

  return (
    <section
      id="beyond-code"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="Perspectives beyond code"
    >
      <div className="container-editorial">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              PERSPECTIVES // BEYOND THE TERMINAL
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.8vw, 4.2rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
              }}
            >
              Interests &amp; rhythm.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="font-mono text-[0.72rem] max-w-[28ch] leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            A breathing pause between technical architectures.
          </motion.p>
        </div>

        {/* ── 3 Asymmetric Column Cards (Editorial Spacing) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {facets.map((facet, idx) => {
            const Icon = facet.icon;
            return (
              <motion.div
                key={facet.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.15, ease }}
                className="flex flex-col"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)] mb-6">
                  <span className="font-mono text-[0.62rem] font-bold text-[var(--color-accent)]">
                    {facet.num}
                  </span>
                  <Icon size={18} className="text-[var(--color-text-tertiary)]" strokeWidth={1.5} />
                </div>

                <h3
                  className="font-bold text-2xl tracking-tight mb-1 text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {facet.title}
                </h3>

                <p className="font-mono text-[0.68rem] text-[var(--color-text-tertiary)] mb-4 uppercase tracking-wider">
                  {facet.tag}
                </p>

                <p className="text-[0.88rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {facet.narrative}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
