
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Send, X } from 'lucide-react';
import { chatWithBwenzi } from '@/app/actions';

interface BwenziChatbotProps {
  onClose: () => void;
}

export function BwenziChatbot({ onClose }: BwenziChatbotProps) {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bwenzi' }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmedMessage = inputMessage.trim();
    if (trimmedMessage) {
      const newUserMessage = { text: trimmedMessage, sender: 'user' } as const;
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputMessage('');
      setIsThinking(true);

      try {
        const response = await chatWithBwenzi(trimmedMessage);
        if (response.error) {
          const errorMessage: { text: string; sender: 'bwenzi' } = {
            text: `Error: ${response.error}`,
            sender: 'bwenzi'
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } else if (response.response) {
          const responseMessage: { text: string; sender: 'bwenzi' } = {
            text: response.response,
            sender: 'bwenzi'
          };
          setMessages((prevMessages) => [...prevMessages, responseMessage]);
        } else {
          const fallbackMessage: { text: string; sender: 'bwenzi' } = {
            text: 'I apologize, but I could not process your request. Please try again.',
            sender: 'bwenzi'
          };
          setMessages((prevMessages) => [...prevMessages, fallbackMessage]);
        }
      } catch (error) {
        console.error(error);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'My apologies, I seem to be having trouble connecting. Please try again in a moment.', sender: 'bwenzi' as const },
          ]);
      } finally {
        setIsThinking(false);
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-full max-w-sm">
      <Card className="flex flex-col h-[500px] shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-headline text-lg">Bwenzi - Your Cyber Pal</CardTitle>        
           <Button variant="ghost" size="icon" onClick={onClose}>
             <X className="h-4 w-4" />
           </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-start">
              <div className="rounded-lg p-3 max-w-[80%] bg-muted text-muted-foreground">
                <p>Hello! I'm Bwenzi, your AI cyber security assistant. How can I help you today? You can ask me a question, or check a link for safety.</p>
              </div>
          </div>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}
          {isThinking && (
              <div className="flex justify-start">
                  <div className="rounded-lg p-3 max-w-[80%] bg-muted text-muted-foreground">
                      <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      </div>
                  </div>
              </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <form onSubmit={sendMessage} className="flex w-full space-x-2">
            <Input
              placeholder="Ask Bwenzi..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isThinking}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isThinking || !inputMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
