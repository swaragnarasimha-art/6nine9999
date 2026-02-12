
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="font-playfair text-3xl font-bold tracking-tighter flex items-center gap-1"
            >
              6<span className="text-amber-500">NINE</span>9
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium growth strategy and high-converting content architected with precision for global brands.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-slate-100">Services</h4>
            <ul className="space-y-4">
              {['Copywriting', 'Social Strategy', 'SEO Optimization', 'Workflow Automation'].map(link => (
                <li key={link}>
                  <a 
                    href="#services" 
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-slate-100">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Case Studies', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace('Us', '').replace(' ', '')}`} 
                    onClick={(e) => scrollToSection(e, link.toLowerCase().replace(' us', '').replace(' ', ''))}
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-slate-100">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest growth insights delivered weekly.</p>
            <form onSubmit={handleNewsletter} className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none"
              />
              <button type="submit" className="bg-amber-500 px-4 py-2 rounded-r-lg text-slate-950 font-bold">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} 6NINE9. All rights reserved. Premium Growth Strategy.
          </p>
          <div className="flex gap-8">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
