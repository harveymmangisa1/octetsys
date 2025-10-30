'use client';

import { Sparkles, MessageSquare, X, Shield, Cpu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { BwenziChatbot } from './NzeruChatbot';

export function BwenziFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 32, y: 32 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    if (!dragging) {
      setIsOpen(!isOpen);
      if (showPopup) {
        setShowPopup(false);
      }
    }
  };

  const handleInitialClick = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (fabRef.current) {
      setDragging(true);
      const rect = fabRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Constrain to viewport boundaries
      const constrainedX = Math.max(8, Math.min(window.innerWidth - 80, newX));
      const constrainedY = Math.max(8, Math.min(window.innerHeight - 80, newY));
      
      setPosition({ x: constrainedX, y: constrainedY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed z-50"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          cursor: dragging ? 'grabbing' : 'default'
        }}
      >
        {showPopup && !isOpen && (
          <div
            className="absolute bottom-20 right-0 mb-3 p-4 text-sm bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-2xl cursor-pointer animate-in fade-in-0 slide-in-from-bottom-4 duration-300 backdrop-blur-sm border border-slate-700 max-w-xs"
            onClick={handleInitialClick}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <Cpu className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Enterprise AI Assistant</p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Hi, I'm Bwenzi. I can help with cybersecurity guidance, technical solutions, and business insights.
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(false);
                }}
                className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="h-3 w-3 text-slate-300" />
              </button>
            </div>
            <div className="absolute -bottom-1 right-6 w-4 h-4 bg-slate-800 transform rotate-45 border-r border-b border-slate-700"></div>
          </div>
        )}
        
        <button
          ref={fabRef}
          className={`
            relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-5 
            shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 
            transition-all duration-300 group border border-blue-500/30
            ${dragging ? 'cursor-grabbing scale-105 shadow-3xl' : 'cursor-grab'}
            ${isOpen 
              ? 'rotate-90 scale-95 bg-gradient-to-br from-slate-700 to-slate-800' 
              : 'hover:scale-110 hover:from-blue-700 hover:to-blue-900'
            }
          `}
          onClick={toggleChat}
          onMouseDown={handleMouseDown}
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Main icon */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <div className="relative">
                <Sparkles className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
                {/* Subtle ping animation */}
                <div className="absolute -top-1 -right-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0"></div>
                </div>
              </div>
            )}
          </div>

          {/* Tooltip on hover */}
          {!dragging && (
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-700">
              {isOpen ? 'Close Assistant' : 'AI Assistant • Drag to move'}
              <div className="absolute top-full right-4 w-2 h-2 bg-slate-900 transform rotate-45 border-r border-b border-slate-700"></div>
            </div>
          )}

          {/* Drag indicator */}
          {!isOpen && (
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          )}
        </button>

        {/* Status indicator */}
        {!isOpen && !dragging && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
        )}
      </div>
      
      {/* Chatbot with smooth entrance */}
      <div className={`
        fixed inset-0 z-40 transition-all duration-300 ease-out
        ${isOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
        }
      `}>
        {isOpen && <BwenziChatbot onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}