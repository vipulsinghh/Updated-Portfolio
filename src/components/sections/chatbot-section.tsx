
"use client";
import { useState, type FormEvent, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BotIcon, Loader2Icon, SendHorizonalIcon, UserIcon } from 'lucide-react';
import { chatbotAssistant, type ChatbotAssistantInput, type ChatbotAssistantOutput } from '@/ai/flows/chatbot-assistant';
import AnimatedDiv from '@/components/ui/animated-div';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const ChatbotSection = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const input: ChatbotAssistantInput = { question: newUserMessage.text };
      const response: ChatbotAssistantOutput = await chatbotAssistant(input);
      
      const newAiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.answer,
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, newAiMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: ChatMessage = {
        id: `ai-error-${Date.now()}`,
        sender: 'ai',
        text: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatHistory.length === 0) {
      setChatHistory([
        {
          id: `ai-greeting-${Date.now()}`,
          sender: 'ai',
          text: "Hello! I'm Vipul's AI assistant. Feel free to ask me any questions about Vipul's skills, experience, or services.",
          timestamp: new Date(),
        }
      ]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="ai-assistant" className="py-16 md:py-24 bg-card"> 
      <div className="container mx-auto px-4">
        <AnimatedDiv
          animationClasses={{
            visible: 'opacity-100 scale-100',
            hidden: 'opacity-0 scale-90'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-foreground">
            AI Assistant
          </h2>
          <Card className="max-w-2xl mx-auto shadow-xl bg-background border-border rounded-xl gradient-border-hover-effect"> 
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-foreground">
                <BotIcon className="h-6 w-6 text-accent" /> Ask Me Anything
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Have questions about Vipul? Get instant answers from this AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72 w-full pr-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {chatHistory.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-end gap-2",
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.sender === 'ai' && (
                        <BotIcon className="h-6 w-6 text-accent flex-shrink-0 mb-1" />
                      )}
                      <div
                        className={cn(
                          "max-w-[75%] rounded-lg p-3 text-sm shadow",
                          message.sender === 'user'
                            ? 'bg-accent text-primary-foreground' // User messages with accent bg and dark text
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                        <p className={cn(
                            "text-xs mt-1",
                            message.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground/70 text-left'
                          )}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                       {message.sender === 'user' && (
                        <UserIcon className="h-6 w-6 text-foreground flex-shrink-0 mb-1" />
                      )}
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-center gap-2 justify-start">
                        <BotIcon className="h-6 w-6 text-accent flex-shrink-0 mb-1 animate-pulse" />
                        <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm shadow">
                           <Loader2Icon className="h-4 w-4 animate-spin" />
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
                  placeholder="Type your question here..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-input text-foreground placeholder:text-muted-foreground focus:ring-accent"
                />
                <Button type="submit" disabled={isLoading || !userInput.trim()} size="icon" className="bg-accent text-background hover:bg-accent/90">
                  {isLoading ? (
                    <Loader2Icon className="h-5 w-5 animate-spin" />
                  ) : (
                    <SendHorizonalIcon className="h-5 w-5" />
                  )}
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
