
import React from 'react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: 'Expertise You Trust',
    description: '10+ years of proven excellence in digital growth across competitive industries.'
  },
  {
    title: 'Data-Driven Excellence',
    description: 'Every decision backed by metrics. We measure, analyze, and optimize continuously.'
  },
  {
    title: 'Creative Precision',
    description: 'Professional-grade production meets strategic vision to maximize ROI.'
  },
  {
    title: 'Transparent Partnership',
    description: 'Clear communication, realistic timelines, and measurable success metrics.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-amber-500 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Why Partner With 6NINE9</h2>
          <p className="text-slate-400 text-lg">
            We offer more than services. We deliver transformation backed by decade-long industry expertise and cutting-edge automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl backdrop-blur-sm hover:bg-slate-800/40 transition-colors">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-slate-100">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
