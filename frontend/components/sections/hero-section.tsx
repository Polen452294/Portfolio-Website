"use client";

import { motion } from "framer-motion";
import { Settings2, Bot, Database, Layers3, Sparkles } from "lucide-react";
import { metrics } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { GlowButton } from "@/components/ui/glow-button";

const previewItems = [
  {
    title: "Telegram / Max bot",
    text: "Автоматизация общения, заявок и уведомлений",
    icon: Bot,
  },
  {
    title: "Прием заявок",
    text: "Форма → API → база данных → админка",
    icon: Database,
  },
  {
    title: "Интеграции и backend",
    text: "CRM, API, внутренние сервисы и логика",
    icon: Layers3,
  },
  {
    title: "AI-функции",
    text: "Обработка данных, ассистенты, генерация контента",
    icon: Sparkles,
  },
];

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
          <Settings2 className="h-3.5 w-3.5" />
          Automation Systems Developer
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
          Разрабатываю системы автоматизации, ботов и AI-решения для бизнеса.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Создаю проекты, которые уменьшают ручную рутину, ускоряют обработку заявок,
          объединяют сервисы через API и превращают процессы в работающую систему.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GlowButton href="#request">Start Project</GlowButton>
          <GlowButton href="#portfolio" secondary>
            View Portfolio
          </GlowButton>
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((item) => (
          <Card
            key={item.label}
            className="flex min-h-[180px] flex-col justify-center rounded-2xl p-5"
          >
            <div className="text-2xl font-semibold leading-none text-emerald-300">
              {item.value}
            </div>
            <div className="mt-3 max-w-[160px] text-sm leading-relaxed text-slate-300 break-words">
              {item.label}
            </div>
          </Card>
        ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-xl justify-center"
      >
        <div className="absolute -inset-6 rounded-[42px] bg-emerald-400/10 blur-3xl" />
        <div className="relative w-[340px] rounded-[40px] border border-white/10 bg-[#081122]/80 p-4 shadow-[0_0_60px_rgba(52,211,153,0.08)] md:w-[400px]">
          <div className="rounded-[32px] border border-white/5 bg-[#020617] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                  Live Preview
                </div>
                <div className="mt-1 text-sm text-slate-300">Что я разрабатываю</div>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300">
                Active
              </div>
            </div>

            <div className="space-y-3">
              {previewItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                  >
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium leading-tight text-white">
                        {item.title}
                      </div>
                      <div className="mt-1 max-w-[180px] text-xs leading-relaxed text-slate-400 break-words">
                        {item.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}