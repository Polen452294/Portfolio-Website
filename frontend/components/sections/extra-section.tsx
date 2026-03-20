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
    text: "Можно быстро собрать первую рабочую версию проекта, чтобы протестировать идею, получить первые заявки и не тратить месяцы на долгую разработку.",
    icon: Rocket,
  },
  {
    title: "Прием заявок и хранение в БД",
    text: "Формы, API и база данных объединяются в единую систему: заявки не теряются, их можно смотреть в админке и дальше обрабатывать автоматически.",
    icon: Database,
  },
  {
    title: "Боты и автоматизация процессов",
    text: "Telegram-боты, Max-боты, уведомления, сценарии обработки заявок и автоматизация рутинных действий внутри бизнеса.",
    icon: Bot,
  },
  {
    title: "Интеграции с CRM и API",
    text: "Сайт и backend можно связать с CRM, платежами, таблицами, сторонними API и внутренними сервисами компании.",
    icon: Layers3,
  },
  {
    title: "Аналитика и управляемость",
    text: "Можно добавить метрики, статусные блоки, админ-панель и аналитику, чтобы сайт был не только красивым, но и полезным как инструмент продаж.",
    icon: BarChart3,
  },
  {
    title: "Презентация кейсов и доверие",
    text: "Сильные кейсы, понятная структура и демонстрация реальных сценариев делают сайт более убедительным для клиента и повышают конверсию.",
    icon: FileText,
  },
];

export function ExtraSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Extra Value"
        title="Что делает сайт сильнее и полезнее"
        text="Это не просто декоративные блоки, а элементы, которые усиливают доверие, упрощают понимание твоих услуг и помогают получать больше заявок."
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