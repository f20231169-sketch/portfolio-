import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Copy, Check, ArrowUp, ArrowUpRight, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { DECORATIVE_ASSETS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);

  const email = 'f20231169@pilani.bits-pilani.ac.in';
  const phone = '+91 85710 18189';
  const phoneTel = '+918571018189';
  const linkedinUrl = 'https://www.linkedin.com/in/anushka--jha/';
  const linkedinDisplay = 'linkedin.com/in/anushka--jha';

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    } else {
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2200);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="contact" className="relative transition-colors duration-500">
      
      {/* Light / Warm Off-White Contact Section matching video "LET'S GET IN TOUCH" */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#f5f5f1] text-[#121316] overflow-hidden">
        
        {/* Floating 3D Decorative objects in light section */}
        <motion.div
          className="absolute top-12 right-6 sm:right-20 w-20 sm:w-28 h-20 sm:h-28 pointer-events-none z-10 opacity-70 hidden sm:block"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={DECORATIVE_ASSETS.purpleTorus}
            alt="3D iridescent torus"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-6 sm:left-16 w-16 sm:w-24 h-16 sm:h-24 pointer-events-none z-10 opacity-70 hidden sm:block"
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={DECORATIVE_ASSETS.chromeStar}
            alt="3D chrome sculpture"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-20">
          
          {/* Section Marker */}
          <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
              [ 06 // DIRECT CONTACT ]
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-emerald-700 tracking-wider">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>

          {/* Editorial Header */}
          <div className="mb-14 text-left">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter font-display text-zinc-950 leading-[0.95] mb-5">
              LET&apos;S GET IN TOUCH.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
              Open to <span className="font-semibold text-zinc-950">Product Management, Growth, Strategy,</span> and Healthcare Innovation roles. Feel free to connect directly via phone, email, or LinkedIn.
            </p>
          </div>

          {/* The 3 Direct Contact Channels from the Resume (No form, purely direct contact) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            
            {/* 1. Phone Card */}
            <div className="p-7 rounded-3xl bg-white border border-black/10 shadow-xl shadow-black/5 hover:border-violet-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-zinc-400">
                    CALL / WHATSAPP
                  </span>
                </div>

                <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                  Contact Number
                </h3>
                <a
                  href={`tel:${phoneTel}`}
                  data-cursor="pointer"
                  className="text-lg sm:text-xl font-bold font-mono text-zinc-900 hover:text-violet-600 transition-colors block mb-4"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                <a
                  href={`tel:${phoneTel}`}
                  data-cursor="pointer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-black text-white hover:bg-zinc-800 text-xs font-semibold tracking-wider transition-colors uppercase"
                >
                  <span>CALL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-mono text-[11px]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Email Card */}
            <div className="p-7 rounded-3xl bg-white border border-black/10 shadow-xl shadow-black/5 hover:border-violet-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-zinc-400">
                    DIRECT EMAIL
                  </span>
                </div>

                <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                  Email Address
                </h3>
                <a
                  href={`mailto:${email}`}
                  data-cursor="pointer"
                  className="text-sm sm:text-base font-bold font-mono text-zinc-900 hover:text-violet-600 transition-colors block break-all mb-4"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                <a
                  href={`mailto:${email}`}
                  data-cursor="pointer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-black text-white hover:bg-zinc-800 text-xs font-semibold tracking-wider transition-colors uppercase"
                >
                  <span>WRITE EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-mono text-[11px]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 3. LinkedIn Card */}
            <div className="p-7 rounded-3xl bg-white border border-black/10 shadow-xl shadow-black/5 hover:border-violet-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-zinc-400">
                    NETWORK &amp; CHAT
                  </span>
                </div>

                <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                  LinkedIn Profile
                </h3>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="text-base sm:text-lg font-bold font-mono text-zinc-900 hover:text-sky-600 transition-colors block mb-4"
                >
                  {linkedinDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 text-xs font-semibold tracking-wider transition-colors uppercase"
                >
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => copyToClipboard(linkedinUrl, 'linkedin')}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                  title="Copy LinkedIn URL"
                >
                  {copiedLinkedIn ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-mono text-[11px]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Institutional Background Bar (From Resume) */}
          <div className="p-6 rounded-2xl bg-white/70 border border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-zinc-800">
                <GraduationCap className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase text-zinc-900">
                  Birla Institute of Technology and Science, Pilani (BITS Pilani)
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  B. Pharmacy (Hons.) • 2023 - 2027 (Class of &apos;27)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-zinc-700" />
              <span>Pilani Campus, Rajasthan, India</span>
            </div>
          </div>

        </div>
      </section>

      {/* Deep Charcoal / Near-Black Footer matching video */}
      <footer className="bg-[#08090b] text-white pt-16 pb-12 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Row: Wordmark & Back To Top */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-10 border-b border-white/10 gap-6">
            <div>
              <span className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white block">
                ANUSHKA JHA
              </span>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                PRODUCT • GROWTH • STRATEGY // BITS PILANI
              </p>
            </div>

            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
            </button>
          </div>

          {/* Geometric Glyphs Array matching reference video */}
          <div className="py-10 border-b border-white/10 flex items-center justify-between overflow-x-auto gap-4 select-none opacity-80">
            <div className="w-12 h-12 rounded-full border-2 border-violet-500/60 flex items-center justify-center shrink-0">
              <div className="w-4 h-4 rounded-full bg-violet-400" />
            </div>
            <div className="w-12 h-12 border-2 border-white/30 rotate-45 flex items-center justify-center shrink-0">
              <span className="text-xs font-mono text-white/50">✦</span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-emerald-400/60 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <div className="w-10 h-0.5 bg-indigo-400 rotate-45" />
              <div className="w-10 h-0.5 bg-indigo-400 -rotate-45 -ml-10" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-pink-400/60 flex items-center justify-center shrink-0">
              <div className="w-6 h-6 rounded-full border border-pink-400/40" />
            </div>
            <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center shrink-0">
              <span className="text-xs font-mono text-violet-400 font-bold">04</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-violet-600/30 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
            <p>
              © {new Date().getFullYear()} Anushka Jha. Crafted with editorial discipline &amp; motion.
            </p>
            <p className="text-zinc-500 text-[11px] flex items-center gap-3">
              <span>{phone}</span>
              <span>•</span>
              <span>{email}</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};
