import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Check, Eye, LayoutGrid, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

// Framer Motion Staggered Fade-In-Up Animation Variants
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroShowcaseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('grid');

  const activeProject = PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 bg-[#0a0b0e] overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header with Fade-In-Up Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-10 gap-6"
        >
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase block mb-2">
              [ 03 // FEATURED WORK &amp; CASE STUDIES ]
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter font-display text-white leading-none">
              PROJECTS
            </h2>
          </div>

          {/* Controls: View Mode Switcher & Carousel Nav */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('spotlight')}
                data-cursor="pointer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>SPOTLIGHT</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                data-cursor="pointer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>GRID ({PROJECTS.length})</span>
              </button>
            </div>

            {/* Spotlight Prev / Next Controls */}
            {viewMode === 'spotlight' && (
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <span className="text-xs font-mono text-zinc-400 mr-1 hidden sm:inline">
                  <span className="text-white font-bold">{activeProject.number}</span> / 0{PROJECTS.length}
                </span>
                <button
                  onClick={handlePrev}
                  data-cursor="pointer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  data-cursor="pointer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* MODE A: SPOTLIGHT VIEW (Interactive Deep-Dive + Top Selector Panels)     */}
        {/* ========================================================================= */}
        {viewMode === 'spotlight' && (
          <>
            {/* Staggered Fade-In-Up Project Selector Panels */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8"
            >
              {PROJECTS.map((proj, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <motion.button
                    key={proj.id}
                    variants={fadeInUpVariants}
                    onClick={() => setCurrentIndex(idx)}
                    data-cursor="pointer"
                    className={`py-3.5 px-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-white/10 border-white/30 text-white shadow-xl shadow-violet-950/40 ring-1 ring-white/20'
                        : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400" />
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-violet-400">
                        {proj.number}
                      </span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ) : (
                        <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 uppercase">
                          {proj.id === 'tether-voc' ? 'VOC' : proj.id === 'pharmeasy-teardown' ? 'DECK' : proj.id === 'janani-care' ? 'APP' : 'DECK'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold font-display uppercase tracking-tight truncate text-white">
                      {proj.title}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Active Project Card - Staggered Fade-In-Up Entrance on Scroll */}
            <motion.div
              variants={heroShowcaseVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="rounded-3xl bg-white/[0.03] border border-white/15 overflow-hidden shadow-2xl backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    {/* Left Column: Visual Showcase with Hover Zoom */}
                    <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-full overflow-hidden bg-[#0d0e13] flex items-center justify-center p-6 sm:p-10 group">
                      {/* Radial ambient spotlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_70%)] pointer-events-none" />
                      
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-auto max-h-[360px] object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-xl drop-shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent opacity-80 lg:hidden pointer-events-none" />
                      
                      {/* Floating Preview Overlay Badge */}
                      <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-widest text-zinc-200 uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{activeProject.industry}</span>
                      </div>

                      {/* Quick Case Study Button Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                        <span className="text-xs font-mono text-white/70 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md">
                          PROJECT {activeProject.number} OF 04
                        </span>
                        <button
                          onClick={() => setSelectedCaseStudy(activeProject)}
                          data-cursor="pointer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold tracking-wider hover:bg-zinc-200 transition-colors uppercase cursor-pointer shadow-xl"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>PREVIEW CASE</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Project Details & Product Thinking */}
                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl sm:text-4xl font-mono font-black text-violet-400">
                            {activeProject.number}
                          </span>
                          <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                            {activeProject.industry}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-white mb-2">
                          {activeProject.title}
                        </h3>

                        <p className="text-sm sm:text-base font-semibold text-violet-300 mb-4">
                          &ldquo;{activeProject.tagline}&rdquo;
                        </p>

                        {/* One-Line Problem Statement */}
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                          <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-1">
                            Problem Context:
                          </span>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {activeProject.problem}
                          </p>
                        </div>

                        {/* What I Did Checklist */}
                        <div className="mb-6">
                          <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-2.5">
                            What I Did:
                          </span>
                          <ul className="space-y-2">
                            {activeProject.whatIDid.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Skills Tags */}
                        <div className="mb-6">
                          <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-2">
                            Key Competencies:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {activeProject.keySkills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Embed Feature Callout */}
                        <div className="mb-6 p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-violet-300 uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {activeProject.id === 'tether-voc' && 'Interactive Live Website Embed Included'}
                            {activeProject.id === 'pharmeasy-teardown' && 'Complete 8-Slide Growth Deck Embedded'}
                            {activeProject.id === 'janani-care' && 'Interactive Clinical Framework & PRD Included'}
                            {activeProject.id === 'instagram-campaign-world' && 'Complete 12-Slide Strategy Deck Embedded'}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase hidden sm:inline">
                            EXPANDABLE
                          </span>
                        </div>
                      </div>

                      {/* Primary CTA: View Case Study Modal */}
                      <button
                        onClick={() => setSelectedCaseStudy(activeProject)}
                        data-cursor="pointer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white text-black hover:bg-zinc-100 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/5 cursor-pointer"
                      >
                        <span>EXPLORE CASE STUDY &amp; ASSETS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom Pagination Dots & Next Project Peek */}
            <div className="mt-8 flex items-center justify-between text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                {PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === currentIndex ? 'w-8 bg-violet-400' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to project ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>NEXT: {PROJECTS[(currentIndex + 1) % PROJECTS.length].title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* MODE B: ALL 4 PROJECT PANELS GRID (Staggered Fade-In-Up Entrance)         */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUpVariants}
                className="rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/9] bg-[#0c0d12] flex items-center justify-center p-6 overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_70%)] pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-[220px] object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
                    {project.industry}
                  </div>
                  <div className="absolute top-4 right-4 text-2xl font-mono font-black text-violet-400">
                    {project.number}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-violet-300 mb-4 line-clamp-1">
                      &ldquo;{project.tagline}&rdquo;
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Competencies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.keySkills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      data-cursor="pointer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentIndex(PROJECTS.findIndex((p) => p.id === project.id));
                        setViewMode('spotlight');
                      }}
                      data-cursor="pointer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      title="View in Spotlight"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Case Study Full-Screen Modal Overlay */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
