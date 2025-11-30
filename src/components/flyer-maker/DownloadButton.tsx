'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import html2canvas from 'html2canvas';

type DownloadButtonProps = {
    format: 'png' | 'jpg';
    variant: 'primary' | 'secondary';
};

export function DownloadButton({ format, variant }: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);

            // Capture the entire flyer container using the specific ID
            const element = document.getElementById('flyer-preview-container');

            if (!element) {
                console.error('Flyer container not found');
                return;
            }

            // Wait for any images to load
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(element, {
                useCORS: true,
                allowTaint: false,
                scale: 2, // Reduced from 3 to prevent mobile crashes while maintaining good quality
                backgroundColor: '#ffffff', // Ensure white background
                logging: false,
                width: element.offsetWidth,
                height: element.offsetHeight,
            });

            // Create a higher quality image
            const dataUrl = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, 1.0);

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `octet-16days-flyer.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <Button
            onClick={handleDownload}
            variant={variant === 'primary' ? 'default' : 'outline'}
            className="w-full sm:w-auto"
            disabled={isDownloading}
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