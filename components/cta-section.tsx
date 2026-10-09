import { CalendarDays, ArrowRight } from "lucide-react";

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
              Recording & Production
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

            {/* Price hero — weekday / weekend split, 2-hour rate */}
            <div className="mt-10 md:mt-14">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream-muted">
                2-Hour Session
              </p>
              <p className="mt-1.5 text-sm font-medium text-usi-cream-muted">
                2026年11月1日ご利用分から・2時間
              </p>
              <div className="mt-5 border-t border-usi-hairline-dark">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-usi-hairline-dark py-5 md:py-6">
                  <span className="text-base font-semibold tracking-wide text-usi-cream md:text-lg">
                    平日（開始時刻別）
                  </span>
                  <span className="text-3xl font-black leading-none tracking-tight text-usi-cream sm:text-4xl">
                    ¥14,000〜16,000
                    <span className="font-light text-usi-accent">-</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-usi-hairline-dark py-5 md:py-6">
                  <span className="text-base font-semibold tracking-wide text-usi-cream md:text-lg">
                    土日祝日（開始時刻別）
                  </span>
                  <span className="text-3xl font-black leading-none tracking-tight text-usi-cream sm:text-4xl">
                    ¥18,000〜20,000
                    <span className="font-light text-usi-accent">-</span>
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-usi-cream-muted">
                13:00〜16:30開始は平日14,000円・土日祝18,000円、17:00以降開始は平日16,000円・土日祝20,000円です。料金は予約の開始時刻を基準に適用されます。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-usi-cream-muted">
                2026年10月31日ご利用分までは、2時間 平日14,000円・土日祝18,000円です。3時間以上のコースを含む最新の料金・空き状況は予約ページでご確認ください。
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

          {/* Right — online booking and consultation */}
          <div className="flex flex-col justify-end">
            {/* Booking value, without adding another section */}
            <div className="border border-usi-hairline-dark p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <CalendarDays className="h-4 w-4 text-usi-accent" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
                  Online Booking
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-usi-cream md:text-3xl">
                予約も、<br />スタジオ体験の一部です。
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-usi-cream-muted md:text-base">
                空き状況の確認から、利用時間の選択、料金確認、予約のお申し込みまでオンラインで。予約はスタジオの承認後に確定します。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-usi-cream-muted">
                予約の変更・キャンセルは2日前までマイページから。前日・当日は直接ご連絡ください。
              </p>

              <a
                href="https://page.line.me/568repew"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2.5 border border-usi-cream/30 px-6 py-3 text-sm font-medium text-usi-cream transition-colors duration-200 hover:border-usi-cream/60 hover:bg-white/5 md:min-h-[52px]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.135-.033.201-.033.209 0 .389.09.51.249l2.439 3.315V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                相談したい方はLINEへ
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-3 text-center text-xs font-medium text-usi-cream-muted">
                当日キャンセル累計2回の方は、次回以降は事前支払い・確認後の承認となります
              </p>
            </div>

            {/* Primary booking action */}
            <a
              href="https://reserve.united-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex min-h-12 items-center justify-center gap-2 bg-usi-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-usi-accent-strong md:min-h-[52px] md:text-base"
            >
              空き状況・料金確認・予約
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
