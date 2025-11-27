'use client';

import { useState, useMemo } from 'react';
import { useFlyerState } from '@/lib/hooks/useFlyerState';
import Logo from '../common/Logo';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

export function FlyerPreview() {
  const { image, quote, theme, isGenerating } = useFlyerState();
  
  return (
    <div className="aspect-[1/1] w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative border border-slate-200">
      <div 
        id="flyer-canvas" 
        className={cn(
          "w-full h-full flex flex-col relative bg-gradient-to-br p-6 text-white",
          theme.gradient
        )}
      >
        {/* Header */}
        <header className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              <Logo className="h-5 w-5" />
            </div>
            <span className="font-bold text-base tracking-tight text-shadow">Octet Systems</span>
          </div>
          <Badge className="bg-white/80 border-0 text-slate-900 text-xs px-3 py-1 font-medium backdrop-blur-sm shadow-md">
            #16DaysOfActivism
          </Badge>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center text-center z-10 relative mt-4">

          {/* User Image in a Circle */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
            <div className="absolute inset-0 bg-black/10 rounded-full blur-lg opacity-50"></div>
            {image.preview ? (
              <Image 
                src={image.preview} 
                alt="Flyer photo" 
                fill
                className="object-cover rounded-full ring-4 ring-white/90 shadow-2xl"
                priority
              />
            ) : (
              <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center ring-4 ring-white/90 shadow-lg backdrop-blur-sm">
                <ImageIcon className="w-12 h-12 text-white/50" />
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-shadow-lg">
            <h2 className="font-bold text-3xl md:text-4xl leading-tight tracking-tight">
              End Gender-Based Violence
            </h2>
            
            <blockquote className="space-y-2 max-w-md mx-auto">
              <p className="italic text-base md:text-lg leading-relaxed font-normal opacity-95">
                &ldquo;{quote.text}&rdquo;
              </p>
              {quote.author && (
                <cite className="block not-italic font-semibold text-sm text-white/90 tracking-wide">
                  — {quote.author}
                </cite>
              )}
            </blockquote>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-xs font-medium tracking-wider z-10 mt-auto opacity-80 text-shadow-sm">
          <p>Stand Up. Speak Out. Create Change.</p>
          <p className="font-bold mt-1">octet.tech</p>
        </footer>
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }
        .text-shadow-lg {
          text-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
