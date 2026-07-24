import Image from "next/image";

export function ClosingSection() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "linear-gradient(to bottom, #faf8f5 0%, #f7f4ef 60%, #faf8f5 100%)" }}
    >
      {/* Soft champagne ambient highlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[560px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(201, 163, 130, 0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-12">
        {/* PROFESSIONAL GRADE EQUIPMENT Section */}
        <div>
          {/* Section Header - Japanese prominent, English secondary */}
          <div className="mb-10 text-center md:text-left">
            <h3 id="equipment-pro-section" className="scroll-mt-24 text-2xl font-light tracking-wide text-[#1a1612] sm:text-3xl md:text-4xl lg:text-4xl leading-relaxed">
              プロフェッショナル基準の機材と環境をご提供します
            </h3>
            <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-[#c9a382]/50" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#9a8f80]">
                Professional Grade Equipment
              </span>
            </div>
          </div>

          {/* Equipment Category Preview - elegant light-framed showcase */}
          <div className="mb-12 grid grid-cols-3 gap-4 max-w-lg md:gap-6 md:max-w-2xl">
            {/* Studio */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[#e4ddd2]/80 bg-white p-1.5 shadow-[0_8px_28px_rgba(120,100,70,0.10)] transition-all duration-300 hover:border-[#c9a382]/50 hover:shadow-[0_12px_34px_rgba(120,100,70,0.16)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio0-ZOOWNFvPvK3sUitqmggrSwRF8mUD38.jpg"
                  alt="Studio"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ filter: "saturate(0.95) brightness(1.02)" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 300px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-2 left-2.5">
                  <span className="text-[9px] font-medium tracking-widest uppercase text-white/95">Studio</span>
                </div>
              </div>
            </div>

            {/* Outboard */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[#e4ddd2]/80 bg-white p-1.5 shadow-[0_8px_28px_rgba(120,100,70,0.10)] transition-all duration-300 hover:border-[#c9a382]/50 hover:shadow-[0_12px_34px_rgba(120,100,70,0.16)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usi-otIfdpT4abQL3yw8TF7Nv1ccXKWdmK.jpg"
                  alt="Outboard"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ filter: "saturate(0.95) brightness(1.02)" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 300px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-2 left-2.5">
                  <span className="text-[9px] font-medium tracking-widest uppercase text-white/95">Outboard</span>
                </div>
              </div>
            </div>

            {/* Instrument */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[#e4ddd2]/80 bg-white p-1.5 shadow-[0_8px_28px_rgba(120,100,70,0.10)] transition-all duration-300 hover:border-[#c9a382]/50 hover:shadow-[0_12px_34px_rgba(120,100,70,0.16)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sv2_4-FcLCt2J9LHMJsXHEILtup2DQwZFuV1.jpg"
                  alt="Instrument"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ filter: "saturate(0.95) brightness(1.02)" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 300px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-2 left-2.5">
                  <span className="text-[9px] font-medium tracking-widest uppercase text-white/95">Instrument</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Button - light luxury treatment */}
          <div className="text-center md:text-left">
            <a
              href="https://studio.united-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-[#e0d3bf] bg-white/80 px-7 py-4 text-sm text-[#4a423c] shadow-[0_6px_22px_rgba(120,100,70,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a382] hover:bg-[#c9a382] hover:text-white hover:shadow-[0_10px_30px_rgba(201,163,130,0.30)]"
            >
              <span className="font-medium">機材・設備について</span>
              <span className="text-[#b08a5f] transition-colors duration-300 group-hover:text-white">→</span>
              <span className="text-xs text-[#9a8f80] transition-colors duration-300 group-hover:text-white/80">Studio Details</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
