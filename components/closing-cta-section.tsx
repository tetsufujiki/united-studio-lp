'use client';

import { Mic } from 'lucide-react';

export function ClosingCTASection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#f0ebe4] via-[#3a3530] to-[#1a1612]">
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 md:px-12 flex flex-col items-center pb-4 md:pb-2">
        {/* Message Card Container - Large rounded card with subtle styling and warm tone */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-[#d4ccc0]/25 bg-gradient-to-br from-[#faf8f5] to-[#f5f1eb] backdrop-blur-sm px-5 sm:px-8 md:px-16 py-10 sm:py-12 md:py-20 shadow-sm hover:shadow-md transition-all duration-300">
          
          {/* Subtle warm gradient overlay for depth */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#fff9f5]/30 via-transparent to-[#f0e8df]/20 pointer-events-none" />
          
          {/* Content - Center aligned */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Heading - Increased size and weight for better visibility */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#4a423c] leading-tight sm:leading-relaxed mb-4">
              レコーディングをもっと身近に
            </h2>

            {/* Subtle divider - thin line accent below title */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a382]/40 to-transparent mb-5 sm:mb-6" />

            {/* Message Paragraph - Empathy focused, simple and friendly */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-[#5a5250] mb-8 sm:mb-10 md:mb-12 max-w-sm sm:max-w-xl font-light text-balance">
              初めてのレコーディングも大歓迎です。<br/>
              ご不明な点はお気軽にご相談ください。
            </p>

            {/* CTA Button */}
            <a
              href="https://page.line.me/568repew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b04c] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:shadow-lg shadow-[#06C755]/25"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.365 9.863c.204-1.254.204-2.551.204-3.805 0-5.212-4.031-9.058-9.563-9.058C4.031-2.996 0 1.849 0 7.061c0 3.632 2.632 6.771 6.250 7.625.306.102.612.204.918.408.306.204.510.612.510.918v2.041l2.449-1.356c.306-.204.714-.306 1.122-.306h.306c1.224 0 2.449-.102 3.571-.306 4.183-.51 7.347-3.98 7.347-8.019 0-.306 0-.612-.051-.918zm-11.076 2.04c-.306 0-.612-.102-.918-.102-1.122 0-2.143.408-2.959 1.020l-.918.612-.918-1.632v-1.326c-.51-.814-.816-1.733-.816-2.755 0-3.224 2.551-5.876 5.720-5.876 3.224 0 5.773 2.652 5.773 5.876 0 1.020-.204 2.041-.612 2.959-.918 2.449-3.265 4.183-6.002 4.183-.306 0-.612 0-.918-.102l-1.632.918.408-1.632a1.326 1.326 0 00-.918-1.224zm7.347-5.056c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612zm2.347 0c.306 0 .612-.306.612-.612 0-.306-.306-.612-.612-.612-.306 0-.612.306-.612.612 0 .306.306.612.612.612z" />
              </svg>
              <span>LINEで相談する</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
