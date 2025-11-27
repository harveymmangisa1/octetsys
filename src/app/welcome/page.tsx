'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/admin');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Welcome to Octet Systems!
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Your account has been verified. Redirecting you to the admin dashboard...
        </p>
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-slate-900" />
        </div>
      </div>
    </div>
  );
}
