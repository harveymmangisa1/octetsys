
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Copy, RefreshCw, Shield, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const strengthLevels = {
  0: { label: 'Very Weak', color: 'bg-red-500', description: 'High risk' },
  1: { label: 'Weak', color: 'bg-orange-500', description: 'Moderate risk' },
  2: { label: 'Fair', color: 'bg-yellow-500', description: 'Acceptable' },
  3: { label: 'Strong', color: 'bg-green-500', description: 'Good' },
  4: { label: 'Very Strong', color: 'bg-emerald-500', description: 'Excellent' },
};

// Enhanced character substitution mapping
const substitutions = {
  'a': ['@', '4', '^'],
  'b': ['8', '6'],
  'c': ['(', '<', '{'],
  'e': ['3', '&'],
  'g': ['9', '6'],
  'i': ['1', '!', '|'],
  'l': ['1', '|', '7'],
  'o': ['0', '()'],
  's': ['5', '$'],
  't': ['7', '+'],
  'z': ['2', '%'],
};

export function PasswordStrength() {
  const [password, setPassword] = useState('');
  const [suggestedPassword, setSuggestedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const getStrength = (pass: string) => {
    if (!pass) return 0;
    
    let score = 0;
    
    // Length checks
    if (pass.length >= 8) score++;
    if (pass.length >= 12) score++;
    if (pass.length >= 16) score++;
    
    // Character variety checks
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    
    // Pattern and common password penalties
    const commonPatterns = [
      'password', '123456', 'qwerty', 'admin', 'welcome', 
      'letmein', 'monkey', 'sunshine', 'password1', 'abc123'
    ];
    
    const lowerPass = pass.toLowerCase();
    if (commonPatterns.some(pattern => lowerPass.includes(pattern))) {
      score = Math.max(0, score - 2);
    }
    
    // Sequential character penalty
    if (/(abc|def|ghi|jkl|mno|pqr|stu|vwx|yz|012|123|234|345|456|567|678|789)/i.test(pass)) {
      score = Math.max(0, score - 1);
    }
    
    // Repeated character penalty
    if (/(.)\1{2,}/.test(pass)) {
      score = Math.max(0, score - 1);
    }

    return Math.min(score, 4);
  };

  const analyzeAndSuggest = (currentPass: string) => {
    if (!currentPass) return '';
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      let suggestion = currentPass;
      let transformations = 0;
      
      // Apply strategic substitutions
      suggestion = suggestion.split('').map((char, index) => {
        const lowerChar = char.toLowerCase();
        if (substitutions[lowerChar as keyof typeof substitutions] && Math.random() > 0.6) {
          const options = substitutions[lowerChar as keyof typeof substitutions];
          transformations++;
          return options[Math.floor(Math.random() * options.length)];
        }
        return char;
      }).join('');
      
      // Ensure at least one uppercase letter
      if (!/[A-Z]/.test(suggestion)) {
        const index = Math.floor(Math.random() * suggestion.length);
        suggestion = suggestion.slice(0, index) + suggestion[index].toUpperCase() + suggestion.slice(index + 1);
        transformations++;
      }
      
      // Ensure at least one number if missing
      if (!/[0-9]/.test(suggestion)) {
        const numbers = '23456789';
        const insertAt = Math.floor(suggestion.length / 2);
        suggestion = suggestion.slice(0, insertAt) + numbers[Math.floor(Math.random() * numbers.length)] + suggestion.slice(insertAt);
        transformations++;
      }
      
      // Ensure at least one special character if missing
      if (!/[^A-Za-z0-9]/.test(suggestion)) {
        const specials = '!@#$%^&*';
        suggestion += specials[Math.floor(Math.random() * specials.length)];
        transformations++;
      }
      
      // If no transformations were applied, force some changes
      if (transformations === 0 && suggestion.length > 0) {
        const index = Math.floor(Math.random() * suggestion.length);
        const char = suggestion[index].toLowerCase();
        if (substitutions[char as keyof typeof substitutions]) {
          const options = substitutions[char as keyof typeof substitutions];
          suggestion = suggestion.slice(0, index) + options[0] + suggestion.slice(index + 1);
        }
      }
      
      setSuggestedPassword(suggestion);
      setIsAnalyzing(false);
    }, 800);
  };

  const strength = useMemo(() => getStrength(password), [password]);
  const strengthInfo = strengthLevels[strength as keyof typeof strengthLevels];

  const checks = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: '12+ characters (recommended)', valid: password.length >= 12 },
    { label: 'Uppercase & lowercase letters', valid: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'Includes numbers', valid: /[0-9]/.test(password) },
    { label: 'Special characters', valid: /[^A-Za-z0-9]/.test(password) },
    { label: 'No common patterns', valid: !/(password|123456|qwerty|admin)/i.test(password) },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Password copied to clipboard.",
    });
  };

  const useSuggestion = () => {
    setPassword(suggestedPassword);
    toast({
      title: "Suggestion Applied",
      description: "The enhanced password has been set.",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto border-slate-200 bg-white/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <CardTitle className="font-headline text-xl text-slate-800">Password Strength</CardTitle>
            <CardDescription className="text-slate-600">
              Real-time security analysis
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Password Input */}
        <div className="space-y-3">
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Enter password to analyze"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-20 text-slate-700 border-slate-300 focus:border-blue-300"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="h-8 w-8 p-0 hover:bg-slate-100"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {password && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => analyzeAndSuggest(password)}
              disabled={isAnalyzing || strength >= 4}
              className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Suggest Improvement
                </>
              )}
            </Button>
          )}
        </div>

        {/* Strength Indicator */}
        {password && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Security Level</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${strengthInfo.color.replace('bg-', 'bg-')} text-white`}>
                    {strengthInfo.label}
                  </span>
                </div>
              </div>
              <Progress 
                value={strength * 25} 
                className={`h-2 transition-all duration-500 ${strengthInfo.color}`} 
              />
              <p className="text-xs text-slate-500 text-center">{strengthInfo.description}</p>
            </div>

            {/* Password Suggestions */}
            {suggestedPassword && strength < 4 && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 space-y-3 animate-in fade-in-50">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">Enhanced Version</span>
                </div>
                
                <div className="flex gap-2">
                  <div className="flex-1 font-mono text-sm bg-white px-3 py-2 rounded border border-blue-300 text-slate-700">
                    {suggestedPassword}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(suggestedPassword)}
                    className="h-10 px-3 border-blue-300 hover:bg-blue-100"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button
                  onClick={useSuggestion}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  Use This Password
                </Button>
                
                <p className="text-xs text-blue-700">
                  Similar to your original but with security enhancements
                </p>
              </div>
            )}

            {/* Security Requirements */}
            <div className="grid gap-2 text-sm">
              {checks.map((check, index) => (
                <div key={check.label} className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-slate-50">
                  <div className={`p-1 rounded-full ${check.valid ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                    {check.valid ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <X className="h-3 w-3" />
                    )}
                  </div>
                  <span className={check.valid ? 'text-slate-600' : 'text-slate-900 font-medium'}>
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!password && (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Enter a password to begin analysis</p>
              <p className="text-xs text-slate-500 mt-1">
                We'll provide real-time feedback and improvement suggestions
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
