"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function DeepWAFChapter({ onOpenModal }: { onOpenModal: () => void }) {
  const chapterRef = useRef<HTMLElement>(null);
  const inView = useInView(chapterRef, { once: true, margin: "-80px" });

  const [activeStage, setActiveStage] = useState<number>(1);

  const architectureStages = [
    {
      num: "01",
      name: "Streamlit Dashboard",
      role: "User & Admin Interface",
      detail:
        "Interactive control center providing multi-role authenticated access, quarantine management views, and live firewall status telemetry.",
    },
    {
      num: "02",
      name: "Character-Level BiLSTM",
      role: "Neural Detection Core",
      detail:
        "Bidirectional Long Short-Term Memory neural network analyzing sequential raw HTTP payload characters to identify anomalous attack patterns without relying on brittle regex signatures.",
    },
    {
      num: "03",
      name: "SQLite with strict Python validation",
      role: "Strict State & Deduplication",
      detail:
        "Embedded persistence layer enforcing thread-safe concurrent transactions, payload signature hash deduplication, and Level 2 quarantine staging.",
    },
    {
      num: "04",
      name: "Ngrok",
      role: "Secure Edge Tunneling",
      detail:
        "Edge routing tunnel exposing the local Streamlit security service to remote web traffic while maintaining isolated perimeter boundaries.",
    },
  ];

  const engineeringControls = [
    {
      num: "01",
      title: "Zero-Trust 3-tier RBAC",
      desc: "Least-privilege authorization separating Operators/Users, Security Auditors, and SuperAdmins.",
    },
    {
      num: "02",
      title: "Secondary SOC passkeys",
      desc: "Out-of-band cryptographic validation required for privileged firewall rule edits and IAM mutations.",
    },
    {
      num: "03",
      title: "Level 2 Quarantine Queue",
      desc: "Inspection staging buffer holding ambiguous payloads for SuperAdmin human-in-the-loop review.",
    },
    {
      num: "04",
      title: "Admin SOC telemetry",
      desc: "Information disclosure prevention: client responses are sanitized while complete diagnostic telemetry stays in Admin SOC.",
    },
    {
      num: "05",
      title: "SQLite/database deduplication",
      desc: "Cached payload signature hashing preventing redundant neural inference on identical incoming requests.",
    },
    {
      num: "06",
      title: "Concurrency protection",
      desc: "Thread-safe database transactions and atomic state locks protecting against request bursts and race conditions.",
    },
    {
      num: "07",
      title: "Adversarial sandbox",
      desc: "Payload mutation testbed evaluating BiLSTM resilience against obfuscated evasion attempts.",
    },
  ];

  return (
    <article
      ref={chapterRef}
      className="relative mb-20 lg:mb-28 overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-14"
      style={{
        background: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
      aria-label="DeepWAF-XAI Engineering Chapter"
    >
      {/* ── Background Coordinate Watermark ── */}
      <div
        className="absolute -right-6 -top-10 select-none pointer-events-none opacity-[0.025] dark:opacity-[0.035] text-[7rem] sm:text-[12rem] font-bold font-mono tracking-tighter"
        aria-hidden="true"
      >
        DEEPWAF
      </div>

      {/* ══════════════════════════════════════════════════════
          01 // DEEPWAF-XAI
          Monumental Headline & Capstone Badges
          STRICTLY NO YEAR DISPLAYED
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="font-mono text-[0.62rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded"
            style={{
              background: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            01 // DEEPWAF-XAI
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
          <span
            className="font-mono text-[0.62rem] font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{ color: "var(--color-success)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-live-dot" />
            CURRENTLY WORKING
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
          <span
            className="font-mono text-[0.62rem] uppercase tracking-wider font-semibold"
            style={{ color: "var(--color-text-secondary)" }}
          >
            MCA FINAL-YEAR CAPSTONE
          </span>
        </div>

        {/* Monumental Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease }}
          className="font-extrabold tracking-tight mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--color-text-primary)",
          }}
        >
          DeepWAF-XAI
        </motion.h3>

        <p
          className="font-mono text-[0.82rem] sm:text-[0.98rem] font-medium mb-10 max-w-[65ch]"
          style={{ color: "var(--color-accent)" }}
        >
          Explainable AI-Driven Web Application Firewall
        </p>

        {/* ══════════════════════════════════════════════════════
            02 // APPROACH
            Short, authentic explanation of the core methodology
        ══════════════════════════════════════════════════════ */}
        <div className="mb-12 pt-8 border-t border-[var(--color-border)]">
          <div className="max-w-[78ch]">
            <span
              className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] block mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              02 // APPROACH
            </span>
            <p className="text-[0.94rem] sm:text-[1.02rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              DeepWAF-XAI pairs a Character-Level BiLSTM neural network for sequential HTTP payload inspection with transparent Explainable AI decision auditing. It implements a strict Zero-Trust 3-tier RBAC, routes low-confidence payloads to a Level 2 Quarantine Queue for human-in-the-loop review, and restricts diagnostic security telemetry exclusively to Admin SOC operators.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            03 // SYSTEM ARCHITECTURE
            Visual architecture flow: 4 authentic stages
        ══════════════════════════════════════════════════════ */}
        <div className="mb-14 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <div>
              <span
                className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] block mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                03 // SYSTEM ARCHITECTURE
              </span>
              <h4
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                Request Processing Pipeline
              </h4>
            </div>
            <span className="font-mono text-[0.62rem] text-[var(--color-text-tertiary)]">
              Interactive 4-Stage Architecture
            </span>
          </div>

          {/* 4 Architecture Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {architectureStages.map((stage, idx) => {
              const isSelected = activeStage === idx + 1;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setActiveStage(idx + 1)}
                  className="p-4 rounded-lg text-left transition-all duration-200 cursor-pointer group"
                  style={{
                    background: isSelected ? "var(--color-bg-raised)" : "var(--color-bg-base)",
                    border: "1px solid",
                    borderColor: isSelected ? "var(--color-accent)" : "var(--color-border)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[0.58rem] font-bold text-[var(--color-accent)]">
                      STAGE {stage.num}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-150"
                      style={{ background: isSelected ? "var(--color-accent)" : "var(--color-border)" }}
                    />
                  </div>
                  <p
                    className="font-bold text-[0.88rem] mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {stage.name}
                  </p>
                  <p className="font-mono text-[0.64rem]" style={{ color: "var(--color-text-tertiary)" }}>
                    {stage.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspection Detail */}
          <div
            className="p-4 sm:p-5 rounded-lg border border-[var(--color-border)]"
            style={{ background: "var(--color-bg-base)" }}
          >
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-mono text-[0.62rem] font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Stage {architectureStages[activeStage - 1].num}{" // "}{architectureStages[activeStage - 1].name}
              </span>
            </div>
            <p className="text-[0.85rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {architectureStages[activeStage - 1].detail}
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            04 // ENGINEERING CONTROLS
            7 Authentic Subsystems
        ══════════════════════════════════════════════════════ */}
        <div className="mb-14 pt-8 border-t border-[var(--color-border)]">
          <div className="mb-6">
            <span
              className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] block mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              04 // ENGINEERING CONTROLS
            </span>
            <h4
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              7 Authentic System Controls
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {engineeringControls.map((ctrl) => (
              <div
                key={ctrl.title}
                className="p-4 rounded-lg border border-[var(--color-border)] transition-colors duration-150"
                style={{ background: "var(--color-bg-base)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[0.58rem] font-bold text-[var(--color-accent)]">
                    {ctrl.num}
                  </span>
                  <h5 className="font-mono text-[0.76rem] font-bold text-[var(--color-text-primary)]">
                    {ctrl.title}
                  </h5>
                </div>
                <p className="text-[0.78rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {ctrl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            05 // CURRENT STATUS
            Active Capstone Scope & Actions
        ══════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span
              className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] block mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              05 // CURRENT STATUS
            </span>
            <p className="text-[0.84rem] text-[var(--color-text-secondary)] max-w-[50ch]">
              Active final-year capstone engineering in progress. Focus on BiLSTM payload preprocessing, secondary SOC passkey authorization, Level 2 quarantine queue, and inference latency.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-primary"
              aria-label="View complete DeepWAF-XAI case study"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight size={13} />
            </button>

            <a
              href="https://github.com/amogh2901/DeepWAF-XAI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="DeepWAF-XAI GitHub Repository"
            >
              <GithubIcon size={14} />
              <span>GITHUB REPOSITORY</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
