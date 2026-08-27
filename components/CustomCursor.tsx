"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    const frame = window.requestAnimationFrame(() => setIsTouchDevice(touchDevice));

    if (touchDevice) return () => window.cancelAnimationFrame(frame);

    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };

    const getClickable = (target: EventTarget | null) =>
      target instanceof Element ? target.closest("a, button, [role=\"button\"]") : null;

    const handleMouseOver = (event: MouseEvent) => {
      if (getClickable(event.target)) setIsHovering(true);
    };

    const handleMouseOut = (event: MouseEvent) => {
      const clickable = getClickable(event.target);
      const relatedClickable = getClickable(event.relatedTarget);
      if (clickable && clickable !== relatedClickable) setIsHovering(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined" || isTouchDevice) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full bg-white mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: isHovering ? 2.5 : 1, opacity: isHovering ? 0.75 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
