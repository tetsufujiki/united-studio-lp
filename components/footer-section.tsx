'use client';

export function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a1612] to-[#0a0d0a] px-4 sm:px-6 md:px-12 py-10 md:py-6 pb-40 md:pb-80">
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Top divider line - subtle orange accent */}
        <div className="mb-6 md:mb-4 border-t border-[#c9a382]/20" />

        {/* Footer content - centered with hierarchy */}
        <div className="flex flex-col items-center justify-center gap-2.5 md:gap-3.5 text-center">
          {/* Company name - heading level */}
          <p className="text-sm md:text-base font-medium text-[#a89d94] tracking-wide">
            United Studio Inc.
          </p>

          {/* Corporate website link - subtext level */}
          <a
            href="https://united-studio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm text-[#9a8f86] hover:text-[#c9a382] transition-colors duration-300 font-light"
          >
            <span>Corporate Website</span>
            <span className="text-[#8a7d74] group-hover:text-[#c9a382]">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
