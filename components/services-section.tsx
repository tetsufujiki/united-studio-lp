import { Mic, Music, Headphones, Radio, Clock, Gift, Crown, Trophy } from "lucide-react";

// Ranking badge configurations for premium medal styling
const rankingStyles = {
  1: {
    badge: "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.4)]",
    ring: "ring-2 ring-amber-400/50",
    accent: "from-amber-500/20 via-yellow-500/10",
    icon: Crown,
  },
  2: {
    badge: "bg-gradient-to-br from-slate-300 via-gray-200 to-slate-400",
    glow: "shadow-[0_0_15px_rgba(148,163,184,0.3)]",
    ring: "ring-2 ring-slate-300/50",
    accent: "from-slate-400/15 via-gray-300/10",
    icon: Trophy,
  },
  3: {
    badge: "bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800",
    glow: "shadow-[0_0_15px_rgba(180,83,9,0.3)]",
    ring: "ring-2 ring-amber-700/50",
    accent: "from-amber-700/15 via-orange-600/10",
    icon: Trophy,
  },
  4: {
    badge: "bg-gradient-to-br from-zinc-500 via-zinc-600 to-zinc-700",
    glow: "shadow-[0_0_12px_rgba(113,113,122,0.25)]",
    ring: "ring-2 ring-zinc-500/40",
    accent: "from-zinc-500/10 via-zinc-400/5",
    icon: Trophy,
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

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div
          className="relative mb-16 text-center"
        >
          {/* Main Title - Editorial Style */}
          <div
            className="relative"
          >
            {/* English Overline - Luxurious */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/60 to-primary" />
              <p className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent sm:text-base">
                利用目的ランキング TOP4
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent via-primary/60 to-primary" />
            </div>
            
            {/* Japanese Main Title */}
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              選ばれる理由、<span className="text-primary">4</span>つの現場。
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {services.map((service) => {
            const rankStyle = rankingStyles[service.rank as keyof typeof rankingStyles];
            const RankIcon = rankStyle.icon;
            const isFirst = service.rank === 1;
            
            return (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 ${
                isFirst 
                  ? "border-amber-500/40 hover:border-amber-500/60" 
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Ranking Badge - Premium Medal Style */}
              <div className="absolute -right-2 -top-2 z-20">
                <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${rankStyle.badge} ${rankStyle.glow} ${rankStyle.ring} ${isFirst ? "h-20 w-20" : ""}`}>
                  {/* Inner shine effect */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/20" />
                  
                  {/* Rank number */}
                  <div className="relative flex flex-col items-center">
                    <RankIcon className={`${isFirst ? "h-4 w-4" : "h-3 w-3"} text-white/90 drop-shadow-sm`} />
                    <span className={`font-black text-white drop-shadow-md ${isFirst ? "text-2xl" : "text-xl"}`}>
                      {service.rank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Accent gradient based on rank */}
              <div className={`absolute inset-0 bg-gradient-to-br ${rankStyle.accent} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/50">
                    {service.titleEn}
                  </span>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Premium Badge */}
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">
                    当日仕上げ・当日データお渡し対応
                  </span>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Pricing Section */}
        <div
          id="pricing"
          className="mt-20 flex justify-center scroll-mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-card/90 via-card/70 to-card/90 px-12 py-12 backdrop-blur-md md:px-16 md:py-14">
            {/* Enhanced subtle glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* ALL-INCLUSIVE - Strongest visual element */}
              <h3 className="mb-3 text-2xl font-black uppercase tracking-[0.2em] text-foreground md:text-3xl">
                All-Inclusive
              </h3>
              
              {/* Japanese subtitle - Secondary */}
              <p className="mb-6 text-base font-medium tracking-wide text-foreground/70 md:text-lg">
                全部入りプラン
              </p>
              
              {/* Subtle divider */}
              <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Value catchphrase pill - leads the eye toward the price */}
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-5 py-2.5 backdrop-blur-sm">
                <p className="text-sm font-bold tracking-wide text-primary md:text-base">
                  プロ基準を、2時間14,000円から。
                </p>
              </div>

              {/* Starting from - Muted */}
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                Starting from
              </p>

              {/* Price - Most important element. Stacks on mobile for clarity. */}
              <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-foreground/90 md:text-base">
                  2時間
                </span>
                <span className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-primary md:text-6xl">¥14,000</span>
                  <span className="text-xl text-muted-foreground/60">〜</span>
                </span>
              </div>

              {/* Supporting detail - reinforces value without competing with the price */}
              <p className="text-sm font-medium tracking-wide text-muted-foreground/70">
                録音・ミックス・撮影込み
              </p>
            </div>
          </div>
        </div>

        {/* LINE Coupon Badge */}
        <div
          className="mt-6 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-border/40 bg-card/40 px-5 py-2.5 backdrop-blur-sm">
            <Gift className="h-4 w-4 text-[#06C755]" />
            <span className="text-sm text-muted-foreground">
              初回利用 LINEクーポン
            </span>
            <span className="rounded-full bg-[#06C755]/10 px-3 py-0.5 text-sm font-semibold text-[#06C755]">
              ¥2,000-OFF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
