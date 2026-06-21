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
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
