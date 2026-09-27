import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import {
  Code2,
  Sparkles,
  ShoppingBag,
  Layers,
  Cpu,
  Sliders,
  Zap,
  Store,
  Globe,
  Layout,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { FigmaIcon } from './Icons';

const iconMap = {
  Code2,
  Sparkles,
  ShoppingBag,
  Layers,
  Cpu,
  Sliders,
  Zap,
  Store,
  Globe,
  Layout,
  Terminal,
  Figma: FigmaIcon
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-[60px] lg:py-[100px] bg-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
              <span>What I Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
              Specialized <span className="gold-gradient-text">Shopify & eCommerce</span> Services
            </h2>
          </div>

          <Link
            to="/services"
            className="btn-outline text-xs px-5 py-2.5 flex items-center gap-2 hover:border-gold group self-start md:self-auto"
          >
            <span>Explore All 12 Services</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="interactive-card p-6 rounded-2xl bg-forest-card/80 border border-sand-subtle/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-forest-dark transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-cream group-hover:text-gold transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sand/80 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-subtle/20 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sand/60">
                    Service #{service.id}
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-gold-light transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
