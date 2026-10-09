'use client';

import Image from 'next/image';

export function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden bg-usi-ink py-28 sm:py-32 md:py-40 lg:py-48">
      {/* Background — U87 microphone photo */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U87-THRA2ltM3QKHqhO8mItRhGDVnKyUJn.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority={false}
        loading="lazy"
        quality={80}
        sizes="100vw"
        className="object-cover object-[70%_center] sm:object-center"
      />

      {/* Deep ink overlay for editorial darkness and text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(20,22,28,0.72) 0%, rgba(20,22,28,0.6) 50%, rgba(20,22,28,0.88) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted">
              Recording
            </span>
            <span className="h-px w-16 bg-usi-hairline-dark" />
          </div>

          {/* Headline */}
          <h2 className="mt-10 text-2xl font-light leading-[1.6] tracking-tight text-usi-cream sm:text-4xl md:text-5xl">
            <span className="block text-balance">その一曲を、</span>
            <span className="block text-balance">ちゃんと残してみませんか。</span>
          </h2>

          <p className="mt-10 text-sm font-light leading-relaxed text-usi-cream-muted sm:text-base md:text-lg">
            <span className="block">初めてのレコーディングを、</span>
            <span className="block">大切にしています。</span>
          </p>

          {/* Booking first; LINE remains a consultation route */}
          <div className="mt-12 flex flex-col items-stretch gap-3 sm:mt-14 sm:flex-row sm:items-center">
          <a
            href="https://reserve.united-studio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-usi-accent px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-usi-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-cream sm:text-base"
          >
            空き状況・料金確認・予約 <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://page.line.me/568repew"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-usi-cream/30 px-6 py-4 text-sm font-medium text-usi-cream transition-colors duration-200 hover:border-usi-cream/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-usi-cream sm:text-base"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.365 9.863c.204-1.254.204-2.551.204-3.805 0-5.212-4.031-9.058-9.563-9.058C4.031-2.996 0 1.849 0 7.061c0 3.632 2.632 6.771 6.250 7.625.306.102.612.204.918.408.306.204.510.612.510.918v2.041l2.449-1.356c.306-.204.714-.306 1.122-.306h.306c1.224 0 2.449-.102 3.571-.306 4.183-.51 7.347-3.98 7.347-8.019 0-.306 0-.612-.051-.918zm-11.076 2.04c-.306 0-.612-.102-.918-.102-1.122 0-2.143.408-2.959 1.020l-.918.612-.918-1.632v-1.326c-.51-.814-.816-1.733-.816-2.755 0-3.224 2.551-5.876 5.720-5.876 3.224 0 5.773 2.652 5.773 5.876 0 1.020-.204 2.041-.612 2.959-.918 2.449-3.265 4.183-6.002 4.183-.306 0-.612 0-.918-.102l-1.632.918.408-1.632a1.326 1.326 0 00-.918-1.224zm7.347-5.056c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612zm2.347 0c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612z" />
            </svg>
            <span>LINEで相談する</span>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
