
'use client';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { useFlyerDispatch } from '@/lib/hooks/useFlyerState';
import { Button } from '../ui/button';
import { Download, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DownloadButton() {
  const dispatch = useFlyerDispatch();
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadFlyer = async (format: 'png' | 'jpeg', quality: number, filename: string) => {
    const flyerElement = document.getElementById('flyer-canvas');
    if (!flyerElement) return;

    setIsGenerating(true);
    dispatch({ type: 'SET_GENERATING', payload: true });

    try {
        const canvas = await html2canvas(flyerElement, {
            scale: 2, // Higher scale for better resolution
            useCORS: true,
            allowTaint: true,
        });
        const dataUrl = canvas.toDataURL(`image/${format}`, quality);
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    } catch (error) {
        console.error("Error generating flyer:", error);
    } finally {
        setIsGenerating(false);
        dispatch({ type: 'SET_GENERATING', payload: false });
    }
  };

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button disabled={isGenerating} className="w-full" size="lg">
                {isGenerating ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Download className="mr-2 h-4 w-4" />
                )}
                {isGenerating ? 'Generating...' : 'Download Flyer'}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => downloadFlyer('png', 1.0, 'flyer-1920x1080.png')}>
                PNG (High Quality)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadFlyer('jpeg', 0.9, 'flyer-1200x630.jpeg')}>
                JPEG (Social Media)
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}
