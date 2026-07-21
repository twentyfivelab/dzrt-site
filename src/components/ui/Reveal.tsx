"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

// Every client-side navigation mounts a brand new Reveal instance, since the
// page it belongs to unmounts/remounts. Without this flag, content already
// above the fold (the hero, most section intros) would replay its hidden ->
// visible fade on every single page change, flashing the same content that
// was already showing an instant ago. This flag makes the entrance play once
// per browser session (a real first load), then skips straight to visible on
// every subsequent navigation. Scroll-triggered reveals further down the page
// are unaffected: whileInView still animates anything not yet in view.
let introPlayedThisSession = false;

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [skipEntrance] = useState(() => introPlayedThisSession);

  useEffect(() => {
    introPlayedThisSession = true;
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial={skipEntrance ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
