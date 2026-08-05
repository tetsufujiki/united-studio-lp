import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroFeatures = [
  {
    title: "プロ仕様機材完備",
    description: "業界標準のハイクオリティ機材",
  },
  {
    title: "初心者歓迎",
    description: "丁寧サポートで安心",
  },
  {
    title: "完全予約制",
    description: "集中できる制作環境",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-usi-ink">
      {/* Background Image with Overlay */}
      <div className="pointer-events-none absolute inset-0">
        {/* Mobile background image */}
        <Image
          src="/assets/studio-mobile.jpg"
          alt="Professional recording studio"
          fill
          className="object-cover object-center md:hidden"
          style={{ filter: "brightness(0.62) contrast(1.05) saturate(0.9)" }}
          priority
          sizes="100vw"
        />
        {/* Desktop background image */}
        <Image
          src="/assets/studio-desktop.jpg"
          alt="Professional recording studio"
          fill
          className="hidden object-cover object-center md:block"
          style={{ filter: "brightness(0.62) contrast(1.05) saturate(0.9)" }}
          priority
          sizes="100vw"
        />
        {/* Editorial gradient — darkens toward the text block for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.55) 40%, rgba(13,15,20,0.35) 70%, rgba(13,15,20,0.45) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-14 pt-32 md:justify-center md:px-12 md:pb-24 md:pt-28 lg:px-16">
        <div className="w-full">
          {/* Status badge — recording availability link */}
          <a
            href="https://reserve.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-usi-hairline-dark bg-usi-ink/40 px-3.5 py-2 backdrop-blur-sm transition-colors duration-300 hover:border-usi-cream/40"
          >
            <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-usi-accent" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-usi-cream/85">
              Recording Available
            </span>
          </a>

          {/* Main Headline — editorial left alignment */}
          <h1 className="mt-8 text-balance text-[2.5rem] font-bold leading-[1.18] tracking-tight text-usi-cream sm:text-5xl md:mt-10 md:text-6xl lg:text-7xl">
            秘密基地のような
            <br className="sm:hidden" />
            スタジオへ
          </h1>

          {/* Sub Headline */}
          <p className="mt-5 max-w-xl text-pretty text-base font-light leading-relaxed tracking-wide text-usi-cream/85 md:mt-6 md:text-xl">
            プロ品質のスタジオを、想像より身近に。
          </p>

          {/* Primary CTA row — booking action carries the campaign orange */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <a
              href="https://reserve.united-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 bg-usi-accent px-7 text-sm font-semibold text-white transition-colors duration-200 hover:bg-usi-accent-strong md:h-[52px] md:text-base"
            >
              空き状況・料金確認
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://page.line.me/568repew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 border border-usi-cream/30 px-7 text-sm font-medium text-usi-cream transition-colors duration-200 hover:border-usi-cream/60 hover:bg-white/5 md:h-[52px] md:text-base"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.135-.033.201-.033.209 0 .389.09.51.249l2.439 3.315V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで相談
            </a>
          </div>

          {/* Guide link — beginner reassurance */}
          <Link
            href="/guide"
            className="group mt-5 inline-flex items-center gap-3 border-b border-usi-hairline-dark pb-2 text-sm text-usi-cream/75 transition-colors duration-200 hover:border-usi-cream/50 hover:text-usi-cream"
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-usi-cream/55">
              初めての方へ
            </span>
            <span>ご利用の流れ・準備・当日の進め方をまとめています</span>
            <span className="inline-flex items-center gap-1 text-xs text-usi-cream/55 transition-colors duration-200 group-hover:text-usi-cream/85">
              読む（約3分）
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Bottom rail — feature indicators + trust stats, hairline structure */}
          <div className="mt-14 border-t border-usi-hairline-dark pt-7 md:mt-20 md:pt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
              {heroFeatures.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-usi-cream/45 pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-usi-cream md:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-usi-cream/65 md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust stats row */}
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-usi-hairline-dark pt-6 md:mt-8">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl font-bold tracking-tight text-usi-cream md:text-2xl">
                  1000+
                </span>
                <span className="text-xs text-usi-cream/65 md:text-sm">
                  クリエイター利用中
                </span>
              </div>
              <span className="hidden h-4 w-px bg-usi-hairline-dark sm:inline-block" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator — desktop only */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex">
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-usi-cream/50">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4 text-usi-cream/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
