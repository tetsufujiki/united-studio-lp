import Image from "next/image";

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/assets/booth-atmosphere.jpg"
          alt="Recording booth atmosphere"
          fill
          className="object-cover object-center"
          style={{ filter: 'brightness(0.55) contrast(1.05) saturate(0.9)' }}
          quality={85}
          loading="lazy"
        />
        {/* Single gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        {/* Section header - Japanese prominent, English secondary */}
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            お客様の最新レビュー
          </h2>
          <p className="mt-2 text-xs tracking-[0.2em] uppercase text-foreground/60">
            Reviews
          </p>
        </div>

        {/* Iframe container - clean premium style */}
        <div
          className="relative"
        >
          {/* Premium container with soft border and shadow */}
          <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 shadow-lg shadow-black/20">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
            
            {/* Iframe wrapper - scrollable with offset */}
            <div className="relative h-[780px] overflow-hidden md:h-[480px]">
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
          
          {/* External link to full reviews */}
          <a
            href="https://unitedstudio.stores.jp/reserve/usi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            続きは予約ページでご確認いただけます
          </a>
        </div>
      </div>
    </section>
  );
}
