"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-center rounded-lg border border-white/15 bg-white/10 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 md:hidden"
        aria-label="メニューを開く"
      >
        {menuOpen ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-30 border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/guide"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-foreground/90 transition-colors duration-200 hover:text-foreground"
            >
              スタジオガイド
            </Link>
            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-foreground/90 transition-colors duration-200 hover:text-foreground"
            >
              よくある質問
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
