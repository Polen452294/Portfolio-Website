"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Dot = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  xShift: number;
  yShift: number;
  opacityMin: number;
  opacityMax: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createDots(count: number): Dot[] {
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    left: `${randomBetween(2, 98)}%`,
    top: `${randomBetween(4, 96)}%`,
    size: randomBetween(6, 14),
    duration: randomBetween(6, 12),
    delay: randomBetween(0, 3),
    xShift: randomBetween(-14, 14),
    yShift: randomBetween(-14, 14),
    opacityMin: randomBetween(0.2, 0.45),
    opacityMax: randomBetween(0.75, 1),
  }));
}

export default function FloatingShapes() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(createDots(26));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.05),transparent_22%)]" />

      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(52,211,153,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />

      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            opacity: [dot.opacityMin, dot.opacityMax, dot.opacityMin],
            scale: [1, 1.22, 1],
            x: [0, dot.xShift, 0],
            y: [0, dot.yShift, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}