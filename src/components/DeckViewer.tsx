import React, { useState } from 'react';
import {
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Download,
  Scroll,
  Columns,
  ZoomIn,
  ZoomOut,
  FileText,
  ExternalLink,
} from 'lucide-react';

export interface DeckSlide {
  pageNumber: number;
  section?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface DeckViewerProps {
  deckTitle: string;
  projectNumber: string;
  slides: DeckSlide[];
  accentColor?: string;
  pdfDownloadName?: string;
}

export const DeckViewer: React.FC<DeckViewerProps> = ({
  deckTitle,
  projectNumber,
  slides,
  accentColor = '#10b981',
  pdfDownloadName = 'Case_Study_Presentation.pdf',
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'scroll' | 'slide'>('scroll');
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handlePrintOrDownload = () => {
    window.print();
  };

  const handleOpenInNewTab = () => {
    const contentElement = document.getElementById(`deck-scroll-container-${projectNumber}`);
    const htmlContent = contentElement ? contentElement.innerHTML : '';
    const newWin = window.open('', '_blank');
    if (newWin) {
      newWin.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${deckTitle} • Live Deck</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { background-color: #08090c; color: #f1f5f9; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; margin: 0; padding: 24px; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    @media print {
      body { background-color: #ffffff !important; color: #000000 !important; padding: 0 !important; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body class="min-h-screen">
  <div class="max-w-4xl mx-auto">
    <header class="no-print flex items-center justify-between pb-6 mb-8 border-b border-zinc-800">
      <div>
        <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
          PROJECT ${projectNumber} // PRESENTATION VIEW
        </span>
        <h1 class="text-2xl font-black tracking-tight text-white">${deckTitle}</h1>
        <p class="text-xs text-zinc-400 mt-1">${totalSlides} Slides • Continuous Live Scroll View</p>
      </div>
      <div class="flex items-center gap-3">
        <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 cursor-pointer shadow-md">
          Print / Save PDF
        </button>
        <button onclick="window.close()" class="px-4 py-2 rounded-xl bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 cursor-pointer border border-zinc-700">
          Close Window
        </button>
      </div>
    </header>
    <main class="space-y-8 pb-16">
      ${htmlContent}
    </main>
  </div>
</body>
</html>`);
      newWin.document.close();
    }
  };

  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[#0b0c10] overflow-hidden shadow-2xl transition-all duration-300 ${
        isExpanded ? 'fixed inset-3 z-[9999] flex flex-col bg-[#0b0c10]' : 'relative my-8'
      }`}
    >
      {/* Top Deck Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-white/[0.04] border-b border-white/10 text-xs">
        {/* Left: Deck Meta */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-violet-300">
            PDF DECK
          </span>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-400" />
            <h4 className="font-bold font-display uppercase tracking-tight text-white text-xs sm:text-sm truncate max-w-[200px] sm:max-w-md">
              {deckTitle}
            </h4>
          </div>
          <span className="text-zinc-500 font-mono text-[11px] hidden sm:inline">
            ({totalSlides} Pages)
          </span>
        </div>

        {/* Right: Controls (Scroll vs Slide, Pagination, Zoom, Expand) */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('scroll')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'scroll'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Continuous live vertical scroll"
            >
              <Scroll className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Scroll</span>
            </button>
            <button
              onClick={() => setViewMode('slide')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'slide'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Step-by-step slide view"
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Slides</span>
            </button>
          </div>

          {/* Slide Pagination (when in slide mode) */}
          {viewMode === 'slide' && (
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-300">
              <button
                onClick={handlePrev}
                className="p-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span>
                {currentSlideIndex + 1} / {totalSlides}
              </span>
              <button
                onClick={handleNext}
                className="p-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Zoom controls */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono text-zinc-400 w-8 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.3, z + 0.1))}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Expand Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title={isExpanded ? 'Minimize view' : 'Expand full screen'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Expand / Open in New Tab Button */}
          <button
            onClick={handleOpenInNewTab}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs"
            title="Open and expand presentation in a new tab"
          >
            <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline font-mono text-[11px]">New Tab</span>
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Body */}
      <div
        className={`w-full overflow-y-auto bg-[#07080a] p-4 sm:p-8 flex justify-center ${
          isExpanded ? 'flex-1 h-full' : 'max-h-[640px]'
        }`}
      >
        <div
          id={`deck-scroll-container-${projectNumber}`}
          className="w-full max-w-4xl space-y-8 transition-transform duration-200"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        >
          {viewMode === 'scroll' ? (
            /* Live Continuous Scroll Mode: All Slides Stacked */
            slides.map((slide, idx) => (
              <div
                key={slide.pageNumber}
                id={`slide-${slide.pageNumber}`}
                className="relative rounded-2xl bg-[#111318] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-white/20 p-6 sm:p-10"
              >
                {/* Header ribbon on slide */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    {slide.section && (
                      <span className="text-[10px] font-mono tracking-widest text-violet-400 uppercase font-bold">
                        {slide.section}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                    PAGE {String(slide.pageNumber).padStart(2, '0')} // {totalSlides}
                  </span>
                </div>

                {/* Slide Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display text-white tracking-tight mb-2">
                  {slide.title}
                </h3>
                {slide.subtitle && (
                  <p className="text-xs sm:text-sm text-zinc-400 italic mb-6">
                    {slide.subtitle}
                  </p>
                )}

                {/* Rendered Slide Content */}
                <div className="mt-4">{slide.content}</div>
              </div>
            ))
          ) : (
            /* Slide-by-Slide Presentation Mode */
            <div className="relative rounded-2xl bg-[#111318] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-12 min-h-[460px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  {currentSlide.section && (
                    <span className="text-xs font-mono tracking-widest text-violet-400 uppercase font-bold">
                      {currentSlide.section}
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-400">
                    SLIDE {currentSlide.pageNumber} OF {totalSlides}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight mb-2">
                  {currentSlide.title}
                </h3>
                {currentSlide.subtitle && (
                  <p className="text-sm text-zinc-400 italic mb-6">
                    {currentSlide.subtitle}
                  </p>
                )}

                <div className="mt-6">{currentSlide.content}</div>
              </div>

              {/* Bottom Quick Controls in Slide Mode */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <div className="flex items-center gap-1">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === currentSlideIndex
                          ? 'w-6 bg-violet-400'
                          : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Deck Status Footer */}
      <div className="px-6 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>INTERACTIVE PDF DECK // LIVE SCROLLING &amp; EXPAND ACTIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">ANUSHKA • PRODUCT CASE STUDY</span>
          <button
            onClick={handlePrintOrDownload}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save / Print</span>
          </button>
        </div>
      </div>
    </div>
  );
};
