"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  ShieldCheck,
  KeyRound,
  AlertTriangle,
  Radio,
  Database,
  Lock,
  Terminal,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onClose: () => void;
}

const featureIconMap: Record<string, React.ReactNode> = {
  "Zero-Trust 3-tier RBAC": <ShieldCheck size={14} className="text-[var(--color-accent)]" />,
  "Secondary SOC passkeys": <KeyRound size={14} className="text-[var(--color-accent)]" />,
  "Level 2 Quarantine Queue": <AlertTriangle size={14} className="text-[#f59e0b]" />,
  "Admin SOC telemetry": <Radio size={14} className="text-[var(--color-accent)]" />,
  "SQLite/database deduplication": <Database size={14} className="text-[var(--color-accent)]" />,
  "Concurrency protection": <Lock size={14} className="text-[var(--color-accent)]" />,
  "Adversarial sandbox": <Terminal size={14} className="text-[var(--color-accent)]" />,
};

export default function ProjectModal({ project, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const isFlagship = project.id === "deepwaf-xai";

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      style={{ background: "rgba(0, 0, 0, 0.78)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-project-title"
    >
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full sm:max-w-2xl lg:max-w-3xl max-h-[94vh] sm:max-h-[88vh] overflow-y-auto focus:outline-none"
        style={{
          borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
          background: "var(--color-card-bg)",
          border: "1px solid var(--color-border)",
          borderBottom: "none",
          boxShadow: "var(--shadow-modal)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* On sm+ screens: all corners rounded */}
        <style>{`
          @media (min-width: 640px) {
            [data-modal-inner] {
              border-radius: var(--radius-xl) !important;
              border-bottom: 1px solid var(--color-border) !important;
            }
          }
        `}</style>
        <div data-modal-inner style={{
          borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
          background: "var(--color-card-bg)",
          overflow: "hidden",
        }}>

          {/* Flagship accent line at top */}
          {isFlagship && (
            <div
              className="h-[2px]"
              style={{
                background: "linear-gradient(90deg, var(--color-accent), transparent 70%)",
              }}
              aria-hidden="true"
            />
          )}

          {/* ── Sticky header ── */}
          <div
            className="sticky top-0 z-10 px-6 sm:px-8 py-5 flex items-start justify-between gap-4"
            style={{
              borderBottom: "1px solid var(--color-border)",
              background: "var(--color-card-bg)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="min-w-0">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span
                  className="text-[0.6rem] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    background: "var(--color-accent-subtle)",
                    color: "var(--color-accent)",
                    border: "1px solid rgba(37,99,235,0.25)",
                  }}
                >
                  PROJECT {project.number}
                </span>

                {isFlagship ? (
                  <>
                    <span
                      className="inline-flex items-center gap-1.5 text-[0.6rem] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{
                        border: "1px solid rgba(37,99,235,0.35)",
                        background: "var(--color-accent-subtle)",
                        color: "var(--color-accent)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-live-dot" />
                      CURRENTLY WORKING
                    </span>
                    <span
                      className="text-[0.6rem] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg-raised)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      MCA FINAL-YEAR CAPSTONE
                    </span>
                  </>
                ) : (
                  <span
                    className="text-[0.6rem] font-mono font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg-raised)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {project.context}{project.year ? ` · ${project.year}` : ""}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2
                id="modal-project-title"
                className="font-bold tracking-tight text-[var(--color-text-primary)] leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 4vw, 2rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                {project.name}
              </h2>
              <p
                className="font-mono mt-1"
                style={{ fontSize: "0.75rem", color: "var(--color-accent)" }}
              >
                {project.tagline}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-raised)",
                color: "var(--color-text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border-hover)";
                el.style.color = "var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.color = "var(--color-text-secondary)";
              }}
              aria-label="Close case study"
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Modal body ── */}
          <div className="px-6 sm:px-8 py-8 space-y-8">

            {/* 01 OVERVIEW */}
            <div>
              <h3
                className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                01 — Overview
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}
              >
                {project.overview}
              </p>
            </div>

            <div className="divider-line" />

            {/* 02 PROBLEM & APPROACH */}
            <div>
              <h3
                className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                02 — Problem & Approach
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-[var(--radius-md)]"
                  style={{
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-raised)",
                  }}
                >
                  <h4
                    className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5"
                    style={{ color: "var(--color-error)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-error)]" />
                    The Problem
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}
                  >
                    {project.problem}
                  </p>
                </div>

                <div
                  className="p-4 rounded-[var(--radius-md)]"
                  style={{
                    border: "1px solid rgba(37,99,235,0.2)",
                    background: "var(--color-accent-subtle)",
                  }}
                >
                  <h4
                    className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    The Approach
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}
                  >
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* 03 ARCHITECTURE */}
            {(isFlagship || project.architecture) && (
              <>
                <div className="divider-line" />
                <div>
                  <h3
                    className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-4"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    03 — Architecture
                  </h3>

                  {isFlagship ? (
                    <div
                      className="p-5 rounded-[var(--radius-md)]"
                      style={{
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg-base)",
                      }}
                    >
                      <p
                        className="text-[0.58rem] font-mono uppercase tracking-wider mb-4"
                        style={{ color: "var(--color-text-tertiary)" }}
                      >
                        Multi-Tier Defense & Inspection Pipeline
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { label: "Frontend", name: "Streamlit Dashboard", accent: false },
                          { label: "ML Layer", name: "Character-Level BiLSTM", accent: true },
                          { label: "Database", name: "SQLite with strict Python validation", accent: false },
                          { label: "Deployment", name: "Ngrok", accent: false },
                        ].map(({ label, name, accent }) => (
                          <div
                            key={label}
                            className="p-3 rounded-[var(--radius-sm)]"
                            style={{
                              border: accent
                                ? "1px solid rgba(37,99,235,0.3)"
                                : "1px solid var(--color-border)",
                              background: accent
                                ? "var(--color-accent-subtle)"
                                : "var(--color-card-bg)",
                            }}
                          >
                            <span
                              className="block text-[0.58rem] font-mono font-bold uppercase tracking-wider mb-1.5"
                              style={{
                                color: accent
                                  ? "var(--color-accent)"
                                  : "var(--color-text-tertiary)",
                              }}
                            >
                              {label}
                            </span>
                            <strong
                              className="block text-xs font-bold leading-tight"
                              style={{
                                color: accent
                                  ? "var(--color-accent)"
                                  : "var(--color-text-primary)",
                              }}
                            >
                              {name}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : project.architecture ? (
                    <div
                      className="grid grid-cols-2 gap-3 p-4 rounded-[var(--radius-md)]"
                      style={{
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg-raised)",
                      }}
                    >
                      {project.architecture.frontend && (
                        <div>
                          <span
                            className="block text-[0.58rem] font-mono text-[var(--color-text-tertiary)] uppercase mb-0.5"
                          >
                            Frontend
                          </span>
                          <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                            {project.architecture.frontend}
                          </span>
                        </div>
                      )}
                      {project.architecture.database && (
                        <div>
                          <span
                            className="block text-[0.58rem] font-mono text-[var(--color-text-tertiary)] uppercase mb-0.5"
                          >
                            Database
                          </span>
                          <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                            {project.architecture.database}
                          </span>
                        </div>
                      )}
                      {project.architecture.deployment && (
                        <div>
                          <span
                            className="block text-[0.58rem] font-mono text-[var(--color-text-tertiary)] uppercase mb-0.5"
                          >
                            Deployment
                          </span>
                          <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                            {project.architecture.deployment}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </>
            )}

            <div className="divider-line" />

            {/* 04 KEY FEATURES */}
            <div>
              <h3
                className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                04 — Key Features
              </h3>

              {isFlagship && project.engineeringFeatures ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.engineeringFeatures.map((feat) => (
                    <div
                      key={feat.title}
                      className="p-4 rounded-[var(--radius-md)]"
                      style={{
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg-raised)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {featureIconMap[feat.title] || (
                          <CheckCircle2 size={13} className="text-[var(--color-accent)]" />
                        )}
                        <h5
                          className="text-xs font-bold font-mono"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {feat.title}
                        </h5>
                      </div>
                      <p
                        className="leading-relaxed pl-5"
                        style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}
                      >
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5"
                      style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}
                    >
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="divider-line" />

            {/* 05 TECHNOLOGY */}
            <div>
              <h3
                className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                05 — Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider-line" />

            {/* 06 STATUS / ENGINEERING FOCUS */}
            <div
              className="p-4 rounded-[var(--radius-md)]"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-base)",
              }}
            >
              <h3
                className="text-[0.6rem] font-mono font-bold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                06 — {isFlagship ? "Current Status · In Progress" : "Engineering Focus"}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}
              >
                {project.developmentFocus}
              </p>
            </div>

            {/* Actions */}
            {(project.githubUrl || project.liveUrl) && (
              <div
                className="flex flex-wrap items-center gap-3 pt-2"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <GithubIcon size={14} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={11} style={{ opacity: 0.6 }} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
