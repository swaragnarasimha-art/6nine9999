
import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We audit your brand, audience, and competitive landscape to build a deep strategic foundation.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Custom roadmap combining creative vision with data-driven growth tactics and SEO alignment.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Production and deployment of premium content on precise schedules for maximum reach.'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous analysis and refinement. We iterate based on real performance data and automation.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-slate-400">
            From initial strategy to final execution—every step of our workflow is engineered for scaling success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mb-8 group-hover:border-amber-500/50 transition-colors shadow-xl">
                <span className="font-playfair text-3xl font-bold text-amber-500">{step.number}</span>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4 text-slate-100">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
