'use client';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type DownloadButtonProps = {
    format: 'png' | 'jpg';
    variant: 'primary' | 'secondary';
};

export function DownloadButton({ format, variant }: DownloadButtonProps) {
    const handleDownload = () => {
        // Add download logic here
    };

    return (
        <Button
            onClick={handleDownload}
            variant={variant === 'primary' ? 'default' : 'outline'}
            className="w-full sm:w-auto"
        >
            <Download className="mr-2 h-4 w-4" />
            Download .{format}
        </Button>
    );
}
