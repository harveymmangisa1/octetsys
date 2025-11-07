
'use client';
import { useState } from 'react';
import { useFlyerState, useFlyerDispatch } from '@/lib/hooks/useFlyerState';
import { GBV_QUOTES } from '@/lib/constants/quotes';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

export function QuoteSelector() {
  const { quote } = useFlyerState();
  const dispatch = useFlyerDispatch();
  const [customText, setCustomText] = useState('');
  const [customAuthor, setCustomAuthor] = useState('');

  const handlePredefinedSelect = (index: string) => {
    const selected = GBV_QUOTES[parseInt(index)];
    dispatch({
      type: 'SET_QUOTE',
      payload: { ...selected, type: 'predefined', selectedIndex: parseInt(index) },
    });
  };

  const handleCustomChange = (text: string, author: string) => {
    setCustomText(text);
    setCustomAuthor(author);
    dispatch({
      type: 'SET_QUOTE',
      payload: { text, author, type: 'custom' },
    });
  }

  return (
    <Card className="shadow-md border-slate-200">
       <CardHeader>
            <CardTitle>Choose a Quote</CardTitle>
            <CardDescription>Select a pre-written quote or write your own message.</CardDescription>
        </CardHeader>
      <CardContent>
        <Tabs defaultValue="predefined" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="predefined">Pre-written</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          <TabsContent value="predefined" className="mt-4">
            <RadioGroup
              value={quote.selectedIndex?.toString() ?? '0'}
              onValueChange={handlePredefinedSelect}
              className="space-y-3"
            >
              {GBV_QUOTES.map((q, index) => (
                <Label
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl ring-1 ring-slate-200 has-[:checked]:bg-slate-100 has-[:checked]:ring-slate-400 transition-all hover:bg-slate-50"
                >
                  <RadioGroupItem value={index.toString()} id={`q-${index}`} />
                  <div className="grid gap-1.5">
                    <p className="font-medium text-slate-800">{q.text}</p>
                    <p className="text-sm text-slate-500">— {q.author}</p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </TabsContent>
          <TabsContent value="custom" className="mt-4">
            <div className="space-y-4">
                <Textarea
                    placeholder="Your custom message... (max 280 chars)"
                    maxLength={280}
                    value={customText}
                    onChange={(e) => handleCustomChange(e.target.value, customAuthor)}
                    rows={4}
                />
                <Input
                    placeholder="Author (optional)"
                    value={customAuthor}
                    onChange={(e) => handleCustomChange(customText, e.target.value)}
                />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
