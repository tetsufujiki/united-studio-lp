"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileNavMenu } from "@/components/mobile-nav-menu";

// USDL 4.0 × REC Campaign header — unified across all pages
export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <nav
        className="relative flex items-center justify-between border-b px-6 py-3 md:px-12 lg:px-20"
        style={{
          background: "rgba(20, 22, 28, 0.82)",
          borderColor: "rgba(244, 239, 230, 0.14)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        aria-label="サイトナビゲーション"
      >
        {/* Brand icon — USI favicon links to top page */}
        <Link
          href="/"
          className="flex items-center gap-3 opacity-90 transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-usi-accent/70"
          aria-label="USI新河岸音楽工務所 トップへ"
        >
          <Image
            src="/images/usi-logo.png"
            alt="USI"
            width={36}
            height={36}
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-usi-cream">
              USI新河岸音楽工務所
            </span>
            <span className="font-mono text-[10px] font-light uppercase tracking-[0.15em] text-usi-cream-muted sm:text-[11px] sm:tracking-[0.2em]">
              Boutique Recording, Mixing &amp; Mastering Studio
            </span>
          </div>
        </Link>

        {/* Hamburger menu — all screen sizes */}
        <MobileNavMenu />
      </nav>
    </header>
  );
}
