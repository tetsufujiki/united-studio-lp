import { Check, ArrowRight, Banknote, CreditCard, Smartphone } from "lucide-react";

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

              <div className="mt-7 border-l-2 border-usi-accent bg-white/[0.06] px-5 py-5 md:px-6">
                <p className="text-base font-semibold leading-relaxed text-usi-cream md:text-lg">
                  詳しい料金・空き状況は、
                  <a
                    href="https://reserve.united-studio.com/"
                    className="group inline-flex min-h-11 items-center gap-2 text-usi-accent underline underline-offset-4 transition-colors hover:text-usi-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-usi-accent"
                  >
                    予約ページ
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                  でご確認ください。
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-usi-cream-muted">
                13:00〜16:30開始は平日14,000円・土日祝18,000円、17:00以降開始は平日16,000円・土日祝20,000円です。料金は予約の開始時刻を基準に適用されます。
              </p>
              <p className="mt-3 text-sm leading-relaxed text-usi-cream-muted">
                2026年10月31日ご利用分までは、2時間 平日14,000円・土日祝18,000円です。3時間以上のコースを含む最新の料金・空き状況は予約ページでご確認ください。
              </p>
            </div>
          </div>

          {/* Included production, separated from booking instructions */}
          <div className="flex flex-col justify-center border-t border-usi-hairline-dark pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-usi-cream-muted">Included</p>
            <h3 className="mt-4 text-2xl font-bold leading-snug text-usi-cream md:text-3xl">
              録音から完成まで、<br />必要な工程をひとつに。
            </h3>
            <ul className="mt-7 divide-y divide-usi-hairline-dark border-y border-usi-hairline-dark">
              {['エンジニア付き', 'レコーディング', '編集・ピッチ補正・リズム修正', 'ミックス', 'マスタリング', '撮影対応'].map((item) => (
                <li key={item} className="flex items-center gap-3 py-3.5 text-base font-medium text-usi-cream">
                  <Check className="h-4 w-4 shrink-0 text-usi-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-usi-cream-muted">
              撮影はご予約時間内で、ご希望に応じて時間を配分します。その他のご要望もお気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OnlineBookingSection() {
  return (
    <section aria-labelledby="online-booking-heading" className="bg-usi-sand-soft py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-usi-text-muted">Online Booking</p>
          <h2 id="online-booking-heading" className="mt-5 text-2xl font-bold leading-snug tracking-tight text-usi-text md:text-3xl">
            予約も、スタジオ体験の一部です。
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-usi-text-muted md:text-base">
            空き状況も、料金も、その場で確認。<br />
            日時を選んで、そのままオンライン予約。
          </p>
        </div>
        <div className="lg:justify-self-end">
          <a href="https://reserve.united-studio.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-usi-accent px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-usi-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-accent md:text-base lg:w-auto">
            空き状況・料金を確認する
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
        </div>
        <div className="mt-10 border-t border-usi-hairline pt-7 md:mt-12 md:flex md:items-center md:justify-between md:gap-8">
          <h3 className="text-lg font-semibold text-usi-text md:text-xl">お支払い方法</h3>
          <ul className="mt-4 flex flex-wrap gap-3 md:mt-0">
            {[
              { label: '現金', icon: Banknote },
              { label: 'クレジットカード', icon: CreditCard },
              { label: '電子マネー', icon: Smartphone },
            ].map(({ label, icon: Icon }) => (
              <li key={label} className="inline-flex min-h-12 items-center gap-2.5 border border-usi-hairline bg-white/60 px-4 py-3 text-sm font-semibold text-usi-text md:text-base">
                <Icon className="h-5 w-5 shrink-0 text-usi-accent" strokeWidth={1.5} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
