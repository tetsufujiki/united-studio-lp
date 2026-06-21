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
            <span className="text-[11px] sm:text-[12px] font-light sm:font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 sm:text-foreground/60" style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              Boutique Recording, Mixing & Mastering Studio
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
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
            href="#equipment-pro-section"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            設備
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 md:min-h-[calc(100vh-88px)] md:pb-0 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div
            className="relative mb-12 inline-flex scale-[0.90] items-center justify-center sm:scale-100 md:mb-8"
            style={{ marginTop: 'clamp(3rem, 15vh, 6rem)' }}
          >
            {/* Edge fade lines evoking studio equipment indicators */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full top-1/2 h-px w-8 -translate-y-1/2 sm:w-12"
              style={{
                background:
                  'linear-gradient(to left, rgba(255,255,255,0.28), rgba(255,255,255,0))',
              }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-full top-1/2 h-px w-8 -translate-y-1/2 sm:w-12"
              style={{
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.28), rgba(255,255,255,0))',
              }}
            />
            <a
              href="https://unitedstudio.stores.jp/reserve/usi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 px-2.5 py-1.5 transition-colors duration-300 hover:border-white/25"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 0 16px 0 rgba(255,255,255,0.10)',
              }}
            >
              <span className="status-dot inline-block h-2 w-2 rounded-full bg-[#f59e0b]" />
              <span className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-white/80">
                Recording Available
              </span>
            </a>
          </div>

          {/* Main Headline - Premium Split Design */}
          <h1
            className="mx-auto mb-5 px-4 text-[2.25rem] font-bold leading-[1.2] tracking-tight text-foreground sm:text-5xl sm:leading-tight md:mb-6 md:text-6xl md:leading-[1.15] lg:text-7xl mt-10 md:mt-0"
          >
            <span className="flex flex-col items-center justify-center text-center md:flex-row md:justify-center md:flex-wrap md:gap-2">
              <span className="inline-block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                秘密基地のような
              </span>
              <span className="inline-block">
                スタジオへ
              </span>
            </span>
          </h1>

          {/* Sub Headline - Enhanced visibility */}
          <p className="mb-12 px-4 text-base sm:text-lg md:text-2xl text-foreground font-light tracking-wide text-balance max-w-2xl mx-auto">
            プロ品質のスタジオを、想像より身近に。
          </p>

          {/* Compact CTA Links - Above Cards */}
          <div
            className="mb-16 flex flex-col items-center justify-center gap-3 text-sm"
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <a
                href="https://unitedstudio.stores.jp/reserve/usi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Play className="h-4 w-4" />
                <span>空き状況・料金確認</span>
              </a>
              <span className="hidden text-foreground/30 sm:inline">•</span>
              <a
                href="https://page.line.me/568repew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.204-1.254.204-2.551.204-3.805 0-5.212-4.031-9.058-9.563-9.058C4.031-2.996 0 1.849 0 7.061c0 3.632 2.632 6.771 6.250 7.625.306.102.612.204.918.408.306.204.510.612.510.918v2.041l2.449-1.356c.306-.204.714-.306 1.122-.306h.306c1.224 0 2.449-.102 3.571-.306 4.183-.51 7.347-3.98 7.347-8.019 0-.306 0-.612-.051-.918zm-11.076 2.04c-.306 0-.612-.102-.918-.102-1.122 0-2.143.408-2.959 1.020l-.918.612-.918-1.632v-1.326c-.51-.814-.816-1.733-.816-2.755 0-3.224 2.551-5.876 5.720-5.876 3.224 0 5.773 2.652 5.773 5.876 0 1.020-.204 2.041-.612 2.959-.918 2.449-3.265 4.183-6.002 4.183-.306 0-.612 0-.918-.102l-1.632.918.408-1.632a1.326 1.326 0 00-.918-1.224zm7.347-5.056c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612zm2.347 0c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612z" />
                </svg>
                <span>LINEで相談</span>
              </a>
            </div>
          </div>

          {/* Trust & Feature Indicators - Compact Display */}
          <div
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6"
          >
            {/* Card 1: Professional Equipment */}
            <div
              className="rounded-xl border border-teal-500/60 bg-teal-500/40 p-4 md:p-5"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600/60 mx-auto md:mx-0">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2m0-14c0-1.105 1.343-2 3-2s3 .895 3 2m0 14c1.657 0 3-.895 3-2m0-14c-1.657 0-3-.895-3-2"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground text-center md:text-left">
                プロ仕様機材完備
              </h3>
              <p className="mt-1 text-sm sm:text-xs md:text-xs text-foreground/95 text-center md:text-left md:text-foreground/80 font-semibold sm:font-medium md:font-normal leading-tight">
                業界標準のハイクオリティ機材
              </p>
            </div>

            {/* Card 2: Beginner Friendly - Emphasized with bright lime green */}
            <div
              className="relative rounded-xl border border-lime-400/70 bg-lime-400/50 p-4 md:p-5"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-500/70 mx-auto md:mx-0">
                {/* Young Leaf Mark SVG - 若葉マーク */}
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-foreground text-center md:text-left">
                初心者歓迎
              </h3>
              <p className="mt-1 text-sm sm:text-xs md:text-xs text-foreground/98 text-center md:text-left md:text-foreground/85 font-bold sm:font-semibold md:font-normal leading-tight">
                丁寧サポートで安心
              </p>
            </div>

            {/* Card 3: Full Reservation */}
            <div
              className="rounded-xl border border-teal-500/60 bg-teal-500/40 p-4 md:p-5"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600/60 mx-auto md:mx-0">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground text-center md:text-left">
                完全予約制
              </h3>
              <p className="mt-1 text-sm sm:text-xs md:text-xs text-foreground/95 text-center md:text-left md:text-foreground/80 font-semibold sm:font-medium md:font-normal leading-tight">
                集中できる制作環境
              </p>
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

          {/* Mobile & Tablet Only - 1000+ Creators Badge */}
          <div className="mt-8 flex justify-center lg:hidden">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-[oklch(0.21_0.03_250)]/50 py-1.5 pl-2.5 pr-4 backdrop-blur-md">
              <div className="flex -space-x-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/80 text-[9px] font-bold text-primary-foreground ring-1 ring-[oklch(0.21_0.03_250)]">
                  A
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/60 text-[9px] font-bold text-primary-foreground ring-1 ring-[oklch(0.21_0.03_250)]">
                  B
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/40 text-[9px] font-bold text-primary-foreground ring-1 ring-[oklch(0.21_0.03_250)]">
                  C
                </span>
              </div>
              <span className="text-xs font-medium tracking-wide text-foreground/90">
                <span className="font-bold text-primary">1000+</span> Creators
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile, visible on desktop */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
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

      {/* Floating Elements - User Count */}
      <div className="absolute bottom-32 right-8 hidden overflow-hidden rounded-xl border border-white/10 bg-[oklch(0.21_0.03_250)]/65 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/5 backdrop-blur-xl lg:block">
        {/* Orange accent bar */}
        <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
        <div className="flex items-center gap-3 py-4 pl-6 pr-5">
          <div className="flex -space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-xs font-bold text-primary-foreground ring-2 ring-[oklch(0.21_0.03_250)]">
              A
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/60 text-xs font-bold text-primary-foreground ring-2 ring-[oklch(0.21_0.03_250)]">
              B
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 text-xs font-bold text-primary-foreground ring-2 ring-[oklch(0.21_0.03_250)]">
              C
            </div>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-primary">1000+</p>
            <p className="text-xs font-normal leading-tight text-white/70">
              <span className="block whitespace-nowrap">クリエイター</span>
              <span className="block whitespace-nowrap">利用中</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
