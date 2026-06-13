import { Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-36">
      {/* Simplified ambient glow - single layer */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        {/* Section header - establishing uniqueness */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Only Plan You Need</span>
          </div>
          <h2 id="all-inclusive-heading" className="scroll-mt-24 text-3xl font-bold uppercase tracking-[0.2em] text-foreground md:text-5xl lg:text-6xl">
            ALL-INCLUSIVE
          </h2>
          <p className="mt-2 text-lg font-semibold tracking-widest text-muted-foreground md:text-xl">
            全部入りプラン
          </p>
        </div>

        {/* Main offer card - warm luxury gradient */}
        <div className="relative">
          <div 
            className="relative overflow-hidden rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(40, 25, 15, 1), rgba(120, 70, 30, 1), rgba(200, 140, 60, 0.9))",
              border: "1px solid rgba(255, 200, 120, 0.15)",
            }}
          >
            {/* Subtle shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Value catchphrase pill - leads the eye toward the price */}
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-5 py-2.5 backdrop-blur-sm">
                <p className="text-sm font-bold tracking-wide text-primary md:text-base">
                  プロ基準を、2時間14,000円から。
                </p>
              </div>

              {/* Starting from label */}
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Starting From
              </p>

              {/* Main price - hero treatment */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 px-5 py-2 text-2xl font-bold text-foreground shadow-sm md:text-3xl">
                    2時間
                  </span>
                  <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                    ¥14,000
                  </span>
                  <span className="text-2xl font-medium text-muted-foreground">〜</span>
                </div>
              </div>

              {/* Supporting detail - reinforces value without competing with the price */}
              <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground/70">
                録音・ミックス・撮影込み
              </p>

              {/* Divider */}
              <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* First visit badge - emphasized */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#06C755]/30 bg-[#06C755]/10 px-6 py-3">
                <Gift className="h-5 w-5 text-[#06C755]" />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">初回利用</span>
                  <span className="text-xs text-muted-foreground">LINEクーポン</span>
                </div>
                <span className="rounded-lg bg-[#06C755]/20 px-3 py-1 text-lg font-bold text-[#06C755]">
                  ¥2,000-OFF
                </span>
              </div>

              {/* CTA Button */}
              <div className="mb-6 w-full max-w-md">
                <Button
                  size="lg"
                  className="group h-16 w-full bg-[#06C755] text-base font-semibold text-white shadow-lg shadow-[#06C755]/20 hover:bg-[#05b34c] hover:shadow-xl hover:shadow-[#06C755]/30"
                  asChild
                >
                  <a 
                    href="https://page.line.me/568repew" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.135-.033.201-.033.209 0 .389.09.51.249l2.439 3.315V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    クーポンを受け取る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Microcopy */}
              <p className="mb-6 text-xs text-muted-foreground">
                追加後すぐにクーポンが届きます
              </p>

              {/* Secondary link */}
              <a
                href="https://unitedstudio.stores.jp/reserve/usi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-muted-foreground/15 bg-muted/30 px-5 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:border-muted-foreground/25 hover:bg-muted/50 hover:text-foreground hover:shadow-sm"
              >
                空き状況と料金を確認する
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Decorative corner accents - golden */}
            <div className="absolute left-0 top-0 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-amber-400/30" />
            <div className="absolute bottom-0 right-0 h-20 w-20 rounded-br-3xl border-b-2 border-r-2 border-amber-400/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
