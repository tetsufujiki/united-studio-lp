'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      className="fixed bottom-7 right-4 md:bottom-9 md:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-[#f7f5f2]/90 text-[#3a3530]/70 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:bg-[#f7f5f2] hover:text-[#1a1612] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] pointer-events-auto"
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </button>
  );
}
