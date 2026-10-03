import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import RotatingQuote from './RotatingQuote';

// Sub-component: Organic Rose Bloom Blob (Background)
function BloomBlob() {
  return (
    <div
      className="absolute -bottom-6 -right-6 w-[110%] h-[110%] -z-10 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full text-[#F6E8EA]/70 dark:text-[#3D262C]/50 opacity-80 animate-blob-morph"
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90.1,-16.3,88.5,-0.9C86.9,14.4,81,28.8,72.4,41.2C63.8,53.6,52.5,64,39.5,71.2C26.5,78.4,11.8,82.4,-2.4,86.6C-16.6,90.7,-33.2,95,-46.8,89.5C-60.4,84,-71,68.7,-78.9,53.2C-86.8,37.7,-92,22.1,-90.7,7.7C-89.4,-6.7,-81.6,-19.9,-73.4,-32.2C-65.2,-44.5,-56.6,-55.9,-44.7,-64.3C-32.8,-72.7,-17.6,-78.1,-1.2,-76C15.2,-73.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}

// Sub-component: Flip Hint (Curved Arrow + Flip me / Tap me)
function FlipHint({ isFlipped }) {
  const [hintVisible, setHintVisible] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const seen = sessionStorage.getItem('srika_fliphint_seen');
        return seen !== 'true';
      }
    } catch (e) {}
    return true;
  });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const touchMediaQuery = window.matchMedia('(hover: none)');
      setIsTouch(touchMediaQuery.matches);

      const handleChange = (e) => setIsTouch(e.matches);
      touchMediaQuery.addEventListener('change', handleChange);
      return () => touchMediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (isFlipped && hintVisible) {
      const timer = setTimeout(() => {
        try {
          sessionStorage.setItem('srika_fliphint_seen', 'true');
        } catch (e) {}
        setHintVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isFlipped, hintVisible]);

  if (!hintVisible) return null;

  return (
    <div
      className={`absolute -bottom-7 left-0 z-30 flex items-center gap-1 pointer-events-none select-none transition-opacity duration-200 ${
        isFlipped ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Hand-drawn Curved Arrow SVG Curling Up */}
      <svg
        className="w-8 h-8 sm:w-9 sm:h-9 text-[#B36470] dark:text-[#E8A2AB] shrink-0 animate-hint-wiggle"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 8 32 C 14 18, 28 14, 34 8 M 34 8 L 26 8 M 34 8 L 34 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-arrow-path"
        />
      </svg>
      {/* "Flip me" / "Tap me" Text in Caveat Script Font */}
      <span className="font-script text-xl sm:text-2xl font-bold text-[#B36470] dark:text-[#E8A2AB] tracking-wide transform -rotate-4">
        {isTouch ? 'Tap me' : 'Flip me'}
      </span>
    </div>
  );
}

// Main Component: Composed Hero Photo
export default function HeroPhoto() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Exact 10 skills in required order
  const skillsList = [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Flask',
    'Firebase',
    'MongoDB',
    'PostgreSQL',
    'Git',
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleFlip();
    }
  };

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(false);
    }
  };

  return (
    <div className="relative max-w-[280px] sm:max-w-[330px] w-full mx-auto lg:mr-0 flex flex-col items-center">
      
      {/* Photo Frame Container */}
      <div className="relative w-full flex justify-center">
        
        {/* Layer 1: Rose Bloom Background SVG */}
        <BloomBlob />

        {/* Flip Hint (Curved Arrow + Flip me / Tap me) */}
        <FlipHint isFlipped={isFlipped} />

        {/* Layer 2: Interactive Rounded Rectangle Flip Card Button */}
        <button
          type="button"
          onClick={handleToggleFlip}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-pressed={isFlipped}
          aria-label="Flip photo card to see details"
          className="relative z-10 w-[270px] h-[390px] sm:w-[310px] sm:h-[440px] perspective-1000 group focus:outline-none focus:ring-4 focus:ring-[#B36470]/40 dark:focus:ring-[#E8A2AB]/40 rounded-3xl cursor-pointer"
        >
          {/* 3D Flip Container */}
          <div
            className={`relative w-full h-full rounded-3xl border border-[#C87D87]/50 dark:border-[#E8A2AB]/50 shadow-xl transition-transform duration-700 ease-in-out transform-style-3d ${
              reducedMotion
                ? ''
                : isFlipped
                ? 'rotate-y-180'
                : ''
            }`}
          >
            
            {/* FRONT FACE: Framed Print Photo */}
            <div
              className={`absolute inset-0 w-full h-full bg-[#FFFFFF] dark:bg-[#281B1E] rounded-3xl p-3.5 sm:p-4 overflow-hidden backface-hidden transition-opacity duration-300 ${
                reducedMotion && isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-hidden={isFlipped}
            >
              <img
                src="/srika.png"
                alt="Srika S - Frontend Developer"
                className="w-full h-full object-cover object-top rounded-2xl shadow-2xs"
              />
            </div>

            {/* BACK FACE: Info Card */}
            <div
              className={`absolute inset-0 w-full h-full bg-[#FFFFFF] dark:bg-[#281B1E] bg-gradient-to-b from-[#F6E8EA]/60 via-[#FFFFFF] to-[#FFFFFF] dark:from-[#3D262C]/60 dark:via-[#281B1E] dark:to-[#281B1E] rounded-3xl overflow-hidden p-5 sm:p-6 flex flex-col items-center justify-between text-center border border-[#E0B9C0]/50 dark:border-[#4A3237] backface-hidden rotate-y-180 transition-opacity duration-300 ${
                reducedMotion && !isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-hidden={!isFlipped}
            >
              
              {/* Item 1 & 2: Name & Role */}
              <div className="space-y-1">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                  Srika S
                </h3>
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#B36470] dark:text-[#E8A2AB]">
                  Frontend Developer
                </p>
              </div>

              {/* Item 3: Short Thin Rose Divider */}
              <div
                className="w-10 h-0.5 bg-[#C87D87]/60 dark:bg-[#E8A2AB]/60 rounded-full mx-auto my-0.5"
                aria-hidden="true"
              />

              {/* Item 4: 10 Small Rounded Skills Chips */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-[260px] mx-auto my-0.5">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-medium bg-[#F6E8EA] dark:bg-[#3D262C] text-[#3D262A] dark:text-[#FBF7F5] border border-[#E0B9C0]/60 dark:border-[#4A3237] leading-tight select-none shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Item 5: Second Short Thin Rose Divider */}
              <div
                className="w-10 h-0.5 bg-[#C87D87]/60 dark:bg-[#E8A2AB]/60 rounded-full mx-auto my-0.5"
                aria-hidden="true"
              />

              {/* Item 6: Quote Block & Class Line */}
              <div className="space-y-1 pt-0.5">
                <Quote
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#B36470] dark:text-[#E8A2AB] mx-auto opacity-95"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="font-serif italic text-base sm:text-lg text-[#3D262A] dark:text-[#FBF7F5] leading-snug font-semibold">
                  "First graduate in my family."
                </p>
                <p className="text-[11px] sm:text-xs font-sans font-medium text-[#7C6267] dark:text-[#C7B4B8]">
                  B.E. CSE, Class of 2027
                </p>
              </div>

            </div>

          </div>
        </button>

      </div>

      {/* Rotating Quote Component */}
      <RotatingQuote />

    </div>
  );
}
