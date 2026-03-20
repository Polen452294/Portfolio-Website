import {
  BarChart3,
  Bot,
  Database,
  FileText,
  Layers3,
  Rocket,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const extraItems = [
  {
    title: "Быстрый запуск MVP",
    text: "Можно быстро запустить первую рабочую версию проекта, чтобы проверить идею на практике, начать принимать обращения и не тратить месяцы на долгую подготовку.",
    icon: Rocket,
  },
  {
    title: "Прием заявок и хранение в базе",
    text: "Все обращения из формы сохраняются в системе: заявки не теряются, их удобно обрабатывать, сортировать и использовать для дальнейшей работы с клиентами.",
    icon: Database,
  },
  {
    title: "Боты и автоматизация процессов",
    text: "Проект можно дополнить ботами, уведомлениями и автоматическими сценариями, чтобы сократить ручную работу и ускорить обработку заявок.",
    icon: Bot,
  },
  {
    title: "Интеграции с CRM и API",
    text: "Проект можно связать с CRM, платежами, таблицами, внутренними сервисами и внешними API, чтобы данные передавались автоматически и без лишних действий вручную.",
    icon: Layers3,
  },
  {
    title: "Аналитика и управляемость",
    text: "Можно подключить аналитику, статусы заявок и административные инструменты, чтобы контролировать обращения, видеть эффективность системы и принимать решения на основе данных.",
    icon: BarChart3,
  },
  {
    title: "Презентация кейсов и доверие",
    text: "Понятная структура, аккуратная подача услуг и реальные кейсы помогают быстрее сформировать доверие и повышают вероятность того, что ваш посетитель оставит заявку.",
    icon: FileText,
  },
];

export function ExtraSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Extra Value"
        title="ЧЧто вы получаете на выходе"
        text="Не просто скрипт, а инструмент, который помогает привлекать обращения, упрощать работу с клиентами и закладывать основу для дальнейшего роста проекта."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {extraItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="h-full">
              <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}