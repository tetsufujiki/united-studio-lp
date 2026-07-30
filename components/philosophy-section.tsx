import { SlidersHorizontal, Circle, Sliders, MapPin, CalendarDays } from "lucide-react";

const philosophyItems = [
  {
    icon: SlidersHorizontal,
    titleEn: "NOT FOR LOUD AMP SETUPS",
    constraint: "アンプの常設無し",
    explanation: "ライン／モデリング中心の収録環境",
  },
  {
    icon: Circle,
    titleEn: "NOT FOR FULL DRUM TRACKING",
    constraint: "ドラム常設無し",
    explanation: "小編成・パーカッション収録向け",
  },
  {
    icon: Sliders,
    titleEn: "NOT FOR OUTSIDE ENGINEERS",
    constraint: "外部エンジニアの乗込み不可",
    explanation: "一貫制作体制",
  },
  {
    icon: MapPin,
    titleEn: "NOT IN FRONT OF THE STATION",
    constraint: "駅近ではなし",
    explanation: "駅徒歩12分",
  },
  {
    icon: CalendarDays,
    titleEn: "NOT FIXED SCHEDULE",
    constraint: "不定休",
    explanation: "予約カレンダーで空き確認",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative bg-usi-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section header — studio philosophy, editorial statement */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              Philosophy
            </span>
            <span className="h-px flex-1 bg-usi-hairline-dark" />
          </div>

          <h2 className="mt-8 max-w-3xl text-balance text-3xl font-light leading-snug tracking-tight text-usi-cream md:text-4xl lg:text-5xl">
            This Studio is <span className="font-semibold italic">Not</span> for Everything
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed tracking-wide text-usi-cream-muted">
            新河岸音楽工務所は、完全予約制のプライベートスタジオです。
          </p>
        </div>

        {/* Philosophy spec list — numbered hairline rows */}
        <div className="border-t border-usi-hairline-dark">
          {philosophyItems.map((item, index) => (
            <div
              key={item.titleEn}
              className="grid grid-cols-[auto_1fr] items-start gap-x-5 border-b border-usi-hairline-dark py-6 md:grid-cols-[60px_auto_1fr] md:items-center md:gap-x-8 md:py-7"
            >
              {/* Number */}
              <span className="pt-0.5 font-mono text-sm font-medium tracking-[0.1em] text-usi-cream/35 md:pt-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon + EN label */}
              <div className="flex items-center gap-3 md:w-72">
                <item.icon className="h-4 w-4 shrink-0 text-usi-cream/45" strokeWidth={1.5} />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-usi-cream/60">
                  {item.titleEn}
                </span>
              </div>

              {/* Constraint + explanation */}
              <div className="col-span-2 mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 md:col-span-1 md:mt-0">
                <span className="text-base font-medium text-usi-cream md:text-lg">
                  {item.constraint}
                </span>
                <span className="text-sm text-usi-cream-muted">
                  {item.explanation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
