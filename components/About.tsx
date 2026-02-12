
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-slate-400 text-lg">
            Built on a decade of expertise, we approach every project with precision, creativity, and an obsession with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-amber-500">Why We Exist</h3>
            <p className="text-slate-300 leading-relaxed">
              In an era where attention is fragmented and competition is fierce, generic content doesn't cut it. Brands need partners who understand the intersection of creativity and data science.
            </p>
            <p className="text-slate-300 leading-relaxed">
              6NINE9 was founded on a simple principle: growth shouldn't be left to chance. Every reel, every post, every strategy is engineered for results.
            </p>
            <div className="p-6 bg-slate-950 border-l-4 border-amber-500 rounded-r-lg">
              <p className="text-xl font-medium italic text-slate-100">
                "We transform brands from invisible to unforgettable."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-amber-500">Our Approach</h3>
            <p className="text-slate-300 leading-relaxed">
              We combine 10+ years of digital strategy expertise with creative excellence and rigorous analytics. Every campaign is backed by data. Every creative decision has purpose.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We don't chase trends. We create them. Our clients see measurable growth in followers, engagement rates, and conversions because we optimize for real business outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                <div className="text-amber-500 font-bold text-2xl mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest text-slate-400">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                <div className="text-amber-500 font-bold text-2xl mb-1">50+</div>
                <div className="text-xs uppercase tracking-widest text-slate-400">Brands Scaled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
