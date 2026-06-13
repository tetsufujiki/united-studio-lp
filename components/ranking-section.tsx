import { Mic, Music, Headphones, Radio, Clock, Crown, Medal, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

// Luxury ranking configurations - dark premium surfaces matching the ALL-INCLUSIVE section.
// Each rank gets a distinct metallic identity layered over a refined dark base.
// CSS-only effects (gradients, glows, glass highlights) for zero performance impact.
const rankingStyles = {
  1: {
    // Champagne / Premium Yellow Gold
    surface: "linear-gradient(140deg, rgba(40,33,18,0.92) 0%, rgba(22,19,13,0.95) 55%, rgba(18,16,12,0.96) 100%)",
    glow: "radial-gradient(120% 90% at 80% 0%, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
    border: "border-amber-300/30",
    shadow: "shadow-[0_10px_40px_-12px_rgba(212,175,55,0.35)]",
    badge: "bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600",
    badgeGlow: "shadow-[0_0_28px_rgba(212,175,55,0.55)]",
    badgeRing: "ring-1 ring-amber-200/60",
    iconWrap: "border-amber-300/30 bg-amber-400/10",
    iconColor: "text-amber-300",
    accentText: "text-amber-200/60",
    chip: "border-amber-300/30 bg-amber-400/10 text-amber-100",
    link: "text-amber-300 hover:text-amber-200",
    icon: Crown,
  },
  2: {
    // Elegant Rose / Luxury Blush
    surface: "linear-gradient(140deg, rgba(42,22,28,0.92) 0%, rgba(22,16,18,0.95) 55%, rgba(18,15,16,0.96) 100%)",
    glow: "radial-gradient(120% 90% at 80% 0%, rgba(244,114,182,0.2) 0%, rgba(244,114,182,0.05) 40%, transparent 70%)",
    border: "border-rose-300/30",
    shadow: "shadow-[0_10px_40px_-12px_rgba(244,114,182,0.3)]",
    badge: "bg-gradient-to-br from-rose-200 via-pink-400 to-rose-500",
    badgeGlow: "shadow-[0_0_26px_rgba(244,114,182,0.5)]",
    badgeRing: "ring-1 ring-rose-200/60",
    iconWrap: "border-rose-300/30 bg-rose-400/10",
    iconColor: "text-rose-300",
    accentText: "text-rose-200/60",
    chip: "border-rose-300/30 bg-rose-400/10 text-rose-100",
    link: "text-rose-300 hover:text-rose-200",
    icon: Medal,
  },
  3: {
    // Burnished Copper / Warm Luxury Orange
    surface: "linear-gradient(140deg, rgba(46,26,14,0.92) 0%, rgba(24,17,12,0.95) 55%, rgba(19,15,12,0.96) 100%)",
    glow: "radial-gradient(120% 90% at 80% 0%, rgba(234,88,12,0.22) 0%, rgba(234,88,12,0.05) 40%, transparent 70%)",
    border: "border-orange-400/30",
    shadow: "shadow-[0_10px_40px_-12px_rgba(234,88,12,0.32)]",
    badge: "bg-gradient-to-br from-orange-300 via-orange-500 to-amber-700",
    badgeGlow: "shadow-[0_0_26px_rgba(234,88,12,0.5)]",
    badgeRing: "ring-1 ring-orange-200/50",
    iconWrap: "border-orange-400/30 bg-orange-500/10",
    iconColor: "text-orange-300",
    accentText: "text-orange-200/60",
    chip: "border-orange-400/30 bg-orange-500/10 text-orange-100",
    link: "text-orange-300 hover:text-orange-200",
    icon: Medal,
  },
  4: {
    // Premium Sapphire / Luxury Sky Blue
    surface: "linear-gradient(140deg, rgba(16,28,46,0.92) 0%, rgba(13,18,26,0.95) 55%, rgba(12,15,19,0.96) 100%)",
    glow: "radial-gradient(120% 90% at 80% 0%, rgba(56,130,246,0.22) 0%, rgba(56,130,246,0.05) 40%, transparent 70%)",
    border: "border-sky-400/30",
    shadow: "shadow-[0_10px_40px_-12px_rgba(56,130,246,0.32)]",
    badge: "bg-gradient-to-br from-sky-200 via-blue-400 to-blue-600",
    badgeGlow: "shadow-[0_0_26px_rgba(56,130,246,0.5)]",
    badgeRing: "ring-1 ring-sky-200/50",
    iconWrap: "border-sky-400/30 bg-sky-500/10",
    iconColor: "text-sky-300",
    accentText: "text-sky-200/60",
    chip: "border-sky-400/30 bg-sky-500/10 text-sky-100",
    link: "text-sky-300 hover:text-sky-200",
    icon: Medal,
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
      "ラップ、ヒップホップのボーカルは声の質感が命。トラックに最もハマるサウンドへ仕上げるミックスを得意としています。Melodic Rapやケロケロ系のボーカル加工、ボイスエフェクトにも対応。",
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
      {/* Ambient luxury atmosphere - consistent with the ALL-INCLUSIVE section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-[460px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section Header - Refined gold editorial treatment */}
        <div className="relative mb-16 text-center md:mb-20">
          {/* English Overline */}
          <div className="mb-7 inline-flex items-center gap-3.5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary/50 to-primary/80" />
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary/70" />
              <p className="bg-gradient-to-r from-amber-200 via-primary to-amber-200 bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent">
                Popular Rankings
              </p>
              <Sparkles className="h-3.5 w-3.5 text-primary/70" />
            </div>
            <span className="h-px w-10 bg-gradient-to-l from-transparent via-primary/50 to-primary/80" />
          </div>

          {/* Main Title */}
          <h2
            id="popular-rankings-heading"
            className="mb-5 scroll-mt-24 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            <span className="text-foreground">TOP</span>{" "}
            <span className="bg-gradient-to-br from-amber-200 via-primary to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(212,175,55,0.35)]">
              4
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg tracking-wide text-foreground/70 md:text-xl">
            利用目的ランキング
          </p>
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
                style={{ background: rankStyle.surface }}
                className={`group relative overflow-visible rounded-3xl border backdrop-blur-md ${rankStyle.border} ${rankStyle.shadow}`}
              >
                {/* Colored ambient glow overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-80"
                  style={{ background: rankStyle.glow }}
                />
                {/* Pearl glass highlight - top edge */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                {/* Soft inner sheen - left edge */}
                <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                {/* Luxury Ranking Medal Badge */}
                <div className="absolute -right-3 -top-5 z-30 rotate-6">
                  <div
                    className={`relative flex h-[88px] w-[88px] items-center justify-center rounded-full ${rankStyle.badge} ${rankStyle.badgeGlow} ${rankStyle.badgeRing}`}
                  >
                    {/* Glossy shine */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/55 via-white/10 to-transparent" />
                    {/* Metallic rim */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/40" />
                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center">
                      <RankIcon className="h-4 w-4 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]" />
                      <div className="flex items-baseline">
                        <span className="text-[0.65rem] font-bold text-white/90 drop-shadow-sm">NO</span>
                        <span className="text-2xl font-black text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
                          {service.rank}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 md:p-10">
                  {/* Service Icon */}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm ${rankStyle.iconWrap}`}
                  >
                    <service.icon className={`h-7 w-7 ${rankStyle.iconColor}`} />
                  </div>

                  {/* Title Block */}
                  <div className="mb-5">
                    <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl">
                      {service.rank === 3 ? (
                        <>
                          Hip<wbr/>hopボーカル<wbr/>レコーディング
                        </>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${rankStyle.accentText}`}>
                      {service.titleEn}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-foreground/75">{service.description}</p>

                  {/* Auxiliary Link for NO.1 */}
                  {isFirst && (
                    <div className="mb-3 mt-5">
                      <a
                        href="https://united-studio.com/utattemita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2 ${rankStyle.link}`}
                      >
                        <span>歌ってみた制作を見る</span>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
                      </a>
                    </div>
                  )}

                  {/* Feature Chip */}
                  <div
                    className={`mt-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 backdrop-blur-sm ${rankStyle.chip}`}
                  >
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">当日仕上げ対応</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supplementary Information Card - Luxury Sage / Emerald Mist */}
        <div className="mt-20 flex justify-center">
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-emerald-400/25 px-6 py-6 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(16,185,129,0.3)] md:px-8 md:py-8"
            style={{
              background:
                "linear-gradient(140deg, rgba(16,38,30,0.9) 0%, rgba(14,24,21,0.94) 55%, rgba(13,18,17,0.95) 100%)",
            }}
          >
            {/* Sage glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(110% 90% at 85% 0%, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0.04) 40%, transparent 70%)",
              }}
            />
            {/* Pearl highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative z-10 flex gap-4 md:gap-5">
              <div className="flex-shrink-0 pt-0.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
                  <MessageCircle className="h-5 w-5 text-emerald-300" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-sm font-semibold text-foreground md:text-base">
                  TOP4以外にも対応しています
                </h3>
                <p className="text-xs leading-relaxed text-foreground/75 md:text-sm">
                  さまざまな楽器レコーディングをはじめ、朗読・ボイスドラマ・サウンドノベル・ナレーション収録など幅広く対応しています。上記に掲載のない内容もお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
