import React from 'react';
import { experienceData, educationData } from '../data/experienceData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[60px] lg:py-[100px] bg-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            Work Experience & <span className="gold-gradient-text">Academic Background</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-cream flex items-center gap-2.5 pb-3 border-b border-sand-subtle/30">
              <Briefcase className="w-5 h-5 text-gold" />
              <span>Professional Experience</span>
            </h3>

            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold font-mono text-xs font-semibold mb-2">
                      {exp.role}
                    </span>
                    <h4 className="text-2xl font-bold text-cream group-hover:text-gold transition-colors">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-sand/80">
                    <span className="flex items-center gap-1.5 font-mono text-gold font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1 text-sand/60">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sand/90 text-sm leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Key Responsibilities Grid */}
                <div className="pt-4 border-t border-sand-subtle/20">
                  <div className="text-xs font-bold text-gold uppercase tracking-wider mb-3">
                    Core Responsibilities & Deliverables:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-sand/85 leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-cream flex items-center gap-2.5 pb-3 border-b border-sand-subtle/30">
              <GraduationCap className="w-5 h-5 text-gold" />
              <span>Education</span>
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl flex flex-col gap-4 relative group hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs font-mono text-gold font-semibold">Graduated {edu.year}</span>
                  <h4 className="text-lg font-bold text-cream group-hover:text-gold transition-colors mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-sand/80 font-medium mt-1">
                    {edu.university}
                  </p>
                </div>

                <p className="text-xs text-sand/70 leading-relaxed border-t border-sand-subtle/20 pt-3">
                  {edu.description}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-gold font-mono pt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}

            {/* Quick Experience Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-card to-[#0B1D17] border border-gold/30 text-xs text-sand/90 flex flex-col gap-2">
              <div className="font-bold text-cream text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Verified Commercial Experience</span>
              </div>
              <p className="text-xs leading-relaxed text-sand/80">
                2+ years of verified client-facing Shopify development, international e-commerce projects, multi-market setups, and custom Python integrations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
