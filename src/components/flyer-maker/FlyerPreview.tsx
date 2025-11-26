'use client';

import { useState, useMemo } from 'react';
import { useFlyerState } from '@/lib/hooks/useFlyerState';
import Logo from '../common/Logo';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function FlyerPreview() {
  const { image, quote, theme, isGenerating } = useFlyerState();
  const [showSafeArea, setShowSafeArea] = useState(false);
  const [textPos, setTextPos] = useState<'bottom' | 'center' | 'top'>('bottom');

  // Simple contrast heuristic based on presence of image and gradient
  const contrastHint = useMemo(() => {
    if (!image.preview) return 'good';
    return 'ok';
  }, [image.preview]);

  return (
    <div className="aspect-[4/5] w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden relative">
      <div id="flyer-canvas" className="w-full h-full flex flex-col relative">
        {/* Minimal Corporate Header */}
        <header className="bg-white text-slate-900 px-6 py-4 flex justify-between items-center h-[10%] relative border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <Logo className="h-8 w-8 text-slate-900" />
            </div>
            <div>
              <span className="font-semibold text-base block leading-tight tracking-tight">Octet Systems</span>
              <span className="text-xs text-slate-500 font-medium">Social Impact</span>
            </div>
          </div>
          <Badge className="bg-slate-900 border-0 text-white text-xs px-3 py-1 font-medium">
            #16DaysOfActivism
          </Badge>
        </header>

        {/* Main Content Area - Image with gradient overlay */}
        <main className="flex-1 relative h-[80%]">
          {/* Safe area toggle - hidden during generation */}
          {!isGenerating && (
            <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
              <button onClick={() => setShowSafeArea(v => !v)} className="text-[10px] bg-white/80 text-slate-700 px-2 py-1 rounded border border-slate-200">
                {showSafeArea ? 'Hide' : 'Show'} Safe Area
              </button>
              {contrastHint !== 'good' && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-1 rounded border border-amber-200">Low contrast</span>
              )}
            </div>
          )}
          {/* Full-size Image Container */}
          <div className="w-full h-full relative">
            {image.preview ? (
              <>
                <Image 
                  src={image.preview} 
                  alt="Flyer background" 
                  fill
                  className="object-cover"
                  priority
                />
                {/* Transparent black gradient from bottom to halfway up */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" 
                     style={{ 
                       background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.35) 50%, transparent 50%)' 
                     }} 
                />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium">Your photo here</p>
                  <p className="text-slate-400 text-xs mt-1">1080x1350 recommended</p>
                </div>
              </div>
            )}
          </div>

          {/* Safe area overlay */}
          {showSafeArea && !isGenerating && (
            <div className="absolute inset-6 border-2 border-white/50 rounded-xl pointer-events-none" />
          )}

          {/* Text Content Overlay - position adjustable */}
          <div className={cn(
            'absolute left-0 right-0 p-6 text-white pointer-events-none',
            textPos === 'bottom' && 'bottom-0',
            textPos === 'center' && 'top-1/2 -translate-y-1/2',
            textPos === 'top' && 'top-0'
          )}>
            <div className="space-y-4 pointer-events-auto">
              {/* Controls - hidden during generation */}
              {!isGenerating && (
                <div className="flex gap-2 text-[10px]">
                  <button onClick={() => setTextPos('top')} className={cn('px-2 py-1 rounded border', textPos==='top' ? 'bg-white/90 text-slate-800' : 'bg-white/40 text-white border-white/60')}>Top</button>
                  <button onClick={() => setTextPos('center')} className={cn('px-2 py-1 rounded border', textPos==='center' ? 'bg-white/90 text-slate-800' : 'bg-white/40 text-white border-white/60')}>Center</button>
                  <button onClick={() => setTextPos('bottom')} className={cn('px-2 py-1 rounded border', textPos==='bottom' ? 'bg-white/90 text-slate-800' : 'bg-white/40 text-white border-white/60')}>Bottom</button>
                </div>
              )}

              {/* Main Call to Action */}
              <h2 className="font-bold text-2xl leading-tight tracking-tight">
                End Gender-Based Violence
              </h2>
              
              {/* Quote with minimal styling */}
              <blockquote className="space-y-2">
                <div className="border-l-2 border-white/80 pl-4">
                  <p className="italic text-base leading-relaxed font-normal">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                </div>
                {quote.author && (
                  <cite className="block not-italic font-medium text-sm text-white/90 pl-4">
                    — {quote.author}
                  </cite>
                )}
              </blockquote>

              {/* Call to Action */}
              <p className="font-semibold text-sm tracking-wide mt-3">
                Stand Up. Speak Out. Create Change.
              </p>
            </div>
          </div>
        </main>

        {/* Minimal Corporate Footer */}
        <footer className="bg-white text-slate-900 px-6 py-3 flex justify-between items-center h-[10%] text-xs border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">
              octet.tech
            </span>
          </div>
          
          <div className="flex gap-2">
            <span className="font-medium text-slate-600">#EndGBV</span>
            <span className="font-medium text-slate-600">#SocialImpact</span>
          </div>
        </footer>
      </div>
    </div>
  );
}