
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-slate-900 border border-slate-800 text-amber-500 rounded-full">
              The Standard of Excellence
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-8">
              Architecting <span className="text-amber-500">Digital</span> Dominance.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              6NINE9 is a premium growth agency engineered for high-performance brands. We don't just create—we nurture scale through precision copywriting and automated workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-slate-100 hover:bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-widest rounded transition-all transform hover:scale-105 shadow-xl shadow-slate-900/50 text-center"
              >
                Schedule Consultation
              </a>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-400 text-slate-100 font-bold text-sm uppercase tracking-widest rounded transition-all text-center"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-600/20 rounded-2xl rotate-3 border border-slate-800" />
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm rounded-2xl -rotate-3 border border-slate-800 p-8 flex flex-col justify-center items-center text-center">
                <div className="text-8xl font-playfair font-bold text-amber-500 mb-4 opacity-80">∞</div>
                <div className="text-2xl font-bold tracking-widest uppercase text-slate-200">Exponential Growth</div>
                <div className="mt-6 w-32 h-1 bg-amber-500/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
