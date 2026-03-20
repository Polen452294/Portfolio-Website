"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const dots = Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    left: `${5 + ((i * 13) % 90)}%`,
    top: `${6 + ((i * 17) % 82)}%`,
    duration: 7 + (i % 5),
    delay: (i % 6) * 0.7,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.05),transparent_22%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(52,211,153,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />

      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]"
          style={{ left: dot.left, top: dot.top }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
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