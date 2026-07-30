'use client';

export function FooterSection() {
  return (
    <footer className="relative bg-usi-ink px-6 pb-36 pt-14 md:px-12 md:pb-32 md:pt-16">
      <div className="relative z-10 mx-auto max-w-6xl lg:px-4">
        {/* Top hairline */}
        <div className="mb-10 border-t border-usi-hairline-dark" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Company name */}
          <p className="text-sm font-medium tracking-wide text-usi-cream md:text-base">
            United Studio Inc.
          </p>

          {/* Corporate website link */}
          <a
            href="https://united-studio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted transition-colors duration-200 hover:text-usi-cream"
          >
            <span>Corporate Website</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
