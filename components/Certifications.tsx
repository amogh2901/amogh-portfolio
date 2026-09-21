"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/data/certifications";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="Verified Technical Certifications"
    >
      <div className="container-editorial">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-18">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              CREDENTIALS // INDUSTRY ACCREDITATIONS
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
              Verified certifications.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="font-mono text-[0.72rem] max-w-[28ch] leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Verified credentials from Oracle, Meta, HackerRank, and freeCodeCamp.
          </motion.p>
        </div>

        {/* ── Archive-Style Typographic Ledger ── */}
        <div className="border-t border-[var(--color-border)]">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease }}
              className="group py-5 sm:py-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors duration-150"
            >
              <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 flex-1">
                {/* Index */}
                <span className="font-mono text-[0.62rem] text-[var(--color-text-tertiary)] flex-shrink-0 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <h3
                  className="font-semibold text-[1.05rem] sm:text-[1.2rem] tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-150 truncate"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {cert.name}
                </h3>
              </div>

              {/* Issuer & Year */}
              <div className="flex items-center gap-4 sm:gap-8 font-mono text-[0.75rem] pl-8 sm:pl-0 flex-shrink-0">
                <span className="text-[var(--color-text-secondary)] font-medium">
                  {cert.platform}
                </span>
                <span className="text-[var(--color-text-tertiary)] tabular-nums">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
