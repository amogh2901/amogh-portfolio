"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar({ isReady = true }: { isReady?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sectionIds = ["about", "skills", "projects", "education", "certifications", "contact"];
          const scrollPosition = window.scrollY + 160;

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(sectionIds[i]);
              ticking = false;
              return;
            }
          }
          setActiveSection("");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isReady ? 0 : -20, opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[var(--color-header-blur)] backdrop-blur-[14px] border-b border-[var(--color-border)] py-3 shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <nav
          className="container-editorial flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-baseline gap-1.5 cursor-pointer text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
            aria-label="Amogh Kalyanshetti — Home"
          >
            <span
              className="text-[1.1rem] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AMOGH
            </span>
            <span className="text-[0.7rem] font-mono font-bold text-[var(--color-accent)]">
              / DEV
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-[0.63rem] font-medium tracking-[0.1em] uppercase transition-colors duration-150 relative py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded ${
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.8 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Group */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-1.5 text-[0.65rem] font-mono font-semibold tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-raised)] transition-all duration-150 cursor-pointer"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight size={11} className="opacity-70" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)] bg-[var(--color-card-bg)] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu — sheet from top */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-base)]/97 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 pt-24"
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.045, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] py-3 border-b border-[var(--color-border)] flex items-center justify-between transition-colors duration-150"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={17} className="text-[var(--color-text-tertiary)]" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--color-border)] space-y-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary-lg w-full justify-center font-bold"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight size={16} />
              </a>

              <p className="text-center text-[0.65rem] font-mono text-[var(--color-text-tertiary)]">
                Press ESC or tap outside to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
