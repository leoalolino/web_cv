import React, { useState, useEffect } from "react";

const BigCrumple = () => {
  const [stage, setStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setStage((prev) => {
        if (isReversing) {
          if (prev <= 1) {
            setIsAnimating(false);
            return 0;
          }
          return prev - 1;
        } else {
          if (prev >= 4) {
            setIsAnimating(false);
            return 5;
          }
          return prev + 1;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, [isAnimating, isReversing]);

  const handleAction = () => {
    if (isAnimating) return;
    if (stage === 0) {
      setIsReversing(false);
      setIsAnimating(true);
    } else if (stage === 5) {
      setIsReversing(true);
      setIsAnimating(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden font-sans">
      <svg className="hidden">
        <filter id="big-crumple-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="5"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={stage * 50}
          />
        </filter>
      </svg>

      <div
        className={`
          absolute m-auto bg-white shadow-2xl z-40
          /* Linear transition prevents the "oblong" stretching during reversal */
          transition-all duration-[600ms] ease-linear

          ${stage === 0 ? "fixed inset-0 w-screen h-screen opacity-100 rotate-0" : ""}
          ${stage === 1 ? "w-[90vw] h-[90vw] rotate-1 rounded-sm opacity-100" : ""}
          ${stage === 2 ? "w-[60vw] h-[60vw] -rotate-2 skew-x-1 rounded-lg opacity-100" : ""}
          ${stage === 3 ? "w-[30vw] h-[30vw] rotate-3 rounded-xl opacity-100" : ""}
          ${stage === 4 ? "w-40 h-40 rounded-full rotate-45 scale-90 opacity-100" : ""}
          ${stage === 5 ? "w-0 h-0 opacity-0 scale-0 pointer-events-none" : ""}
        `}
        style={{
          filter: stage > 0 && stage < 5 ? "url(#big-crumple-filter)" : "none",
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 10px)`,
        }}
      />

      <div className="relative z-50 flex flex-col items-center gap-6">
        <button
          onClick={handleAction}
          className={`
            px-12 py-6 text-2xl font-black uppercase tracking-widest border-4 transition-all duration-300
            ${
              stage === 0
                ? "bg-black text-white border-black hover:bg-white hover:text-black"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }
            ${isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          {stage === 0 ? "CRUMPLE PAGE" : "RESTORE PAGE"}
        </button>
      </div>
    </div>
  );
};

export default BigCrumple;
