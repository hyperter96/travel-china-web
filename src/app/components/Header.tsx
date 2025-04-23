'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/lantern.svg"
                alt="China Travel Logo"
                width={36}
                height={36}
                className="mr-2"
              />
              <span className="text-lg font-bold text-foreground">Travel China</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`text-foreground hover:text-primary transition-colors ${pathname === '/' ? 'text-primary font-medium' : ''}`}>
              Home
            </Link>
            <Link href="/visa" className={`text-foreground hover:text-primary transition-colors ${pathname === '/visa' ? 'text-primary font-medium' : ''}`}>
              Visa
            </Link>
            <Link href="/customs" className={`text-foreground hover:text-primary transition-colors ${pathname === '/customs' ? 'text-primary font-medium' : ''}`}>
              Customs
            </Link>
            <Link href="/tours" className={`text-foreground hover:text-primary transition-colors ${pathname === '/tours' ? 'text-primary font-medium' : ''}`}>
              Tours
            </Link>
            <Link href="/navigation" className={`text-foreground hover:text-primary transition-colors ${pathname === '/navigation' ? 'text-primary font-medium' : ''}`}>
              Navigation
            </Link>
            <Link href="/guides" className={`text-foreground hover:text-primary transition-colors ${pathname === '/guides' ? 'text-primary font-medium' : ''}`}>
              Guides
            </Link>
            <Link href="/food-scanner" className={`text-foreground hover:text-primary transition-colors ${pathname === '/food-scanner' ? 'text-primary font-medium' : ''}`}>
              Food Scanner
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 border-t border-border animate-slideDown">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-md ${pathname === '/' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/visa" 
                className={`px-4 py-2 rounded-md ${pathname === '/visa' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Visa
              </Link>
              <Link 
                href="/customs" 
                className={`px-4 py-2 rounded-md ${pathname === '/customs' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Customs
              </Link>
              <Link 
                href="/tours" 
                className={`px-4 py-2 rounded-md ${pathname === '/tours' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link 
                href="/navigation" 
                className={`px-4 py-2 rounded-md ${pathname === '/navigation' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Navigation
              </Link>
              <Link 
                href="/guides" 
                className={`px-4 py-2 rounded-md ${pathname === '/guides' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Guides
              </Link>
              <Link 
                href="/food-scanner" 
                className={`px-4 py-2 rounded-md ${pathname === '/food-scanner' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                Food Scanner
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}