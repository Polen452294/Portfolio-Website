import { BadgeCheck, FileCheck2, ShieldCheck, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowButton } from "@/components/ui/glow-button";
import { SectionTitle } from "@/components/ui/section-title";

const trustItems = [
  {
    title: "Реальные отзывы клиентов",
    text: "На Profi.ru можно заранее посмотреть отзывы и понять, как проходит работа со мной на практике.",
    icon: Star,
  },
  {
    title: "Открытый профиль исполнителя",
    text: "Профиль на платформе открыт для просмотра, поэтому до начала работы можно ознакомиться с информацией обо мне.",
    icon: BadgeCheck,
  },
  {
    title: "Личность подтверждена платформой",
    text: "Аккаунт на Profi.ru подтвержден платформой, включая проверку паспорта, что добавляет прозрачности.",
    icon: ShieldCheck,
  },
  {
    title: "Понятный старт сотрудничества",
    text: "Сначала можно обсудить задачу, оценить формат работы и только потом переходить к реализации проекта.",
    icon: FileCheck2,
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Reviews & Reputation"
        title="Гарантии качества и отзывы"
        text="До начала работы можно заранее ознакомиться с отзывами, посмотреть профиль на Profi.ru и убедиться, что личность подтверждена платформой. Это помогает начать сотрудничество спокойнее и прозрачнее."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="h-full">
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="flex h-full flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Profi.ru
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Проверяемая репутация и открытая информация
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Это не просто сайт-визитка. При желании можно перейти на профиль Profi.ru,
              посмотреть отзывы, ознакомиться с аккаунтом и увидеть подтвержденную
              платформой личность. Такой формат снижает недоверие на старте и делает
              обсуждение проекта более комфортным.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlowButton href="https://profi.ru/profile/ArdashevAD/#reviews-tab">
              Отзывы на Profi.ru
            </GlowButton>

            <GlowButton href="https://profi.ru/profile/ArdashevAD" secondary>
              Профиль на Profi.ru
            </GlowButton>
          </div>
        </Card>
      </div>
    </section>
  );
}