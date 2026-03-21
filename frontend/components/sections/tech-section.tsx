import { CheckCircle2, Database } from "lucide-react";
import { techStack } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const benefits = [
  "Можно быстро обсудить задачу и понять, какое решение подойдет именно под ваш процесс.",
  "На старте не требуется сложное техническое задание — достаточно описать идею, проблему или желаемый результат.",
  "Сразу можно определить, какие функции, интеграции и этапы действительно нужны проекту.",
  "Проект можно развивать поэтапно: от первой версии до полноценной системы с автоматизацией, аналитикой и интеграциями.",
];

export function TechSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Technology"
        title="Технологии и подход к проекту"
        text="Подбираю стек и архитектуру под реальные задачи проекта, чтобы решение было не только рабочим, но и удобным для дальнейшего развития."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
            <Database className="h-5 w-5" />
          </div>

          <h3 className="text-2xl font-semibold text-white">
            Технологии подбираются под задачи проекта
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Для каждого проекта подбирается подходящий набор технологий с учетом целей,
            нагрузки, удобства поддержки и возможностей для дальнейшего развития.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <h3 className="text-2xl font-semibold text-white">Что это дает</h3>

          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {benefits.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}