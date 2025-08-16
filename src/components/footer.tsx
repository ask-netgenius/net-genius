import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-card to-muted/20 border-t border-border/50">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="font-headline text-2xl font-bold tracking-tight">Net Genius</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in creating robust, secure, and scalable software solutions from concept to cloud.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                  Portfolio
                </Link>
                <Link href="/pricing" className="text-muted-foreground hover:text-accent transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Services</h4>
              <nav className="flex flex-col space-y-2">
                <span className="text-muted-foreground">Full-Stack Development</span>
                <span className="text-muted-foreground">Security & Compliance</span>
                <span className="text-muted-foreground">DevOps & Automation</span>
                <span className="text-muted-foreground">Rust Programming</span>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    123 Tech Lane<br />
                    Innovation City, IC 54321
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <Link href="mailto:hello@netgenius.dev" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    hello@netgenius.dev
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <Link href="tel:+1234567890" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    (123) 456-7890
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Net Genius. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
