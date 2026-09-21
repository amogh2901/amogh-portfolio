"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * HeroVisual — Original Abstract Engineering Visual Sculpture
 * Communicates: SYSTEMS · STRUCTURE · FLOW · BUILDING · CONNECTION
 *
 * Designed as a digital art installation of architectural lines,
 * flowing coordinate paths, dimensional planes, and illuminated nodes.
 *
 * Supports responsive viewport adaptation:
 * - Desktop/Tablet: full isometric depth, layered planes, vectors, and interactive mouse parallax
 * - Mobile: streamlined geometric coordinate lines & core nodes to prevent visual noise or text collision
 */
interface HeroVisualProps {
  isReady?: boolean;
  className?: string;
  isMobile?: boolean;
}

export default function HeroVisual({ isReady = true, className = "", isMobile = false }: HeroVisualProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 22, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D perspective tilts and floating parallax (disabled/minimized on mobile)
  const rotateX = useTransform(smoothY, [0, 1], isMobile ? [0, 0] : [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], isMobile ? [0, 0] : [-6, 6]);
  const posX = useTransform(smoothX, [0, 1], isMobile ? [0, 0] : [-10, 10]);
  const posY = useTransform(smoothY, [0, 1], isMobile ? [0, 0] : [-8, 8]);

  useEffect(() => {
    if (isMobile) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) {
    /* ── Streamlined Mobile Geometry: Crisp, non-intrusive, strictly within viewport ── */
    return (
      <div className={`relative select-none pointer-events-none w-full max-w-[320px] mx-auto flex items-center justify-center ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 360 220"
          className="w-full h-auto overflow-visible opacity-75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mobile-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="mobile-facet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.10" />
              <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Minimal Isometric Axes */}
          <g stroke="var(--color-border)" strokeWidth="0.6" opacity="0.4">
            <line x1="30" y1="130" x2="330" y2="30" />
            <line x1="30" y1="190" x2="330" y2="90" />
            <line x1="180" y1="20" x2="180" y2="200" strokeDasharray="3 3" />
          </g>

          {/* Single Facet Plane */}
          <polygon
            points="70,140 180,90 290,130 180,180"
            fill="url(#mobile-facet)"
            stroke="var(--color-border-hover)"
            strokeWidth="0.75"
          />

          {/* Subtle Vector Curve */}
          <path
            d="M 50,160 C 120,180 150,110 210,85 C 260,65 290,90 320,50"
            stroke="url(#mobile-line)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Precision Nodes */}
          <circle cx="180" cy="90" r="3" fill="var(--color-accent)" />
          <circle cx="180" cy="90" r="7" stroke="var(--color-accent)" strokeWidth="0.5" strokeOpacity="0.4" />
          <circle cx="70" cy="140" r="2" fill="var(--color-border-hover)" />
          <circle cx="290" cy="130" r="2" fill="var(--color-accent)" strokeOpacity="0.6" />
          <circle cx="210" cy="85" r="2.5" fill="var(--color-accent)" />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        x: posX,
        y: posY,
        perspective: 1200,
      }}
      className={`relative select-none pointer-events-none w-full flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 520"
        className="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[650px] h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dimensional Plane Shading */}
          <linearGradient id="plane-alpha" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.14" />
            <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.03" />
            <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="plane-beta" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-text-primary)" stopOpacity="0.08" />
            <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0.02" />
            <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="plane-gamma" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.09" />
            <stop offset="100%" stopColor="var(--color-accent-subtle)" stopOpacity="0.01" />
          </linearGradient>

          {/* Flow Spline Gradients */}
          <linearGradient id="spline-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.0" />
            <stop offset="35%" stopColor="var(--color-accent)" stopOpacity="0.75" />
            <stop offset="75%" stopColor="var(--color-accent-bright)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="spline-secondary" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-text-tertiary)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-border-hover)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* ── Layer 1: Engineering Axis Grid & Measurement Ticks ── */}
        <g stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3">
          {/* Isometric grid rays */}
          <line x1="60" y1="280" x2="540" y2="80" />
          <line x1="60" y1="380" x2="540" y2="180" />
          <line x1="60" y1="480" x2="540" y2="280" />
          <line x1="120" y1="80" x2="480" y2="440" strokeDasharray="3 4" />
          <line x1="220" y1="60" x2="580" y2="420" strokeDasharray="3 4" />

          {/* Precision tick markers */}
          <circle cx="200" cy="233" r="1.5" fill="var(--color-border-hover)" />
          <circle cx="340" cy="186" r="1.5" fill="var(--color-border-hover)" />
          <circle cx="400" cy="166" r="1.5" fill="var(--color-border-hover)" />
          <circle cx="270" cy="310" r="1.5" fill="var(--color-border-hover)" />
        </g>

        {/* ── Layer 2: Dimensional Isometric Facets (Planes) ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Foundation cantilever plane */}
          <polygon
            points="110,340 310,230 510,320 310,430"
            fill="url(#plane-alpha)"
            stroke="var(--color-border)"
            strokeWidth="0.6"
          />

          {/* Intermediate elevated plane */}
          <polygon
            points="140,260 340,150 530,240 330,350"
            fill="url(#plane-beta)"
            stroke="var(--color-border-hover)"
            strokeWidth="0.75"
          />

          {/* Upper focal plane */}
          <polygon
            points="170,180 330,95 490,175 330,260"
            fill="url(#plane-gamma)"
            stroke="var(--color-accent)"
            strokeWidth="0.9"
            strokeOpacity="0.45"
          />

          {/* Inter-plane architectural vertical ties */}
          <g stroke="var(--color-border)" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.5">
            <line x1="170" y1="180" x2="140" y2="260" />
            <line x1="330" y1="95" x2="340" y2="150" />
            <line x1="490" y1="175" x2="530" y2="240" />
            <line x1="330" y1="260" x2="330" y2="350" />
            <line x1="330" y1="350" x2="310" y2="430" />
          </g>
        </motion.g>

        {/* ── Layer 3: Central Crystalline Geometric Core ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top polyhedron facet */}
          <polygon
            points="320,180 370,155 370,215 320,240"
            fill="var(--color-accent)"
            fillOpacity="0.16"
            stroke="var(--color-accent)"
            strokeWidth="1.0"
            strokeOpacity="0.7"
          />
          {/* Left lateral facet */}
          <polygon
            points="270,205 320,180 320,240 270,265"
            fill="var(--color-text-primary)"
            fillOpacity="0.06"
            stroke="var(--color-border-hover)"
            strokeWidth="0.8"
          />
          {/* Lower anchoring facet */}
          <polygon
            points="270,265 320,240 370,215 320,290"
            fill="var(--color-accent)"
            fillOpacity="0.08"
            stroke="var(--color-accent)"
            strokeWidth="0.85"
            strokeOpacity="0.4"
          />
        </motion.g>

        {/* ── Layer 4: Flowing Curvilinear Vectors (Systems & Flow) ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
        >
          {/* Primary dynamic data curve */}
          <path
            d="M 90,400 C 180,450 230,300 320,240 C 420,170 450,230 520,140"
            stroke="url(#spline-primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Secondary architectural return curve */}
          <path
            d="M 120,210 C 210,160 270,320 380,300 C 470,285 480,390 540,400"
            stroke="url(#spline-secondary)"
            strokeWidth="1.1"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* Vertical elevation stream linking downward toward section base */}
          <path
            d="M 320,510 C 310,430 325,330 320,240 C 315,160 330,105 330,60"
            stroke="var(--color-accent)"
            strokeWidth="0.85"
            strokeOpacity="0.4"
            strokeDasharray="3 4"
          />
        </motion.g>

        {/* ── Layer 5: System Junction Nodes ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
        >
          {/* Apex focal node */}
          <circle cx="320" cy="180" r="3.5" fill="var(--color-accent)" />
          <circle cx="320" cy="180" r="8" stroke="var(--color-accent)" strokeWidth="0.5" strokeOpacity="0.4" />

          {/* Secondary structural nodes */}
          <circle cx="170" cy="180" r="2" fill="var(--color-border-hover)" />
          <circle cx="490" cy="175" r="2.5" fill="var(--color-accent)" strokeOpacity="0.6" />
          <circle cx="330" cy="95" r="2.5" fill="var(--color-accent)" strokeOpacity="0.5" />
          <circle cx="340" cy="150" r="2" fill="var(--color-border-hover)" />
          <circle cx="320" cy="240" r="3" fill="var(--color-accent)" strokeOpacity="0.6" />
          <circle cx="310" cy="430" r="2" fill="var(--color-border-hover)" />
          <circle cx="520" cy="140" r="3" fill="var(--color-accent)" />
          <circle cx="90" cy="400" r="2.5" fill="var(--color-accent)" strokeOpacity="0.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
