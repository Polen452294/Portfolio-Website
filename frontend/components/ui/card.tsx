"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={[
        "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06]",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}