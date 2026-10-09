import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TrustSection() {
  return (
    <section aria-labelledby="production-style-heading" className="bg-usi-sand-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 id="production-style-heading" className="sr-only">当日完成を支えるUSIの制作体制</h2>
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-usi-text-muted">Record to Master</p>
            <p className="mt-3 flex items-baseline gap-1 font-bold leading-none tracking-tighter text-usi-text">
              <span className="text-[clamp(5rem,12vw,9rem)]">99</span>
              <span className="text-[clamp(2.5rem,5vw,4rem)] text-usi-accent">%</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-usi-text md:text-base">
              通常の2時間セッションで、約99%のお客様が完成音源を当日お持ち帰りいただいています。
            </p>
            <p className="mt-3 text-xs leading-relaxed text-usi-text-muted">
              当スタジオの運営実績に基づく概数。
              <Link href="/faq#time" className="underline underline-offset-4 hover:text-usi-accent-strong">例外はFAQへ</Link>
            </p>
          </div>
          <div className="border-t border-usi-hairline pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-4 lg:pl-16">
            <p className="font-mono text-[clamp(1.4rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-usi-text">ONE ENGINEER</p>
            <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-usi-text md:text-3xl">
              録る人が、<br className="hidden md:block" />仕上げる人。
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-usi-text-muted md:text-base">
              録音から編集・ミックス・マスタリングまで、一人のエンジニアが一貫して担当します。
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-usi-hairline pt-6 md:mt-14">
          <p className="text-sm text-usi-text-muted">初心者歓迎・完全予約制。プロ品質を、想像より身近に。</p>
          <Link href="/guide" className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-usi-text underline underline-offset-4 transition-colors hover:text-usi-accent-strong">
            初めての方へ・ご利用ガイド
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
