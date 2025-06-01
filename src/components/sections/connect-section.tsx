"use client";
import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MailIcon, SendIcon, Loader2Icon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedDiv from '../ui/animated-div';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ConnectSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // Simulate API call / email sending
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // In a real app, you would send the formData to your backend here
      console.log("Form data submitted:", formData);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default", 
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormInvalid = !formData.name || !formData.email || !formData.subject || !formData.message;

  return (
    <section id="connect" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedDiv
          animationClasses={{
            visible: 'opacity-100 scale-100',
            hidden: 'opacity-0 scale-90'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
            Let&apos;s Connect
          </h2>
          <Card className="max-w-2xl mx-auto shadow-xl glassmorphic glassmorphic-dark">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-primary">
                <MailIcon className="h-6 w-6" /> Send Me a Message
              </CardTitle>
              <CardDescription>
                Have a project in mind, a question, or just want to say hi? Fill out the form below.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="What's this about?" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading || isFormInvalid} className="w-full sm:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ConnectSection;
