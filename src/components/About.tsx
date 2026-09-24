import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Target, BarChart3, Compass } from 'lucide-react';
import { DECORATIVE_ASSETS } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Healthcare & Market Lens',
      desc: 'Grounding product decisions in market research, consumer behavioral constructs, probability & statistics, and healthcare domain realities.',
    },
    {
      icon: Target,
      title: 'Structured Product Thinking',
      desc: 'Deconstructing ambiguous problems into crisp PRDs, RICE prioritization matrices, user journey maps, and scoped MVPs.',
    },
    {
      icon: BarChart3,
      title: 'Quantitative Validation',
      desc: 'Pairing qualitative user research with statistical hypothesis testing (SPSS, ANOVA), SQL queries, and growth metrics.',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 bg-[#090a0d] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D Decorative objects inspired by video 00:04 */}
      <motion.div
        className="absolute top-20 left-4 sm:left-12 w-20 h-20 pointer-events-none z-10 opacity-70"
        animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={DECORATIVE_ASSETS.chromeStar}
          alt="3D chrome shape"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      <motion.div
        className="absolute top-28 right-4 sm:right-16 w-24 h-24 pointer-events-none z-10 opacity-70"
        animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={DECORATIVE_ASSETS.purpleTorus}
          alt="3D purple torus"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(124,58,237,0.3)]"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono font-medium tracking-widest text-violet-400 uppercase">
            [ 01 // OVERVIEW ]
          </span>
        </div>

        {/* Oversized Editorial Heading matching video "ABOUT ME" */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-display text-white">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Statement: Exact required paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl text-center"
        >
          <Compass className="w-8 h-8 text-violet-400 mx-auto mb-6 opacity-80" />
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 leading-relaxed sm:leading-relaxed text-balance">
            &ldquo;I&apos;m a pharmacy student building toward{' '}
            <span className="font-semibold text-white underline decoration-violet-400 decoration-2 underline-offset-4">
              product, growth and strategy roles
            </span>
            . I enjoy turning ambiguous user problems into structured product decisions—from research and prioritization to MVP definition, metrics and experimentation. My pharmacy background gives me a{' '}
            <span className="font-semibold text-violet-300">
              healthcare lens
            </span>{' '}
            that I bring into product thinking.&rdquo;
          </p>
        </motion.div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-300 mb-5 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
