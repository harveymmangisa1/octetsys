'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Send, X } from 'lucide-react';

interface BwenziChatbotProps {
  onClose: () => void;
}

export function BwenziChatbot({ onClose }: BwenziChatbotProps) {
  const [messages, setMessages] = useState([
    { from: 'bwenzi', text: "Hi! I'm Bwenzi, your Cyber Security AI Partner. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { from: 'user', text: inputValue }]);
      // Simple hardcoded response for demonstration
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { from: 'bwenzi', text: "Thanks for your message! I am still under development, but I will be able to help you soon."}]);
      }, 1000);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
       <Card className="w-80 h-96 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bwenzi</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg ${message.from === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.text}
                </div>
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." />
            <Button onClick={handleSendMessage}><Send className="h-4 w-4" /></Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}