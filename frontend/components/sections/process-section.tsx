import { processSteps } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Workflow"
        title="Как строится работа"
        text="Прозрачный процесс помогает быстрее согласовать требования, избежать хаоса в разработке и запускать проект без лишних задержек."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Card key={step} className="relative overflow-hidden p-5">
            <div className="absolute right-4 top-4 text-4xl font-semibold text-white/5">
              0{index + 1}
            </div>
            <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              Этап {index + 1}
            </div>
            <div className="text-base font-medium leading-7 text-white">{step}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}