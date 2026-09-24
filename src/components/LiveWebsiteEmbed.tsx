import React, { useState } from 'react';
import { ExternalLink, RefreshCw, Maximize2, Minimize2, Copy, Check, Globe } from 'lucide-react';

interface LiveWebsiteEmbedProps {
  initialUrl?: string;
  projectName?: string;
}

export const LiveWebsiteEmbed: React.FC<LiveWebsiteEmbedProps> = ({
  initialUrl = 'https://tethercopilot.vercel.app/',
  projectName = 'Tether VoC',
}) => {
  const [url] = useState<string>(initialUrl);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [iframeError, setIframeError] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[#0b0c10] overflow-hidden shadow-2xl transition-all duration-300 ${
        isExpanded ? 'fixed inset-4 z-[9999] flex flex-col bg-[#0b0c10]' : 'relative my-8'
      }`}
    >
      {/* Top Notion-Style Embed Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white/[0.04] border-b border-white/10 text-xs">
        
        {/* Left: Domain Indicator */}
        <div className="flex items-center gap-2.5 flex-1 min-w-[240px]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex items-center gap-1.5 text-zinc-300 font-mono font-medium">
            <Globe className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-[11px] text-zinc-400 uppercase tracking-wider hidden sm:inline">LIVE WORKING EMBED:</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-zinc-200 bg-white/5 px-2.5 py-1 rounded border border-white/10 text-xs truncate max-w-[280px] sm:max-w-md">
              {url}
            </span>
          </div>
        </div>

        {/* Right: Actions (Open in new tab, Refresh, Copy, Expand) */}
        <div className="flex items-center gap-2">
          {/* Notion-style Open in New Tab */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            title="Open in new tab (Notion style)"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-violet-300" />
          </a>

          <button
            onClick={() => {
              setReloadKey((prev) => prev + 1);
              setIframeError(false);
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Refresh embed"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Copy URL"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title={isExpanded ? 'Minimize view' : 'Expand full screen'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Live Interactive IFrame Container */}
      <div className={`w-full bg-[#121318] relative ${isExpanded ? 'flex-1 h-full' : 'h-[520px] sm:h-[620px]'}`}>
        {!iframeError ? (
          <iframe
            key={reloadKey}
            src={url}
            title={`${projectName} Live Website`}
            className="w-full h-full border-none"
            onError={() => setIframeError(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        ) : null}

        {/* Fallback Notice Overlay (if third-party site restricts embedding via X-Frame-Options) */}
        {iframeError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#0d0e12]">
            <Globe className="w-12 h-12 text-violet-400 mb-4 animate-bounce" />
            <h4 className="text-lg font-bold text-white font-display mb-2">
              Interactive Website Ready
            </h4>
            <p className="text-sm text-zinc-400 max-w-md mb-6">
              Some web services limit cross-domain iframe embedding. You can view the live project directly in a clean new tab:
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all hover:scale-105 shadow-xl"
            >
              <span>OPEN {projectName.toUpperCase()} IN NEW TAB</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Bottom Status Ribbon */}
      <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>INTERACTIVE LIVE PREVIEW // CLICK &amp; EXPLORE</span>
        <span className="hidden sm:inline">CONFIGURED VIA TETHER VOC PIPELINE</span>
      </div>
    </div>
  );
};
