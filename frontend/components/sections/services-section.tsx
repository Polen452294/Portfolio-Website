import { services } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Решения под реальные бизнес-задачи"
        text="От точечной автоматизации до полноценных систем с заявками, интеграциями, ботами и AI-функциями."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = index === 0;

          return (
            <Card
              key={service.title}
              className={`relative overflow-hidden ${
                isFeatured
                  ? "border-emerald-400/40 bg-emerald-400/[0.05] shadow-[0_0_0_1px_rgba(52,211,153,0.10),0_0_32px_rgba(16,185,129,0.10)]"
                  : ""
              }`}
            >
              {isFeatured && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_45%)]" />
                  <div className="mb-5 inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Актуальная услуга
                  </div>
                </>
              )}

              {!isFeatured && (
                <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
              )}

              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.text}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}