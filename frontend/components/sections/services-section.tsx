import { services } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionTitle
        eyebrow="Services"
        title="Решения под реальные бизнес-задачи"
        text="От точечной автоматизации до полноценных систем с ботами, интеграциями, backend-логикой и AI-функциями."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = index === 0;

          return (
            <div
              key={service.title}
              className={`relative ${isFeatured ? "col-span-2" : ""}`}
            >
              {isFeatured && (
                <div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-emerald-400/10 blur-2xl sm:-inset-3 sm:rounded-[32px] sm:blur-3xl" />
              )}

              <Card
                className={`relative h-full p-4 sm:p-6 ${
                  isFeatured ? "border-emerald-400/30 bg-emerald-400/[0.05]" : ""
                }`}
              >
                {isFeatured ? (
                  <>
                    <div className="mb-3 inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-medium text-emerald-200 sm:mb-4 sm:text-xs">
                      Актуальная услуга
                    </div>

                    <h3 className="text-[17px] font-semibold leading-6 text-white sm:text-lg sm:leading-7">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">
                      {service.text}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mb-3 inline-flex rounded-[18px] border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:rounded-2xl sm:p-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <h3 className="text-[15px] font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7">
                      {service.text}
                    </p>
                  </>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}