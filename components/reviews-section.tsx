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
            "linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(20,16,11,0.52) 30%, rgba(20,16,11,0.52) 70%, rgba(15,12,8,0.75) 100%)",
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 md:px-12 md:pt-44 md:pb-40">
        {/* Section header */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-2xl font-light tracking-tight text-[#f7f1e8] md:text-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            STORES予約に寄せられたレビュー
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a382]/70" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#d8c5ab]">
              Reviews
            </p>
            <span className="h-px w-8 bg-[#c9a382]/70" />
          </div>
        </div>

        {/* Premium review-count badge - placed before the card to build trust first */}
        <div className="mb-14 flex justify-center md:mb-16">
          <div className="inline-flex flex-col items-center gap-2.5 rounded-2xl border border-[#c9a382]/30 bg-white/[0.07] px-7 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-md">
            {/* Five gold stars */}
            <div className="flex items-center gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="h-4 w-4 text-[#d8a86b]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="flex items-baseline gap-1.5 text-[#f7f1e8]">
              <span className="text-2xl font-medium tracking-tight md:text-[28px]">100</span>
              <span className="text-sm font-light tracking-wide text-[#e8d9c4] md:text-base">件以上のレビュー</span>
            </p>
          </div>
        </div>

        {/* Review card with glassmorphism */}
        <div className="flex flex-col items-center gap-14 md:gap-16">
          {/* Single review card - floating with premium styling */}
          <div className="w-full max-w-2xl">
            <div 
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.42)]"
              style={{
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top inner highlight for glass effect */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/* Review iframe wrapper - fixed height for exactly 1 review, no scroll */}
              <div className="relative h-80 overflow-hidden md:h-72">
                <iframe
                  src="https://unitedstudio.stores.jp/reserve/usi/reviews"
                  className="pointer-events-auto w-full border-0"
                  style={{ 
                    marginTop: "-200px", 
                    height: "calc(100% + 200px)",
                    backgroundColor: "transparent"
                  }}
                  title="Customer Reviews"
                  loading="lazy"
                  scrolling="no"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>

          {/* CTA Button - View all reviews */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#c9a382]/50 bg-white px-9 py-4 text-sm md:text-base font-medium text-[#1a1510] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a382] hover:shadow-[0_18px_40px_-8px_rgba(201,163,130,0.45)]"
              >
                100件以上のレビューを見る
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </DialogTrigger>

            {/* Modal for full reviews */}
            <DialogContent 
              className="p-0 border-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center h-[90vh] w-[calc(100%-1.5rem)] md:h-[85vh] md:max-w-4xl"
              showCloseButton={true}
            >
              {/* Modal iframe wrapper with full review list - centered layout */}
              <div className="w-full h-full flex items-center justify-center px-3 md:px-8 py-6 bg-white overflow-hidden">
                {/* Custom scrollable area for iframe with center alignment */}
                <div className="relative w-full h-full max-w-[600px] flex flex-col items-center justify-start overflow-hidden">
                  <iframe
                    src="https://unitedstudio.stores.jp/reserve/usi/reviews"
                    className="w-full border-0 rounded-lg"
                    style={{ 
                      height: "calc(100% + 200px)",
                      marginTop: "-200px",
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
