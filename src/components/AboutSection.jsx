import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { X, Smartphone, ShoppingBag, Code2, Layers, Atom, Sparkles, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const journeySteps = [
    { title: "Flutter App Dev", desc: "Started with mobile UI components and state management.", icon: Smartphone },
    { title: "Shopify Core", desc: "Transitioned to eCommerce building Liquid themes & sections.", icon: ShoppingBag },
    { title: "eCommerce Solutions", desc: "Solved custom store logic, checkout & multi-currency setups.", icon: Code2 },
    { title: "Custom Development", desc: "Built bespoke Liquid sections & Figma-to-Shopify storefronts.", icon: Layers },
    { title: "Shopify Apps", desc: "Created Python/Node apps syncing machine output & inventory.", icon: Sparkles },
    { title: "React & Modern Web", desc: "Currently mastering React and headless app ecosystems.", icon: Atom },
  ];

  return (
    <section id="about" className="py-[60px] lg:py-[100px] bg-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none animate-float-orb"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            Bridging App Craftsmanship with <span className="gold-gradient-text">Shopify eCommerce</span>
          </h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Text & Golden Modal Popup Trigger */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-sand/90 text-base leading-relaxed">
            <p className="text-lg text-cream font-medium">
              {siteData.bioAboutShort}
            </p>

            <p className="text-sand/85">
              Whether it's building liquid themes from scratch, converting Figma files into dynamic section components, or connecting machine output data with Shopify inventory APIs, I take pride in writing clean, reliable code that drives real business results.
            </p>

            {/* Golden "More About Me" Popup Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-gold"
                aria-haspopup="dialog"
              >
                <BookOpen className="w-4 h-4 text-[#0B1D17]" />
                <span>More About Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Career Progression Grid */}
          <div className="lg:col-span-5 bg-forest-card rounded-2xl p-6 sm:p-8 border border-sand-subtle/30 shadow-xl">
            <h3 className="text-lg font-bold text-cream mb-6 flex items-center justify-between">
              <span>Career Progression</span>
              <span className="text-xs font-mono text-gold px-2.5 py-1 rounded bg-gold/10 border border-gold/20">
                2022 - Present
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {journeySteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20 hover:border-gold/40 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-3 group-hover:bg-gold group-hover:text-forest-dark transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-cream group-hover:text-gold transition-colors">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-sand/70 mt-1 leading-snug">
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-sand-subtle/30 flex items-center justify-between text-xs text-sand/80">
              <span className="font-mono text-gold/80">Location:</span>
              <span className="font-medium text-cream">Surat, Gujarat, India</span>
            </div>
          </div>

        </div>
      </div>

      {/* About Me Story Modal / Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1D17]/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-forest-card border-2 border-gold/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-sand-subtle/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold">
                  YB
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream">Full Background & Philosophy</h3>
                  <p className="text-xs text-gold font-mono">Flutter → Shopify → eCommerce → Apps</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-[#0B1D17] border border-sand-subtle/30 text-sand hover:text-gold focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Paragraphs */}
            <div className="flex flex-col gap-4 text-sand/90 text-sm leading-relaxed">
              {siteData.bioAboutFull.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-sand-subtle/30 flex items-center justify-between">
              <span className="text-xs text-sand/60 font-mono">Senior Shopify Developer</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-gold text-xs px-5 py-2.5"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
