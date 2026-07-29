'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const DEFAULT_BOTTOM = 28; // px — equivalent to bottom-7
const GAP = 14;            // px — visual gap between button bottom and CTA top

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  // bottomOffset is the CSS `bottom` value in px, derived from actual CTA height
  const [bottomOffset, setBottomOffset] = useState(DEFAULT_BOTTOM);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Scroll visibility
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track actual CTA bar height via ResizeObserver on the real DOM element
  useEffect(() => {
    function measure() {
      const cta = document.querySelector<HTMLElement>('[data-sticky-cta]');

      // CTA is absent or not rendered — use default bottom
      if (!cta) {
        setBottomOffset(DEFAULT_BOTTOM);
        return;
      }

      // getBoundingClientRect gives the rendered height including safe-area padding
      const rect = cta.getBoundingClientRect();

      // If element is offscreen (height 0 or invisible) treat as hidden
      if (rect.height <= 0) {
        setBottomOffset(DEFAULT_BOTTOM);
        return;
      }

      // CTA bar already includes safe-area-inset-bottom in its own padding,
      // so we must NOT add env(safe-area-inset-bottom) again here.
      // The button should sit GAP pixels above the top edge of the CTA bar.
      setBottomOffset(rect.height + GAP);
    }

    // Observe the CTA element with ResizeObserver so any height change
    // (text reflow, font load, safe-area change) is automatically tracked.
    function attach() {
      const cta = document.querySelector<HTMLElement>('[data-sticky-cta]');
      if (!cta) {
        setBottomOffset(DEFAULT_BOTTOM);
        return;
      }

      resizeObserverRef.current?.disconnect();
      const ro = new ResizeObserver(measure);
      ro.observe(cta);
      resizeObserverRef.current = ro;
      measure(); // immediate read
    }

    // Use MutationObserver on <body> to detect when StickyCTABar mounts/unmounts
    const mo = new MutationObserver(() => {
      attach();
      measure();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Also re-measure on window resize (handles zoom changes)
    window.addEventListener('resize', measure, { passive: true });

    // Initial attach
    attach();

    return () => {
      mo.disconnect();
      resizeObserverRef.current?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ戻る"
      style={{ bottom: bottomOffset }}
      className="fixed right-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-[#f7f5f2]/90 text-[#3a3530]/70 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-md transition-[opacity,transform] duration-300 hover:bg-[#f7f5f2] hover:text-[#1a1612] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] pointer-events-auto md:right-8"
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </button>
  );
}
