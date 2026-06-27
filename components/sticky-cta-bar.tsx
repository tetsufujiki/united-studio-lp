"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function StickyCTABar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isHidden = pathname === "/guide" || pathname === "/faq";

  useEffect(() => {
    if (isHidden) return;
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

  if (isHidden || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-5 md:pb-8 pointer-events-none"
    >
      {/* Adaptive gradient - works on both light and dark backgrounds */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      
      <div className="mx-auto max-w-sm md:max-w-md pointer-events-auto">
        {/* Main floating panel - simplified */}
        <div className="relative">
          {/* Panel container - semi-transparent with border */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md px-6 py-5 shadow-lg shadow-black/50 md:px-8 md:py-6">
            {/* Single top highlight */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
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
                  空き状況を確認する
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
