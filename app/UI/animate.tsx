"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, ReactNode } from "react";
export interface AnimatedProps {
  children: ReactNode;
  className?: string;
  key?: string | number;
}
export function Animated({ children, className, key }: AnimatedProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}
