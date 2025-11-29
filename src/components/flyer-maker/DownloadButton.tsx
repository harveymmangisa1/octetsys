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
            const element = document.getElementById('flyer-canvas');

            if (!element) {
                console.error('Flyer canvas not found');
                return;
            }

            const canvas = await html2canvas(element, {
                useCORS: true,
                scale: 2, // Higher quality
                backgroundColor: null, // Transparent background if needed
                logging: false,
            });

            const dataUrl = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`);

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `octet-16days-flyer.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
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
            {isDownloading ? 'Generating...' : `Download .${format}`}
        </Button>
    );
}
