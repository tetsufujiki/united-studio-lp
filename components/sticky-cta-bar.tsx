"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  }, [isHidden]);

  if (isHidden || !isVisible) {
    return null;
  }

  return (
    <div data-sticky-cta className="fixed bottom-0 left-0 right-0 z-40">
      {/* Slim reservation bar — matches the USDL ink surface with a hairline top edge */}
      <div
        className="border-t px-4 py-3 md:px-8"
        style={{
          background: "rgba(20, 22, 28, 0.94)",
          borderColor: "rgba(244, 239, 230, 0.14)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          {/* Label — hidden on very small screens to keep the bar unobtrusive */}
          <a
            href="https://reserve.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted transition-colors duration-200 hover:text-usi-cream sm:flex"
          >
            Booking
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>

          <a
            href="https://reserve.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center bg-usi-accent px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-usi-accent-strong sm:w-auto sm:min-w-[220px] md:h-12 md:text-base"
          >
            空き状況を確認する
          </a>
        </div>
      </div>
    </div>
  );
}
