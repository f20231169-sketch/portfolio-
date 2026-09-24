import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('01');

  const currentCat = SKILL_CATEGORIES.find((c) => c.number === selectedCategory) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-8 bg-[#f5f5f1] text-[#121316] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            [ 02 // CAPABILITIES & TOOLKIT ]
          </span>
          <span className="text-xs font-mono font-medium text-zinc-400">
            BITS PILANI // PHARMACY × PRODUCT
          </span>
        </div>

        {/* Oversized Headline matching video 00:07 "SERVICES" */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter font-display text-zinc-950 leading-none">
            SKILLS
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mt-4 font-normal">
            Domain-grounded competencies combining strategic product intuition, deep user empathy, and rigorous analytical tools.
          </p>
        </div>

        {/* Interactive Numbered List matching reference video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Numbered Category Selectors */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-black/10 border-y border-black/10">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.number;
              return (
                <button
                  key={cat.number}
                  onClick={() => setSelectedCategory(cat.number)}
                  className={`w-full py-5 sm:py-6 px-3 sm:px-4 text-left flex items-center justify-between transition-all duration-300 group cursor-pointer ${
                    isSelected ? 'bg-black text-white px-5 sm:px-6 rounded-xl shadow-lg' : 'hover:px-5 hover:bg-black/5 text-zinc-900'
                  }`}
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`text-xl sm:text-2xl font-mono font-bold tracking-tighter shrink-0 ${
                        isSelected ? 'text-violet-400' : 'text-zinc-400 group-hover:text-zinc-700'
                      }`}
                    >
                      {cat.number}
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-[26px] xl:text-3xl font-black font-display tracking-tight uppercase truncate">
                      {cat.category}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ml-2 transition-transform duration-300 ${
                      isSelected ? 'translate-x-1 text-violet-400' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-zinc-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Panel Breakdown (Shifted slightly left with optimized spacing) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCat.number}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-black/10 shadow-xl shadow-black/5 flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold text-violet-600">
                      {currentCat.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 uppercase font-semibold">
                      {currentCat.skills.length} Competencies
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-zinc-900 mb-3">
                    {currentCat.category}
                  </h3>

                  <p className="text-zinc-600 text-sm sm:text-base mb-6 leading-relaxed">
                    {currentCat.description}
                  </p>

                  {/* Skills Checklist with Reduced, Refined Bullet Font Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {currentCat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg sm:rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                        <span className="text-xs sm:text-[13px] font-semibold text-zinc-800 leading-snug">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>METHODOLOGY GROUNDED IN PHARMACY &amp; BITS PILANI</span>
                  <span className="hidden sm:inline">SELECT 01 — 04 TO EXPLORE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* All skills quick snapshot for scanning */}
        <div className="mt-16 pt-10 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.number} className="text-left">
              <span className="text-xs font-mono font-bold text-violet-600 block mb-1">
                {cat.number} // {cat.category}
              </span>
              <ul className="text-xs text-zinc-500 space-y-1">
                {cat.skills.slice(0, 3).map((s) => (
                  <li key={s} className="truncate">• {s}</li>
                ))}
                {cat.skills.length > 3 && (
                  <li className="text-zinc-400 italic">+{cat.skills.length - 3} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
