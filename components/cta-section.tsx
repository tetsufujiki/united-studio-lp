import { Gift, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative bg-usi-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="bg-usi-accent px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Plan
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              The Only Plan You Need
            </span>
            <span className="h-px flex-1 bg-usi-hairline-dark" />
          </div>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3">
            <h2
              id="all-inclusive-heading"
              className="scroll-mt-24 text-4xl font-black uppercase tracking-[0.08em] text-usi-cream md:text-6xl"
            >
              ALL-INCLUSIVE
            </h2>
            <p className="pb-1 text-lg font-semibold tracking-widest text-usi-cream-muted md:pb-2 md:text-xl">
              全部入りプラン
            </p>
          </div>
        </div>

        {/* Price editorial layout */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Left — price hero */}
          <div>
            {/* Spec rows */}
            <div className="border-t border-usi-hairline-dark">
              <div className="flex items-baseline justify-between gap-6 border-b border-usi-hairline-dark py-4">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream-muted">
                  Pro Standard
                </span>
                <span className="text-sm font-semibold tracking-wide text-usi-cream md:text-base">
                  プロ基準
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-usi-hairline-dark py-4">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream-muted">
                  Duration
                </span>
                <span className="text-sm font-semibold tracking-wide text-usi-cream md:text-base">
                  2時間
                </span>
              </div>
            </div>

            {/* Price hero — dominant campaign anchor */}
            <div className="mt-10 md:mt-14">
              <p className="flex flex-wrap items-baseline gap-x-4">
                <span className="text-6xl font-black leading-none tracking-tight text-usi-cream sm:text-7xl md:text-8xl lg:text-9xl">
                  ¥14,000
                  <span className="font-light text-usi-accent">-</span>
                </span>
                <span className="text-2xl font-medium text-usi-cream-muted md:text-3xl">
                  から。
                </span>
              </p>

              <div className="mt-8 border-l-2 border-usi-accent pl-5 md:mt-10">
                <p className="text-xl font-bold text-usi-cream md:text-2xl">
                  録音・ミックス・撮影込み
                </p>
                <p className="mt-1.5 text-base font-medium text-usi-cream-muted md:text-lg">
                  作品完成までワンストップ
                </p>
              </div>
            </div>
          </div>

          {/* Right — first-visit offer & actions */}
          <div className="flex flex-col justify-end">
            {/* First visit offer */}
            <div className="border border-usi-hairline-dark p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <Gift className="h-4 w-4 text-[#06C755]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-usi-cream">初回利用</span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
                  LINEクーポン
                </span>
              </div>
              <p className="mt-4 text-3xl font-black tracking-tight text-[#06C755] md:text-4xl">
                ¥2,000-OFF
              </p>

              <a
                href="https://page.line.me/568repew"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2.5 bg-[#06C755] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#05b34c] md:h-[52px] md:text-base"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.135-.033.201-.033.209 0 .389.09.51.249l2.439 3.315V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                クーポンを受け取る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-3 text-center text-xs font-medium text-usi-cream-muted">
                追加後すぐにクーポンが届きます
              </p>
            </div>

            {/* Secondary booking link */}
            <a
              href="https://unitedstudio.stores.jp/reserve/usi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex h-12 items-center justify-center gap-2 border border-usi-cream/30 px-6 text-sm font-medium text-usi-cream transition-colors duration-200 hover:border-usi-cream/60 hover:bg-white/5 md:h-[52px]"
            >
              空き状況と料金を確認する
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
