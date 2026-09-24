import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DECORATIVE_ASSETS } from '../data/portfolioData';
import anushkaAvatar from '../assets/images/anushka_portrait_1790217007604.jpg';

export const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-[#0a0b0e]">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative floating 3D shapes inspired by reference video */}
      <motion.div
        className="absolute top-36 left-6 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 pointer-events-none z-10 hidden sm:block"
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={DECORATIVE_ASSETS.chromeStar}
          alt="3D chrome sculpture"
          className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-36 right-8 sm:right-24 w-20 sm:w-28 h-20 sm:h-28 pointer-events-none z-10 hidden sm:block"
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={DECORATIVE_ASSETS.purpleTorus}
          alt="3D iridescent torus"
          className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(124,58,237,0.3)]"
        />
      </motion.div>

      {/* Hero Central Content */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center relative z-20 my-auto py-6">
        
        {/* Expressive Secondary Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-300 mb-6 uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>PRODUCT • GROWTH • STRATEGY</span>
        </motion.div>

        {/* Massive Editorial Headline matching video "HI, I'M ALEX" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white leading-none select-none mb-6"
        >
          HI, I&apos;M ANUSHKA
        </motion.h1>

        {/* Central Visual Composition with Anushka's Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, type: 'spring', bounce: 0.2 }}
          className="relative my-4 sm:my-6 group"
        >
          {/* Subtle Outer Glow & Halo */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-amber-500/30 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
          
          {/* Circular Frame */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#18181b] border-2 border-white/15 relative">
              <img
                src={anushkaAvatar}
                alt="Anushka - Product & Strategy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Micro Status Chip */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#12131a] border border-white/15 text-[11px] font-medium tracking-wide text-zinc-300 shadow-xl flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>BITS Pilani &apos;27</span>
          </div>
        </motion.div>

        {/* Supporting Narrative Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-300 font-normal leading-relaxed text-balance mt-6 px-4"
        >
          B.Pharm (Hons.) student at <span className="text-white font-medium">BITS Pilani (&apos;27)</span> combining healthcare domain knowledge with product thinking, user research and analytical problem solving.
        </motion.p>

        {/* Compact CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-black bg-white hover:bg-zinc-100 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-white/10 uppercase"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 uppercase"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 text-violet-400" />
          </a>
        </motion.div>
      </div>

      {/* Marquee Ticker matching video 00:02 */}
      <div className="w-full border-y border-white/10 py-3 bg-white/[0.02] backdrop-blur-sm overflow-hidden select-none mt-8">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
          <span>BITS PILANI</span>
          <span className="text-violet-400">✦</span>
          <span>B.PHARM (HONS.)</span>
          <span className="text-violet-400">✦</span>
          <span>HEALTHCARE DOMAIN CONTEXT</span>
          <span className="text-violet-400">✦</span>
          <span>PRODUCT STRATEGY</span>
          <span className="text-violet-400">✦</span>
          <span>RICE PRIORITIZATION</span>
          <span className="text-violet-400">✦</span>
          <span>USER RESEARCH</span>
          <span className="text-violet-400">✦</span>
          <span>QUANTITATIVE ANALYTICS</span>
          <span className="text-violet-400">✦</span>
          <span>GROWTH EXPERIMENTATION</span>
          <span className="text-violet-400">✦</span>
          <span>BITS PILANI</span>
          <span className="text-violet-400">✦</span>
          <span>B.PHARM (HONS.)</span>
          <span className="text-violet-400">✦</span>
          <span>HEALTHCARE DOMAIN CONTEXT</span>
          <span className="text-violet-400">✦</span>
          <span>PRODUCT STRATEGY</span>
          <span className="text-violet-400">✦</span>
          <span>RICE PRIORITIZATION</span>
          <span className="text-violet-400">✦</span>
          <span>USER RESEARCH</span>
          <span className="text-violet-400">✦</span>
          <span>QUANTITATIVE ANALYTICS</span>
          <span className="text-violet-400">✦</span>
          <span>GROWTH EXPERIMENTATION</span>
          <span className="text-violet-400">✦</span>
        </div>
      </div>
    </section>
  );
};
