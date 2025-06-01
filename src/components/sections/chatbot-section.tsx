"use client";
import { useState, useRef, useEffect, type FormEvent } from 'react';
import { chatbotAssistant, type ChatbotAssistantInput, type ChatbotAssistantOutput } from '@/ai/flows/chatbot-assistant';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BotIcon, UserIcon, SendIcon, Loader2Icon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedDiv from '../ui/animated-div';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);
  
  // Add initial greeting from bot
  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        text: "Hello! I'm Vipul's AI assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
  }, []);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const input: ChatbotAssistantInput = { question: userMessage.text };
      const output: ChatbotAssistantOutput = await chatbotAssistant(input);
      
      const botMessage: Message = {
        id: crypto.randomUUID(),
        text: output.answer,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        text: "Sorry, I encountered an error. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        title: "Chatbot Error",
        description: "Could not get a response from the assistant.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedDiv
           animationClasses={{
            visible: 'opacity-100 scale-100',
            hidden: 'opacity-0 scale-90'
          }}
        >
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
          Ask Me Anything!
        </h2>
        <Card className="max-w-2xl mx-auto shadow-xl glassmorphic glassmorphic-dark">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-primary">
              <BotIcon className="h-6 w-6" /> AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full pr-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><BotIcon size={18}/></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-muted text-muted-foreground rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                     {msg.sender === 'user' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent text-accent-foreground"><UserIcon size={18}/></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end gap-2 justify-start">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback className="bg-primary text-primary-foreground"><BotIcon size={18}/></AvatarFallback>
                    </Avatar>
                    <div className="max-w-[70%] rounded-lg px-4 py-2 text-sm bg-muted text-muted-foreground rounded-bl-none">
                      <Loader2Icon className="h-5 w-5 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()} size="icon">
                {isLoading ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <SendIcon className="h-4 w-4" />}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ChatbotSection;
