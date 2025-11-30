'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import html2canvas from 'html2canvas';

type DownloadButtonProps = {
    format: 'png' | 'jpg';
    variant: 'primary' | 'secondary';
};

export function DownloadButton({ format, variant }: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);

            const element = document.getElementById('flyer-preview-container');
            if (!element) {
                console.error('Flyer container not found');
                return;
            }

            // Optimize scale for mobile vs desktop
            const scale = isMobile ? 2 : 3; // Higher quality for desktop
            const width = element.offsetWidth;
            const height = element.offsetHeight;

            // Add loading state to UI
            element.style.opacity = '0.9';

            const canvas = await html2canvas(element, {
                useCORS: true,
                allowTaint: false,
                scale: scale,
                backgroundColor: '#ffffff',
                logging: false,
                width: width,
                height: height,
                onclone: (clonedDoc) => {
                    // Ensure fonts and styles are properly loaded in the clone
                    const clonedElement = clonedDoc.getElementById('flyer-preview-container');
                    if (clonedElement) {
                        clonedElement.style.transform = 'translateZ(0)'; // Force hardware acceleration
                    }
                }
            });

            // Reset opacity
            element.style.opacity = '1';

            const dataUrl = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, 1.0);

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `octet-16days-flyer.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Download failed:', error);
            // Mobile-friendly error message
            if (isMobile) {
                alert('Download failed. Please try again in landscape mode or use a desktop for better results.');
            } else {
                alert('Download failed. Please try again.');
            }
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <Button
            onClick={handleDownload}
            variant={variant === 'primary' ? 'default' : 'outline'}
            className="w-full sm:w-auto touch-manipulation" // Add touch optimization
            disabled={isDownloading}
            size={isMobile ? "sm" : "default"}
        >
            {isDownloading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Download className="mr-2 h-4 w-4" />
            )}
            {isDownloading ? 'Generating...' : `Download .${format.toUpperCase()}`}
        </Button>
    );
}