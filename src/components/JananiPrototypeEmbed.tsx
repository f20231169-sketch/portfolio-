import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Smartphone, Mic, Sparkles, HeartPulse, Activity } from 'lucide-react';

interface JananiPrototypeEmbedProps {
  className?: string;
}

export const JananiPrototypeEmbed: React.FC<JananiPrototypeEmbedProps> = ({
  className = '',
}) => {
  const prototypeUrl = 'https://jananicare.vercel.app/';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prototypeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-3xl border border-pink-500/30 bg-gradient-to-br from-[#130b14] via-[#0b0c10] to-[#08090d] p-6 sm:p-8 shadow-2xl relative overflow-hidden my-6 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Left: Info & Description */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-pink-300 uppercase tracking-widest">
              LIVE MOBILE APPLICATION
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300">
              VOICE &amp; AUDIO ENABLED
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mb-2 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-pink-400 shrink-0" />
            <span>Janani Care Mobile Prototype</span>
          </h4>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mb-4">
            Experience the working interactive mobile application in full browser viewport. Test the speech-to-intent symptom triage in regional dialects, browse week-by-week trimester milestones, and inspect clinical escalation workflows.
          </p>

          {/* Quick Capability Tags */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <Mic className="w-3 h-3 text-pink-400" />
              <span>Voice Symptom Logger</span>
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>Trimester Triage Architecture</span>
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
              <HeartPulse className="w-3 h-3 text-rose-400" />
              <span>ASHA Clinical Escalation</span>
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0">
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-pink-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
            title="Copy prototype URL"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied prototype link!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Prototype Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
