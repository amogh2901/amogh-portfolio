"use client";

import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { type MouseEvent, type ReactNode, useRef, useState } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  variants?: Variants;
};

export default function MagneticButton({
  children,
  className = "",
  href,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
  variants,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const element = buttonRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);
    const distance = Math.hypot(offsetX, offsetY) || 1;
    const strength = Math.min(15 / distance, 1);

    x.set(offsetX * strength);
    y.set(offsetY * strength);
    setMousePosition({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 50px)`,
        }}
      />
      <span className="relative z-10 inline-flex items-center justify-center gap-3">{children}</span>
    </>
  );

  const motionProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
    className: `group relative overflow-hidden ${className}`,
    target,
    rel,
    "aria-label": ariaLabel,
    variants,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    animate: { boxShadow: isHovered ? "0 18px 50px rgba(59, 130, 246, 0.18)" : "0 0px 0px rgba(59, 130, 246, 0)" },
    transition: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
  };

  if (href) {
    return (
      <motion.a {...motionProps} href={href} download={download}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} type="button">
      {content}
    </motion.button>
  );
}
