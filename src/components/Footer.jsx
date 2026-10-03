import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

// Sub-component 1: Terminal Style Hire Button
function HireTerminalButton() {
  const [isRunning, setIsRunning] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [showCaret, setShowCaret] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);

  const IDLE_TEXT = 'npm run hire-srika';
  const ACTION_TEXT = 'Starting conversation...';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleClick = () => {
    if (isRunning) return;

    setIsRunning(true);
    setAnnouncement('Opening the contact form');

    if (reducedMotion) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'auto' });
      }
      const nameInput = document.getElementById('contact-name');
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }

      setTimeout(() => {
        setIsRunning(false);
        setTypedCount(0);
        setShowCaret(false);
        setAnnouncement('');
      }, 2000);
      return;
    }

    // Motion animation sequence
    setShowCaret(true);
    let count = 0;
    const typingInterval = setInterval(() => {
      count++;
      setTypedCount(count);
      if (count >= ACTION_TEXT.length) {
        clearInterval(typingInterval);

        // Wait ~300ms then scroll
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }

          const handleFocus = () => {
            const nameInput = document.getElementById('contact-name');
            if (nameInput) {
              nameInput.focus({ preventScroll: true });
            }
          };

          let focused = false;
          const onScrollEnd = () => {
            if (!focused) {
              focused = true;
              handleFocus();
              window.removeEventListener('scrollend', onScrollEnd);
            }
          };
          window.addEventListener('scrollend', onScrollEnd, { once: true });

          setTimeout(() => {
            if (!focused) {
              focused = true;
              handleFocus();
              window.removeEventListener('scrollend', onScrollEnd);
            }
          }, 800);
        }, 300);

        // Restore after 2s
        setTimeout(() => {
          setIsRunning(false);
          setTypedCount(0);
          setShowCaret(false);
          setAnnouncement('');
        }, 2000);
      }
    }, 30);
  };

  const renderVisualContent = () => {
    if (!isRunning) {
      return (
        <>
          <span className="text-[#7C6267] dark:text-[#C7B4B8]">$</span>
          {" "}
          <span className="text-[#B36470] dark:text-[#E8A2AB] font-semibold">npm</span>
          {" "}
          <span className="text-[#3D262A] dark:text-[#FBF7F5] font-semibold">run</span>
          {" "}
          <span className="text-[#8B3E4B] dark:text-[#F0B3BC] font-semibold">hire-srika</span>
        </>
      );
    }

    const currentTyped = ACTION_TEXT.slice(0, typedCount);
    return (
      <>
        <span className="text-[#7C6267] dark:text-[#C7B4B8]">$</span>
        {" "}
        <span className="text-[#3D262A] dark:text-[#FBF7F5] font-medium">{currentTyped}</span>
        {showCaret && (
          <span className="inline-block w-0.5 h-3.5 ml-0.5 bg-[#B36470] dark:bg-[#E8A2AB] shrink-0" />
        )}
      </>
    );
  };

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <button
        type="button"
        onClick={handleClick}
        aria-disabled={isRunning ? 'true' : undefined}
        aria-label="Hire Srika. Go to the contact form."
        className="inline-flex items-center justify-center rounded-lg bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0] dark:border-[#4A3237] px-4 py-2.5 font-code text-[12px] min-[380px]:text-[13px] leading-none tracking-normal transition-colors duration-200 hover:border-[#B36470] dark:hover:border-[#E8A2AB] focus-visible:ring-2 focus-visible:ring-[#B36470] dark:focus-visible:ring-[#E8A2AB] focus-visible:outline-none select-none shrink-0 cursor-pointer"
      >
        {/* Layout Reservation Container */}
        <div className="grid grid-cols-1 grid-rows-1 items-center">
          <span className="col-start-1 row-start-1 invisible select-none" aria-hidden="true">
            <span className="text-[#7C6267] dark:text-[#C7B4B8]">$</span>
            {" "}
            <span>Starting conversation...</span>
            <span className="inline-block w-0.5 h-3.5 ml-0.5" />
          </span>

          <span aria-hidden="true" className="col-start-1 row-start-1 flex items-center justify-center">
            {renderVisualContent()}
          </span>
        </div>
      </button>
    </>
  );
}

