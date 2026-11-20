'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiX, FiRotateCcw, FiArrowRight } from 'react-icons/fi';
import Mascot from './Mascot';
import { TypingDots, BotAvatar } from './ChatModal';

// Scripted conversation played by the "Watch Demo" button. No API calls.
const SCENARIOS = [
  {
    id: 'order',
    label: 'Order tracking',
    script: [
      { from: 'user', text: "Hi, I ordered a jacket 3 days ago and it still hasn't arrived." },
      { from: 'bot', text: 'Sorry about the wait! Could you share your order number? It starts with #HB.' },
      { from: 'user', text: 'Sure, it’s #HB-48213' },
      { from: 'bot', text: 'Thanks! I found it 🔍\n\n• Item: Winter Jacket (M)\n• Status: Out for delivery 🚚\n• ETA: Today by 6 PM\n\nWant me to text you the tracking link?' },
      { from: 'user', text: 'Yes please!' },
      { from: 'bot', text: 'Done ✅ The tracking link has been sent to your phone. Anything else I can help with?' },
    ],
  },
  {
    id: 'refund',
    label: 'Refund request',
    script: [
      { from: 'user', text: 'I was charged twice for my subscription this month.' },
      { from: 'bot', text: "I'm sorry about that! Let me check your billing history…" },
      { from: 'bot', text: "I see two charges of $29.00 on Nov 1. One is a duplicate.\n\nI've started a refund for $29.00 💸 It will appear in 3–5 business days." },
      { from: 'user', text: 'Wow, that was fast. Thanks!' },
      { from: 'bot', text: "You're welcome! I've also added a note so this doesn't happen again. Have a great day 😊" },
    ],
  },
  {
    id: 'tech',
    label: 'Tech support',
    script: [
      { from: 'user', text: "I can't log in to my account, it keeps saying invalid password." },
      { from: 'bot', text: "Let's fix that! For security, I've sent a 6-digit code to your email ending in •••@gmail.com." },
      { from: 'user', text: 'Got it: 582 019' },
      { from: 'bot', text: "Verified ✅ Here's a secure link to reset your password. It expires in 15 minutes." },
      { from: 'user', text: 'All good now, I’m in!' },
      { from: 'bot', text: 'Awesome 🎉 Tip: enable two-factor authentication in Settings → Security to keep your account safe.' },
    ],
  },
];

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const DemoModal = ({ open, handleClose, onTryLive }) => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(null); // 'user' | 'bot' | null
  const [done, setDone] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const endRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];

  // Play the script step by step.
  useEffect(() => {
    if (!open) return;
    setShown([]);
    setDone(false);
    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)));

    (async () => {
      await wait(500);
      for (const step of scenario.script) {
        if (cancelled) return;
        setTyping(step.from);
        await wait(Math.min(700 + step.text.length * 18, 2200)); // longer text "types" longer
        if (cancelled) return;
        setTyping(null);
        setShown((prev) => [...prev, { ...step, time: now() }]);
        await wait(step.from === 'user' ? 500 : 900);
      }
      if (!cancelled) setDone(true);
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      setTyping(null);
    };
  }, [open, scenarioIdx, runKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [shown, typing]);

  const replay = useCallback(() => setRunKey((k) => k + 1), []);

  if (!open) return null;

  const progress = Math.round((shown.length / scenario.script.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="grain relative flex h-[680px] max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-[0_40px_140px_-30px_rgba(30,70,219,.6)]">
        {/* Header */}
        <div className="relative z-[2] overflow-hidden border-b border-white/[0.06] px-6 pb-4 pt-5">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[100%] bg-bold/40 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <span className="h-11 w-11 rounded-full ring-1 ring-white/20">
              <Mascot />
            </span>
            <div className="flex-1">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
                HelpBot demo
                <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" /> Simulation
                </span>
              </h3>
              <p className="text-xs text-white/45">See how HelpBot handles real customer requests</p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close demo"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
            >
              <FiX />
            </button>
          </div>

          {/* Scenario tabs */}
          <div className="relative mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => (i === scenarioIdx ? replay() : setScenarioIdx(i))}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  i === scenarioIdx ? 'bg-soft text-ink' : 'text-white/55 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-[2] h-px bg-white/[0.06]">
          <div
            className="h-full bg-gradient-to-r from-bold to-sky shadow-[0_0_12px_#67BAF4] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Messages */}
        <div className="relative z-[2] flex-1 space-y-5 overflow-y-auto px-6 py-6">
          {shown.map((msg, i) => {
            const bot = msg.from === 'bot';
            return (
              <div key={i} className={`flex animate-fade-in-up items-end gap-3 ${bot ? '' : 'flex-row-reverse'}`}>
                {bot ? (
                  <BotAvatar />
                ) : (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-semibold text-white/70">
                    You
                  </span>
                )}
                <div className={`flex max-w-[78%] flex-col ${bot ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`whitespace-pre-wrap rounded-3xl px-4 py-3 text-[15px] leading-relaxed ${
                      bot
                        ? 'rounded-bl-md border border-white/10 bg-white/[0.05] text-white/90'
                        : 'rounded-br-md bg-gradient-to-br from-bold-400 to-bold text-white shadow-[0_10px_30px_-10px_rgba(30,70,219,.8)]'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="mt-1.5 px-1 text-[11px] text-white/30">
                    {bot ? 'HelpBot' : 'Customer'} · {msg.time}
                  </span>
                </div>
              </div>
            );
          })}

          {typing && (
            <div className={`flex items-end gap-3 ${typing === 'bot' ? '' : 'flex-row-reverse'}`}>
              {typing === 'bot' && <BotAvatar />}
              <div
                className={`rounded-3xl px-4 py-3 ${
                  typing === 'bot' ? 'rounded-bl-md border border-white/10 bg-white/[0.05]' : 'rounded-br-md bg-bold/70'
                }`}
              >
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Footer */}
        <div className="relative z-[2] flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] p-4 sm:flex-row">
          <p className="text-sm text-white/45">
            {done ? '✓ Resolved in seconds, no human agent needed.' : 'Simulating conversation…'}
          </p>
          <div className="flex gap-2">
            <button onClick={replay} className="btn-ghost-pill !px-4 !py-2 !text-sm">
              <FiRotateCcw /> Replay
            </button>
            {onTryLive && (
              <button onClick={onTryLive} className="btn-pill !px-4 !py-2 !text-sm">
                Try it live <FiArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
