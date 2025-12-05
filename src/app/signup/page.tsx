'use client';

import { createClient } from '@/lib/supabase/client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClient();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      toast({
        title: 'Error signing up',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Check your email!',
        description: 'A confirmation link has been sent to your email address.',
      });
      router.push('/login');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black text-white p-6 overflow-hidden"
      style={{ animation: 'shake 0.15s infinite' }}
    >
      {/* CHAOS ANIMATIONS */}
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

      {/* SPINNING HEADER GIF */}
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        className="w-40 h-40 rounded-full absolute top-6 animate-spin"
        alt="Chaotic spinner"
      />

      <Card className="w-full max-w-sm bg-gray-900 text-white border border-red-500 shadow-2xl shadow-red-600">
        <CardHeader>
          <CardTitle
            className="text-3xl font-extrabold text-center text-red-400"
            style={{ animation: 'glitch 0.3s infinite' }}
          >
            Create an Account (If You Dare)
          </CardTitle>

          <CardDescription className="text-center text-gray-300">
            Only serious members of the secret admin cult allowed.
          </CardDescription>

          <div className="flex justify-center mt-4">
            <img
              src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
              className="w-28 h-28 rounded-lg animate-float"
              style={{ animation: 'float 3s infinite' }}
              alt="Confused monkey"
            />
          </div>
        </CardHeader>

        <CardContent>
          <div className="text-center text-sm text-yellow-300 mb-3">
            🤨 <strong>You sure you belong here?</strong>
          </div>

          {/*
          <form onSubmit={handleSignUp} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-red-400 focus-visible:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="border-red-400 focus-visible:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-800 transition-all text-lg font-bold"
            >
              Sign Up 😈
            </Button>
          </form>
          */}

          <div className="flex justify-center mt-6">
            <img
              src="https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif"
              className="w-40 h-40 rounded-xl"
              alt="Panic"
            />
          </div>
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-300">
          <p>
            Already have an account?{' '}
            <Link href="/login" className="underline text-red-400">
              Sign In
            </Link>
          </p>

          <div className="mt-4">
            <img
              src="https://media.giphy.com/media/l41m3V4T2Yq1R8hsU/giphy.gif"
              alt="Eye watching"
              className="w-24 h-24 mx-auto animate-spin"
            />
          </div>
        </CardFooter>
      </Card>

      {/* SIGNUP POLICE GIF */}
      <img
        src="https://media.giphy.com/media/5xtDarziKJj0J7jGJq/giphy.gif"
        className="w-48 h-48 absolute bottom-4 right-4 animate-bounce"
        alt="Running chaos"
      />
    </div>
  );
}
