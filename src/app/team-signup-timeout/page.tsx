'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TimeoutPage() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">404 - Team Not Found</h1>
      <p className="text-xl mb-8">Just kidding! The page timed out. Our team is probably on a coffee break.</p>
      <p className="text-lg">Redirecting to the homepage in {countdown} seconds...</p>
    </div>
  );
}
