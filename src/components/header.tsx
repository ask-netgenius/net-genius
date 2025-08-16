"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLoadingRouter } from '@/components/loading-provider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, onClick }: { href: string, label: string, onClick?: () => void }) {
    const pathname = usePathname();
    const router = useLoadingRouter();
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push(href);
        if(onClick) {
            onClick();
        }
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === href ? 'text-foreground' : 'text-foreground/60'
            )}
        >
            {label}
        </Link>
    )
}


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useLoadingRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/');
  }

  const handleGetAQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/contact');
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" onClick={(e) => { handleLogoClick(e); setIsMobileMenuOpen(false); }} className="mr-6 flex items-center px-6">
                  <span className="font-bold font-headline text-2xl tracking-tight">Net Genius</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map(({ href, label }) => (
                      <NavLink 
                          key={href} 
                          href={href} 
                          label={label} 
                          onClick={() => setIsMobileMenuOpen(false)}
                      />
                    ))}
                  </div>
                </div>
                <div className="px-6">
                  <Button asChild className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold rounded-xl shadow-lg">
                      <Link href="/contact" onClick={handleGetAQuoteClick}>Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>
        
        {/* Desktop Header */}
        <div className="hidden md:flex w-full items-center">
            <div className="flex-1 flex justify-start">
                <Link href="/" onClick={handleLogoClick} className="flex items-center">
                    <span className="font-bold font-headline text-2xl tracking-tight">Net Genius</span>
                </Link>
            </div>
    
            <nav className="flex justify-center items-center space-x-10 text-base font-semibold tracking-wide">
              {navLinks.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}
            </nav>
    
            <div className="flex-1 flex justify-end">
              <Button asChild className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact" onClick={handleGetAQuoteClick}>Get a Quote</Link>
              </Button>
            </div>
        </div>

        {/* Mobile Logo (Centered) */}
        <div className="flex-1 flex justify-center items-center md:hidden">
            <Link href="/" onClick={handleLogoClick} className="flex items-center">
              <span className="font-bold font-headline text-2xl tracking-tight">Net Genius</span>
            </Link>
        </div>

        {/* Mobile Spacer to balance the menu trigger */}
        <div className="w-[52px] flex items-center md:hidden" />
      </div>
    </header>
  );
}
