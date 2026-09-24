import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 bg-[#0d0e12] text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-14 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase block mb-2">
              [ 04 // PROFESSIONAL HISTORY ]
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter font-display text-white leading-none">
              EXPERIENCE
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            RESEARCH &amp; GROWTH INTERNSHIPS
          </span>
        </div>

        {/* Experience Items with Scroll Reveal */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-start gap-5">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-violet-400 group-hover:scale-110 transition-transform block">
                    {exp.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                        {exp.organization}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Date Tag */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 self-start">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 mt-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Contributions */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-3">
                  Core Responsibilities &amp; Learnings:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.keyContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
