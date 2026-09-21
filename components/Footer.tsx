"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[var(--color-bg-base)] transition-colors duration-200"
      aria-label="Footer"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-editorial py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand Info */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-1.5">
              <span
                className="text-[1.05rem] font-bold tracking-tight text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                AMOGH
              </span>
              <span className="text-[0.7rem] font-mono font-bold text-[var(--color-accent)]">
                / DEV
              </span>
            </div>
            <p className="text-[0.68rem] font-mono text-[var(--color-text-secondary)]">
              Software Developer · MCA Student
            </p>
            <p className="text-[0.65rem] font-mono text-[var(--color-text-tertiary)] mt-0.5">
              Panvel, Maharashtra · Open to Opportunities
            </p>
          </div>

          {/* Copyright */}
          <p className="text-[0.65rem] font-mono text-[var(--color-text-tertiary)]">
            © 2026 Amogh Kalyanshetti
          </p>

          {/* Links & Back to top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/amogh2901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amogh-kalyanshetti-20861a296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/aamoghh.29/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="mailto:amoghkalyanshetti2005@gmail.com"
              className="text-[0.7rem] font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
              aria-label="Email"
            >
              Email
            </a>

            <div
              className="w-px h-3.5 mx-1 hidden sm:block bg-[var(--color-border)]"
              aria-hidden="true"
            />

            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1.5 text-[0.7rem] font-mono font-semibold transition-colors duration-150 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] cursor-pointer"
              style={{ background: "none", border: "none", padding: 0 }}
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              <span>BACK TO TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
