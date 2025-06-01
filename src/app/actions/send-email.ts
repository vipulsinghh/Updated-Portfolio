
'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const sendEmailSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});

export interface SendEmailFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    server?: string[];
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'vipulsingh0110@gmail.com'; // Your email address

export async function sendEmailAction(
  prevState: SendEmailFormState,
  formData: FormData
): Promise<SendEmailFormState> {
  const validatedFields = sendEmailSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return {
      success: false,
      message: 'Email service is not configured on the server.',
      errors: { server: ['Email service is not configured.'] },
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // For testing, use onboarding@resend.dev. For production, use a verified domain.
      to: [recipientEmail],
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      html: `
        <p>You have a new message from your portfolio contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { 
        success: false, 
        message: 'Failed to send email. Please try again later.',
        errors: { server: [error.message || 'Unknown error from email service.'] }
      };
    }

    return { 
      success: true, 
      message: 'Message sent successfully! Thanks for reaching out.' 
    };
  } catch (e: any) {
    console.error('Error sending email:', e);
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.',
      errors: { server: [e.message || 'Unknown server error.'] }
    };
  }
}
