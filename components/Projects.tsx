"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import DeepWAFChapter from "./DeepWAFChapter";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const deepwaf = projects.find((p) => p.id === "deepwaf-xai");
  const eventhub = projects.find((p) => p.id === "eventhub");
  const jobportal = projects.find((p) => p.id === "job-portal");

  return (
    <section
      id="projects"
      className="section-padding relative"
      ref={ref}
      aria-label="Projects and engineering case studies"
      style={{
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-editorial">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              SELECTED WORK // ENGINEERING CHAPTERS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                color: "var(--color-text-primary)",
              }}
            >
              Featured systems &amp;
              <br />
              applications.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="font-mono text-[0.72rem] max-w-[32ch] leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Production web platforms, neural threat detection, and full-stack software architectures.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════
            1. FLAGSHIP: DEEPWAF-XAI — Enormous Visual Chapter
            - DeepWAF has STRICTLY NO YEAR displayed
            - Zero fabricated claims
        ══════════════════════════════════════════════════════ */}
        {deepwaf && (
          <DeepWAFChapter onOpenModal={() => setSelectedProject(deepwaf)} />
        )}

        {/* ══════════════════════════════════════════════════════
            2. SUPPORTING PROJECTS: Distinct Editorial Treatments
            - EventHub: Large typography + compact technology strip
            - Job Portal System: Asymmetric split + full-stack specs
        ══════════════════════════════════════════════════════ */}
        <div className="space-y-16 lg:space-y-24">

          {/* ── PROJECT 02: EVENTHUB (Panoramic Typographic Layout) ── */}
          {eventhub && (
            <div
              className="border-t border-[var(--color-border)] pt-12 pb-6"
              aria-label="EventHub project"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.62rem] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    02 // EVENT MANAGEMENT
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                  <span className="font-mono text-[0.62rem] text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                    {eventhub.context}
                  </span>
                </div>
                <span className="font-mono text-[0.68rem] text-[var(--color-text-tertiary)]">
                  {eventhub.year}
                </span>
              </div>

              {/* Massive Title */}
              <h3
                className="font-extrabold tracking-tight text-[2.2rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-none mb-4 text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
              >
                EventHub
              </h3>

              <p className="text-[0.92rem] max-w-[68ch] leading-relaxed text-[var(--color-text-secondary)] mb-6">
                An integrated event booking and vendor service management application. Designed with structured relational schemas, transaction integrity, multi-vendor cart scheduling, and automated receipt generation.
              </p>

              {/* Compact Technology Strip */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {eventhub.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.7rem] px-3 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-primary)]"
                    style={{ background: "var(--color-bg-surface)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(eventhub)}
                  className="btn-secondary"
                  aria-label="View EventHub Case Study"
                >
                  <span>CASE STUDY DETAILS</span>
                  <ArrowUpRight size={13} />
                </button>

                {eventhub.githubUrl && (
                  <a
                    href={eventhub.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors inline-flex items-center gap-1.5"
                    aria-label="EventHub GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>GITHUB</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* ── PROJECT 03: JOB PORTAL SYSTEM (Asymmetric Split Architecture) ── */}
          {jobportal && (
            <div
              className="border-t border-[var(--color-border)] pt-12 pb-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start"
              aria-label="Job Portal System project"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[0.62rem] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    03 // FULL STACK RECRUITMENT
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                  <span className="font-mono text-[0.62rem] text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                    {jobportal.context}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                  <span className="font-mono text-[0.68rem] text-[var(--color-text-tertiary)]">
                    {jobportal.year}
                  </span>
                </div>

                <h3
                  className="font-extrabold tracking-tight text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-none mb-4 text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
                >
                  Job Portal System
                </h3>

                <p className="text-[0.92rem] leading-relaxed text-[var(--color-text-secondary)] mb-6">
                  Recruitment and online interview platform connecting candidates with hiring managers. Features role-based dashboard workflows, JWT-protected REST routes, real-time client cache synchronization with SWR, and Redux Toolkit state.
                </p>

                {/* Technology Ribbon */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {jobportal.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.68rem] px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-primary)]"
                      style={{ background: "var(--color-bg-surface)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(jobportal)}
                    className="btn-secondary"
                    aria-label="View Job Portal Case Study"
                  >
                    <span>CASE STUDY DETAILS</span>
                    <ArrowUpRight size={13} />
                  </button>

                  {jobportal.githubUrl && (
                    <a
                      href={jobportal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.75rem] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors inline-flex items-center gap-1.5"
                      aria-label="Job Portal GitHub"
                    >
                      <GithubIcon size={14} />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side: Architectural Specifications Ledger */}
              <div
                className="p-6 rounded-xl border border-[var(--color-border)] space-y-4"
                style={{ background: "var(--color-bg-surface)" }}
              >
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--color-accent)] block">
                  SYSTEM CAPABILITIES
                </span>

                <div className="space-y-3 text-[0.82rem]">
                  <div className="pb-3 border-b border-[var(--color-border-subtle)]">
                    <p className="font-semibold text-[var(--color-text-primary)] mb-0.5">
                      Stateless Authentication
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-[0.76rem]">
                      Cryptographically signed JWT tokens with protected endpoint middlewares.
                    </p>
                  </div>

                  <div className="pb-3 border-b border-[var(--color-border-subtle)]">
                    <p className="font-semibold text-[var(--color-text-primary)] mb-0.5">
                      Real-Time Data Revalidation
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-[0.76rem]">
                      SWR caching pipeline syncing live applicant statuses across client tabs.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[var(--color-text-primary)] mb-0.5">
                      Dual-Dashboard RBAC
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-[0.76rem]">
                      Dedicated interfaces for candidate job tracking vs. recruiter candidate management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* ── Case Study Modal (Shared) ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
