
'use client';

import { useFlyerState } from '@/lib/hooks/useFlyerState';
import { Logo } from '../common/Logo';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function FlyerPreview() {
  const { image, quote, theme } = useFlyerState();

  return (
    <div className="aspect-square w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
      <div id="flyer-canvas" className="w-full h-full flex flex-col">
        {/* Header */}
        <header className="bg-slate-900 text-white p-4 flex justify-between items-center h-[10%]">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="font-semibold text-sm">Octet Systems</span>
          </div>
          <Badge variant="outline" className="text-white border-white/50 text-xs">#16DaysOfActivism</Badge>
        </header>

        {/* Body */}
        <main className="flex-1 flex flex-col h-[80%]">
          <div className="w-full h-1/2 bg-slate-200 relative">
            {image.preview ? (
              <Image src={image.preview} alt="Flyer background" layout="fill" objectFit="cover" />
            ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <p className="text-slate-400 text-sm">Your photo here</p>
                </div>
            )}
          </div>
          <div className={cn("w-full h-1/2 p-6 flex flex-col justify-center text-white bg-gradient-to-br", theme.gradient)}>
            <h2 className="font-bold text-2xl leading-tight mb-2">End Gender-Based Violence</h2>
            <blockquote className="border-l-4 border-white/50 pl-4">
              <p className="italic text-base">&ldquo;{quote.text}&rdquo;</p>
              {quote.author && <cite className="block mt-1 not-italic font-medium text-xs">— {quote.author}</cite>}
            </blockquote>
            <p className="mt-4 font-semibold text-sm">Stand Up. Speak Out. Create Change.</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white p-2 flex justify-between items-center text-xs h-[10%]">
          <span>www.octet.tech</span>
          <span>#16Days #EndGBV</span>
        </footer>
      </div>
    </div>
  );
}
