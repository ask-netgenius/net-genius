import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-20 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-primary-foreground">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-headline text-3xl font-semibold text-primary">Contact Information</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start">
                <MapPin className="h-7 w-7 mr-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Forge Lane<br />
                  Tech City, TC 54321
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-accent" />
                <a href="mailto:hello@fullstackforge.dev" className="hover:text-accent transition-colors text-muted-foreground">
                  hello@fullstackforge.dev
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors text-muted-foreground">
                  (123) 456-7890
                </a>
              </div>
            </div>
            
            <Separator />

            <h3 className="font-headline text-2xl font-semibold text-primary">Follow Us</h3>
            <div className="flex space-x-6">
                <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="sr-only">X (Twitter)</span>
                </Link>
                <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                    <Github className="h-7 w-7" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                    <Linkedin className="h-7 w-7" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-3xl font-semibold mb-6 text-primary">Send Us a Message</h2>
            <Card className="p-8 shadow-xl border-t-4 border-accent">
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
