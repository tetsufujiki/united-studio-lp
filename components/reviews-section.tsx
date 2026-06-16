'use client'

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ReviewsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Studio atmosphere photo background - brightened for luxury feel */}
      <Image
        src="/assets/booth-atmosphere.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={80}
        className="-z-20 object-cover brightness-110"
        aria-hidden="true"
      />

      {/* Adjusted soft overlay - lighter to show more of the white sofa area */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,8,0.82) 0%, rgba(20,16,11,0.62) 30%, rgba(20,16,11,0.62) 70%, rgba(15,12,8,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle champagne-gold light bloom (top center) */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[420px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,163,130,0.25), transparent)",
          filter: "blur(50px)",
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
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 md:px-12 md:pt-40 md:pb-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[#f7f1e8] md:text-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            STORES予約に寄せられた<span className="font-medium">レビュー</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a382]/70" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#d8c5ab]">
              Reviews
            </p>
            <span className="h-px w-8 bg-[#c9a382]/70" />
          </div>
        </div>

        {/* Review card with glassmorphism */}
        <div className="flex flex-col items-center gap-8">
          {/* Single review card - floating with premium styling */}
          <div className="w-full max-w-2xl">
            <div 
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Top inner highlight for glass effect */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Review iframe wrapper - fixed height for exactly 1 review */}
              <div className="relative h-80 overflow-hidden md:h-96">
                <iframe
                  src="https://unitedstudio.stores.jp/reserve/usi/reviews"
                  className="pointer-events-auto w-full border-0"
                  style={{ 
                    marginTop: "-160px", 
                    height: "calc(100% + 160px)",
                    backgroundColor: "transparent"
                  }}
                  title="Customer Reviews"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>

          {/* Review count text */}
          <p className="text-center text-base md:text-lg text-[#e8d9c4] font-light tracking-wide">
            100件以上のレビューをいただいています
          </p>

          {/* CTA Button - View all reviews */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-[#c9a382]/60 bg-gradient-to-r from-[#c9a382]/10 to-[#d8c5ab]/5 px-8 py-3.5 text-sm md:text-base font-medium text-[#e8d2b3] shadow-[0_8px_24px_rgba(201,163,130,0.15)] backdrop-blur-sm transition-all duration-300 hover:border-[#c9a382] hover:bg-[#c9a382]/15 hover:shadow-[0_12px_32px_rgba(201,163,130,0.25)]"
              >
                すべてのレビューを見る
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </DialogTrigger>

            {/* Modal for full reviews */}
            <DialogContent 
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:w-full md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 h-[90vh] md:h-[85vh] p-0 border-0 rounded-3xl overflow-hidden"
              showCloseButton={true}
            >
              {/* Modal iframe wrapper with full review list */}
              <div className="relative w-full h-full overflow-hidden bg-white">
                {/* Custom scrollable area for iframe */}
                <div className="relative w-full h-full overflow-y-auto">
                  <iframe
                    src="https://unitedstudio.stores.jp/reserve/usi/reviews"
                    className="w-full border-0"
                    style={{ 
                      minHeight: "100%",
                      backgroundColor: "white"
                    }}
                    title="All Customer Reviews"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
