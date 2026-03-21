"use client";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

const briefingItems = [
  "Что нужно автоматизировать или разработать",
  "Как сейчас выглядит процесс и где возникают сложности",
  "Какие интеграции нужны: Telegram, Max, CRM, API, платежи и другие сервисы",
  "Какой результат нужен на выходе",
  "Желаемые сроки запуска",
  "Ориентир по бюджету, если он уже есть",
];

const contactItems = [
  {
    title: "Telegram",
    href: "https://t.me/likeaatea",
    icon: MessageCircle,
    text: "Самый быстрый способ начать обсуждение проекта.",
  },
  {
    title: "Max",
    href: "https://max.ru/u/f9LHodD0cOLBuQru9TuIcrq9TtQ-rk93xm-oFACo-BCvcrba4KdlG37ts_M",
    icon: MessageCircle,
    text: "Можно написать задачу и обсудить детали в удобном формате.",
  },
  {
    title: "Email",
    href: "mailto:yourmail@example.com",
    icon: Mail,
    text: "Подходит для подробного описания проекта и длинных вводных.",
  },
];

export function RequestSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Card>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
            <MessageCircle className="h-3.5 w-3.5" />
            Contact
          </div>

          <h3 className="text-2xl font-semibold text-white">Обсудить проект</h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Чтобы обсудить проект, достаточно
            написать удобным способом и подробно описать задачу. Этого достаточно для
            первичной оценки, понимания формата работы и следующего шага.
          </p>

          <div className="mt-6 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      {item.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                </a>
              );
            })}
          </div>

        </Card>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md"
        >
          <div className="text-sm text-slate-400">Что указать в сообщении</div>

          <h3 className="mt-3 text-2xl font-semibold text-white">
            Информация для быстрой оценки проекта
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Чем понятнее исходные вводные, тем быстрее можно оценить объем работ,
            подобрать подходящую архитектуру и предложить реалистичный следующий шаг.
          </p>

          <div className="mt-6 space-y-4">
            {briefingItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 text-sm text-slate-200"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
            Можно писать даже без полного технического задания. Достаточно описать идею,
            текущую проблему или желаемый результат — дальше структуру проекта уже можно
            собрать в процессе обсуждения.
          </div>
        </motion.div>
      </div>
    </section>
  );
}