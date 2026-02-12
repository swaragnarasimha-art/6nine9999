
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Precision Copywriting',
    description: 'High-converting copy designed for neurological impact. We craft narratives that don\'t just tell—they sell across all touchpoints.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Social Strategy',
    description: 'Data-informed social architectures. We identify viral potential and optimize content distribution to maximize organic reach and engagement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'SEO Optimization',
    description: 'Search dominance through technical precision. We align your brand with the search intent of your most valuable prospective customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Workflow Automation',
    description: 'Efficiency at scale. We build intelligent systems that handle nurturing and follow-ups, allowing you to focus on high-level closing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Nurturing Growth.</h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            Premium solutions engineered for rapid scaling and long-term brand equity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-900/80"
            >
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="text-slate-600 font-playfair text-4xl font-bold mb-4 opacity-20">
                {service.id}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-t-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
