import type { Variants } from "framer-motion";

// High-performance cubic-bezier easing for polished commercial interfaces
export const EASE_FAST = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = "easeOut" as const;

/** Restrained fade-up variant (subtle vertical displacement) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Staggered fade-up — uses motion custom prop for delay */
export function staggerFadeUp(i: number) {
  return {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  };
}

export const HIDDEN = { opacity: 0, y: 16 };

