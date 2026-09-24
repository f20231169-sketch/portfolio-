import React from 'react';
import { DeckSlide } from '../components/DeckViewer';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert, Sparkles, Target, Zap } from 'lucide-react';

export const PHARMEASY_SLIDES: DeckSlide[] = [
  {
    pageNumber: 1,
    section: 'GROWTH CASE STUDY',
    title: 'PHARMEASY',
    subtitle: 'Reordering a monthly medicine takes more taps than switching apps — a retention problem hiding as a UX problem, in the segment PharmEasy can least afford to lose.',
    content: (
      <div className="py-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-1 bg-emerald-500 mb-6 rounded-full" />
        <p className="text-xl sm:text-2xl text-zinc-200 font-serif italic max-w-2xl leading-relaxed mb-8">
          &ldquo;Reordering a monthly medicine takes more taps than switching apps — a retention problem hiding as a UX problem.&rdquo;
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            GROWTH STRATEGY
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            UX RETENTION
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            HEALTHCARE E-PHARMACY
          </span>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 2,
    section: 'FOUNDATION',
    title: 'What Is PharmEasy?',
    subtitle: "How it's built, how it makes money, and the scale it operates at.",
    content: (
      <div className="space-y-6">
        <p className="text-sm text-zinc-300 leading-relaxed">
          Founded in 2015 in Mumbai, PharmEasy is India&apos;s leading online pharmacy, combining medicine delivery, diagnostics, and teleconsultations in one B2C app with a growing B2B arm, expanded via the Thyrocare and Medlife acquisitions. Recent moves include a 10-minute delivery pilot with Swiggy Instamart and AI-driven inventory management.
        </p>

        {/* 3 Big Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-3xl font-black font-display text-emerald-400 block mb-1">
              40M+
            </span>
            <span className="text-xs text-zinc-400 font-mono">Registered users (4 Cr+)</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-3xl font-black font-display text-emerald-400 block mb-1">
              1,200+
            </span>
            <span className="text-xs text-zinc-400 font-mono">Cities (19k+ pin codes)</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-3xl font-black font-display text-emerald-400 block mb-1">
              $456M
            </span>
            <span className="text-xs text-zinc-400 font-mono">Valuation (Dec 2024)</span>
          </div>
        </div>

        {/* How it works flow */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider block mb-2">
            HOW IT WORKS — ASSET-LIGHT MARKETPLACE MODEL
          </span>
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 flex-wrap gap-2">
            <span>Open App</span>
            <span className="text-zinc-600">→</span>
            <span>Upload / Browse</span>
            <span className="text-zinc-600">→</span>
            <span>Route Order</span>
            <span className="text-zinc-600">→</span>
            <span>Fulfillment</span>
            <span className="text-zinc-600">→</span>
            <span>Doorstep Delivery</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 3,
    section: 'SEGMENTATION',
    title: 'Two Segments, One Sharp Priority',
    subtitle: 'Contrasting chronic repeat patients against opportunistic wellness buyers.',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">
              SEGMENT A — CHRONIC RECURRING PATIENTS
            </span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              Monthly medicine refills for chronic conditions (diabetes, hypertension). High frequency, medically mandated, retention driven entirely by convenience — not brand loyalty.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
              SEGMENT B — WELLNESS &amp; OTC BUYERS
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Supplements, vitamins, and over-the-counter products. Price-sensitive, brand-flexible, and easy to acquire through standard growth discount tactics.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-sm font-bold text-white font-display mb-1.5">
            Why Focus on Segment A?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            It drives recurring predictable revenue but is retained by pure convenience, not loyalty — the segment most at risk of silent churn. A small friction fix in refill UX has an outsized compounding effect on Lifetime Value (LTV).
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 4,
    section: 'USER RESEARCH',
    title: 'Meet The Users',
    subtitle: 'Personas synthesized from app store reviews, Reddit/Quora threads, and secondary research.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
            SILVER ECONOMY
          </span>
          <h5 className="font-bold text-white text-sm mb-1">Ram Vishwas, 65</h5>
          <p className="text-xs text-zinc-400 mb-2">Retired, Indore · Segment A</p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Lives with spouse; daughter funds care remotely. Needs regular meds but is not tech-savvy. Caretaker struggles with English interfaces.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
            TECH-SAVVY CAREGIVER
          </span>
          <h5 className="font-bold text-white text-sm mb-1">Ananya Kapoor, 35</h5>
          <p className="text-xs text-zinc-400 mb-2">Startup Lead, Gurgaon · Segment A</p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Diagnosed with early-stage thyroid condition. Works late, zero time for physical pharmacy runs. Needs scheduled, automated refills.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
            HEALTH-CONSCIOUS OTC
          </span>
          <h5 className="font-bold text-white text-sm mb-1">Priya Sharma, 28</h5>
          <p className="text-xs text-zinc-400 mb-2">Marketing Exec, Kolkata · Segment B</p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Seeks recurring protein &amp; health supplements. Highly price-sensitive, compares coupon codes across 1mg and Apollo.
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 5,
    section: 'UX AUDIT',
    title: 'Friction Observed: Live App Walkthrough',
    subtitle: 'Hypotheses to validate at scale, observed across reorder workflows.',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
          <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-1">
            SEGMENT A · RETENTION
          </span>
          <h5 className="text-sm font-bold text-white mb-1">Reorder Buried in Navigation</h5>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Takes Account → Orders → Delivered orders (3 taps) for the single action Segment A repeats most. The IA treats reorder as a records log, not a habit loop.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
          <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
            ACCESS · CAREGIVERS
          </span>
          <h5 className="text-sm font-bold text-white mb-1">No Vernacular Language Support</h5>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Interface and search exist only in English. Regional medication names aren&apos;t recognized, shutting out non-English-literate caregivers.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
            SEGMENT B · DISCOVERY
          </span>
          <h5 className="text-sm font-bold text-white mb-1">Horizontal Scroll Limits Discovery</h5>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Category rows scroll horizontally with no visible endpoint; items past fold go unseen. A &ldquo;View more&rdquo; affordance surfaces the full catalog.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
            ACCESSIBILITY
          </span>
          <h5 className="text-sm font-bold text-white mb-1">No Voice Input for Ordering</h5>
          <p className="text-xs text-zinc-300 leading-relaxed">
            No voice path to search or reorder — high-impact for elderly users who struggle with small virtual keyboards.
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 6,
    section: 'PRIORITIZATION',
    title: 'Prioritizing Fixes: RICE Framework',
    subtitle: 'Scored directionally to separate high-leverage quick wins from engineering-heavy bets.',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr className="border-b border-white/15 text-zinc-400">
              <th className="py-2.5 px-3">Recommendation</th>
              <th className="py-2.5 px-3">Reach</th>
              <th className="py-2.5 px-3">Impact</th>
              <th className="py-2.5 px-3">Confidence</th>
              <th className="py-2.5 px-3">Effort</th>
              <th className="py-2.5 px-3 text-emerald-400">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-200">
            <tr className="bg-emerald-950/20 font-semibold">
              <td className="py-2.5 px-3 text-white">Dedicated Reorder Tab</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3 text-emerald-400">Low</td>
              <td className="py-2.5 px-3 text-emerald-400">★ First</td>
            </tr>
            <tr>
              <td className="py-2.5 px-3">Vernacular Language Support</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">Medium</td>
              <td className="py-2.5 px-3 text-zinc-300">Second</td>
            </tr>
            <tr>
              <td className="py-2.5 px-3">AI Voice Search (Multilingual)</td>
              <td className="py-2.5 px-3">Medium</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">Medium</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3 text-zinc-400">Third</td>
            </tr>
            <tr>
              <td className="py-2.5 px-3">&ldquo;View More&rdquo; Affordance</td>
              <td className="py-2.5 px-3">Medium</td>
              <td className="py-2.5 px-3">Low-Med</td>
              <td className="py-2.5 px-3">High</td>
              <td className="py-2.5 px-3">Low</td>
              <td className="py-2.5 px-3 text-zinc-400">Polish</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-400">
          <strong className="text-emerald-400">Takeaway:</strong> Reorder tab has highest reach, lowest effort, and most direct link to Segment A churn risk.
        </div>
      </div>
    ),
  },
  {
    pageNumber: 7,
    section: 'EXECUTION STRATEGY',
    title: 'From Fixes to Retention Strategy',
    subtitle: 'Sequenced by dependency, not parallel wish-listing.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
            PHASE 1 · FOUNDATION
          </span>
          <h5 className="text-base font-bold text-white mb-2">Fix the Core Loop</h5>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            <li>• Dedicated reorder tab in bottom navigation</li>
            <li>• Vernacular language support for Hindi &amp; regional terms</li>
            <li>• &ldquo;View more&rdquo; affordance on category cards</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
            PHASE 2 · CORE LEVER
          </span>
          <h5 className="text-base font-bold text-white mb-2">Predictive Reorder</h5>
          <ul className="space-y-1.5 text-xs text-zinc-200">
            <li>• Refill estimate from dosage, quantity, and purchase history</li>
            <li>• One-tap reorder nudge instead of generic 30-day email</li>
            <li>• Directly targets silent convenience-driven churn</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 8,
    section: 'EXPERIMENTATION',
    title: 'Growth Experiment: Validating the Core Loop Fix',
    subtitle: 'The A/B test that gates Phase 2 — not a standalone feature readout.',
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-mono text-violet-400 uppercase font-bold block mb-1">
            HYPOTHESIS
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
            Segment A&apos;s reorder friction is structural, not motivational. Moving reorder from a 3-tap navigation path to a 1-tap dedicated action will significantly increase monthly reorder completion rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono text-emerald-400 block mb-1">PRIMARY KPI</span>
            <p className="text-xs text-white font-semibold">Reorder completion rate in Segment A</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">DIAGNOSTIC KPI</span>
            <p className="text-xs text-zinc-200">Taps-to-reorder, time-to-reorder</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono text-amber-400 block mb-1">GUARDRAIL</span>
            <p className="text-xs text-zinc-200">Share of sessions still browsing</p>
          </div>
        </div>
      </div>
    ),
  },
];

export const INSTAGRAM_SLIDES: DeckSlide[] = [
  {
    pageNumber: 1,
    section: 'CAMPAIGN STRATEGY',
    title: 'Beyond the Banner',
    subtitle: 'A Campaign World for Avengers: Doomsday — turning isolated ad placements into a coherent campaign experience.',
    content: (
      <div className="py-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-1 bg-violet-500 mb-6 rounded-full" />
        <h4 className="text-2xl sm:text-3xl font-black font-display text-white mb-4">
          A Campaign World for Avengers: Doomsday
        </h4>
        <p className="text-base text-zinc-300 max-w-xl italic mb-6">
          A product + design case study on turning isolated ad placements into a coherent campaign experience — and the reasoning trail behind it.
        </p>
        <span className="text-xs font-mono text-violet-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          Anushka · Product &amp; Design Case Study
        </span>
      </div>
    ),
  },
  {
    pageNumber: 2,
    section: 'SECTION 01',
    title: 'The Problem: Ad Blindness',
    subtitle: 'Users tune out isolated promotional placements.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
            OBSERVED PROBLEM
          </span>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Advertising on Instagram is everywhere — Feed, Stories, Reels, Explore. Users are exposed to a high volume of ads, making isolated placements easy to mentally filter and forget.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30">
          <span className="text-xs font-mono font-bold text-rose-400 block mb-2">
            THE OPEN QUESTION
          </span>
          <p className="text-sm text-white font-medium leading-relaxed">
            Can advertising become more memorable without simply becoming louder or more intrusive?
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 3,
    section: 'SECTION 02',
    title: 'My First Idea: The Takeover',
    subtitle: 'Challenging the unfiltered fan instinct with product skepticism.',
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-xs font-mono text-violet-400 font-bold block mb-1">
            THE FAN IDEA, UNFILTERED:
          </span>
          <p className="text-sm text-zinc-200 italic leading-relaxed">
            &ldquo;What if Avengers: Doomsday temporarily took over parts of Instagram&apos;s visual experience? Feed skinned in Doomsday branding, stories hijacked with countdowns, Explore reshaped around the movie.&rdquo;
          </p>
        </div>
        <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20">
          <span className="text-xs font-mono text-violet-300 font-bold block mb-1">
            SO I ASKED MYSELF:
          </span>
          <p className="text-sm text-white font-semibold">
            If this is such an obvious win for advertisers, why hasn&apos;t Instagram already built it?
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 4,
    section: 'SECTION 03',
    title: 'I Tried to Kill My Idea',
    subtitle: 'Systematically probing 6 points of failure before building anything.',
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-rose-400 block mb-1">01 UX Risk</span>
          <p className="text-xs text-zinc-300">People open Instagram for friends, not movie takeovers.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-zinc-400 block mb-1">02 Infra</span>
          <p className="text-xs text-zinc-300">Meta already supports multi-surface ad placement.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-rose-400 block mb-1">03 Brand Safety</span>
          <p className="text-xs text-zinc-300">Larger blast radius if anything goes off-brand.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-zinc-400 block mb-1">04 Scalability</span>
          <p className="text-xs text-zinc-300">Bespoke takeovers don&apos;t scale to thousands of advertisers.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-zinc-400 block mb-1">05 Incentives</span>
          <p className="text-xs text-zinc-300">Advertisers want predictable ROI over custom code.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-rose-400 block mb-1">06 Ad Fatigue</span>
          <p className="text-xs text-zinc-300">Louder ads become the new thing users learn to skip.</p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 5,
    section: 'SECTION 04',
    title: 'The Product Insight',
    subtitle: 'From Placement Optimization to Experience Orchestration.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono text-zinc-400 font-bold block mb-2">
            WHAT ALREADY EXISTS
          </span>
          <h5 className="text-sm font-bold text-white mb-1">Placement Optimization</h5>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Algorithmic distribution deciding where a campaign&apos;s assets appear across Feed, Stories, and Reels.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-violet-950/20 border border-violet-500/30">
          <span className="text-xs font-mono text-violet-400 font-bold block mb-2">
            THE GAP I FOUND INSTEAD
          </span>
          <h5 className="text-sm font-bold text-white mb-1">Experience Orchestration</h5>
          <p className="text-xs text-zinc-200 leading-relaxed">
            Connecting touchpoints a campaign already has into one coherent story journey — not adding more intrusive ads.
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 6,
    section: 'SECTION 05',
    title: 'Introducing: Campaign World',
    subtitle: 'A temporary, contained campaign experience coordinating touchpoints.',
    content: (
      <div className="space-y-4">
        <blockquote className="p-4 rounded-xl bg-white/[0.04] border border-white/15 text-sm text-zinc-200 italic">
          &ldquo;A temporary, contained campaign experience that coordinates selected Instagram advertising touchpoints around a single campaign narrative — while leaving Instagram&apos;s core navigation and experience unchanged.&rdquo;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <span className="text-emerald-400 font-bold block mb-1">WHAT IT CHANGES</span>
            <ul className="space-y-1 text-zinc-300">
              <li>• Campaign continuity across surfaces</li>
              <li>• Narrative sequencing of story beats</li>
              <li>• Creative handoffs between touchpoints</li>
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
            <span className="text-rose-400 font-bold block mb-1">WHAT IT DOES NOT TOUCH</span>
            <ul className="space-y-1 text-zinc-300">
              <li>• Core navigation, feed, or search</li>
              <li>• Liking, commenting, saving, sharing</li>
              <li>• DMs or user notifications</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 7,
    section: 'SECTION 06',
    title: 'The Experience Mockup',
    subtitle: 'Clear advertising disclosure, single entry point, and untouched native controls.',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 text-xs">
          <div>
            <span className="font-bold text-violet-400 block">Clearly Labeled as Sponsored</span>
            <p className="text-zinc-300">Preserves ad transparency; users know it&apos;s a paid campaign.</p>
          </div>
          <div>
            <span className="font-bold text-violet-400 block">One Entry Point, Not a Takeover</span>
            <p className="text-zinc-300">Only one single Feed placement introduces the Campaign World.</p>
          </div>
          <div>
            <span className="font-bold text-violet-400 block">Real Call to Action</span>
            <p className="text-zinc-300">&ldquo;Enter the Countdown&rdquo; opens the dedicated Campaign Hub.</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-black border border-white/10 flex flex-col justify-center items-center text-center">
          <span className="text-xs font-mono text-zinc-500 mb-2">[ CONCEPT MOCKUP ]</span>
          <p className="text-sm font-bold text-white mb-1">AVENGERS: DOOMSDAY</p>
          <span className="text-xs text-rose-400 font-mono">ENTER THE COUNTDOWN →</span>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 8,
    section: 'SECTION 07',
    title: 'Before vs After Architecture',
    subtitle: 'Connecting the touchpoints so they know about each other.',
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono text-zinc-400 block mb-2">BEFORE — ISOLATED ADS</span>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 flex-wrap">
            <span className="px-2 py-1 bg-white/5 rounded">Normal Post</span>
            <span>→</span>
            <span className="px-2 py-1 bg-white/5 rounded">Sponsored Post</span>
            <span>→</span>
            <span className="px-2 py-1 bg-white/5 rounded">Reel</span>
            <span>→</span>
            <span className="px-2 py-1 bg-white/5 rounded">Sponsored Post</span>
          </div>
          <p className="text-xs text-zinc-500 mt-2">No connection between appearances; each is an isolated interruption.</p>
        </div>

        <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30">
          <span className="text-xs font-mono text-violet-400 block mb-2">AFTER — CAMPAIGN WORLD</span>
          <div className="flex items-center gap-2 text-xs font-mono text-white flex-wrap">
            <span className="px-2 py-1 bg-violet-600 rounded">Feed Placement</span>
            <span>→</span>
            <span className="px-2 py-1 bg-violet-600 rounded">Campaign Hub</span>
            <span>→</span>
            <span className="px-2 py-1 bg-violet-600 rounded">Story Treatment</span>
            <span>→</span>
            <span className="px-2 py-1 bg-white/10 rounded">Normal Instagram</span>
          </div>
          <p className="text-xs text-zinc-300 mt-2">Connected end-to-end by one coherent narrative arc.</p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 9,
    section: 'SECTION 08',
    title: 'The MVP: Three Components',
    subtitle: 'Enough to test the hypothesis without over-engineering.',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-xs font-mono font-bold text-violet-400 block mb-1">01 Feed Placement</span>
          <p className="text-xs text-zinc-300">Single sponsored post serving as the intentional entry point.</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-xs font-mono font-bold text-violet-400 block mb-1">02 Campaign Hub</span>
          <p className="text-xs text-zinc-300">Dedicated destination: current story beat, trailer, clear CTA.</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-xs font-mono font-bold text-violet-400 block mb-1">03 Story Treatment</span>
          <p className="text-xs text-zinc-300">One limited story beat advancing narrative (e.g. &ldquo;48 HOURS&rdquo;).</p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 10,
    section: 'SECTION 09',
    title: 'Testing the Hypothesis',
    subtitle: 'Control vs Treatment testing ad recall and dwell time.',
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-violet-400 block mb-1">PRIMARY METRIC</span>
            <p className="text-xs text-white font-semibold">Ad Recall (aided &amp; unaided)</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">ATTENTION METRIC</span>
            <p className="text-xs text-zinc-200">Dwell Time in experience</p>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
            <span className="text-[10px] font-mono text-rose-400 block mb-1">UX GUARDRAIL</span>
            <p className="text-xs text-zinc-200">Hide / Report Rate (must not rise)</p>
          </div>
        </div>
        <p className="text-xs text-zinc-400 italic">
          &ldquo;A campaign that wins on recall but loses on user hide/report hasn&apos;t proven anything worth scaling.&rdquo;
        </p>
      </div>
    ),
  },
  {
    pageNumber: 11,
    section: 'SECTION 10',
    title: 'Kill or Scale Criteria',
    subtitle: 'Setting disciplined decision rules before looking at data.',
    content: (
      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs">
          <span className="font-bold text-emerald-400">SCALE</span>
          <span className="text-zinc-200">Recall improves vs control, hide/report rates hold steady.</span>
        </div>
        <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-center justify-between text-xs">
          <span className="font-bold text-amber-400">ITERATE</span>
          <span className="text-zinc-200">Recall improves, but hide rates worsen materially.</span>
        </div>
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-center justify-between text-xs">
          <span className="font-bold text-rose-400">KILL</span>
          <span className="text-zinc-200">Recall shows no meaningful improvement over isolated ads.</span>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 12,
    section: 'CLOSING',
    title: 'The Story, in Six Steps',
    subtitle: 'Problem → Hypothesis → Solution → MVP → Measurement → Decision.',
    content: (
      <div className="py-6 text-center space-y-6">
        <p className="text-xl sm:text-2xl font-serif text-white italic max-w-xl mx-auto">
          &ldquo;I don&apos;t know whether Campaign World works. That&apos;s precisely why I would test it.&rdquo;
        </p>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
          This case study is a demonstration of product reasoning, not a pitch for a finished product: a fan idea, challenged, narrowed, scoped into a testable MVP, and paired with the experiment and kill criterion that decides its fate.
        </p>
      </div>
    ),
  },
];

/* =========================================================================
   PROJECT 03 DECK: PILANI QUICK-COMMERCE PHARMACY MARKET RESEARCH STUDY
   Source: 19-Slide Primary Research & IBM SPSS Statistical Analysis Presentation
   ========================================================================= */
export const QCOMMERCE_PILANI_SLIDES: DeckSlide[] = [
  {
    pageNumber: 1,
    section: 'COVER // OVERVIEW',
    title: 'Marketing Research Study Project',
    subtitle: 'Consumer Readiness and Entry Strategy for Quick-Commerce Pharmacy in Pilani',
    content: (
      <div className="py-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full" />
        <p className="text-xl sm:text-2xl text-zinc-200 font-serif italic max-w-2xl leading-relaxed mb-8">
          &ldquo;Evaluating consumer readiness, perceived risk, and optimal distribution model for quick-commerce pharmacy services in Pilani.&rdquo;
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
            MARKET RESEARCH
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
            IBM SPSS (n = 60)
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
            K-MEANS CLUSTERING
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
            BITS PILANI
          </span>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 2,
    section: 'DECISION & PROBLEM',
    title: 'Research & Management Decision Problem',
    subtitle: 'Defining the core strategic questions before conducting fieldwork.',
    content: (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-orange-950/20 border border-orange-500/30">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-2">
            MANAGEMENT DECISION PROBLEM
          </span>
          <p className="text-lg font-bold text-white leading-relaxed">
            Should an online pharmacy platform enter Pilani, and if so, what entry mode should be adopted (independent warehouse vs. partnership with local pharmacies)?
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-2">
            RESEARCH PROBLEM
          </span>
          <p className="text-lg font-bold text-zinc-200 leading-relaxed">
            To evaluate consumer readiness and market potential for quick-commerce pharmacy services in Pilani.
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 3,
    section: 'METHODOLOGY',
    title: 'Research Approach & Sampling',
    subtitle: 'Primary quantitative survey grounded in established consumer behavior literature.',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase block mb-2">
              RESEARCH DESIGN &amp; SAMPLING
            </span>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li>• <strong className="text-white">Design:</strong> Descriptive, Survey Research</li>
              <li>• <strong className="text-white">Target Population:</strong> BITS Pilani students + local Pilani residents</li>
              <li>• <strong className="text-white">Sampling Method:</strong> Convenience sampling</li>
              <li>• <strong className="text-white">Instrument:</strong> Structured questionnaire (n = 60)</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase block mb-2">
              THEORETICAL FOUNDATION
            </span>
            <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <li>
                • <strong className="text-white">Agustin &amp; Singh (2005):</strong> Trust and relational loyalty as key drivers of long-term adoption.
              </li>
              <li>
                • <strong className="text-white">Steenkamp &amp; Maydeu-Olivares (2015):</strong> Perceived value and risk as determinants of new service adoption.
              </li>
              <li>
                • <strong className="text-white">Sharma, Kumar &amp; Cosguner (2019):</strong> Competitive distribution strategy in emerging markets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 4,
    section: 'THEORETICAL MODEL',
    title: 'Conceptual Framework',
    subtitle: 'End-to-end causal chain from market opportunity to long-term adoption.',
    content: (
      <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10">
        <div className="flex flex-col items-center space-y-3 text-center text-xs font-mono">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-zinc-200">
            <strong className="text-white">Market Opportunity: Pilani</strong>
            <span className="block text-zinc-400 text-[11px]">(Local Residents + BITS Pilani population)</span>
          </div>
          <span className="text-orange-400 font-bold">↓</span>
          <div className="px-4 py-2 rounded-xl bg-orange-950/30 border border-orange-500/30 text-orange-200">
            <strong>Strategic Entry Decision</strong> (Q-Commerce Pharmacy Entry)
          </div>
          <span className="text-orange-400 font-bold">↓</span>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-zinc-200">
            <strong>Choice of Entry Model:</strong> Own Warehouse / Dark Store vs. Local Pharmacy Collaboration
          </div>
          <span className="text-orange-400 font-bold">↓</span>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-zinc-200">
            <strong>Consumer Perceptions:</strong> Trust • Perceived Risk • Convenience
          </div>
          <span className="text-orange-400 font-bold">↓</span>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-zinc-200">
            <strong>Purchase Intention → Adoption / Usage</strong>
          </div>
          <span className="text-orange-400 font-bold">↓</span>
          <div className="px-4 py-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
            <strong>Long-term Outcomes:</strong> Loyalty • ROI &amp; Profitability • Cost Efficiency &amp; Scalability • Market Share Growth
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 5,
    section: 'STRATEGIC TRADEOFF',
    title: 'Entry Model Comparison',
    subtitle: 'Evaluating Company-Owned Warehouse against Local Pharmacy Collaboration.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-orange-950/20 border border-orange-500/30 space-y-3 text-center">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase block">
            MODEL A: COMPANY-OWNED WAREHOUSE
          </span>
          <div className="text-xs font-mono space-y-2 text-zinc-300">
            <p className="p-2 rounded bg-black/40">Higher Operational Control</p>
            <p className="text-orange-400">↓</p>
            <p className="p-2 rounded bg-black/40">Higher Perceived Medicine Authenticity</p>
            <p className="text-orange-400">↓</p>
            <p className="p-2 rounded bg-black/40">Higher Consumer Trust</p>
            <p className="text-orange-400">↓</p>
            <p className="p-2 rounded bg-black/40">Purchase Intention &amp; Loyalty</p>
            <p className="text-orange-400">↓</p>
            <p className="p-2 rounded bg-black/40 font-bold text-white">Long-term Market Share</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-center">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">
            MODEL B: COLLABORATION WITH LOCAL PHARMACY
          </span>
          <div className="text-xs font-mono space-y-2 text-zinc-300">
            <p className="p-2 rounded bg-black/40">Shared Operational Control</p>
            <p className="text-zinc-500">↓</p>
            <p className="p-2 rounded bg-black/40">Higher Local Chemist Familiarity</p>
            <p className="text-zinc-500">↓</p>
            <p className="p-2 rounded bg-black/40">Higher Initial Trust (Known Chemist)</p>
            <p className="text-zinc-500">↓</p>
            <p className="p-2 rounded bg-black/40">Purchase Intention &amp; Loyalty</p>
            <p className="text-zinc-500">↓</p>
            <p className="p-2 rounded bg-black/40 font-bold text-white">Shared Market Share</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 6,
    section: 'HYPOTHESES',
    title: 'Hypotheses Formulated',
    subtitle: 'Six empirical propositions formulated to guide quantitative testing.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
            <tr>
              <th className="p-3 w-20">Hypothesis</th>
              <th className="p-3">Statement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H1</td>
              <td className="p-3">Higher trust in online pharmacy services positively influences purchase intention.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H2</td>
              <td className="p-3">Greater perceived risk negatively influences willingness to adopt quick-commerce pharmacy services.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H3</td>
              <td className="p-3">Higher convenience perception positively influences adoption intention.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H4</td>
              <td className="p-3">Greater importance attached to fast delivery positively influences the likelihood of usage.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H5</td>
              <td className="p-3">Price sensitivity significantly influences consumer preference for online pharmacy services.</td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-bold text-orange-400">H6</td>
              <td className="p-3">Distinct consumer segments exist based on trust, risk, convenience, price sensitivity, and delivery expectations.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 7,
    section: 'DATA COLLECTION',
    title: 'Questionnaire & Data Collection',
    subtitle: 'Administered online questionnaire across 60 respondents with verifiable links.',
    content: (
      <div className="space-y-4">
        <p className="text-xs text-zinc-300 leading-relaxed">
          Primary quantitative data was collected through a structured questionnaire circulated among BITS Pilani students and local town residents of Pilani (n = 60). The survey was administered digitally via Google Forms, utilizing Likert scales, ranking tasks, and multiple-choice items capturing attitudinal and behavioral drivers.
        </p>

        {/* Live Verified Form & Sheet Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href="https://forms.gle/xT6EtNA8fF9c2MvB8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/30 hover:bg-orange-900/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase font-bold block mb-1">
                PRIMARY SURVEY INSTRUMENT
              </span>
              <span className="text-xs font-bold text-white group-hover:underline">
                View Google Form ↗
              </span>
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/11ycA2rLVF7ar7kHeC12joZ2x4-VdpPyV6clfBDw_vA4/edit?resourcekey=&gid=5693482#gid=5693482"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                RAW RESPONSES DATASET (n = 60)
              </span>
              <span className="text-xs font-bold text-white group-hover:underline">
                View Responses Sheet ↗
              </span>
            </div>
          </a>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 8,
    section: 'SECTION DIVIDER',
    title: 'DATA ANALYSIS AND INTERPRETATION',
    subtitle: 'Descriptive statistics, K-Means clustering in IBM SPSS, and ANOVA verification.',
    content: (
      <div className="py-12 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full" />
        <h4 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight uppercase mb-3">
          Statistical Modeling &amp; Segmentation
        </h4>
        <p className="text-xs text-zinc-400 max-w-md">
          Transforming 60 multi-item responses into defensible consumer clusters and hypothesis significance tests using IBM SPSS.
        </p>
      </div>
    ),
  },
  {
    pageNumber: 9,
    section: 'ANALYTICAL FRAMEWORK',
    title: 'Analytical Techniques & Constructs',
    subtitle: 'Operationalizing 5 core behavioral dimensions using IBM SPSS.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase block mb-3">
            ANALYTICAL TECHNIQUES USED
          </span>
          <ul className="text-xs text-zinc-300 space-y-2">
            <li>• Descriptive Statistics &amp; Inferential Analytical Techniques</li>
            <li>• K-Means Cluster Analysis executed in IBM SPSS</li>
            <li>• ANOVA (Analysis of Variance) for cluster profiling and differentiator tests</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase block mb-3">
            CONSTRUCTS USED FOR SEGMENTATION
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <span className="p-2 rounded bg-white/5 text-zinc-200">1. Trust Perception</span>
            <span className="p-2 rounded bg-white/5 text-zinc-200">2. Perceived Risk</span>
            <span className="p-2 rounded bg-white/5 text-zinc-200">3. Convenience</span>
            <span className="p-2 rounded bg-white/5 text-zinc-200">4. Price Sensitivity</span>
            <span className="p-2 rounded bg-white/5 text-zinc-200 col-span-2">5. Delivery Speed Expectation</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 10,
    section: 'SPSS VARIABLES',
    title: 'Operationalization of Variables',
    subtitle: '10 survey statements mapped into SPSS analytical variables.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10 max-h-[380px]">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono sticky top-0 bg-[#111318]">
            <tr>
              <th className="p-2.5">Variable</th>
              <th className="p-2.5">Construct</th>
              <th className="p-2.5">Questionnaire Statement</th>
              <th className="p-2.5">Purpose in Analysis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Trust1C</td>
              <td className="p-2.5 font-semibold text-white">Trust</td>
              <td className="p-2.5">I would trust the authenticity of medicines delivered online</td>
              <td className="p-2.5 text-zinc-400">Measures confidence in product genuineness</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Trust2C</td>
              <td className="p-2.5 font-semibold text-white">Trust</td>
              <td className="p-2.5">I would consider online pharmacies reliable</td>
              <td className="p-2.5 text-zinc-400">Measures reliability perception</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Risk1</td>
              <td className="p-2.5 font-semibold text-white">Perceived Risk</td>
              <td className="p-2.5">I would worry about fake or low-quality medicines</td>
              <td className="p-2.5 text-zinc-400">Measures quality concern</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Risk2</td>
              <td className="p-2.5 font-semibold text-white">Perceived Risk</td>
              <td className="p-2.5">I would be concerned about incorrect deliveries</td>
              <td className="p-2.5 text-zinc-400">Measures delivery-related risk</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Conv1</td>
              <td className="p-2.5 font-semibold text-white">Convenience</td>
              <td className="p-2.5">Ordering medicines online would save time</td>
              <td className="p-2.5 text-zinc-400">Measures time-saving benefit</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Conv2</td>
              <td className="p-2.5 font-semibold text-white">Convenience</td>
              <td className="p-2.5">Home delivery would be more convenient than visiting a store</td>
              <td className="p-2.5 text-zinc-400">Measures delivery convenience</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Price1</td>
              <td className="p-2.5 font-semibold text-white">Price Sensitivity</td>
              <td className="p-2.5">Discounts would influence my decision</td>
              <td className="p-2.5 text-zinc-400">Measures promotional sensitivity</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Price2</td>
              <td className="p-2.5 font-semibold text-white">Price Sensitivity</td>
              <td className="p-2.5">I would prefer lower prices over faster delivery</td>
              <td className="p-2.5 text-zinc-400">Measures price vs. speed trade-off</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Del1</td>
              <td className="p-2.5 font-semibold text-white">Delivery Expectation</td>
              <td className="p-2.5">Fast delivery would be important for medicines</td>
              <td className="p-2.5 text-zinc-400">Measures urgency preference</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">Del2</td>
              <td className="p-2.5 font-semibold text-white">Delivery Expectation</td>
              <td className="p-2.5">Quick delivery would be useful in emergencies</td>
              <td className="p-2.5 text-zinc-400">Measures emergency-use relevance</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 11,
    section: 'HYPOTHESIS TESTING',
    title: 'Hypothesis Testing (SPSS Findings)',
    subtitle: 'Significance tests and output evidence across all 6 propositions.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
            <tr>
              <th className="p-2.5">Hyp.</th>
              <th className="p-2.5">Statement</th>
              <th className="p-2.5">Significance</th>
              <th className="p-2.5">Evidence from Output</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H1</td>
              <td className="p-2.5">Higher trust positively influences purchase intention</td>
              <td className="p-2.5"><span className="text-emerald-400 font-bold">✅ Significant</span></td>
              <td className="p-2.5 text-zinc-400">Trust variables significantly differentiated clusters (p &lt; .001)</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H2</td>
              <td className="p-2.5">Greater perceived risk negatively influences adoption</td>
              <td className="p-2.5"><span className="text-emerald-400 font-bold">✅ Significant</span></td>
              <td className="p-2.5 text-zinc-400">Risk variables had highest F-values (F=38.36, 33.99; p &lt; .001)</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H3</td>
              <td className="p-2.5">Higher convenience positively influences adoption</td>
              <td className="p-2.5"><span className="text-emerald-400 font-bold">✅ Significant</span></td>
              <td className="p-2.5 text-zinc-400">Convenience significant (p = .004) with high mean scores</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H4</td>
              <td className="p-2.5">Fast delivery importance drives usage likelihood</td>
              <td className="p-2.5"><span className="text-amber-400 font-bold">⚠️ Insignificant</span></td>
              <td className="p-2.5 text-zinc-400">Delivery scores high across all clusters (baseline expectation!)</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H5</td>
              <td className="p-2.5">Price sensitivity influences consumer preference</td>
              <td className="p-2.5"><span className="text-amber-400 font-bold">⚠️ Insignificant</span></td>
              <td className="p-2.5 text-zinc-400">Price1 significant (p = .002), Price2 insignificant (p = .66)</td>
            </tr>
            <tr>
              <td className="p-2.5 font-mono text-orange-400 font-bold">H6</td>
              <td className="p-2.5">Distinct consumer segments exist across variables</td>
              <td className="p-2.5"><span className="text-emerald-400 font-bold">✅ Significant</span></td>
              <td className="p-2.5 text-zinc-400">K-means clustering identified 3 distinct consumer segments</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 12,
    section: 'SECTION DIVIDER',
    title: 'MAJOR FINDINGS',
    subtitle: 'Translating cluster profiles into strategic go-to-market decisions.',
    content: (
      <div className="py-12 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full" />
        <h4 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight uppercase mb-3">
          Customer Segmentation &amp; Strategic Model
        </h4>
        <p className="text-xs text-zinc-400 max-w-md">
          Uncovering who the core adopters are in Pilani, what holds back skeptical buyers, and which distribution mode wins consumer trust.
        </p>
      </div>
    ),
  },
  {
    pageNumber: 13,
    section: 'SEGMENTATION',
    title: 'Customer Segmentation (n = 60)',
    subtitle: 'Cluster sizes, key characteristics, and strategic implications.',
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
              <tr>
                <th className="p-2.5">Cluster</th>
                <th className="p-2.5">Segment Name</th>
                <th className="p-2.5">Size</th>
                <th className="p-2.5">Key Characteristics</th>
                <th className="p-2.5">Strategic Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              <tr>
                <td className="p-2.5 font-mono text-orange-400 font-bold">Cluster 1</td>
                <td className="p-2.5 font-bold text-white">Cautious Convenience Seekers</td>
                <td className="p-2.5 font-mono font-bold text-sky-400">33.30%</td>
                <td className="p-2.5">High convenience, high trust need, moderate risk concern</td>
                <td className="p-2.5 text-zinc-400">Need assurance + fast delivery</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono text-orange-400 font-bold">Cluster 2</td>
                <td className="p-2.5 font-bold text-white">Ready Adopters</td>
                <td className="p-2.5 font-mono font-bold text-emerald-400">43.30%</td>
                <td className="p-2.5">Low perceived risk, high convenience, positive trust</td>
                <td className="p-2.5 text-zinc-400 font-semibold text-emerald-400">Primary launch target</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono text-orange-400 font-bold">Cluster 3</td>
                <td className="p-2.5 font-bold text-white">Skeptical Traditionalists</td>
                <td className="p-2.5 font-mono font-bold text-amber-400">23.30%</td>
                <td className="p-2.5">Low trust, high perceived risk, lower enthusiasm</td>
                <td className="p-2.5 text-zinc-400">Need education + credibility</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Significant Differentiators Highlight */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs">
          <span className="font-mono uppercase font-bold text-orange-400 block mb-1">
            KEY DIFFERENTIATORS:
          </span>
          <p className="text-zinc-300">
            • <strong className="text-white">Perceived Risk</strong> was the strongest differentiator (Highest F-values).<br/>
            • <strong className="text-white">Delivery speed</strong> was valued across all clusters — it is a universal baseline expectation, not a differentiator.
          </p>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 14,
    section: 'RECOMMENDATIONS',
    title: 'Consumer Segment Distribution & Strategic Model',
    subtitle: '76.6% in favorable segments; company-owned warehouse model strongly recommended.',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Segment Distribution Breakdown */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase block">
            MARKET OVERVIEW (n = 60)
          </span>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Ready Adopters (C2)</span>
                <span className="text-[11px] text-zinc-400">Low risk, high convenience, high trust</span>
              </div>
              <span className="font-mono text-base font-bold text-emerald-400">43.3% (26)</span>
            </div>
            <div className="p-3 rounded-lg bg-sky-950/20 border border-sky-500/20 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Cautious Seekers (C1)</span>
                <span className="text-[11px] text-zinc-400">High convenience, high trust need</span>
              </div>
              <span className="font-mono text-base font-bold text-sky-400">33.3% (20)</span>
            </div>
            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">Skeptical Traditionalists (C3)</span>
                <span className="text-[11px] text-zinc-400">Low trust, high perceived risk</span>
              </div>
              <span className="font-mono text-base font-bold text-amber-400">23.3% (14)</span>
            </div>
          </div>
          <p className="text-[11px] font-mono text-emerald-400 pt-1">
            ⭐ 76.6% of respondents fall into favorable segments (C1 + C2).
          </p>
        </div>

        {/* Strategic Recommendation */}
        <div className="p-5 rounded-xl bg-orange-950/20 border border-orange-500/40 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-2">
              CORE RECOMMENDATION
            </span>
            <h4 className="text-base sm:text-lg font-bold font-display text-white mb-3">
              Enter Pilani through a Company-Owned Warehouse (73.33% Preference)
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Because perceived risk is the primary differentiator for consumers in Pilani, a company-owned dark store is strongly recommended over local pharmacy collaboration. This provides direct supply-chain control, eliminates fake medicine fears, and enables transparent real-time tracking with pharmacist verification.
            </p>
          </div>
          <div className="pt-4 border-t border-orange-500/20 text-[11px] font-mono text-orange-300">
            Backed by 73.33% empirical user model preference
          </div>
        </div>
      </div>
    ),
  },
  {
    pageNumber: 15,
    section: 'APPENDIX DIVIDER',
    title: 'APPENDIX',
    subtitle: 'Raw statistical data tables and outputs generated from IBM SPSS.',
    content: (
      <div className="py-12 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full" />
        <h4 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight uppercase mb-3">
          IBM SPSS Output Logs
        </h4>
        <p className="text-xs text-zinc-400 max-w-md">
          Detailed output tables for cluster seed initialization, final cluster convergence, ANOVA F-test statistics, and case counts.
        </p>
      </div>
    ),
  },
  {
    pageNumber: 16,
    section: 'SPSS OUTPUT 1',
    title: 'Initial Cluster Centers (Output 1/4)',
    subtitle: 'Initial seed values across the 3 clusters for all 10 variables.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-center text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
            <tr>
              <th className="p-2 text-left">Variable</th>
              <th className="p-2">Cluster 1</th>
              <th className="p-2">Cluster 2</th>
              <th className="p-2">Cluster 3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust1C</td><td>4</td><td>4</td><td>3</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust2C</td><td>3</td><td>4</td><td>3</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk1</td><td>4</td><td>2</td><td>4</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk2</td><td>4</td><td>2</td><td>4</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv1</td><td>4</td><td>4</td><td>3</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv2</td><td>4</td><td>4</td><td>3</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price1</td><td>4</td><td>4</td><td>2</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price2</td><td>2</td><td>3</td><td>3</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del1</td><td>4</td><td>4</td><td>4</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del2</td><td>4</td><td>3</td><td>4</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 17,
    section: 'SPSS OUTPUT 2',
    title: 'Final Cluster Centers (Output 2/4)',
    subtitle: 'Converged mean values distinguishing cluster profiles.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-center text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
            <tr>
              <th className="p-2 text-left">Variable</th>
              <th className="p-2">Cluster 1</th>
              <th className="p-2">Cluster 2</th>
              <th className="p-2">Cluster 3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust1C</td><td>3.80</td><td>3.62</td><td>2.82</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust2C</td><td>3.63</td><td>3.67</td><td>2.92</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk1</td><td>3.63</td><td>2.40</td><td>3.78</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk2</td><td>3.85</td><td>2.73</td><td>4.36</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv1</td><td>4.00</td><td>4.00</td><td>3.57</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv2</td><td>4.00</td><td>4.00</td><td>3.57</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price1</td><td>3.73</td><td>3.68</td><td>2.88</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price2</td><td>3.17</td><td>2.95</td><td>3.00</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del1</td><td>4.00</td><td>4.00</td><td>3.80</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del2</td><td>3.82</td><td>3.81</td><td>3.88</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 18,
    section: 'SPSS OUTPUT 3',
    title: 'ANOVA Table (Output 3/4)',
    subtitle: 'Cluster mean square, df, F-statistics, and asymptotic significance.',
    content: (
      <div className="overflow-x-auto rounded-xl border border-white/10 max-h-[360px]">
        <table className="w-full text-center text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono sticky top-0 bg-[#111318]">
            <tr>
              <th className="p-2 text-left">Variable</th>
              <th className="p-2">Cluster MS</th>
              <th className="p-2">df</th>
              <th className="p-2">Error MS</th>
              <th className="p-2">df</th>
              <th className="p-2">F-Value</th>
              <th className="p-2">Sig. (p)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust1C</td><td>3.596</td><td>2</td><td>0.241</td><td>49</td><td>14.947</td><td className="text-emerald-400 font-bold">&lt; .001</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Trust2C</td><td>2.488</td><td>2</td><td>0.286</td><td>49</td><td>8.706</td><td className="text-emerald-400 font-bold">&lt; .001</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk1</td><td>10.861</td><td>2</td><td>0.320</td><td>50</td><td>33.990</td><td className="text-emerald-400 font-bold">&lt; .001</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Risk2</td><td>14.052</td><td>2</td><td>0.366</td><td>57</td><td>38.360</td><td className="text-emerald-400 font-bold">&lt; .001</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv1</td><td>0.482</td><td>2</td><td>0.069</td><td>25</td><td>7.031</td><td className="text-emerald-400 font-bold">0.004</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Conv2</td><td>0.482</td><td>2</td><td>0.069</td><td>25</td><td>7.031</td><td className="text-emerald-400 font-bold">0.004</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price1</td><td>2.246</td><td>2</td><td>0.305</td><td>39</td><td>7.351</td><td className="text-emerald-400 font-bold">0.002</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Price2</td><td>0.232</td><td>2</td><td>0.553</td><td>46</td><td>0.419</td><td className="text-amber-400">0.660</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del1</td><td>0.071</td><td>2</td><td>0.057</td><td>14</td><td>1.235</td><td className="text-zinc-500">0.321</td></tr>
            <tr><td className="p-2 text-left font-bold text-orange-400">Del2</td><td>0.011</td><td>2</td><td>0.155</td><td>32</td><td>0.073</td><td className="text-zinc-500">0.930</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    pageNumber: 19,
    section: 'SPSS OUTPUT 4',
    title: 'Cluster Distribution Summary (Output 4/4)',
    subtitle: 'Final case frequencies per cluster (Total Valid = 60).',
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-center text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono">
              <tr>
                <th className="p-3 text-left">Cluster</th>
                <th className="p-3">Number of Cases</th>
                <th className="p-3">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
              <tr><td className="p-3 text-left font-bold text-orange-400">Cluster 1 (Cautious Convenience Seekers)</td><td>20</td><td>33.3%</td></tr>
              <tr><td className="p-3 text-left font-bold text-emerald-400">Cluster 2 (Ready Adopters)</td><td>26</td><td>43.3%</td></tr>
              <tr><td className="p-3 text-left font-bold text-amber-400">Cluster 3 (Skeptical Traditionalists)</td><td>14</td><td>23.3%</td></tr>
              <tr className="bg-white/5 font-bold text-white"><td className="p-3 text-left">Total Valid Cases</td><td>60</td><td>100.0%</td></tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center text-xs text-zinc-400">
          Source: IBM SPSS K-Means Cluster Analysis (n = 60) • Missing cases: 0
        </div>
      </div>
    ),
  },
];

