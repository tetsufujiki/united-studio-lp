"use client";

import { Mic2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavMenu } from "@/components/mobile-nav-menu";

export function StickyHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Sticky nav container */}
      <nav className="relative flex items-center justify-between border-b border-white/5 bg-black/40 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20" style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        {/* Logo and branding */}
        <a 
          href="/" 
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
            <Mic2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground">
              USI新河岸音楽工務所
            </span>
            <span className="text-[11px] sm:text-[12px] font-light sm:font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 sm:text-foreground/60" style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              Boutique Recording, Mixing & Mastering Studio
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/guide"
            className={`text-sm font-medium transition-all duration-200 ${
              isActive('/guide')
                ? 'text-primary underline underline-offset-4'
                : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            スタジオガイド
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-medium transition-all duration-200 ${
              isActive('/faq')
                ? 'text-primary underline underline-offset-4'
                : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            よくある質問
          </Link>
        </div>

        {/* Mobile hamburger + dropdown (client component) */}
        <MobileNavMenu />
      </nav>
    </header>
  );
}
