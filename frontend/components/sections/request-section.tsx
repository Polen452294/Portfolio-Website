"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

import { createRequest } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { initialRequestForm, type RequestFormState } from "@/types/request";

export function RequestSection() {
  const [form, setForm] = useState<RequestFormState>(initialRequestForm);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof RequestFormState>(
    key: K,
    value: RequestFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await createRequest(form);
      setSuccessMessage("Заявка успешно отправлена.");
      setForm(initialRequestForm);
    } catch {
      setErrorMessage("Не удалось отправить заявку.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="request" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Card>
          <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
            <FileText className="h-5 w-5" />
          </div>

          <h3 className="text-2xl font-semibold text-white">Создать заказ</h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Форма связана с backend и отправляет заявку в PostgreSQL через FastAPI.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              Frontend: Next.js / React form
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              API: FastAPI endpoint /requests
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              Database: PostgreSQL + SQLAlchemy
            </div>
          </div>
        </Card>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Имя</span>
              <input
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
                placeholder="Ваше имя"
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Telegram / Email</span>
              <input
                value={form.contact}
                onChange={(e) => updateField("contact", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
                placeholder="@username или email"
                required
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Тип проекта</span>
              <select
                value={form.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
              >
                <option>Telegram-бот</option>
                <option>Бот в Max</option>
                <option>Парсер</option>
                <option>Система приема заявок</option>
                <option>CRM-интеграция</option>
                <option>AI-автоматизация</option>
                <option>Backend-система</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Бюджет</span>
              <input
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
                placeholder="Например: от 50 000 ₽"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm text-slate-300">Описание задачи</span>
            <textarea
              rows={6}
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
              placeholder="Опишите, что нужно автоматизировать, какие есть процессы, интеграции и желаемый результат"
              required
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs leading-6 text-slate-400">
              {successMessage && <p className="text-emerald-300">{successMessage}</p>}
              {errorMessage && <p className="text-rose-300">{errorMessage}</p>}
              {!successMessage && !errorMessage && (
                <p>После отправки заявка будет сохранена в базу данных.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_24px_rgba(74,222,128,0.28)] transition hover:shadow-[0_0_34px_rgba(74,222,128,0.4)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Отправка..." : "Отправить заявку"}
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs text-slate-400 mt-2">
              Я свяжусь с вами в течение 24 часов
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}