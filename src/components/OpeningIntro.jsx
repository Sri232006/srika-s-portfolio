import React, { useState, useEffect } from 'react';

const STEP_DURATIONS = {
  STEP_0_BG_ONLY: 400,       // 0.4s background only
  STEP_1_DRAW_STROKE: 1800,  // 1.8s draw stroke outline
  STEP_2_FILL_SOLID: 1000,   // 1.0s fill solid tile & switch 'S' color
  STEP_3_FADE_NAME: 600,     // 0.6s fade in "Srika S"
  STEP_4_FADE_ROLE: 600,     // 0.6s fade in "Frontend Developer"
  STEP_5_HOLD: 600,          // 0.6s hold composition
  STEP_6_CURTAIN: 900,       // 0.9s curtain slide up/down
};

const SAFETY_NET_MS = 9000;  // 9s safety net fallback

export default function OpeningIntro() {
  const [shouldRender, setShouldRender] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const seen = sessionStorage.getItem('srika_intro_seen');
        const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (seen === 'true' || reducedMotion) {
          return false;
        }
      }
    } catch (e) {}
    return true;
  });

  const [step, setStep] = useState(0); // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

  const finishIntro = () => {
    try {
      sessionStorage.setItem('srika_intro_seen', 'true');
    } catch (e) {}

    document.body.style.overflow = '';
    const appMain = document.getElementById('app-main-content');
    if (appMain) {
      appMain.removeAttribute('inert');
    }

    setStep(7);
    setShouldRender(false);
  };

  useEffect(() => {
    if (!shouldRender) return;

    // Lock body scrolling
    document.body.style.overflow = 'hidden';

    // Apply inert to main app layout while intro plays
    const appMain = document.getElementById('app-main-content');
    if (appMain) {
      appMain.setAttribute('inert', 'true');
    }

    // Safety net: Force finish after 9 seconds if anything fails
    const safetyTimer = setTimeout(() => {
      finishIntro();
    }, SAFETY_NET_MS);

    // Chained async step sequence
    let isCancelled = false;
    const runSequence = async () => {
      const wait = (ms) => new Promise((res) => setTimeout(res, ms));

      // Step 0: Background only (0.4s)
      await wait(STEP_DURATIONS.STEP_0_BG_ONLY);
      if (isCancelled) return;
      setStep(1);

      // Step 1: Draw stroke outline (1.8s)
      await wait(STEP_DURATIONS.STEP_1_DRAW_STROKE);
      if (isCancelled) return;
      setStep(2);

      // Step 2: Fill solid tile & switch 'S' contrast color (1.0s)
      await wait(STEP_DURATIONS.STEP_2_FILL_SOLID);
      if (isCancelled) return;
      setStep(3);

      // Step 3: Fade in "Srika S" name (0.6s)
      await wait(STEP_DURATIONS.STEP_3_FADE_NAME);
      if (isCancelled) return;
      setStep(4);

      // Step 4: Fade in "Frontend Developer" role (0.6s)
      await wait(STEP_DURATIONS.STEP_4_FADE_ROLE);
      if (isCancelled) return;
      setStep(5);

      // Step 5: Hold finished composition (0.6s)
      await wait(STEP_DURATIONS.STEP_5_HOLD);
      if (isCancelled) return;
      setStep(6);

      // Step 6: Curtain slide (0.9s)
      await wait(STEP_DURATIONS.STEP_6_CURTAIN);
      if (isCancelled) return;
      finishIntro();
    };

    runSequence();

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimer);
      document.body.style.overflow = '';
      if (appMain) {
        appMain.removeAttribute('inert');
      }
    };
  }, [shouldRender]);

  if (!shouldRender || step >= 7) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden"
    >
      {/* Top Half Curtain Panel (slides up in step 6) */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#FAF3EE] dark:bg-[#1A1214] border-b border-[#E0B9C0]/30 dark:border-[#4A3237]/40 transition-transform duration-900 ease-in-out ${
          step >= 6 ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Half Curtain Panel (slides down in step 6) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#FAF3EE] dark:bg-[#1A1214] border-t border-[#E0B9C0]/30 dark:border-[#4A3237]/40 transition-transform duration-900 ease-in-out ${
          step >= 6 ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Center Content Box */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
          step >= 6 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Monogram Box Tile */}
        {step >= 1 && (
          <div
            className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-5 overflow-hidden transition-colors duration-1000 ${
              step >= 2
                ? 'bg-[#B36470] dark:bg-[#E8A2AB]'
                : 'bg-[#FAF3EE] dark:bg-[#1A1214]'
            }`}
          >
            {/* SVG Outline Border (Draws fully in step 1, 1.8s) */}
            <svg
              className={`absolute inset-0 w-full h-full text-[#B36470] dark:text-[#E8A2AB] transition-opacity duration-500 ${
                step >= 2 ? 'opacity-0' : 'opacity-100'
              }`}
              viewBox="0 0 80 80"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="76"
                height="76"
                rx="14"
                stroke="currentColor"
                strokeWidth="2.5"
                className="animate-intro-draw"
              />
            </svg>

            {/* Letter 'S' Monogram: Switches to contrast color in step 2 (cream in light mode, deep rose-brown in dark mode) */}
            <span
              className={`font-serif text-4xl font-bold leading-none relative z-10 transition-colors duration-1000 ${
                step >= 2
                  ? 'text-[#FAF3EE] dark:text-[#2A1C20]'
                  : 'text-[#B36470] dark:text-[#E8A2AB]'
              }`}
            >
              S
            </span>
          </div>
        )}

        {/* Name: "Srika S" (Fades in step 3, 0.6s, 6px upward drift) */}
        <h1
          className={`font-serif text-4xl font-bold tracking-tight text-[#3D262A] dark:text-[#FBF7F5] transition-all duration-600 ${
            step >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1.5'
          }`}
        >
          Srika S
        </h1>

        {/* Role: "Frontend Developer" (Fades in step 4, 0.6s) */}
        <p
          className={`text-sm font-sans font-medium text-[#7C6267] dark:text-[#C7B4B8] mt-1.5 tracking-wide transition-opacity duration-600 ${
            step >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Frontend Developer
        </p>
      </div>
    </div>
  );
}
