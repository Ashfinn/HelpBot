// components/ChatModal.js
'use client';

import React, { useState } from 'react';

const ChatModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={onClose}></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="flex flex-col h-80">
              <div className="flex-1 overflow-y-auto p-4 border border-gray-300 rounded-md mb-2">
                {/* Chat messages */}
                <div className="flex flex-col space-y-2">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-sm text-gray-700">Hello! How can I help you today?</p>
                  </div>
                  {/* Add more messages here */}
                </div>
              </div>
              <div className="flex-shrink-0">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
