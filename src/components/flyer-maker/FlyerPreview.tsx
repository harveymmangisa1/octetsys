'use client';

import { useFlyerState } from '@/lib/hooks/useFlyerState';
import Logo from '../common/Logo';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Helper function to get theme colors
function getThemeColor(gradient: string, type: 'from' | 'to'): string {
  const themeColors: { [key: string]: { from: string; to: string } } = {
    'from-orange-600 to-orange-400': { from: '#ea580c', to: '#fb923c' },
    'from-purple-600 to-purple-400': { from: '#9333ea', to: '#c084fc' },
    'from-blue-600 to-blue-400': { from: '#2563eb', to: '#60a5fa' },
    'from-red-600 to-red-400': { from: '#dc2626', to: '#f87171' },
    'from-teal-600 to-teal-400': { from: '#0d9488', to: '#2dd4bf' },
    'from-pink-600 to-pink-400': { from: '#db2777', to: '#f9a8d4' }
  };

  return themeColors[gradient]?.[type] || (type === 'from' ? '#ea580c' : '#fb923c');
}

export function FlyerPreview() {
  const { image, quote, theme, isGenerating } = useFlyerState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const bgImageRef = useRef<HTMLDivElement>(null);

  // Preload image for download
  useEffect(() => {
    if (image.preview) {
      const img = new Image();
      img.src = image.preview;
      img.crossOrigin = 'anonymous';
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
    }
  }, [image.preview]);

  return (
    <div id="flyer-preview-container" className="aspect-square w-full max-w-[1080px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden relative border-0">
      {/* Background Image Container */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 z-0"
      >
        {image.preview ? (
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${image.preview})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ) : (
          <div className={cn(
            "w-full h-full bg-gradient-to-br",
            theme.gradient
          )} />
        )}
      </div>

      {/* Dynamic Theme Gradient Overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: `linear-gradient(to top, 
            ${getThemeColor(theme.gradient, 'from')}88 0%, 
            ${getThemeColor(theme.gradient, 'to')}44 100%)`
        }}
      />

      {/* Content Container - Responsive padding */}
      <div
        id="flyer-canvas"
        className="w-full h-full flex flex-col relative p-4 sm:p-6 md:p-8 text-white z-10"
      >
        {/* Header - Responsive sizing */}
        <header className="flex justify-between items-start z-10 mb-2 sm:mb-3 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink min-w-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg shadow-md flex-shrink-0">
              <Logo className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />
            </div>
            <span className="font-black text-xs sm:text-sm md:text-base tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] truncate">
              Octet Systems
            </span>
          </div>
          <Badge className="bg-white/95 backdrop-blur-sm border-0 text-slate-900 text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 font-semibold shadow-md flex-shrink-0 whitespace-nowrap">
            #16DaysOfActivism
          </Badge>
        </header>

        {/* Main Content Area - Responsive spacing and sizing */}
        <main className="flex-1 flex flex-col justify-center items-center text-center z-10 relative px-2 sm:px-4">
          {/* Show placeholder icon when no image uploaded */}
          {!image.preview && (
            <div className="relative mb-3 sm:mb-4 group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-white/15 rounded-2xl blur-lg transition-all duration-300 opacity-50"></div>

                {/* Icon Container */}
                <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
                </div>
              </div>
            </div>
          )}

          {/* Text Content - Responsive sizing and spacing */}
          <div className="space-y-2 sm:space-y-3 max-w-full sm:max-w-md md:max-w-lg mx-auto px-2">
            <h2 className="font-black text-base sm:text-xl md:text-2xl leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] break-words">
              #UniteAgainstDigitalViolence
            </h2>

            <blockquote className="space-y-2 sm:space-y-3">
              <div className="relative">
                <p className="italic text-sm sm:text-base leading-relaxed font-semibold text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] break-words">
                  "{quote.text}"
                </p>
              </div>
              {quote.author && (
                <cite className="block not-italic font-black text-xs sm:text-sm text-white/90 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] break-words">
                  — {quote.author}
                </cite>
              )}
            </blockquote>
          </div>
        </main>

        {/* Footer - Responsive sizing */}
        <footer className="text-center z-10 mt-2">
          <p className="text-[10px] sm:text-xs font-bold tracking-wider text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-0.5 sm:mb-1 break-words px-2">
            Stand Up. Speak Out. Create Change.
          </p>
          <p className="font-black text-xs sm:text-sm tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Octet Systems. Web Dev | Cyber Sec | Networks | +265 999 77 11 55
          </p>
        </footer>
      </div>
    </div>
  );
}