import Image from "next/image";
import Link from "next/link";
import { MobileNavMenu } from "@/components/mobile-nav-menu";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <nav
        className="relative flex items-center justify-between border-b border-white/5 bg-black/40 px-6 py-3 backdrop-blur-md md:px-12 lg:px-20"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        aria-label="サイトナビゲーション"
      >
        {/* Brand icon — USI favicon links to top page */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md opacity-75 transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          aria-label="USI新河岸音楽工務所 トップへ"
        >
          <Image
            src="/images/usi-logo.png"
            alt="USI"
            width={36}
            height={36}
            className="rounded-sm"
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground">
              USI新河岸音楽工務所
            </span>
            <span
              className="text-[11px] font-light uppercase tracking-[0.15em] text-foreground/60 sm:text-[12px] sm:tracking-[0.2em]"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
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
