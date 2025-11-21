'use client';
import { Sparkles, MessageSquare, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BwenziChatbot } from './NzeruChatbot';


export function BwenziFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on first mount
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-hide popup after 8 seconds if not interacted with
    if (showPopup && !isOpen) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showPopup) {
      setShowPopup(false);
    }
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  const handleDismissPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Welcome Popup */}
        {showPopup && !isOpen && (
          <div
            className="absolute bottom-20 right-0 mb-2 max-w-xs group animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
            style={{ animationDelay: '100ms' }}
          >
            <div
              className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl cursor-pointer transition-all hover:shadow-2xl hover:scale-105"
              onClick={handlePopupClick}
            >
              <button
                onClick={handleDismissPopup}
                className="absolute -top-2 -right-2 bg-white text-gray-700 rounded-full p-1 shadow-md hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Dismiss popup"
              >
                <X className="h-3 w-3" />
              </button>
              
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Hi, I'm Bwenzi! 👋</p>
                    <p className="text-sm text-white/90">
                      Your Cyber Security AI Partner. Ask me anything about staying safe online.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced pointer tail */}
              <div className="absolute -bottom-2 right-6">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-purple-600"></div>
              </div>
            </div>
          </div>
        )}

        {/* FAB Button */}
        <div className="relative">
          {/* Pulse animation ring when not open */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
          )}
          
          <button
            className={`
              relative bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 
              shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 
              transition-all duration-300 ease-out
              ${isOpen ? 'rotate-90' : 'hover:scale-110'}
              ${isHovered && !isOpen ? 'shadow-2xl' : ''}
            `}
            onClick={toggleChat}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={isOpen ? "Close Chat" : "Open Chat"}
          >
            {/* Icon container with smooth transition */}
            <div className="relative w-6 h-6">
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
              >
                <X className="h-6 w-6" />
              </div>
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              >
                <Sparkles className="h-6 w-6" />
              </div>
            </div>

            {/* Notification badge (optional - uncomment to use) */}
            {/* <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
              1
            </div> */}
          </button>

          {/* Tooltip on hover */}
          {isHovered && !isOpen && !showPopup && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-in fade-in-0 slide-in-from-bottom-1 duration-200">
              Chat with Bwenzi
              <div className="absolute -bottom-1 right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
            </div>
          )}
        </div>
      </div>

      {/* Chatbot Window */}
      {isOpen && <BwenziChatbot onClose={() => setIsOpen(false)} />}
      
      {/* Backdrop overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in-0 duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}