// Sub-component 2: Animated Code Comment Line
function CodeCommentFooter() {
  const [charCount, setCharCount] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const footerRef = useRef(null);

  const FULL_TEXT = '// © 2026 Srika S. Thanks for scrolling this far.';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setCharCount(FULL_TEXT.length);
      setIsTypingDone(true);
      setShowCaret(false);
      return;
    }

    const handleChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        setCharCount(FULL_TEXT.length);
        setIsTypingDone(true);
        setShowCaret(false);
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          let count = 0;
          const interval = setInterval(() => {
            count++;
            setCharCount(count);
            if (count >= FULL_TEXT.length) {
              clearInterval(interval);
              setIsTypingDone(true);

              setTimeout(() => {
                setShowCaret(false);
              }, 1100);
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const renderTokens = (length) => {
    const str = FULL_TEXT.slice(0, length);
    if (!str) return null;

    const slashPart = str.slice(0, 2);
    const restPart = str.slice(2);

    return (
      <span className="inline">
        {slashPart && (
          <span aria-hidden="true" className="text-[#B36470] dark:text-[#E8A2AB] font-medium whitespace-nowrap">
            {slashPart}
          </span>
        )}
        {restPart && (
          <span className="text-[#6E555A] dark:text-[#D4C4C7]">
            {restPart}
          </span>
        )}
      </span>
    );
  };

  return (
    <div
      ref={footerRef}
      aria-label="Copyright 2026 Srika S. Thanks for scrolling this far."
      className="font-code text-[12px] md:text-[clamp(11px,1vw,13px)] lg:text-[13px] leading-[1.6] select-text text-center md:text-right whitespace-normal md:whitespace-nowrap shrink-0 max-w-[290px] min-[380px]:max-w-none"
    >
      <span className="sr-only">Copyright 2026 Srika S. Thanks for scrolling this far.</span>

      <div className="grid grid-cols-1 grid-rows-1 items-center">
        {/* Invisible Placeholder */}
        <span className="col-start-1 row-start-1 invisible select-none whitespace-normal md:whitespace-nowrap" aria-hidden="true">
          {renderTokens(FULL_TEXT.length)}
          <span className="inline-block w-0.5 h-3.5 ml-0.5" />
        </span>

        {/* Typed Visible Text */}
        <span aria-hidden="true" className="col-start-1 row-start-1 inline-block whitespace-normal md:whitespace-nowrap">
          {renderTokens(charCount)}
          {showCaret && (
            <span className={`inline-block w-0.5 h-3.5 ml-0.5 bg-[#B36470] dark:bg-[#E8A2AB] shrink-0 align-middle ${isTypingDone ? 'animate-caret-blink' : ''}`} />
          )}
        </span>
      </div>
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-10 pb-8 bg-[#FDFBF7] dark:bg-[#1A1214] border-t border-[#E0B9C0]/30 dark:border-[#4A3237]/40 text-[#7C6267] dark:text-[#C7B4B8] transition-colors"
      style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stacked Mobile Flex / Space-Between Desktop Flex */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 w-full text-center md:text-left">
          
          {/* Brand Info Block: Centered Column on Mobile, Row on Desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 min-w-0 shrink">
            {/* Monogram Tile (40px) */}
            <div className="w-10 h-10 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center border border-[#E0B9C0]/60 dark:border-[#4A3237] shrink-0 shadow-2xs">
              <span className="font-serif font-bold text-lg text-[#B36470] dark:text-[#E8A2AB] leading-none select-none">
                S
              </span>
            </div>

            {/* Name & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-0">
              <p className="font-serif text-lg font-bold text-[#3D262A] dark:text-[#FBF7F5] truncate">
                Srika S
              </p>
              <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] max-w-[280px] text-center md:text-left leading-relaxed">
                Entry-level Frontend Developer &bull; CSE Student
              </p>
            </div>
          </div>

          {/* Terminal Hire Button (Centered) */}
          <div className="flex justify-center items-center shrink-0">
            <HireTerminalButton />
          </div>

          {/* Right Group on Desktop / Sequential Children 3 & 4 on Mobile */}
          <div className="contents md:flex md:flex-row md:items-center md:justify-end md:gap-3 text-xs md:shrink-0">
            <CodeCommentFooter />

            {/* Back-To-Top Button (40px Circle) */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-10 h-10 rounded-full bg-[#F6E8EA] dark:bg-[#281B1E] text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/50 dark:border-[#4A3237] hover:bg-[#E0B9C0]/50 dark:hover:bg-[#3D262C] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C87D87] shrink-0 cursor-pointer shadow-2xs"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

