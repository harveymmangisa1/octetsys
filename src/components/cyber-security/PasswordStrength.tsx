
'use client';
import React, { useState, useMemo } from 'react';
import { Lightbulb, Copy, CheckCheck, Check, X } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


// --- Core Logic Functions ---

const strengthLevels = {
  0: { label: 'Too Short', color: 'bg-gray-400' },
  1: { label: 'Weak', color: 'bg-red-500' },
  2: { label: 'Medium', color: 'bg-orange-500' },
  3: { label: 'Strong', color: 'bg-green-500' },
  4: { label: 'Very Strong', color: 'bg-emerald-600' },
};

// Simplified Leetspeak map for substitutions that look similar to the original letter
const suggestionMap = {
  'a': ['@', '4'],
  'e': ['3'],
  'i': ['1', '!'],
  'o': ['0'],
  's': ['5', '$'],
  't': ['7', '+'],
  // Add a few common suffixes if length is too short
};

/**
 * Analyzes the clear text password and creates a visually similar, stronger version
 * by applying Leetspeak substitutions and random casing.
 * @param {string} originalPass - The user's clear text password.
 * @returns {string} The suggested stronger password.
 */
const suggestPassword = (originalPass: string) => {
  if (!originalPass || originalPass.length < 4) return '';

  let suggested = '';
  let substitutedCount = 0;
  const chars = originalPass.split('');

  // 1. Iterate and apply substitution/casing
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    let lowerChar = char.toLowerCase();
    let replacement = char;

    if (suggestionMap[lowerChar as keyof typeof suggestionMap] && Math.random() > 0.4) { // 60% chance of substitution
      const replacements = suggestionMap[lowerChar as keyof typeof suggestionMap];
      replacement = replacements[Math.floor(Math.random() * replacements.length)];
      substitutedCount++;
    } else if (/[a-z]/.test(lowerChar) && Math.random() > 0.7) { // 30% chance of capitalization
      replacement = char.toUpperCase();
    }
    
    suggested += replacement;
  }
  
  // 2. Ensure it meets minimum strength requirements if it's still weak
  // Ensure we add a special character if none were substituted
  if (suggested.length < 8) {
    suggested = suggested.padEnd(8, Math.random() > 0.5 ? '!' : '9');
  }

  // 3. Force a special character at the end if no improvement was made and the original was weak
  const originalStrength = getStrength(originalPass);
  const suggestedStrength = getStrength(suggested);

  if (suggestedStrength <= originalStrength) {
      suggested = suggested + '#';
  }

  return suggested;
};

/**
 * Calculates the password strength score.
 * @param {string} pass - The password to check.
 * @returns {number} The strength score (0-4).
 */
const getStrength = (pass: string) => {
  let score = 0;
  if (pass.length >= 8) score++;
  if (pass.length >= 12) score++;
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;
  
  // Penalty for common patterns
  if (/password|123456|qwerty/i.test(pass)) score = Math.max(1, score - 2); // Cannot be too short

  return Math.min(score, 4);
};

// --- Main App Component ---

export function PasswordStrength() {
  const [password, setPassword] = useState('');
  const [suggestedPassword, setSuggestedPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const strength = password ? getStrength(password) : 0;
  const strengthInfo = strengthLevels[strength as keyof typeof strengthLevels];

  const checks = useMemo(() => ([
    { label: 'Length > 8 characters', valid: password.length >= 8 },
    { label: 'Mixed case (aA)', valid: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'Includes numbers (0-9)', valid: /[0-9]/.test(password) },
    { label: 'Includes special characters (!@#)', valid: /[^A-Za-z0-9]/.test(password) },
  ]), [password]);

  // Handle the suggestion click
  const handleSuggest = () => {
    setCopied(false);
    const suggestion = suggestPassword(password);
    setSuggestedPassword(suggestion);
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    // navigator.clipboard.writeText is preferred but often blocked in iframes.
    // Using execCommand for better compatibility in this environment.
    const tempInput = document.createElement('textarea');
    tempInput.value = suggestedPassword;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(tempInput);
  };

  return (
    <div className="bg-background flex items-start justify-center font-body">
      <Card className="w-full max-w-2xl border-border/70 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Security Enhancer</CardTitle>
          <CardDescription>
            Instantly check your current password strength and get smart, lookalike suggestions for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* 1. Password Input and Suggestion */}
          <div className="space-y-4">
            <label htmlFor="password-input" className="block text-sm font-medium text-muted-foreground">
              Enter Password to Analyze
            </label>
            <div className="flex space-x-2">
              <Input 
                id="password-input"
                type="text" 
                placeholder="e.g., mysecretpassword" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setSuggestedPassword(''); // Clear suggestion on input change
                  setCopied(false);
                }}
                className="flex-grow text-base"
              />
              <Button 
                onClick={handleSuggest}
                disabled={password.length < 4}
                className="whitespace-nowrap"
                title="Suggest a stronger version based on your input"
              >
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Suggest Stronger</span>
              </Button>
            </div>
          </div>
          
          {/* 2. Strength Meter */}
          {password && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm font-medium text-foreground">
                <span>Strength:</span>
                <span className={`font-bold ${strengthInfo.color.replace('bg-', 'text-')}`}>
                  {strengthInfo.label}
                </span>
              </div>
              <Progress value={strength * 25} className={`h-2 ${strengthInfo.color}`}/>
            </div>
          )}
          
          {/* 3. Requirement Checklist */}
          {password && (
            <div className="border-t pt-4">
              <h3 className="text-md font-semibold mb-3 text-foreground">Requirements Checklist:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {checks.map(check => (
                  <div key={check.label} className="flex items-center gap-2">
                    {check.valid ? (
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0"/>
                    ) : (
                      <X className="h-4 w-4 text-red-500 flex-shrink-0"/>
                    )}
                    <span className={check.valid ? 'text-muted-foreground' : 'text-foreground font-medium'}>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 4. Suggested Password Display */}
          {suggestedPassword && (
            <div className="border-t pt-4 space-y-3 bg-secondary/50 p-4 rounded-lg border-border">
              <h3 className="text-md font-semibold text-primary flex items-center gap-2">
                <Lightbulb className="h-5 w-5"/> Improved Suggestion
              </h3>
              <div className="flex items-center justify-between bg-background border border-input rounded-lg p-3">
                <span className="font-mono text-lg truncate text-foreground select-all" title="Suggested Password">
                  {suggestedPassword}
                </span>
                <Button 
                  onClick={handleCopy}
                  className="ml-3 px-3 py-1.5"
                  size="sm"
                >
                  {copied ? (
                    <CheckCheck className="h-4 w-4 mr-1"/>
                  ) : (
                    <Copy className="h-4 w-4 mr-1"/>
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                This password looks similar to your original, but uses numbers, symbols, and mixed case for higher security.
              </p>
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  );
}

    