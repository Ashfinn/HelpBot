'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import ChatModal from './ChatModal';
import DemoModal from './DemoModal';

const rotatingTexts = ['customer support', 'instant answers', 'smart automation', 'global help desks'];

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrentText((p) => (p + 1) % rotatingTexts.length), 2800);
    return () => clearInterval(id);
  }, []);

  const handleTryLive = () => {
    setIsDemoOpen(false);
    setIsChatOpen(true);
  };

  return (
    <>
      <section className="grain relative min-h-screen overflow-hidden bg-ink">
        {/* Glowing horizon arc */}
        <div className="horizon top-[52%] animate-breathe" />
        {/* Blue bloom behind the mascot */}
        <div className="pointer-events-none absolute left-1/2 top-[28%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bold/30 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
          {/* Mascot */}
          <div className="relative mb-10 animate-float">
            <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-sky/30 blur-3xl" />
            <div className="h-44 w-44 overflow-hidden rounded-[2.5rem] border border-white/20 bg-white shadow-[0_30px_100px_-20px_rgba(30,70,219,.9)] md:h-52 md:w-52">
              <img src="/mascot.jpg" alt="HelpBot mascot waving" className="h-full w-full object-cover" />
            </div>
          </div>

          <span className="eyebrow mb-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_10px_#67BAF4]" />
            AI support assistant
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[84px]">
            Meet HelpBot.
            <br />
            <span className="text-white/35">The future of</span>
            <br />
            <span
              key={currentText}
              className="inline-block animate-fade-in-up bg-gradient-to-r from-sky via-[#8FB3FF] to-bold-400 bg-clip-text pb-2 text-transparent"
            >
              {rotatingTexts[currentText]}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            Your AI assistant answers every customer instantly, around the clock, so your team saves hours every day.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button onClick={() => setIsChatOpen(true)} className="btn-pill group">
              Get started free
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => setIsDemoOpen(true)} className="btn-ghost-pill">
              <FiPlay className="text-sky" /> Watch demo
            </button>
          </div>

          <div className="mt-20 w-full">
            <p className="eyebrow mb-6">Trusted by teams worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-display text-lg font-semibold tracking-tight text-white/30">
              {['Google', 'Microsoft', 'Shopify', 'Stripe', 'Airbnb'].map((c) => (
                <span key={c} className="transition hover:text-white/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-b from-transparent to-ink" />
      </section>

      <ChatModal open={isChatOpen} handleClose={() => setIsChatOpen(false)} />
      <DemoModal open={isDemoOpen} handleClose={() => setIsDemoOpen(false)} onTryLive={handleTryLive} />
    </>
  );
}
