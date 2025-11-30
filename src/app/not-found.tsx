'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-primary/20">404</h1>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
