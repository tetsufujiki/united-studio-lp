import Image from "next/image";

const equipmentCategories = [
  {
    label: "Studio",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio0-ZOOWNFvPvK3sUitqmggrSwRF8mUD38.jpg",
  },
  {
    label: "Outboard",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usi-otIfdpT4abQL3yw8TF7Nv1ccXKWdmK.jpg",
  },
  {
    label: "Instrument",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sv2_4-FcLCt2J9LHMJsXHEILtup2DQwZFuV1.jpg",
  },
];

export function ClosingSection() {
  return (
    <section className="relative bg-usi-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
              Professional Grade Equipment
            </span>
            <span className="h-px flex-1 bg-usi-hairline" />
          </div>

          <h3
            id="equipment-pro-section"
            className="mt-8 max-w-2xl scroll-mt-24 text-balance text-2xl font-light leading-relaxed tracking-tight text-usi-text sm:text-3xl md:text-4xl"
          >
            プロフェッショナル基準の機材と環境をご提供します
          </h3>
        </div>

        {/* Equipment category strip — hairline-framed grid */}
        <div className="grid grid-cols-3 gap-px border border-usi-hairline bg-usi-hairline">
          {equipmentCategories.map((category) => (
            <div key={category.label} className="group relative aspect-square overflow-hidden bg-usi-sand-soft">
              <Image
                src={category.src || "/placeholder.svg"}
                alt={category.label}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ filter: "saturate(0.95) brightness(1.02)" }}
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 384px"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3.5">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  {category.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio details CTA */}
        <div className="mt-12 flex flex-col items-start gap-4 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-text-muted">
            Equipment &amp; Facility
          </p>
          <a
            href="https://studio.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-usi-text/25 px-6 py-3 text-sm font-semibold text-usi-text transition-colors duration-200 hover:border-usi-text hover:bg-usi-text hover:text-usi-sand"
          >
            <span>機材・設備について</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-usi-text-muted transition-colors duration-200 group-hover:text-usi-sand/80">
              Studio Details
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
