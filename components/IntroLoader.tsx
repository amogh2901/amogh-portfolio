"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   STATUS MESSAGES mapped to progress thresholds
   ───────────────────────────────────────────────────────── */
const MESSAGES = [
  { at: 0,  text: "PREPARING PORTFOLIO" },
  { at: 20, text: "LOADING PROFILE" },
  { at: 40, text: "LOADING PROJECTS" },
  { at: 60, text: "LOADING CAPABILITIES" },
  { at: 75, text: "PREPARING WORKSPACE" },
  { at: 90, text: "ALMOST READY" },
];

function getStatusText(pct: number): string {
  let label = MESSAGES[0].text;
  for (const m of MESSAGES) {
    if (pct >= m.at) label = m.text;
  }
  return label;
}

/* ─────────────────────────────────────────────────────────
   Circular SVG arc helper
   r = 44  →  circumference = 2π × 44 ≈ 276.46
   ───────────────────────────────────────────────────────── */
const RADIUS = 44;
const CIRC = 2 * Math.PI * RADIUS; // ≈ 276.46

/* ─────────────────────────────────────────────────────────
   IntroLoader
   ───────────────────────────────────────────────────────── */
export default function IntroLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  /* progress goes 0 → 100, driven by a setInterval tick */
  const [progress, setProgress] = useState(0);

  /* true while the exit animation is playing */
  const [exiting, setExiting] = useState(false);

  /* false once exit animation has fully finished */
  const [mounted, setMounted] = useState(true);

  /* refs so callbacks always see fresh values */
  const doneRef       = useRef(false);
  const intervalRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  /* ── clear all timers ── */
  const clearAll = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (timeoutRef.current)  { clearTimeout(timeoutRef.current);   timeoutRef.current  = null; }
  }, []);

  /* ── begin exit sequence ── */
  const beginExit = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    clearAll();

    /* ensure progress shows 100 */
    setProgress(100);

    /* fire parent callback immediately */
    onCompleteRef.current?.();

    /* restore scrolling and ensure top scroll position */
    window.scrollTo(0, 0);
    document.body.style.overflow = "";

    /* brief pause at 100% then fade out */
    timeoutRef.current = setTimeout(() => {
      setExiting(true);
      /* unmount after exit animation completes */
      timeoutRef.current = setTimeout(() => setMounted(false), 800);
    }, 480);
  }, [clearAll]);

  /* ── ESC key ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") beginExit(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [beginExit]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* ── Main progress ticker ── */
  useEffect(() => {
    /* If user prefers reduced motion, skip immediately */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      beginExit();
      return;
    }

    /*
      We increment by 1 every TICK_MS milliseconds.
      Total time to reach 100 = 100 × TICK_MS.

      We want ~4 seconds total, so TICK_MS = 40ms.
      That gives 100 × 40ms = 4000ms.

      We slow down near 90–99 to give the "almost ready" feeling:
      - 0–89  → increment every 35ms
      - 90–98 → increment every 90ms
      - 99    → hold until beginExit fires
    */
    const TICK_NORMAL = 35;  // ms per 1% (0–89)
    const TICK_SLOW   = 90;  // ms per 1% (90–99)

    const tick = () => {
      if (doneRef.current) return;

      setProgress((prev) => {
        if (prev >= 99) {
          /* reached 99 — now call beginExit and don't increment further */
          /* Use timeout so state update completes first */
          clearAll();
          timeoutRef.current = setTimeout(beginExit, 120);
          return 99;
        }

        const next = prev + 1;

        /* reschedule with the right speed for the new value */
        clearAll();
        const delay = next >= 90 ? TICK_SLOW : TICK_NORMAL;
        intervalRef.current = setTimeout(tick, delay);

        return next;
      });
    };

    /* kick off */
    intervalRef.current = setTimeout(tick, TICK_NORMAL);

    return clearAll;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  /* ── derived values ── */
  const displayPct  = progress;
  const statusText  = progress >= 100 ? "READY" : getStatusText(displayPct);
  const isReady     = progress >= 100;
  const arcOffset   = CIRC - (CIRC * displayPct) / 100;
  const padded      = displayPct < 10 ? `0${displayPct}` : `${displayPct}`;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.018,
            filter: "blur(6px)",
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{ background: "var(--color-bg-base)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio loading"
          aria-busy={!isReady}
        >

          {/* ── Subtle ambient radial glow ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
            }}
          />

          {/* ── Identity block ── */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">

            {/* Brand wordmark */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-[0.4em] mb-3"
            >
              <span
                className="text-[1.9rem] sm:text-[2.2rem] font-bold tracking-tight leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                }}
              >
                AMOGH
              </span>
              <span
                className="text-[1.1rem] sm:text-[1.25rem] font-mono font-bold leading-none"
                style={{ color: "var(--color-accent)" }}
              >
                / DEV
              </span>
            </motion.div>

            {/* Full name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="font-mono font-semibold tracking-[0.2em] uppercase mb-1.5"
              style={{
                fontSize: "0.65rem",
                color: "var(--color-text-tertiary)",
              }}
            >
              AMOGH KALYANSHETTI
            </motion.p>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="font-mono uppercase tracking-[0.14em] mb-12"
              style={{
                fontSize: "0.62rem",
                color: "var(--color-text-tertiary)",
              }}
            >
              Software Developer&nbsp;&nbsp;·&nbsp;&nbsp;MCA Student
            </motion.p>

            {/* ── Circular progress ring ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              style={{ width: 128, height: 128 }}
              role="progressbar"
              aria-label="Loading progress"
              aria-valuenow={displayPct}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* SVG ring — rotated so arc starts at 12-o'clock */}
              <svg
                width={128}
                height={128}
                viewBox="0 0 100 100"
                style={{ transform: "rotate(-90deg)" }}
                aria-hidden="true"
              >
                {/* Track */}
                <circle
                  cx={50}
                  cy={50}
                  r={RADIUS}
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth={1.8}
                />
                {/* Progress fill */}
                <circle
                  cx={50}
                  cy={50}
                  r={RADIUS}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={arcOffset}
                  style={{ transition: "stroke-dashoffset 60ms linear" }}
                />
              </svg>

              {/* Centred percentage readout */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                aria-live="polite"
                aria-atomic="true"
              >
                <span
                  className="font-mono font-bold tabular-nums leading-none"
                  style={{
                    fontSize: "1.65rem",
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {padded}
                </span>
                <span
                  className="font-mono font-semibold leading-none mt-1"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--color-text-tertiary)",
                    letterSpacing: "0.08em",
                  }}
                >
                  %
                </span>
              </div>
            </motion.div>

            {/* ── Status text ── */}
            <div className="h-8 flex items-center justify-center mt-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusText}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.18 }}
                  className="font-mono font-semibold uppercase tracking-[0.14em]"
                  style={{
                    fontSize: "0.62rem",
                    color: isReady ? "var(--color-accent)" : "var(--color-text-secondary)",
                  }}
                >
                  {isReady ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="w-[7px] h-[7px] rounded-full bg-[var(--color-accent)] inline-block animate-live-dot"
                        aria-hidden="true"
                      />
                      READY
                    </span>
                  ) : (
                    statusText
                  )}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* ── SKIP button ── */}
          <div className="absolute bottom-7 right-7">
            <button
              type="button"
              onClick={beginExit}
              className="flex items-center gap-2 font-mono uppercase tracking-[0.12em] cursor-pointer transition-colors duration-150"
              style={{
                fontSize: "0.65rem",
                color: "var(--color-text-tertiary)",
                background: "none",
                border: "none",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-tertiary)")
              }
              aria-label="Skip intro"
            >
              <span>SKIP INTRO</span>
              <span
                className="px-1.5 py-0.5 rounded border font-mono"
                style={{
                  fontSize: "0.58rem",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                ESC
              </span>
            </button>
          </div>

          {/* ── Thin bottom accent line (fills with progress) ── */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: 2, background: "var(--color-border-subtle)" }}
            aria-hidden="true"
          >
            <div
              style={{
                height: "100%",
                width: `${displayPct}%`,
                background: "var(--color-accent)",
                opacity: 0.45,
                transition: "width 60ms linear",
              }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
