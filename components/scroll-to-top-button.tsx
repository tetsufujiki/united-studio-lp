'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const pathname = usePathname();

  // StickyCTABar is shown on '/' only (hidden on /guide and /faq)
  const hasCTAPage = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track whether the sticky CTA bar is actually rendered (hero has scrolled out)
  useEffect(() => {
    if (!hasCTAPage) {
      setCtaVisible(false);
      return;
    }
    const hero = document.getElementById('hero');
    if (!hero) {
      setCtaVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setCtaVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [hasCTAPage]);

  if (!isVisible) return null;

  // On mobile (< md breakpoint), when the CTA bar is visible, shift the button
  // above it: CTA bar height + safe-area-inset-bottom + gap.
  // On desktop (md+) the CTA bar is the same height but the button is positioned
  // far enough right that they never overlap — keep the default md:bottom-9.
  const mobileBottom = ctaVisible
    ? 'calc(var(--mobile-cta-bar-height) + env(safe-area-inset-bottom, 0px) + var(--scroll-top-gap))'
    : 'calc(1.75rem + env(safe-area-inset-bottom, 0px))'; // bottom-7 equivalent

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ戻る"
      style={{
        // Mobile bottom — overridden on md+ by Tailwind class below
        bottom: mobileBottom,
      }}
      className="fixed right-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-[#f7f5f2]/90 text-[#3a3530]/70 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:bg-[#f7f5f2] hover:text-[#1a1612] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] pointer-events-auto md:!bottom-9 md:right-8"
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </button>
  );
}
