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
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden"
      style={{ animation: 'shake 0.15s infinite' }}
    >
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          @keyframes glitch {
            0% { text-shadow: 2px 0 red; }
            33% { text-shadow: -2px 0 blue; }
            66% { text-shadow: 2px 0 green; }
            100% { text-shadow: -2px 0 red; }
          }
        `}
      </style>

      {/* TITLE */}
      <h1 className="text-7xl font-extrabold text-red-500 animate-pulse glitch">
        🚨 TEAM NOT FOUND 🚨
      </h1>

      {/* GIANT SPINNING GIF */}
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="Chaos spin"
        className="w-72 h-72 object-cover rounded-full mb-6"
        style={{ animation: 'spin 1s linear infinite' }}
      />

      {/* GLITCHING COUNTDOWN */}
      <p
        className="text-5xl font-bold text-yellow-400 mb-6"
        style={{ animation: 'glitch 0.2s infinite' }}
      >
        Redirecting in <span className="text-red-500">{countdown}</span> seconds…
      </p>

      {/* FLOATING GIFS */}
      <div className="flex gap-6 mb-6">
        <img
          src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
          className="w-40 h-40 rounded-xl"
          style={{ animation: 'float 3s infinite' }}
        />
        <img
          src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
          className="w-40 h-40 rounded-xl"
          style={{ animation: 'float 2.2s infinite reverse' }}
        />
      </div>

      {/* TEAM DETECTION AI */}
      <p className="text-3xl font-bold text-pink-400 animate-pulse">
        🧠 Scanning your account…
      </p>

      <p className="text-2xl font-bold text-green-300 mt-2">
        ⚠️ Error: Account not detected. Not even a hint.
      </p>

      <img
        src="https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif"
        alt="Panic"
        className="w-56 h-56 rounded-xl my-6"
      />

      <marquee className="text-4xl text-purple-500 font-extrabold my-4">
        🔥 YOU WERE NEVER IN THE SYSTEM 🔥 RUN. RUN NOW. 🏃💨
      </marquee>

      {/* EYEBALL FOLLOWING CURSOR */}
      <div className="mt-6">
        <img
          src="https://media.giphy.com/media/l41m3V4T2Yq1R8hsU/giphy.gif"
          alt="Eye"
          className="w-40 h-40 rounded-full shadow-xl animate-spin"
        />
      </div>

      {/* FINAL CHAOS GIF */}
      <img
        src="https://media.giphy.com/media/5xtDarziK8Jj0J7jGJq/giphy.gif"
        alt="Running panic"
        className="w-52 h-52 mt-8 rounded-xl animate-ping"
      />
    </div>
  );
}
