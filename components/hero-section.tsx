import { Button } from "@/components/ui/button";
import { Mic2, Play, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Mobile background image - optimized for performance */}
        <Image
          src="/assets/studio-mobile.jpg"
          alt="Professional recording studio"
          fill
          className="object-cover object-center md:hidden"
          style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.95)' }}
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Desktop background image - optimized for performance */}
        <Image
          src="/assets/studio-desktop.jpg"
          alt="Professional recording studio"
          fill
          className="hidden object-cover object-center md:block"
          style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.95)' }}
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Single cinematic gradient overlay - replaces multiple overlays */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))'
          }}
        />
      </div>

      {/* Ambient Light Effects - simplified */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[100px]" />

      {/* Navigation */}
      <nav
        className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20"
      >
        <a 
          href="https://rec.united-studio.com" 
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
            <Mic2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground">
              USI新河岸音楽工務所
            </span>
            <span className="text-[12px] font-light uppercase tracking-[0.2em] text-foreground/60">
              Boutique Recording, Mixing & Mastering Studio
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#popular-rankings-heading"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            サービス
          </a>
          <a
            href="#all-inclusive-heading"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            料金
          </a>
          <a
            href="#access-heading"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            アクセス
          </a>
          <a
            href="#equipment-heading"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            設備
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-20 md:px-12 md:pb-0 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm text-white">予約受付中 — Now Booking</span>
          </div>

          {/* Main Headline */}
          <h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">プロ基準を、</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              すべてのクリエイターへ。
            </span>
          </h1>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-14 w-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
              asChild
            >
              <a 
                href="https://unitedstudio.stores.jp/reserve/usi/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                空き状況と料金を確認する
              </a>
            </Button>

            <Button
              size="lg"
              className="group h-14 w-full bg-[#06C755] px-8 text-base font-semibold text-white hover:bg-[#05b04c] hover:shadow-lg hover:shadow-[#06C755]/25 sm:w-auto"
              asChild
            >
              <a 
                href="https://page.line.me/568repew" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <svg
                className="mr-2 h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              セッションの相談をする
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/90"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>プロ仕様機材完備</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>初心者歓迎</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>完全予約制</span>
            </div>
          </div>

          {/* Brand Heritage */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-foreground/40" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/90">
                Since 2006
              </span>
              <div className="h-px w-8 bg-foreground/40" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-foreground/85">Scroll</span>
            <ChevronDown className="h-5 w-5 text-foreground/85" />
          </div>
        </div>

        {/* Subtle gradient backing for bottom text readability */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute right-8 top-1/2 hidden rounded-lg border border-border/50 bg-card/80 p-4 backdrop-blur-md lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-xs font-bold text-primary">
              A
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 text-xs font-bold text-primary">
              B
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/50 text-xs font-bold text-primary">
              C
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">1000+</p>
            <p className="text-xs text-foreground/90">クリエイター利用中</p>
          </div>
        </div>
      </div>
    </section>
  );
}
