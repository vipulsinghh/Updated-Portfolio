
"use client";
import { useEffect, useRef, useActionState } from 'react'; // Updated import
// Removed 'useFormState' from 'react-dom' as it's now imported from 'react' as 'useActionState'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MailIcon, SendIcon, Loader2Icon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedDiv from '../ui/animated-div';
import { sendEmailAction, type SendEmailFormState } from '@/app/actions/send-email';
import { cn } from '@/lib/utils';


const initialState: SendEmailFormState = {
  success: false,
  message: '',
  errors: {},
};

function SubmitButton() {
  // useFormStatus needs to be imported from 'react-dom'
  // For React 19+, if you're using it with useActionState from 'react',
  // you still import useFormStatus from 'react-dom'
  const { pending } = require('react-dom').useFormStatus(); 
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
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
  );
}

const ConnectSection = () => {
  const [formState, formAction] = useActionState(sendEmailAction, initialState); // Updated hook
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message) {
      if (formState.success) {
        toast({
          title: "Message Sent!",
          description: formState.message,
          variant: "default",
        });
        formRef.current?.reset(); // Reset form on success
      } else {
        let description = formState.message;
        if (formState.errors?.server) {
            description = formState.errors.server.join(' ');
        } else if (formState.errors) {
            const fieldErrors = Object.values(formState.errors).flat().join(' ');
            if (fieldErrors) description = fieldErrors;
        }
        toast({
          title: "Error Sending Message",
          description: description || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    }
  }, [formState, toast]);


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
            <form action={formAction} ref={formRef}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your Name" 
                      required 
                    />
                    {formState.errors?.name && (
                      <p className="text-xs text-destructive">{formState.errors.name.join(', ')}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                     {formState.errors?.email && (
                      <p className="text-xs text-destructive">{formState.errors.email.join(', ')}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="What's this about?" 
                    required 
                  />
                  {formState.errors?.subject && (
                    <p className="text-xs text-destructive">{formState.errors.subject.join(', ')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    required
                    rows={5}
                  />
                  {formState.errors?.message && (
                    <p className="text-xs text-destructive">{formState.errors.message.join(', ')}</p>
                  )}
                </div>
                 {formState.errors?.server && (
                    <p className="text-sm text-destructive text-center">{formState.errors.server.join(', ')}</p>
                )}
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ConnectSection;
