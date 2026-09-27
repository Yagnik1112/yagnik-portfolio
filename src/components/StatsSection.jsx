import React, { useEffect, useState, useRef } from 'react';
import { siteData } from '../data/siteData';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[60px] lg:py-[100px] bg-[#132E24] relative overflow-hidden border-y border-sand-subtle/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Added Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1D17] border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            Key Metrics & <span className="gold-gradient-text">Milestones</span>
          </h2>
          <p className="text-sand/80 text-xs sm:text-sm max-w-lg mt-2 text-center">
            Verifiable development experience across international storefronts, custom apps, and technical SEO builds.
          </p>
        </div>

        {/* 100% Center Aligned Number Block Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {siteData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="h-full min-h-[150px] flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gold tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300 font-mono text-center">
                {isVisible ? stat.value : "0"}
              </div>
              <div className="text-xs sm:text-sm font-bold text-cream mb-1 leading-snug text-center">
                {stat.label}
              </div>
              <div className="text-[10px] text-sand/70 leading-tight text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
