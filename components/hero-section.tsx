import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85svh] overflow-hidden bg-usi-ink md:min-h-[90svh]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/assets/studio-mobile.jpg" alt="Professional recording studio" fill className="object-cover object-center md:hidden" style={{ filter: "brightness(0.62) contrast(1.05) saturate(0.9)" }} priority sizes="100vw" />
        <Image src="/assets/studio-desktop.jpg" alt="Professional recording studio" fill className="hidden object-cover object-center md:block" style={{ filter: "brightness(0.62) contrast(1.05) saturate(0.9)" }} priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.55) 40%, rgba(13,15,20,0.35) 70%, rgba(13,15,20,0.45) 100%)" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-36 md:min-h-[90svh] md:justify-center md:px-12 md:pb-24 md:pt-32 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs leading-relaxed tracking-wide text-usi-cream/75 sm:text-sm">
            東京・板橋の、秘密基地のようなスタジオへ。
          </p>
          <h1 className="mt-6 text-balance text-[clamp(1.8rem,5.2vw,3.5rem)] font-bold leading-[1.3] tracking-tight text-usi-cream md:mt-8">
            録るだけで終わらない。<br />
            完成まで、その日に。
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-usi-cream/85 md:text-base">
            録音からミックス・マスタリングまで、一人のエンジニアが担当。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <a href="https://reserve.united-studio.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-usi-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-usi-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-cream md:min-h-[52px] md:text-base">
              空き状況・料金確認・予約
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
            <a href="https://page.line.me/568repew" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-usi-cream/30 px-7 py-3 text-sm font-medium text-usi-cream transition-colors hover:border-usi-cream/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-cream md:min-h-[52px] md:text-base">
              LINEで相談
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex" aria-hidden="true">
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-usi-cream/50">Scroll</span>
            <ChevronDown className="h-4 w-4 text-usi-cream/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
