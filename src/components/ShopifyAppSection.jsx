import React from 'react';
import { Link } from 'react-router-dom';
import { appSpotlight } from '../data/appSectionData';
import { Cpu, CheckCircle2, ArrowRight, Layers, Terminal, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ShopifyAppSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-gradient-to-b from-[#0B1D17] via-[#132E24] to-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technical App Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shopify App Development Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream tracking-tight mb-4">
              {appSpotlight.title}
            </h2>

            <p className="text-gold text-sm font-mono font-medium mb-6">
              {appSpotlight.subtitle}
            </p>

            <p className="text-sand/90 text-base leading-relaxed mb-8">
              {appSpotlight.description}
            </p>

            {/* Core Capability Checklist */}
            <div className="flex flex-col gap-3 mb-8 w-full">
              {appSpotlight.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-forest-card/80 border border-sand-subtle/20">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-cream font-medium leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-sand/60 mr-2">Built with:</span>
              {appSpotlight.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#0B1D17] border border-gold/30 text-gold font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <MagneticButton>
              <Link
                to={`/projects/${appSpotlight.slug}`}
                className="btn-primary text-sm px-6 py-3.5 flex items-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

          </div>

          {/* Right Column: Code Visualizer & Data Pipeline Mock */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B1D17] border-2 border-gold/40 shadow-2xl p-6 relative overflow-hidden group">
              
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-sand-subtle/20 text-xs font-mono text-sand/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-cream font-bold">mosaic_app.py</span>
                </div>
                <span className="text-gold">Python 3.11</span>
              </div>

              {/* Code Snippet Representation */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-sand/90">
                <div className="text-emerald-400"># Ingesting machine output metrics</div>
                <div className="text-sand"><span className="text-gold font-bold">def</span> fetch_machine_telemetry(machine_id):</div>
                <div className="pl-4 text-cream">output_count = hardware_api.get_units(machine_id)</div>
                <div className="pl-4 text-cream"><span className="text-gold">return</span> output_count</div>
                <br />
                <div className="text-emerald-400"># Syncing directly with Shopify Inventory API</div>
                <div className="text-sand"><span className="text-gold font-bold">def</span> sync_shopify_inventory(variant_id, qty):</div>
                <div className="pl-4 text-cream">payload = &#123;"location_id": LOC_ID, "available": qty&#125;</div>
                <div className="pl-4 text-cream">res = shopify.GraphQL.mutate(SET_INV, payload)</div>
                <div className="pl-4 text-emerald-300"><span className="text-gold">return</span> res.status == 200</div>
              </div>

              {/* Live Flow Indicator */}
              <div className="mt-6 pt-4 border-t border-sand-subtle/20 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Machine 1 & 2 Output Connected</span>
                </div>
                <span className="text-gold">Shopify API Sync</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
