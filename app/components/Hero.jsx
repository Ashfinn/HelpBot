// components/Hero.js
'use client';

import React, { useState } from 'react';
import ChatModal from './ChatModal';

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-black text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to HelpBot</h1>
            <p className="mb-5">Your personalized AI assistant.</p>
            <button
              className="btn btn-primary"
              onClick={handleOpenChat}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  );
}
