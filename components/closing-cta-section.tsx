'use client';

import Image from 'next/image';

export function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-36 lg:py-44">
      {/* Background — U87 microphone photo, optimized & responsive (AVIF/WebP via next/image) */}
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

      {/* Soft overlay — keeps the metal & fur texture readable while adding depth toward the footer */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(20,16,12,0.28) 0%, rgba(20,16,12,0.42) 55%, rgba(15,14,12,0.78) 100%)',
        }}
      />
      {/* Subtle vignette to focus the eye on the card */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(15,14,12,0.35) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 sm:px-6 md:px-12">
        {/* Premium ivory glass card */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/40 bg-[#fbf9f4]/80 px-7 py-14 backdrop-blur-xl shadow-[0_24px_70px_-20px_rgba(0,0,0,0.55)] sm:px-10 sm:py-16 md:px-16 md:py-20">
          {/* Faint pearl sheen for richness */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 45%, rgba(240,232,222,0.35) 100%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Eyebrow accent */}
            <div className="mb-8 flex items-center gap-3 sm:mb-10">
              <span className="h-px w-6 bg-[#c9a382]/60" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9a8f80]">
                Recording
              </span>
              <span className="h-px w-6 bg-[#c9a382]/60" />
            </div>

            {/* Headline — the hero of the section */}
            <h2 className="text-xl font-medium leading-[1.7] tracking-tight text-[#2a241f] sm:text-3xl md:text-4xl">
              <span className="block whitespace-nowrap">その一曲を、</span>
              <span className="block whitespace-nowrap">ちゃんと残してみませんか。</span>
            </h2>

            {/* Generous whitespace */}
            <p className="mt-10 text-sm font-light leading-relaxed text-[#5a5250] sm:mt-12 sm:text-base md:text-lg">
              初めてのレコーディングも歓迎しています。
            </p>

            {/* Generous whitespace before CTA */}
            <a
              href="https://page.line.me/568repew"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#06C755] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-6px_rgba(6,199,85,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b04c] hover:shadow-[0_16px_38px_-8px_rgba(6,199,85,0.6)] sm:mt-14 sm:px-10 sm:py-4 sm:text-base"
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
