'use client';

import { useState, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';
import { BwenziChatbot } from './NzeruChatbot';

export function BwenziFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [position, setPosition] = useState({ x: 24, y: 24 }); // initial offset
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef(position);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (showPopup) setShowPopup(false);
  };

  const handleInitialClick = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  // Start dragging
  const handleMouseDown = (e) => {
    setDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    positionRef.current = position;
    document.body.style.userSelect = 'none'; // prevent text selection while dragging
  };

  // Dragging movement
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: Math.max(0, positionRef.current.x - dx),
      y: Math.max(0, positionRef.current.y - dy),
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = 'auto';
  };

  // Attach mouse listeners globally while dragging
  if (typeof window !== 'undefined') {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  }

  return (
    <>
      {/* Floating Action Button */}
      <div
        className="fixed z-50 flex flex-col items-end space-y-2"
        style={{ bottom: `${position.y}px`, right: `${position.x}px` }}
      >
        {/* Popup Intro */}
        {showPopup && !isOpen && (
          <div
            onClick={handleInitialClick}
            className="relative mb-3 max-w-xs cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:shadow-2xl"
          >
            <p>
              👋 Hi, I’m <strong>Bwenzi</strong>, your Cybersecurity AI Partner.
              <br />Ask me anything!
            </p>
            <div className="absolute -bottom-2 right-6 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary" />
          </div>
        )}

        {/* FAB Button (draggable) */}
        <button
          onMouseDown={handleMouseDown}
          onClick={toggleChat}
          aria-label={isOpen ? 'Close Chat' : 'Open Chat'}
          className={`rounded-full bg-primary p-4 text-primary-foreground shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            dragging
              ? 'cursor-grabbing opacity-80'
              : 'cursor-grab hover:scale-110 hover:bg-primary/90'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Sparkles className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && <BwenziChatbot onClose={() => setIsOpen(false)} />}
    </>
  );
}
