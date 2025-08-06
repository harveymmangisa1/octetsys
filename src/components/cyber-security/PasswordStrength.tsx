'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Check, X } from 'lucide-react';

const strengthLevels = {
  0: { label: 'Very Weak', color: 'bg-red-500' },
  1: { label: 'Weak', color: 'bg-orange-500' },
  2: { label: 'Medium', color: 'bg-yellow-500' },
  3: { label: 'Strong', color: 'bg-green-500' },
  4: { label: 'Very Strong', color: 'bg-emerald-500' },
};

export function PasswordStrength() {
  const [password, setPassword] = useState('');

  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 8) score++;
    if (pass.length > 12) score++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    
    // Simple penalty for common patterns
    if (/password|123456|qwerty/i.test(pass)) score = Math.max(0, score - 2);

    return Math.min(score, 4);
  };
  
  const strength = password ? getStrength(password) : 0;
  const strengthInfo = strengthLevels[strength as keyof typeof strengthLevels];

  const checks = [
    { label: 'At least 8 characters long', valid: password.length >= 8 },
    { label: 'Contains uppercase & lowercase letters', valid: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'Contains numbers', valid: /[0-9]/.test(password) },
    { label: 'Contains special characters', valid: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Password Strength Checker</CardTitle>
        <CardDescription>Enter a password to see how strong it is. We don't store your password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          type="text" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-lg"
        />
        {password && (
            <>
                <div className="flex items-center gap-4">
                    <Progress value={strength * 25} className={`h-2 ${strengthInfo.color} transition-all duration-300`} />
                    <span className="font-semibold text-sm w-28 text-right">{strengthInfo.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm">
                    {checks.map(check => (
                        <div key={check.label} className="flex items-center gap-2">
                            {check.valid ? (
                                <Check className="h-4 w-4 text-green-500"/>
                            ) : (
                                <X className="h-4 w-4 text-red-500"/>
                            )}
                            <span className={check.valid ? 'text-muted-foreground' : 'text-foreground'}>{check.label}</span>
                        </div>
                    ))}
                </div>
            </>
        )}
      </CardContent>
    </Card>
  );
}
