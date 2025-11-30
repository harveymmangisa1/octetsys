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
      {/* Background Image Container - Using regular img tag for download compatibility */}
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

      {/* Content Container */}
      <div
        id="flyer-canvas"
        className="w-full h-full flex flex-col relative p-6 text-white z-10"
      >
        {/* Header */}
        <header className="flex justify-between items-start z-10 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
              <Logo className="h-5 w-5 text-slate-800" />
            </div>
            <span className="font-black text-base tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Octet Systems
            </span>
          </div>
          <Badge className="bg-white/95 backdrop-blur-sm border-0 text-slate-900 text-xs px-3 py-1.5 font-semibold shadow-md">
            #16DaysOfActivism
          </Badge>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center text-center z-10 relative px-4">
          {/* Show placeholder icon when no image uploaded */}
          {!image.preview && (
            <div className="relative mb-4 group">
              <div className="relative w-32 h-32">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-white/15 rounded-2xl blur-lg transition-all duration-300 opacity-50"></div>

                {/* Icon Container */}
                <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white/30" />
                </div>
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="space-y-3 max-w-lg mx-auto">
            <h2 className="font-black text-2xl leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              #UniteAgainstDigitalViolence
            </h2>

            <blockquote className="space-y-3">
              <div className="relative">
                <p className="italic text-base leading-relaxed font-semibold text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  "{quote.text}"
                </p>
              </div>
              {quote.author && (
                <cite className="block not-italic font-black text-sm text-white/90 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  — {quote.author}
                </cite>
              )}
            </blockquote>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center z-10 mt-2">
          <p className="text-xs font-bold tracking-wider text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1">
            Stand Up. Speak Out. Create Change.
          </p>
          <p className="font-black text-sm tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Octet Systems
          </p>
        </footer>
      </div>
    </div>
  );
}