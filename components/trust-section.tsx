import { Check, ArrowRight } from "lucide-react";
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
    <section className="relative bg-usi-sand-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Trust items — hairline-divided columns */}
        <div className="grid border-y border-usi-hairline md:grid-cols-3">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-3 py-8 md:px-8 md:py-10 ${
                index > 0 ? "border-t border-usi-hairline md:border-l md:border-t-0" : ""
              } ${index === 0 ? "md:pl-0" : ""} ${index === trustItems.length - 1 ? "md:pr-0" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center border border-usi-hairline">
                  <Check className="h-3.5 w-3.5 text-usi-accent" strokeWidth={2.5} />
                </span>
                <h3 className="text-base font-semibold tracking-wide text-usi-text md:text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-usi-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guide CTA */}
        <div className="mt-12 flex flex-col items-start gap-4 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
            初めての方も安心してご利用いただけます
          </p>
          <Link
            href="/guide"
            className="group inline-flex items-center gap-2.5 border border-usi-text/25 px-6 py-3 text-sm font-semibold text-usi-text transition-colors duration-200 hover:border-usi-text hover:bg-usi-text hover:text-usi-sand-soft"
          >
            レコーディングスタジオ利用ガイド
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
