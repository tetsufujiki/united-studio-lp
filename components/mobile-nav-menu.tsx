"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "トップ", href: "/" },
  { label: "スタジオガイド", href: "/guide" },
  { label: "よくある質問", href: "/faq" },
] as const;

export function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <>
      {/* Hamburger button — shown on all screen sizes */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        className="flex items-center justify-center rounded-lg border border-white/15 bg-white/10 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
      >
        {menuOpen ? (
          <X className="h-5 w-5 text-foreground" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
        )}
      </button>

      {/* Dropdown menu */}
      {menuOpen && (
        <div
          id="nav-menu"
          role="menu"
          className="absolute right-6 top-full z-30 mt-2 border border-white/10 bg-black/90 px-4 py-3 backdrop-blur-md rounded-lg md:right-12"
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 whitespace-nowrap ${
                  isActive(href)
                    ? "text-primary underline underline-offset-4"
                    : "text-foreground/85 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
