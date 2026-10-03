import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { handleResumeDownload, resumePdf } from '../utils/downloadResume';
import HeroPhoto from './HeroPhoto';

// Code-Style Tag Sub-component with Typing Animation & Layout Reservation
function CodeTag() {
  const [charCount, setCharCount] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const FULL_TEXT = '<open to="job opportunities" />';

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
    }, 35);

    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const renderTokens = (length) => {
    const str = FULL_TEXT.slice(0, length);
    if (!str) return null;

    const part1 = str.slice(0, 1);  // '<'
    const part2 = str.slice(1, 5);  // 'open'
    const part3 = str.slice(5, 6);  // ' '
    const part4 = str.slice(6, 8);  // 'to'
    const part5 = str.slice(8, 9);  // '='
    const part6 = str.slice(9, 28); // '"job opportunities"'
    const part7 = str.slice(28, 29);// ' '
    const part8 = str.slice(29);    // '/>'

    return (
      <>
        {part1 && <span className="text-[#7C6267] dark:text-[#C7B4B8]">{part1}</span>}
        {part2 && <span className="text-[#B36470] dark:text-[#E8A2AB] font-medium">{part2}</span>}
        {part3}
        {part4 && <span className="text-[#8B3E4B] dark:text-[#F0B3BC] font-medium">{part4}</span>}
        {part5 && <span className="text-[#7C6267] dark:text-[#C7B4B8]">{part5}</span>}
        {part6 && <span className="text-[#3D262A] dark:text-[#FBF7F5] font-semibold">{part6}</span>}
        {part7}
        {part8 && <span className="text-[#7C6267] dark:text-[#C7B4B8]">{part8}</span>}
      </>
    );
  };

  return (
    <a
      href="#contact"
      aria-label="Open to job opportunities. Go to contact."
      className="inline-flex items-center rounded-full bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0] dark:border-[#4A3237] px-3.5 py-[7px] font-code text-[12px] min-[380px]:text-[13px] leading-none tracking-normal transition-colors duration-200 hover:border-[#B36470] dark:hover:border-[#E8A2AB] focus-visible:ring-2 focus-visible:ring-[#B36470] dark:focus-visible:ring-[#E8A2AB] focus-visible:outline-none select-none shrink-0"
    >
      <div className="grid grid-cols-1 grid-rows-1 items-center">
        {/* Full Text Invisible Placeholder for Layout Reservation */}
        <span className="col-start-1 row-start-1 invisible select-none" aria-hidden="true">
          {renderTokens(FULL_TEXT.length)}
          <span className="inline-block w-0.5 h-3.5 ml-0.5" />
        </span>

        {/* Typed Visible Text */}
        <span aria-hidden="true" className="col-start-1 row-start-1 flex items-center">
          {renderTokens(charCount)}
          {showCaret && (
            <span className={`inline-block w-0.5 h-3.5 ml-0.5 bg-[#B36470] dark:bg-[#E8A2AB] ${isTypingDone ? 'animate-caret-blink' : ''}`} />
          )}
        </span>
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
      {/* Soft Ambient Creamy Rose Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F6E8EA]/60 dark:bg-[#3D262C]/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Hero Content (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Code-Style Status Tag Row */}
            <div className="flex flex-wrap items-center gap-3">
              <CodeTag />
              <span className="text-xs font-serif italic text-[#7C6267] dark:text-[#C7B4B8]">
                Let's build something together
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#3D262A] dark:text-[#FBF7F5]">
                Srika S
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#B36470] dark:text-[#E8A2AB]">
                Frontend Developer &amp; CSE Student
              </p>
            </div>

            {/* Direct Summary */}
            <p className="text-base sm:text-lg text-[#6E555A] dark:text-[#D4C4C7] leading-relaxed max-w-2xl font-normal">
              Entry-level Frontend Developer and Computer Science and Engineering student with hands-on experience building responsive web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Experienced in developing reusable UI components, integrating REST APIs, and working with Firebase across professional, internship, and project work. Uses Git and GitHub for version control.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#B36470] hover:bg-[#9E4D59] dark:bg-[#E8A2AB] dark:text-[#1A1214] dark:hover:bg-[#F0B3BC] shadow-md hover:shadow-lg transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={resumePdf}
                download="Srika_S_Resume.pdf"
                onClick={handleResumeDownload}
                title="Download Srika S Resume PDF"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[#C87D87]/50 dark:border-[#E8A2AB]/50 text-[#3D262A] dark:text-[#FBF7F5] bg-transparent hover:bg-[#F6E8EA] dark:hover:bg-[#281B1E] transition-all"
              >
                <Download className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Full Srika S Portrait Photo Card (Right 5 Columns) - Composed HeroPhoto */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPhoto />
          </div>

        </div>
      </div>
    </section>
  );
}
