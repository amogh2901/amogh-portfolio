"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";
import type { SkillCategory, SkillItem } from "@/data/skills";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeCategoryId, setActiveCategoryId] = useState<string>(skillCategories[0].id);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const activeCategory: SkillCategory =
    skillCategories.find((c) => c.id === activeCategoryId) ?? skillCategories[0];

  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleCategoryKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = (idx + 1) % skillCategories.length;
        setActiveCategoryId(skillCategories[next].id);
        categoryRefs.current[next]?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (idx - 1 + skillCategories.length) % skillCategories.length;
        setActiveCategoryId(skillCategories[prev].id);
        categoryRefs.current[prev]?.focus();
      }
    },
    []
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="Technical Capabilities and Architecture Map"
    >
      <div className="container-editorial">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              CAPABILITIES // TECHNICAL STACK &amp; SYSTEMS
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
              System capability
              <br />
              architecture.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="font-mono text-[0.72rem] max-w-[34ch] leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Hover or select technologies to inspect architectural context and verified project applications.
          </motion.p>
        </div>

        {/* ── Interactive Visual System Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">

          {/* ══ Left Zone: Category Selector Rail ══ */}
          <div
            role="tablist"
            aria-label="Skill domains"
            className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-3 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] pr-0 lg:pr-8"
            style={{ scrollbarWidth: "none" }}
          >
            {skillCategories.map((cat, idx) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  ref={(el) => {
                    categoryRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategoryId(cat.id)}
                  onKeyDown={(e) => handleCategoryKeyDown(e, idx)}
                  className="relative text-left py-3 px-3.5 rounded-md transition-all duration-200 cursor-pointer flex-shrink-0 group"
                  style={{
                    background: isActive ? "var(--color-bg-surface)" : "transparent",
                    borderLeft: isActive ? "2px solid var(--color-accent)" : "2px solid transparent",
                  }}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="font-mono text-[0.58rem] font-bold"
                      style={{ color: isActive ? "var(--color-accent)" : "var(--color-text-tertiary)" }}
                    >
                      {cat.number}
                    </span>
                    <span
                      className="font-mono text-[0.72rem] font-semibold tracking-wider uppercase"
                      style={{
                        color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <p
                    className="text-[0.68rem] hidden lg:block line-clamp-1"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {cat.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* ══ Right Zone: Typographic Component Cluster & Inspection ══ */}
          <div className="min-w-0">
            {/* Category Description Banner */}
            <div className="mb-8 pb-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <span className="font-mono text-[0.62rem] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                  DOMAIN {activeCategory.number}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {activeCategory.label}
                </h3>
              </div>
              <p className="text-[0.84rem] max-w-[50ch] text-[var(--color-text-secondary)] leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Interactive Grid of Typographic Objects */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`panel-${activeCategory.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCategory.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {activeCategory.items.map((skill, idx) => {
                  const isHovered = hoveredSkill?.name === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      tabIndex={0}
                      onFocus={() => setHoveredSkill(skill)}
                      onBlur={() => setHoveredSkill(null)}
                      className="p-4 sm:p-5 rounded-lg transition-all duration-200 cursor-default focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                      style={{
                        background: isHovered ? "var(--color-bg-surface)" : "transparent",
                        border: "1px solid",
                        borderColor: isHovered ? "var(--color-border-hover)" : "var(--color-border-subtle)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        {/* Number & Technology Name */}
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-[0.6rem] text-[var(--color-text-tertiary)]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h4
                            className="font-bold text-[1.05rem] tracking-tight"
                            style={{
                              fontFamily: "var(--font-display)",
                              color: isHovered ? "var(--color-text-primary)" : "var(--color-text-primary)",
                            }}
                          >
                            {skill.name}
                          </h4>
                        </div>

                        {/* Verified Project Badge */}
                        {skill.appliedIn && (
                          <span
                            className="inline-flex items-center text-[0.6rem] font-mono font-medium px-2 py-0.5 rounded"
                            style={{
                              background: isHovered ? "var(--color-accent-subtle)" : "transparent",
                              color: isHovered ? "var(--color-accent)" : "var(--color-text-tertiary)",
                              border: "1px solid",
                              borderColor: isHovered ? "rgba(37,99,235,0.3)" : "var(--color-border)",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {skill.appliedIn}
                          </span>
                        )}
                      </div>

                      <p
                        className="text-[0.8rem] leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {skill.note}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Live System Relationship Footnote */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 text-[0.65rem] font-mono text-[var(--color-text-tertiary)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                <span>Zero fabricated metrics. All technical competencies reflect active production repositories.</span>
              </div>
              <span>6 Architectural Domains</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
