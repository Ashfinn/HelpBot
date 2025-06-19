'use client';
import React, { useState, useRef, useEffect } from 'react';

const ChatModal = ({ open, handleClose, message }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: message || "Hello! How can I help you today?", isBot: true, time: "10:00 AM" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! Our AI is processing your request and will provide you with the best possible solution.",
        isBot: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!open) return null;

  return (
    <div className="modal modal-open modal-middle">
      <div className="modal-box w-full max-w-2xl h-[600px] p-0 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl relative">
          <button
            className="btn btn-sm btn-circle absolute right-4 top-4 bg-white/20 border-white/30 text-white hover:bg-white/30"
            onClick={handleClose}
            aria-label="Close chat"
          >
            ✕
          </button>
          <div className="flex items-center space-x-4">
            <div className="avatar online">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">HelpBot Assistant</h3>
              <p className="text-blue-100 text-sm">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 h-96">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat ${msg.isBot ? 'chat-start' : 'chat-end'}`}>
              {msg.isBot && (
                <div className="chat-image avatar">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-sm">🤖</span>
                  </div>
                </div>
              )}
              <div className={`chat-bubble max-w-xs ${
                msg.isBot 
                  ? 'chat-bubble-primary bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'chat-bubble-accent bg-gradient-to-r from-green-500 to-teal-500'
              } shadow-lg`}>
                {msg.text}
              </div>
              <div className="chat-footer opacity-60 text-xs mt-1">
                {msg.time}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-b-3xl border-t border-blue-100">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="textarea textarea-bordered w-full resize-none bg-white/90 border-blue-200 focus:border-blue-400 rounded-2xl shadow-sm"
                rows="1"
              />
            </div>
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="btn btn-primary btn-circle bg-gradient-to-r from-blue-500 to-purple-500 border-none shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-black/50" onClick={handleClose}></form>
    </div>
  );
};

export default ChatModal;