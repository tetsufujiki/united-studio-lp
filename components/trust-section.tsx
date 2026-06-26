import { Check } from "lucide-react";
import Link from "next/link";

const trustItems = [
  {
    title: "エンジニア付き",
    description: "エンジニアが全セッションに同席",
  },
  {
    title: "キャッシュレス決済対応",
    description: "現金のほか、クレジットカード・\u200b電子マネー対応",
  },
  {
    title: "キャンセル料なし",
    description: "条件あり・詳細はご予約時に確認",
  },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />
      
      {/* Subtle bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        {/* Elegant background panel */}
        <div 
          className="rounded-2xl border border-amber-700/15 px-8 py-12 md:px-12 md:py-16"
          style={{
            background: "linear-gradient(180deg, rgba(30, 25, 20, 0.4) 0%, rgba(20, 18, 15, 0.3) 100%)",
          }}
        >
          {/* Trust items - responsive grid */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                {/* Checkmark icon with gold accent */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-600/30 bg-gradient-to-br from-amber-900/30 to-amber-800/20">
                  <Check className="h-5 w-5 text-amber-500" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-semibold tracking-wide text-foreground md:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Separator line for mobile (between items) */}
                {index < trustItems.length - 1 && (
                  <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-amber-600/20 to-transparent md:hidden" />
                )}
              </div>
            ))}
          </div>

          {/* Guide CTA — below the 3 trust items */}
          <div className="mt-12 flex flex-col items-center gap-2 border-t border-amber-700/15 pt-10">
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/60">
              初めての方も安心してご利用いただけます
            </p>
            <Link
              href="/guide"
              className="mt-3 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/30 transition-all duration-200 hover:from-sky-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-0.5"
            >
              レコーディングスタジオ利用ガイド
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
