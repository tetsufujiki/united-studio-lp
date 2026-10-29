import { Check, ArrowRight, Banknote, CreditCard, Smartphone } from "lucide-react";
import { LegacyPricingSection } from "./legacy-pricing-section";

export const PRICING_SWITCH_AT = "2026-10-31T02:05:00+09:00";

export function isNewPricingVisible(now: Date = new Date()) {
  return now.getTime() >= Date.parse(PRICING_SWITCH_AT);
}

export function CtaSection({ now = new Date() }: { now?: Date } = {}) {
  return isNewPricingVisible(now) ? <NewPricingSection /> : <LegacyPricingSection />;
}

function NewPricingSection() {
  return (
    <section aria-labelledby="all-inclusive-heading" className="relative bg-usi-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="mb-9 md:mb-12">
          <p className="flex items-center gap-4 text-xs font-semibold tracking-widest text-usi-cream-muted">
            <span className="h-px w-8 bg-usi-accent" aria-hidden="true" />
            料金・サービス
          </p>
          <h2 id="all-inclusive-heading" className="mt-6 scroll-mt-24 text-3xl font-bold leading-[1.4] tracking-tight text-usi-cream sm:text-4xl md:text-5xl">
            録音も、仕上げも、撮影も。<br />
            この料金に。
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-usi-cream-muted md:text-base">
            はじめての歌録りも、作品づくりも。エンジニアと完成まで進める、2時間のセッション。
          </p>
        </div>

        <div className="border border-usi-cream/20 bg-white/[0.03]">
          <div className="grid gap-8 px-5 py-8 sm:px-8 md:gap-10 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="inline-flex items-center gap-2 border border-usi-accent/40 bg-usi-accent/10 px-3 py-1.5 text-sm font-semibold text-usi-cream">
                <Check aria-hidden="true" className="h-4 w-4 text-usi-accent" />
                エンジニア付き
              </p>
              <p className="mt-6 text-lg font-semibold text-usi-cream">2時間の予約</p>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-1 font-bold leading-none tracking-tight text-usi-cream">
                <span className="text-3xl font-medium text-usi-accent md:text-4xl">¥</span>
                <span className="text-[clamp(3.5rem,8vw,5rem)] tabular-nums">14,000</span>
                <span className="ml-1 text-2xl font-medium">〜</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-usi-cream-muted">
                平日・17時前開始の場合
              </p>
            </div>

            <div className="min-w-0 border-t border-usi-hairline-dark pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="text-base font-semibold text-usi-cream md:text-lg">
                この料金に、ここまで含まれます。
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 min-[375px]:grid-cols-2">
                {['レコーディング', '編集', 'ピッチ・リズム修正', 'ミックス', 'マスタリング', '撮影'].map((item) => (
                  <li key={item} className="flex min-w-0 items-center gap-2.5 text-sm font-medium leading-relaxed text-usi-cream md:text-base">
                    <Check className="h-4 w-4 shrink-0 text-usi-accent" strokeWidth={2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-usi-cream-muted">
                ご予約時間内で、録音から仕上げ・撮影まで、ご希望に合わせて時間を配分します。
              </p>
            </div>
          </div>

          <div className="grid gap-8 border-t border-usi-cream/20 px-5 py-7 sm:px-8 md:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10">
            <div className="min-w-0">
              <table className="w-full table-fixed border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-xs font-medium leading-relaxed text-usi-cream-muted">
                  2時間料金 · ご予約の開始時刻が基準です
                </caption>
                <thead>
                  <tr className="border-b border-usi-hairline-dark text-xs text-usi-cream-muted">
                    <th scope="col" className="w-[30%] py-3 font-medium">開始時刻</th>
                    <th scope="col" className="py-3 text-right font-semibold text-[#bac5cc]">平日</th>
                    <th scope="col" className="py-3 text-right font-semibold text-[#c9c1b8]">土日祝</th>
                  </tr>
                </thead>
                <tbody className="tabular-nums text-usi-cream">
                  <tr className="border-b border-usi-hairline-dark">
                    <th scope="row" className="py-3 font-normal text-usi-cream-muted">17時前</th>
                    <td className="py-3 text-right font-semibold text-[#bac5cc]">¥14,000</td>
                    <td className="py-3 text-right font-semibold text-[#c9c1b8]">¥18,000</td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 font-normal text-usi-cream-muted">17時以降</th>
                    <td className="py-3 text-right font-semibold text-[#bac5cc]">¥16,000</td>
                    <td className="py-3 text-right font-semibold text-[#c9c1b8]">¥20,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex min-w-0 flex-col justify-center border-t border-usi-hairline-dark pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-base font-semibold leading-relaxed text-usi-cream md:text-lg">
                詳しい料金・空き状況は、<br className="hidden sm:block" />
                予約ページでご確認ください。
              </p>
              <a
                href="https://reserve.united-studio.com/"
                className="group mt-5 inline-flex min-h-14 w-full items-center justify-between gap-3 bg-usi-accent px-5 py-4 text-sm font-semibold leading-relaxed text-white transition-colors hover:bg-usi-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-cream md:text-base"
              >
                詳しい料金・空き状況を見る
                <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs leading-relaxed text-usi-cream-muted">
                3時間以上のコースも、予約ページから。
              </p>
            </div>
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
