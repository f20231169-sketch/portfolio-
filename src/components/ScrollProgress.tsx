import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const p = Math.round(latest * 100);
      setPercent(p);
      setIsVisible(latest > 0.02 && latest < 0.99);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Slim, Elegant Global Scroll Depth Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] sm:h-[3px] z-[100] pointer-events-none bg-white/[0.04]"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 origin-left shadow-[0_0_10px_rgba(168,85,247,0.9),0_0_20px_rgba(236,72,153,0.6)]"
          style={{ scaleX }}
        />
      </div>

      {/* Subtle Cinematic HUD Pill in Top Corner (fades in on scroll) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -8 }}
        transition={{ duration: 0.25 }}
        className="fixed top-3.5 right-4 z-40 pointer-events-none hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0e0f14]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 select-none shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        <span className="text-zinc-200 font-bold">{percent}%</span>
        <span className="text-zinc-500 uppercase">DEPTH</span>
      </motion.div>
    </>
  );
};
