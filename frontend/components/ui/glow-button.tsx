import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type GlowButtonProps = {
  children: ReactNode;
  secondary?: boolean;
  href?: string;
};

export function GlowButton({
  children,
  secondary = false,
  href = "#request",
}: GlowButtonProps) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200 active:scale-95",
        secondary
          ? "border border-emerald-400/20 bg-white/5 text-white hover:border-emerald-300/40 hover:bg-white/10"
          : "bg-emerald-400 text-slate-950 shadow-[0_0_24px_rgba(74,222,128,0.28)] hover:shadow-[0_0_34px_rgba(74,222,128,0.4)]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}