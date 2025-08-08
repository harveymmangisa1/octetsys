'use client';
import { Sparkles, MessageSquare, X } from 'lucide-react';
import { useState } from 'react';
import { NzeruChatbot } from './NzeruChatbot';

export function NzeruFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if(showPopup) {
      setShowPopup(false);
    }
  };

  const handleInitialClick = () => {
    setShowPopup(false);
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showPopup && !isOpen && (
          <div
            className="absolute bottom-16 right-0 mb-2 p-3 text-sm text-primary-foreground bg-primary rounded-lg shadow-lg cursor-pointer animate-in fade-in-0 slide-in-from-bottom-2"
            onClick={handleInitialClick}
          >
            Hi, I'm Nzeru, your Cyber Security AI Partner! Ask me anything.
            <div className="absolute -bottom-1 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary"></div>
          </div>
        )}
        <button
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-transform hover:scale-110"
          onClick={toggleChat}
          aria-label={isOpen ? "Close Chat" : "Open Chat"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && <NzeruChatbot onClose={() => setIsOpen(false)} />}
    </>
  );
}
