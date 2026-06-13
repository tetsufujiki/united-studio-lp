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
    <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
      {/* Simplified background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, #12141a 0%, #0a0b0e 100%)`
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        {/* Section header - increased spacing */}
        <div className="mb-24 md:mb-28">
          <h2 className="mb-5 text-3xl font-light tracking-tight text-[#e8e6e3] md:text-4xl lg:text-5xl leading-relaxed">
            This Studio is{" "}
            <span className="font-semibold italic text-[#f0eeeb]">Not</span> for Everything
          </h2>
          <p className="text-base tracking-wide text-[#9a9590] leading-relaxed">
            新河岸音楽工務所は、完全予約制のプライベートスタジオです。
          </p>
        </div>

        {/* Philosophy spec rows - static styling without hover effects */}
        <div className="space-y-5">
          {philosophyItems.map((item) => (
            <div
              key={item.titleEn}
              className="flex items-center gap-6 rounded-lg border border-[#3a3c42]/60 bg-[#1a1c22]/50 px-6 py-5 backdrop-blur-sm"
            >
              {/* Icon container - red alert styling */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-red-700/50 bg-red-900/40 text-red-400">
                <item.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </div>

              {/* Text content - improved line height */}
              <div className="flex flex-col gap-1.5">
                {/* English headline - softer off-white */}
                <span className="text-xs font-semibold tracking-wide text-[#c5c2bd] leading-relaxed">
                  {item.titleEn}
                </span>

                {/* Japanese description - split styling */}
                <span className="text-base leading-relaxed">
                  <span className="text-lg text-[#a8a39d]">{item.constraint}</span>
                  <span className="text-[#5a5650]">　-　</span>
                  <span className="text-[#6a655f]">{item.explanation}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
