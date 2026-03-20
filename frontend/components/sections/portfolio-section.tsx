import { ArrowRight, Briefcase } from "lucide-react";
import { portfolio } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="Проекты и кейсы"
        text="Примеры решений, которые помогают автоматизировать процессы, упростить работу с заявками и выстроить удобные сценарии для бизнеса."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <Card key={item.title} className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                Case {index + 1}
              </div>
              <Briefcase className="h-5 w-5 text-emerald-300" />
            </div>

            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-emerald-300">{item.stack}</p>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{item.text}</p>

            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08] active:scale-95"
            >
              Подробнее <ArrowRight className="h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}