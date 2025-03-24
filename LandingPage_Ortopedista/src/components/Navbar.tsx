import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 navbar-glass transition-gpu dark:bg-gray-900/90 dark:border-gray-800/50',
        isScrolled && 'navbar-scrolled'
      )}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center space-x-2 transition-all duration-300 hover:opacity-80"
        >
          <span className="text-2xl font-bold text-ortho-700 dark:text-ortho-00">Dr. Ortho</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-ortho-600 dark:hover:text-ortho-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-ortho-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          {/*<button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 ml-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-50 transform transition-all duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
        
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-ortho-600 dark:hover:text-ortho-400 transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;