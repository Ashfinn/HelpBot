'use client';
import React, { useState, useEffect } from 'react';
import ChatModal from './ChatModal';

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "24/7 Customer Support",
    "Instant AI Responses",
    "Smart Automation",
    "Global Business Solutions",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleWatchDemo = () => {
    console.log('Watch demo clicked');
  };

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"
            style={{ animationDuration: '6s', animationTimingFunction: 'ease-in-out' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"
            style={{ animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationDelay: '2s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
            style={{ animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationDelay: '4s' }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 mb-8 transform transition-all duration-1000 hover:scale-105 hover:shadow-md ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-100 text-xs sm:text-sm font-medium">
                AI-Powered Customer Support • Trusted by 10,000+ Businesses
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl md:text-7xl font-black mb-8 leading-snug tracking-tight transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="text-white">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                HelpBot
              </span>
            </h1>

            {/* Dynamic subtitle */}
            <div
              className={`mb-8 h-20 flex items-center justify-center transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Revolutionizing{' '}
                <span className="font-semibold text-white relative inline-block min-w-[300px] text-left">
                  <span
                    key={currentText}
                    className="absolute left-0 top-0 w-full bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-fade-in-up"
                  >
                    {rotatingTexts[currentText]}
                  </span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Transform your customer service with intelligent AI that understands, learns, and delivers exceptional experiences at scale.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <button
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-400/30 hover:ring-2 hover:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                onClick={handleOpenChat}
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <button
                className="group px-10 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-full hover:bg-blue-400 hover:text-white hover:ring-2 hover:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 flex items-center"
                onClick={handleWatchDemo}
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div
              className={`transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-blue-300 text-sm mb-6">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {['Google', 'Microsoft', 'Shopify', 'Stripe', 'Airbnb'].map((company, index) => (
                  <div
                    key={index}
                    className="relative text-white font-semibold text-lg tracking-wider hover:opacity-100 transition-all duration-300 cursor-pointer group"
                  >
                    {company}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={handleLearnMore}
                className="flex flex-col items-center text-blue-300 hover:text-white hover:scale-110 transition-all duration-300 group"
              >
                <span className="text-sm mb-2 opacity-75 group-hover:opacity-100">Discover More</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-8 text-blue-400 opacity-40 animate-float"
          style={{ animationDuration: '6s' }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div
          className="absolute top-1/3 right-12 text-purple-400 opacity-40 animate-float"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div
          className="absolute bottom-1/4 left-16 text-cyan-400 opacity-40 animate-float"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
          </svg>
        </div>
      </div>

      <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05) rotate(5deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}