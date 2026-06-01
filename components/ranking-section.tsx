import { Mic, Music, Headphones, Radio, Clock, Crown, Medal } from "lucide-react";

// Premium ranking badge configurations - optimized for performance
const rankingStyles = {
  1: {
    badge: "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500",
    outerGlow: "shadow-[0_0_30px_rgba(251,191,36,0.4)]",
    innerShine: "from-white/40 via-white/15 to-transparent",
    ring: "ring-2 ring-amber-300/50",
    cardBgStyle: { background: "rgba(255, 215, 0, 0.08)" },
    cardBorder: "border-amber-400/40",
    cardGlow: "shadow-lg shadow-amber-500/10",
    icon: Crown,
    size: "h-24 w-24",
    textSize: "text-3xl",
    iconSize: "h-5 w-5",
  },
  2: {
    badge: "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600",
    outerGlow: "shadow-[0_0_25px_rgba(219,39,119,0.35)]",
    innerShine: "from-white/50 via-white/20 to-transparent",
    ring: "ring-2 ring-rose-400/40",
    cardBgStyle: { background: "rgba(255, 105, 180, 0.07)" },
    cardBorder: "border-rose-500/25",
    cardGlow: "shadow-lg shadow-rose-500/8",
    icon: Medal,
    size: "h-20 w-20",
    textSize: "text-2xl",
    iconSize: "h-4 w-4",
  },
  3: {
    badge: "bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700",
    outerGlow: "shadow-[0_0_20px_rgba(180,83,9,0.3)]",
    innerShine: "from-white/35 via-white/10 to-transparent",
    ring: "ring-2 ring-amber-600/40",
    cardBgStyle: { background: "rgba(255, 140, 0, 0.07)" },
    cardBorder: "border-amber-600/30",
    cardGlow: "shadow-lg shadow-amber-600/5",
    icon: Medal,
    size: "h-18 w-18",
    textSize: "text-2xl",
    iconSize: "h-4 w-4",
  },
  4: {
    badge: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600",
    outerGlow: "shadow-[0_0_18px_rgba(56,189,248,0.3)]",
    innerShine: "from-white/30 via-white/10 to-transparent",
    ring: "ring-2 ring-sky-400/35",
    cardBgStyle: { background: "rgba(59, 130, 246, 0.07)" },
    cardBorder: "border-sky-500/20",
    cardGlow: "shadow-lg shadow-sky-500/5",
    icon: Medal,
    size: "h-16 w-16",
    textSize: "text-xl",
    iconSize: "h-3.5 w-3.5",
  },
} as const;

const services = [
  {
    rank: 1,
    icon: Headphones,
    title: "歌ってみた・カバー",
    titleEn: "Utaite / Cover Songs",
    description:
      "歌ってみた音源の制作をフルサポート。レコーディングからミックス、マスタリングまでお任せください。歌唱動画もミラーレス一眼による高品質映像でお渡しします。",
  },
  {
    rank: 2,
    icon: Mic,
    title: "声優オーディション",
    titleEn: "Voice Acting Auditions",
    description:
      "プロ声優も利用する収録環境。ボイスサンプル、楽曲レコーディング、映像撮影まで対応。ディレクションサポートも可能です。提出先の要項に合わせた仕上げ、wav/mp3指定など対応いたします。",
  },
  {
    rank: 3,
    icon: Music,
    title: "Hiphopボーカルレコーディング",
    titleEn: "Hip-Hop Vocal Recording",
    description:
      "ラップ、ヒップホップのボーカルは声の質感が命。トラックに最もハマるサウンドへ仕上げるミックスを得意としています。melodic Auto-Tune vocalsなど、ケロケロ系の特殊ボーカル加工にも対応。",
  },
  {
    rank: 4,
    icon: Radio,
    title: "オリジナル楽曲ボーカルレコーディング",
    titleEn: "Original Song Vocal Recording",
    description:
      "リードボーカル収録はもちろん、ハモリやコーラスライン制作のサポートにも対応。アイドルグループなど人数の多い収録では、ピッチ修正など仕上げにお時間をいただく場合があります。時間に余裕を持ったご予約をおすすめしています。",
  },
];

export function RankingSection() {
  return (
    <section id="ranking" className="relative bg-background py-28 md:py-36">
      {/* Simplified background effect - single blur layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background" />
      <div className="absolute left-1/2 top-20 h-72 w-[400px] -translate-x-1/2 rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Hero-level Section Header */}
        <div className="relative mb-20 text-center">
          <div className="relative">
            {/* English Overline */}
            <div className="mb-8 inline-flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary/70 to-primary" />
              <p className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-base font-bold uppercase tracking-[0.3em] text-transparent sm:text-lg">
                Popular Rankings
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent via-primary/70 to-primary" />
            </div>

            {/* Main Hero Title */}
            <h2 id="popular-rankings-heading" className="mb-4 scroll-mt-24 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                TOP
              </span>{" "}
              <span className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                4
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              利用目的ランキング
            </p>
          </div>
        </div>

        {/* Ranking Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service) => {
            const rankStyle = rankingStyles[service.rank as keyof typeof rankingStyles];
            const RankIcon = rankStyle.icon;
            const isFirst = service.rank === 1;

            return (
              <div
                key={service.title}
                style={rankStyle.cardBgStyle}
                className={`group relative overflow-visible rounded-3xl border transition-all duration-300 ${rankStyle.cardBorder} ${rankStyle.cardGlow} ${
                  isFirst
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* Top highlight line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Premium Ranking Badge - Sticker Style */}
                <div className="absolute -right-3 -top-5 z-30 transform rotate-6">
                  <div className={`relative flex items-center justify-center rounded-full ${rankStyle.badge} ${rankStyle.outerGlow} ${rankStyle.ring} ${rankStyle.size}`}>
                    {/* Single shine layer */}
                    <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${rankStyle.innerShine}`} />
                    
                    {/* Metallic rim effect */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
                    
                    {/* Rank content */}
                    <div className="relative flex flex-col items-center justify-center">
                      <RankIcon className={`${rankStyle.iconSize} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`} />
                      <div className="flex items-baseline">
                        <span className="text-xs font-bold text-white/80 drop-shadow-sm">NO</span>
                        <span className={`${rankStyle.textSize} font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]`}>
                          {service.rank}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className={`relative z-10 ${isFirst ? "p-10 md:p-12" : "p-8 md:p-10"}`}>
                  {/* Service Icon */}
                  <div className={`mb-6 flex items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 backdrop-blur-sm ${isFirst ? "h-16 w-16" : "h-14 w-14"}`}>
                    <service.icon className={`text-primary ${isFirst ? "h-8 w-8" : "h-7 w-7"}`} />
                  </div>

                  {/* Title Block */}
                  <div className="mb-5">
                    <h3 className={`mb-2 font-bold tracking-tight text-foreground ${isFirst ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                      {service.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                      {service.titleEn}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`leading-relaxed text-muted-foreground ${isFirst ? "text-base" : "text-sm"}`}>
                    {service.description}
                  </p>

                  {/* Premium Feature Badge */}
                  <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 py-2.5 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/90">
                      当日仕上げ対応
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
