import { services } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Решения под реальные бизнес-задачи"
        text="От точечной автоматизации до полноценных систем с ботами, интеграциями, backend-логикой и AI-функциями."
      />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = index === 0;

          return (
            <div key={service.title} className="relative">
              {isFeatured && (
                <>
                  <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-emerald-400/10 blur-3xl sm:-inset-4 sm:rounded-[32px]" />
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute left-1/2 top-[58%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[38px] sm:h-32 sm:w-32 sm:blur-[52px]" />
                    <div className="absolute left-[42%] top-[30%] h-16 w-16 rounded-full bg-emerald-400/10 blur-[28px] sm:h-24 sm:w-24 sm:blur-[40px]" />
                  </div>
                </>
              )}

              <Card
                className={[
                  "relative flex h-full min-h-[50px] flex-col p-4 sm:min-h-[355px] sm:p-6",
                  isFeatured ? "border-emerald-400/30 bg-emerald-400/[0.04]" : "",
                ].join(" ")}
              >
                {isFeatured ? (
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-medium text-emerald-200 sm:mb-6 sm:px-3 sm:text-xs">
                    Популярная услуга
                  </div>
                ) : (
                  <div className="mb-3 inline-flex w-fit rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:p-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                )}

                <div className="flex flex-1 flex-col">
                  <h3 className="text-base font-semibold leading-6 text-white sm:text-lg sm:leading-8">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-300 sm:mt-3 sm:text-sm sm:leading-8">
                    {service.text}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}