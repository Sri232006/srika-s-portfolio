import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Quote } from 'lucide-react';

const QUOTES = [
  'Every project I build teaches me one thing the last one didn\'t.',
  'Late nights and early mornings are only worth it when the work gets better.',
  'Chess taught me to think before I move. Code taught me to test before I ship.',
];

export default function RotatingQuote() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timerRef = useRef(null);
  const isTabHiddenRef = useRef(false);

  // Check reduced motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Listen to visibilitychange to pause while browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      isTabHiddenRef.current = document.visibilityState === 'hidden';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Fade transition helper
  const triggerTransition = useCallback((nextIdx) => {
    if (reducedMotion) {
      setCurrentIndex(nextIdx);
      setDisplayIndex(nextIdx);
      return;
    }

    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIdx);
      setDisplayIndex(nextIdx);
      setIsFading(false);
    }, 300);
  }, [reducedMotion]);

  // Rotate to next quote
  const advanceQuote = useCallback(() => {
    if (reducedMotion || isPaused || isTabHiddenRef.current) return;
    const nextIdx = (currentIndex + 1) % QUOTES.length;
    triggerTransition(nextIdx);
  }, [currentIndex, isPaused, reducedMotion, triggerTransition]);

  // Start/restart 5-second interval timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (reducedMotion) return;

    timerRef.current = setInterval(() => {
      advanceQuote();
    }, 5000);
  }, [advanceQuote, reducedMotion]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Click dot navigation
  const handleSelectQuote = (idx) => {
    if (idx === currentIndex) return;
    triggerTransition(idx);
    startTimer();
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-live="off"
      className="w-full max-w-[280px] mx-auto mt-7 text-center select-none flex flex-col items-center"
    >
      {/* Lucide Quote Icon */}
      <Quote
        className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB] mx-auto mb-1.5"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      {/* Thin Rose Accent Divider */}
      <div
        className="w-8 h-0.5 bg-[#C87D87]/60 dark:bg-[#E8A2AB]/60 rounded-full mx-auto mb-2"
        aria-hidden="true"
      />

      {/* Fixed 3-line Height Quote Container */}
      <div className="w-full min-h-[4.5rem] flex items-center justify-center px-1">
        <p
          className={`font-serif italic text-[16px] sm:text-[17px] leading-[1.5] text-[#3D262A] dark:text-[#FBF7F5] transition-all duration-300 ${
            reducedMotion
              ? 'opacity-100 transform-none'
              : isFading
              ? 'opacity-0 translate-y-1.5'
              : 'opacity-100 translate-y-0'
          }`}
        >
          "{QUOTES[displayIndex]}"
        </p>
      </div>

      {/* Dot Navigation Controls */}
      <div className="flex items-center justify-center gap-1 mt-3">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectQuote(idx)}
            aria-label={`Show quote ${idx + 1} of ${QUOTES.length}`}
            aria-current={currentIndex === idx ? 'true' : undefined}
            className="p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B36470] dark:focus-visible:ring-[#E8A2AB] rounded-full cursor-pointer"
          >
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-[#B36470] dark:bg-[#E8A2AB] scale-110 shadow-2xs'
                  : 'bg-[#E0B9C0] dark:bg-[#4A3237] hover:bg-[#C87D87]/70 dark:hover:bg-[#E8A2AB]/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
