import { processSteps } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 min-[1024px]:max-[1440px]:max-w-[1240px] min-[1024px]:max-[1440px]:px-10"
    >
      <SectionTitle
        eyebrow="Workflow"
        title="Как строится работа"
        text="Понятный процесс помогает быстрее согласовать требования, избежать хаоса в разработке и спокойно двигаться к запуску."
      />

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Card key={step} className="relative overflow-hidden p-4 sm:p-5">
            <div className="absolute right-3 top-3 text-3xl font-semibold text-white/5 sm:right-4 sm:top-4 sm:text-4xl">
              0{index + 1}
            </div>

            <div className="mb-3 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300 sm:mb-4 sm:text-xs">
              Этап {index + 1}
            </div>

            <div className="text-sm font-medium leading-6 text-white sm:text-base sm:leading-7">
              {step}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}