
'use client';
import { useFlyerState, useFlyerDispatch } from '@/lib/hooks/useFlyerState';
import { GRADIENT_THEMES } from '@/lib/constants/gradients';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeSelector() {
  const { theme } = useFlyerState();
  const dispatch = useFlyerDispatch();

  return (
    <Card className="shadow-md border-slate-200">
        <CardHeader>
            <CardTitle>Select a Theme</CardTitle>
            <CardDescription>Choose a color gradient for your flyer.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GRADIENT_THEMES.map((t) => {
                const isSelected = theme.name === t.name;
                return (
                <div
                    key={t.name}
                    onClick={() => dispatch({ type: 'SET_THEME', payload: { name: t.name, gradient: t.gradient } })}
                    className="cursor-pointer group space-y-2"
                >
<div
                        className={cn(
                            "relative w-full h-24 rounded-xl ring-1 transition-all bg-gradient-to-br",
                            t.gradient,
                            isSelected ? 'ring-slate-900 shadow-lg scale-[1.01]' : 'ring-slate-200 hover:ring-slate-400'
                        )}
                    >
                    {isSelected && (
                        <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
                            <Check className="w-4 h-4 text-slate-900" />
                        </div>
                    )}
                    </div>
                    <p className="text-sm text-center font-medium text-slate-700 group-hover:text-slate-900">{t.name}</p>
                </div>
                );
            })}
            </div>
      </CardContent>
    </Card>
  );
}
