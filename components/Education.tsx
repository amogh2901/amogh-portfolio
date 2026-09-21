"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const timelineSteps = [
    {
      degree: "Bachelor of Science in Information Technology",
      short: "BSc IT",
      institution: "Changu Kana Thakur College",
      university: "University of Mumbai",
      period: "2021 – 2024",
      cgpa: "8.21",
      cgpaNote: "Cumulative CGPA",
      status: "Graduation Distinction",
      isCurrent: false,
    },
    {
      degree: "Master of Computer Applications",
      short: "MCA",
      institution: "Pillai HOC College of Engineering & Technology",
      university: "University of Mumbai",
      period: "2024 – Present",
      cgpa: "7.10",
      cgpaNote: "Semester 2",
      status: "Currently Pursuing",
      isCurrent: true,
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="Education and academic timeline"
    >
      <div className="container-editorial">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              JOURNEY // ACADEMIC FOUNDATION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "var(--color-text-primary)",
              }}
            >
              Academic progression.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="font-mono text-[0.72rem] max-w-[30ch] leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            University of Mumbai Computer Science programs, foundational theory, and applied systems research.
          </motion.p>
        </div>

        {/* ── Continuous Vertical Visual Journey (No cards) ── */}
        <div className="relative max-w-[920px] pl-6 sm:pl-10 border-l border-[var(--color-border)] ml-2 sm:ml-4">
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={step.short}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.15 + idx * 0.2, ease }}
              className="relative"
              style={{
                paddingBottom: idx < timelineSteps.length - 1 ? "clamp(3.5rem, 8vw, 5.5rem)" : 0,
              }}
            >
              {/* Connected Timeline Node */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full flex items-center justify-center"
                style={{
                  background: step.isCurrent ? "var(--color-accent)" : "var(--color-bg-base)",
                  border: "2px solid",
                  borderColor: step.isCurrent ? "var(--color-accent)" : "var(--color-border-hover)",
                }}
                aria-hidden="true"
              >
                {step.isCurrent && (
                  <span className="w-1 h-1 rounded-full bg-white animate-live-dot" />
                )}
              </div>

              {/* Step Content: Pure Typographic Scale */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-10">
                <div className="flex-1">
                  {/* Eyebrow / Period */}
                  <div className="flex items-center gap-3 mb-2 font-mono text-[0.68rem]">
                    <span className="font-bold text-[var(--color-accent)] uppercase tracking-wider">
                      {step.short}
                    </span>
                    <span className="text-[var(--color-border)]">/</span>
                    <span style={{ color: "var(--color-text-tertiary)" }}>
                      {step.period}
                    </span>
                    <span className="text-[var(--color-border)]">/</span>
                    <span
                      className="font-semibold uppercase tracking-wider"
                      style={{ color: step.isCurrent ? "var(--color-accent)" : "var(--color-success)" }}
                    >
                      {step.status}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.degree}
                  </h3>

                  {/* Institution Details */}
                  <p className="text-[0.95rem] font-medium leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                    {step.institution}
                  </p>
                  <p className="font-mono text-[0.76rem] mt-0.5" style={{ color: "var(--color-text-tertiary)" }}>
                    {step.university}
                  </p>
                </div>

                {/* Typographic CGPA Highlight */}
                <div className="flex flex-col sm:items-end self-start pt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider" style={{ color: "var(--color-text-tertiary)" }}>
                      CGPA
                    </span>
                    <span
                      className="font-mono font-extrabold text-[2rem] sm:text-[2.4rem] leading-none"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {step.cgpa}
                    </span>
                  </div>
                  <span
                    className="font-mono text-[0.7rem] mt-1"
                    style={{ color: step.isCurrent ? "var(--color-accent)" : "var(--color-text-tertiary)" }}
                  >
                    {step.cgpaNote}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
