import Image from "next/image";

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Studio atmosphere photo background - sets the premium world */}
      <Image
        src="/assets/booth-atmosphere.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={80}
        className="-z-20 object-cover"
        aria-hidden="true"
      />

      {/* Soft dark gradient overlay - depth + readability */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,8,0.92) 0%, rgba(20,16,11,0.78) 30%, rgba(20,16,11,0.78) 70%, rgba(15,12,8,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle champagne-gold light bloom (top center) */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[420px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,163,130,0.20), transparent)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Thin glass gloss layer across the top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#e8d9c4]/40 to-transparent"
        aria-hidden="true"
      />

      {/* Gentle vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-16 md:px-12 md:pt-40 md:pb-24">
        {/* Section header - light over photo */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-light tracking-tight text-[#f7f1e8] md:text-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            実際にご利用いただいた方の<span className="font-medium">声</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
            <span className="h-px w-8 bg-[#c9a382]/70" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#d8c5ab]">
              Reviews
            </p>
          </div>
        </div>

        {/* Iframe container - bright readable card floating over the photo */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#c9a382]/20 backdrop-blur-sm">
            {/* Soft champagne inner highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8d9c4] to-transparent" />

            {/* Iframe wrapper - scrollable with offset */}
            <div className="relative h-[780px] overflow-hidden md:h-[700px]">
              <iframe
                src="https://unitedstudio.stores.jp/reserve/usi/reviews"
                className="pointer-events-none w-full border-0"
                style={{ marginTop: "-140px", height: "calc(100% + 140px)" }}
                title="Customer Reviews"
                loading="lazy"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          {/* External link to full reviews - high-contrast champagne gold pill */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://unitedstudio.stores.jp/reserve/usi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#c9a382]/50 bg-[#1a1510]/60 px-6 py-3 text-sm font-medium text-[#e8d2b3] shadow-[0_6px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-colors hover:bg-[#c9a382] hover:text-[#1a1510]"
            >
              続きは予約ページでご確認いただけます
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
