"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pointerCoarse = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isTouch = pointerCoarse.matches;
    let isReduced = reducedMotion.matches;

    if (isTouch || isReduced) return;

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let mouseX = -800;
    let mouseY = -800;
    let currentX = -800;
    let currentY = -800;
    let isVisible = false;
    let isRunning = false;
    let rafId = 0;

    const updatePosition = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        currentX = mouseX;
        currentY = mouseY;
        if (spotlight) {
          spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        isRunning = false;
        return;
      }

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    const startLoop = () => {
      if (!isRunning && !isReduced) {
        isRunning = true;
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (spotlight) spotlight.style.opacity = "1";
      }

      startLoop();
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (spotlight) spotlight.style.opacity = "0";
    };

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      isReduced = e.matches;
      if (spotlight) {
        spotlight.style.display = isReduced ? "none" : "block";
      }
      if (isReduced && isRunning) {
        cancelAnimationFrame(rafId);
        isRunning = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave, { passive: true });
    reducedMotion.addEventListener("change", onReducedMotionChange);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      if (isRunning) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block overflow-hidden"
    >
      <div
        ref={spotlightRef}
        className="w-[420px] h-[420px] -ml-[210px] -mt-[210px] rounded-full will-change-transform opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.045) 0%, rgba(37, 99, 235, 0.015) 45%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
    </div>
  );
}

