"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky CTA when hero is NOT intersecting (has left viewport)
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-5 md:pb-8"
    >
      {/* Single gradient for content separation */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="mx-auto max-w-sm md:max-w-md">
        {/* Main floating panel - simplified */}
        <div className="relative">
          {/* Panel container - reduced layers */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]/95 px-6 py-5 shadow-lg shadow-black/40 md:px-8 md:py-6">
            {/* Single top highlight */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Primary Button - Booking */}
            <div className="relative flex items-center justify-center">
              <Button
                size="sm"
                className="relative h-12 min-w-[220px] bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 md:h-[52px] md:min-w-[240px] md:text-base"
                asChild
              >
                <a 
                  href="https://unitedstudio.stores.jp/reserve/usi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  予約ページへ進む
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
