
import React from 'react';
import { ResultStat } from '../types';

const stats: ResultStat[] = [
  { label: 'Followers Grown', value: '500K+' },
  { label: 'Content Impressions', value: '8.5M+' },
  { label: 'Avg Engagement Lift', value: '34%' },
  { label: 'Brands Transformed', value: '50+' }
];

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50">
              <div className="font-playfair text-5xl md:text-6xl font-bold text-amber-500 mb-4">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
