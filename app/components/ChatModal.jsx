'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FiArrowUp, FiX } from 'react-icons/fi';
import Mascot from './Mascot';

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export function TypingDots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 0.15, 0.3].map((d) => (
        <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70" style={{ animationDelay: `${d}s` }} />
      ))}
    </div>
  );
}

export function BotAvatar() {
  return (
    <span className="h-8 w-8 shrink-0 rounded-full ring-1 ring-white/15">
      <Mascot />
    </span>
  );
}

const ChatModal = ({ open, handleClose, message }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: message || 'Hi! I’m HelpBot. How can I help you today?', isBot: true, time: now() },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const newUserMessage = { id: Date.now(), text: inputValue.trim(), isBot: false, time: now() };
    const updated = [...messages, newUserMessage];
    setMessages(updated);
    setInputValue('');
    setIsTyping(true);

    let replyText;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.isBot ? 'assistant' : 'user', content: m.text })),
        }),
      });
      const data = await res.json();
      replyText = res.ok ? data.reply : `⚠️ ${data.error || 'Something went wrong.'}`;
    } catch {
      replyText = '⚠️ Network error. Please try again.';
    }

    setMessages((prev) => [...prev, { id: Date.now() + 1, text: replyText, isBot: true, time: now() }]);
    setIsTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="grain relative flex h-[640px] max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-[0_40px_140px_-30px_rgba(30,70,219,.6)]">
        {/* Header with soft horizon glow */}
        <div className="relative z-[2] overflow-hidden border-b border-white/[0.06] px-6 py-5">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[100%] bg-bold/40 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <span className="relative h-11 w-11 rounded-full ring-1 ring-white/20">
              <Mascot />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-800 bg-emerald-400" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold tracking-tight">HelpBot</h3>
              <p className="text-xs text-white/45">Online · usually replies instantly</p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="relative z-[2] flex-1 space-y-5 overflow-y-auto px-6 py-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-3 ${msg.isBot ? '' : 'flex-row-reverse'}`}>
              {msg.isBot && <BotAvatar />}
              <div className={`flex max-w-[78%] flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}>
                <div
                  className={`whitespace-pre-wrap rounded-3xl px-4 py-3 text-[15px] leading-relaxed ${
                    msg.isBot
                      ? 'rounded-bl-md border border-white/10 bg-white/[0.05] text-white/90'
                      : 'rounded-br-md bg-gradient-to-br from-bold-400 to-bold text-white shadow-[0_10px_30px_-10px_rgba(30,70,219,.8)]'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1.5 px-1 text-[11px] text-white/30">{msg.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-3">
              <BotAvatar />
              <div className="rounded-3xl rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-3">
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="relative z-[2] border-t border-white/[0.06] p-4">
          <div className="flex items-end gap-2 rounded-3xl border border-white/10 bg-white/[0.04] p-2 pl-4 transition focus-within:border-sky/50">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything…"
              rows={1}
              className="max-h-32 flex-1 resize-none bg-transparent py-2 text-[15px] text-soft placeholder-white/35 outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft text-ink shadow-[0_0_24px_rgba(255,255,255,.3)] transition hover:scale-105 disabled:scale-100 disabled:opacity-30 disabled:shadow-none"
            >
              <FiArrowUp />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-white/30">Enter to send · Shift + Enter for a new line</p>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
