import { Mic, Music, Headphones, Radio, Clock, ArrowUpRight } from "lucide-react";

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
    <section id="ranking" className="relative bg-usi-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section Header — editorial treatment */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="bg-usi-accent px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Popular
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Rankings
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3">
            <h2
              id="popular-rankings-heading"
              className="scroll-mt-24 text-6xl font-black tracking-tight text-usi-text md:text-7xl lg:text-8xl"
            >
              TOP <span className="text-usi-accent">4</span>
            </h2>
            <p className="pb-2 text-lg tracking-wide text-usi-text-muted md:pb-3 md:text-xl">
              利用目的ランキング
            </p>
          </div>
        </div>

        {/* Ranking rows — numbered editorial list */}
        <div className="border-t border-usi-hairline">
          {services.map((service) => {
            const isFirst = service.rank === 1;
            const Wrapper = isFirst ? "a" : "article";
            const wrapperProps = isFirst
              ? {
                  href: "https://utattemita.united-studio.com",
                  rel: "noopener noreferrer",
                  "aria-label": "歌ってみた・カバー 歌ってみた制作の詳細を見る",
                }
              : {};

            return (
              <Wrapper
                key={service.title}
                {...(wrapperProps as any)}
                className={`group grid cursor-pointer grid-cols-[auto_1fr] gap-x-5 gap-y-4 border-b border-usi-hairline py-9 transition-colors duration-200 md:grid-cols-[100px_minmax(0,1.1fr)_minmax(0,1.6fr)] md:gap-x-10 md:py-12 ${
                  isFirst ? "hover:bg-usi-sand-soft focus-visible:bg-usi-sand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-usi-accent focus-visible:ring-offset-2" : "cursor-default"
                }`}
              >
                {/* Rank number */}
                <div className="flex items-start">
                  <span
                    className={`font-mono text-4xl font-bold leading-none tracking-tight md:text-6xl ${
                      isFirst
                        ? "text-usi-accent underline decoration-usi-accent/40 underline-offset-4 group-hover:opacity-70 group-focus-visible:opacity-70"
                        : "text-usi-text/25"
                    }`}
                  >
                    {String(service.rank).padStart(2, "0")}
                  </span>
                </div>

                {/* Title block */}
                <div className="min-w-0">
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-usi-text md:text-2xl">
                    {service.rank === 3 ? (
                      <>
                        Hip<wbr />hopボーカル<wbr />レコーディング
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <div className="mt-2 flex items-center gap-2.5">
                    <service.icon className="h-4 w-4 text-usi-text-muted" strokeWidth={1.5} />
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-usi-text-muted">
                      {service.titleEn}
                    </span>
                  </div>
                </div>

                {/* Description + meta */}
                <div className="col-span-2 min-w-0 md:col-span-1">
                  <p className="text-sm leading-relaxed text-usi-text/80 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="inline-flex items-center gap-2 border border-usi-hairline px-3 py-1.5 text-xs font-medium text-usi-text-muted">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                      当日仕上げ対応
                    </span>

                    {isFirst && (
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-usi-accent">
                        <span>歌ってみた制作を見る</span>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Supplementary Information — quiet editorial note */}
        <div className="mt-12 max-w-3xl md:mt-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
            Note
          </p>
          <h3 className="mt-3 text-base font-semibold text-usi-text md:text-lg">
            TOP4以外にも対応しています
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-usi-text/75 md:text-base">
            さまざまな楽器レコーディングをはじめ、朗読・ボイスドラマ・サウンドノベル・ナレーション収録など幅広く対応しています。上記に掲載のない内容もお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
