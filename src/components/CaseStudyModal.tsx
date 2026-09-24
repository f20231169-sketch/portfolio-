import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle, ShieldCheck, BarChart2, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import { LiveWebsiteEmbed } from './LiveWebsiteEmbed';
import { DeckViewer } from './DeckViewer';
import { PHARMEASY_SLIDES, INSTAGRAM_SLIDES, QCOMMERCE_PILANI_SLIDES } from '../data/deckData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center">
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl min-h-screen bg-[#0e0f14] text-white p-6 sm:p-10 md:p-14 my-0 sm:my-8 rounded-none sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col"
        >
          {/* Top Sticky Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 sticky top-0 bg-[#0e0f14]/90 backdrop-blur-md z-30 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-violet-400">
                {project.number}
              </span>
              <div>
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                  {project.industry}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              data-cursor="pointer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-zinc-300 hover:text-white transition-all cursor-pointer group"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* Hero Visual Banner */}
          <div className="relative mt-8 rounded-2xl overflow-hidden border border-white/10 aspect-[16/8] sm:aspect-[21/9] bg-[#0b0c10] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full max-h-[360px] object-contain object-center p-4 sm:p-8 relative z-10 drop-shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none z-20">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white max-w-3xl drop-shadow-md">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* PROJECT 01 EMBED: Live Working Website Embed for Tether VoC */}
          {project.id === 'tether-voc' && (
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  LIVE INTERACTIVE PROTOTYPE // EMBEDDED PREVIEW
                </span>
              </div>
              <LiveWebsiteEmbed
                initialUrl="https://tethercopilot.vercel.app/"
                projectName="Tether VoC"
              />
            </div>
          )}

          {/* PROJECT 02 EMBED: PharmEasy PDF Deck Embed with Live Scrolling & Expand */}
          {project.id === 'pharmeasy-teardown' && (
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  EMBEDDED CASE STUDY PRESENTATION // 8 SLIDES
                </span>
              </div>
              <DeckViewer
                deckTitle="PharmEasy Growth &amp; Retention Deck"
                projectNumber="02"
                slides={PHARMEASY_SLIDES}
                accentColor="#10b981"
                pdfDownloadName="PharmEasy_Growth_Case_Study.pdf"
              />
            </div>
          )}

          {/* PROJECT 03 EMBED: Pilani Q-Commerce Market Research Study (19 Slides from IBM SPSS Analysis) */}
          {project.id === 'qcommerce-pilani-study' && (
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                  EMBEDDED MARKET RESEARCH PRESENTATION // 19 SLIDES (IBM SPSS)
                </span>
              </div>
              <DeckViewer
                deckTitle="Pilani Quick-Commerce Pharmacy Market Research Study"
                projectNumber="03"
                slides={QCOMMERCE_PILANI_SLIDES}
                accentColor="#ea580c"
                pdfDownloadName="Pilani_QCommerce_Market_Research_Study.pdf"
              />
            </div>
          )}

          {/* PROJECT 05 EMBED: Instagram Beyond the Banner PDF Deck Embed with Live Scrolling & Expand */}
          {project.id === 'instagram-campaign-world' && (
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                  EMBEDDED CASE STUDY PRESENTATION // 12 SLIDES
                </span>
              </div>
              <DeckViewer
                deckTitle="Beyond the Banner: Avengers Doomsday Campaign World"
                projectNumber="05"
                slides={INSTAGRAM_SLIDES}
                accentColor="#8b5cf6"
                pdfDownloadName="Avengers_Doomsday_Campaign_World.pdf"
              />
            </div>
          )}

          {/* Case Study Structured Flow */}
          <div className="mt-12 space-y-8">
            
            {/* 01 // Problem & 02 // Core Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    01 // THE PROBLEM
                  </span>
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  Operational &amp; User Friction
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.problemStatement}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    02 // CORE USER INSIGHT
                  </span>
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  The Behavioral Reality
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.insight}
                </p>
              </div>
            </div>

            {/* 03 // STRATEGIC APPROACH: Dedicated Frame Box separating it completely from 01 & 02 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-widest">
                  03 // STRATEGIC APPROACH
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                Architecture &amp; Strategic Delivery
              </h4>
              <p className="text-sm sm:text-base text-zinc-200 mb-6 leading-relaxed">
                {caseStudy.approach}
              </p>

              {caseStudy.architecturePillars && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {caseStudy.architecturePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors"
                    >
                      <h5 className="text-sm font-bold text-violet-300 font-display mb-1.5">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 04 // Product Thinking & Prioritization */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-950/20 via-white/[0.02] to-transparent border border-violet-500/20 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-widest">
                  04 // PRODUCT THINKING &amp; PRIORITIZATION
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                Architecting For Actionability
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {caseStudy.productThinking}
              </p>

              {/* What I Did Bullet Points */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                  Key Execution Responsibilities:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.whatIDid.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 05 // MVP Scoping */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                  05 // MVP SCOPING &amp; BOUNDARIES
                </span>
              </div>
              <h4 className="text-lg font-bold font-display text-white mb-2">
                Minimum Viable Scope
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.mvp}
              </p>
            </div>

            {/* 06 // Metrics & Evaluation Framework */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                  06 // MEASURED SUCCESS METRICS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono text-violet-400 font-bold mb-2">
                      KPI 0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 07 // Outcome & Key Learning */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/15 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  07 // KEY TAKEAWAY &amp; REFLECTION
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium text-white leading-relaxed italic">
                &ldquo;{caseStudy.outcomeLearning}&rdquo;
              </p>
            </div>

            {/* Key Skills Tag Cluster */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block mb-3">
                Core Domains Applied:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.keySkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer Actions */}
          <div className="mt-14 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              CASE STUDY // {project.title}
            </span>
            <button
              onClick={onClose}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider hover:bg-zinc-200 transition-colors uppercase cursor-pointer"
            >
              <span>CLOSE CASE STUDY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
