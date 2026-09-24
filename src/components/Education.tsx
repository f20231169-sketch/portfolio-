import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-8 bg-[#090a0d] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-14 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase block mb-2">
              [ 05 // ACADEMIC FOUNDATIONS ]
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter font-display text-white leading-none">
              EDUCATION
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            BITS PILANI &amp; DPS
          </span>
        </div>

        {/* Horizontal Timeline Layout matching reference video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={edu.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-violet-400 group-hover:scale-110 transition-transform">
                    {edu.number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {edu.period}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-violet-300">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-2.5">
                  Academic Focus &amp; Highlights:
                </span>
                <ul className="space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
