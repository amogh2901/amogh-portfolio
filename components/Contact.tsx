"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copiedKey, setCopiedKey] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, key: "email" | "phone", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const socials = [
    {
      label: "LinkedIn",
      handle: "amogh-kalyanshetti",
      href: "https://www.linkedin.com/in/amogh-kalyanshetti-20861a296",
      icon: <LinkedinIcon size={14} />,
    },
    {
      label: "GitHub",
      handle: "amogh2901",
      href: "https://github.com/amogh2901",
      icon: <GithubIcon size={14} />,
    },
    {
      label: "Instagram",
      handle: "@aamoghh.29",
      href: "https://www.instagram.com/aamoghh.29/",
      icon: <InstagramIcon size={14} />,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
      aria-label="Contact and Communication Channels"
    >
      <div className="container-editorial">

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-8"
          style={{ color: "var(--color-accent)" }}
        >
          CONTACT // INITIATE CONVERSATION
        </motion.p>

        {/* ── Asymmetric Layout: Monumental Statement + Understated Channels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end">

          {/* LEFT: Massive Typographic Conclusion */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.75, delay: 0.1, ease }}
              className="font-extrabold tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 7.5vw, 6.8rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.04em",
                color: "var(--color-text-primary)",
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              meaningful.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, delay: 0.25, ease }}
              className="max-w-[44ch] text-[0.92rem] sm:text-[1.02rem] leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Open to full-stack engineering roles, software developer positions, and research collaborations in secure systems and artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, delay: 0.35, ease }}
              className="flex items-center gap-4"
            >
              <a
                href="mailto:amoghkalyanshetti2005@gmail.com"
                className="btn-primary-lg inline-flex"
                aria-label="Send direct email to Amogh"
              >
                <Mail size={15} />
                <span>SEND AN EMAIL</span>
                <ArrowUpRight size={13} />
              </a>

              <span
                className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-live-dot" />
                Open to Opportunities
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Understated Channels Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="border-t border-[var(--color-border)] pt-2"
          >
            {/* Email Row */}
            <div className="py-4 border-b border-[var(--color-border)] flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.58rem] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-0.5">
                  EMAIL
                </p>
                <a
                  href="mailto:amoghkalyanshetti2005@gmail.com"
                  className="text-[0.88rem] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  amoghkalyanshetti2005@gmail.com
                </a>
              </div>
              <button
                type="button"
                onClick={(e) => handleCopy("amoghkalyanshetti2005@gmail.com", "email", e)}
                className="cursor-pointer p-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Copy email address"
              >
                {copiedKey === "email" ? (
                  <span className="font-mono text-[0.62rem] text-[var(--color-success)] font-bold">
                    COPIED ✓
                  </span>
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>

            {/* Phone Row */}
            <div className="py-4 border-b border-[var(--color-border)] flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.58rem] uppercase tracking-wider text-[var(--color-text-tertiary)] mb-0.5">
                  PHONE
                </p>
                <a
                  href="tel:+919769223025"
                  className="font-mono text-[0.85rem] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  +91 9769223025
                </a>
              </div>
              <button
                type="button"
                onClick={(e) => handleCopy("+919769223025", "phone", e)}
                className="cursor-pointer p-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Copy phone number"
              >
                {copiedKey === "phone" ? (
                  <span className="font-mono text-[0.62rem] text-[var(--color-success)] font-bold">
                    COPIED ✓
                  </span>
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>

            {/* Social Channels Rows */}
            {socials.map((s) => (
              <div
                key={s.label}
                className="py-3.5 border-b border-[var(--color-border)] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[var(--color-text-tertiary)]">{s.icon}</span>
                  <span className="font-mono text-[0.72rem] text-[var(--color-text-secondary)]">
                    {s.label}
                  </span>
                </div>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.75rem] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1"
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  <span>{s.handle}</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </div>
            ))}

            {/* Location & University Footnote */}
            <div className="pt-4 flex items-center justify-between text-[0.65rem] font-mono text-[var(--color-text-tertiary)]">
              <span>Panvel, Maharashtra, India</span>
              <span>IST (UTC +5:30)</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
