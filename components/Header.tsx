
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="font-playfair text-2xl font-bold tracking-tighter flex items-center gap-1"
        >
          6<span className="text-amber-500">NINE</span>9
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Process', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-sm font-medium uppercase tracking-widest text-slate-300 hover:text-amber-500 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </nav>

        <button type="button" className="md:hidden text-slate-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
