'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
            <div className="text-center space-y-4 max-w-md">
                <AlertCircle className="h-16 w-16 text-destructive mx-auto" />
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <p className="text-muted-foreground">
                    We apologize for the inconvenience. An error occurred while processing your request.
                </p>
                {process.env.NODE_ENV === 'development' && (
                    <details className="text-left bg-muted p-4 rounded-lg text-sm">
                        <summary className="cursor-pointer font-medium">Error Details</summary>
                        <pre className="mt-2 overflow-auto">{error.message}</pre>
                    </details>
                )}
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => reset()}>
                        Try again
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/'}>
                        Go home
                    </Button>
                </div>
            </div>
        </div>
    );
}
