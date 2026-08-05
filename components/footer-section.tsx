'use client';

const footerLinks = [
  {
    label: 'UTATTEMITA',
    sub: '歌ってみた',
    href: 'https://utattemita.united-studio.com',
  },
  {
    label: 'STUDIO',
    sub: '設備・スタジオ',
    href: 'https://studio.united-studio.com',
  },
  {
    label: 'RESERVE',
    sub: '空き状況・予約',
    href: 'https://reserve.united-studio.com',
  },
  {
    label: 'UNITED STUDIO',
    sub: '公式サイト',
    href: 'https://united-studio.com/',
  },
];

export function FooterSection() {
  return (
    <footer className="relative bg-usi-ink px-6 pb-36 pt-14 md:px-12 md:pb-32 md:pt-16">
      <div className="relative z-10 mx-auto max-w-6xl lg:px-4">
        {/* Top hairline */}
        <div className="mb-10 border-t border-usi-hairline-dark" />

        <div className="mb-8 flex items-center">
          <a
            href="https://reserve.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] text-usi-cream-muted transition-colors duration-200 hover:text-usi-cream"
          >
            BOOKING
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Company name */}
          <p className="text-sm font-medium tracking-wide text-usi-cream md:text-base">
            United Studio Inc.
          </p>

          {/* 4 navigation links */}
          <nav aria-label="サイトナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-usi-cream-muted transition-colors duration-200 group-hover:text-usi-cream">
                      {link.label}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-usi-cream-muted/60 transition-colors duration-200 group-hover:text-usi-cream-muted">
                      {link.sub}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
