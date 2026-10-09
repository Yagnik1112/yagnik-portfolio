import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appSpotlight } from '../data/appSectionData';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Collapsible, { ExpandToggle } from './Collapsible';

const VISIBLE_HIGHLIGHTS = 3;

function Highlight({ text, index }) {
  return (
    <div className="app-highlight" style={{ '--i': index }}>
      <CheckCircle2 className="w-5 h-5 text-[#0F5B4C] shrink-0 mt-0.5" />
      <span className="text-xs sm:text-sm text-stone-800 font-semibold leading-snug">{text}</span>
    </div>
  );
}

export default function ShopifyAppSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = appSpotlight.highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const hidden = appSpotlight.highlights.slice(VISIBLE_HIGHLIGHTS);

  return (
    <section className="py-[100px] bg-[#f6f5f0] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale" className="app-spotlight grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-white text-[#0a0a0a] border border-black/10">

          {/* Left Column: Technical App Details */}
          <div className="lg:col-span-7 flex flex-col items-start">

            <div className="section-eyebrow mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#0F5B4C]" />
              <span>Custom Applications Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              {appSpotlight.title}
            </h2>

            <p className="text-[#0F5B4C] text-sm font-mono font-bold mb-6">
              {appSpotlight.subtitle}
            </p>

            <p className="text-stone-600 text-base leading-relaxed mb-8 font-medium">
              {appSpotlight.description}
            </p>

            {/* Core Capability Checklist */}
            <div className="w-full mb-8">
              <ScrollReveal stagger direction="left" className="flex flex-col gap-3">
                {visible.map((highlight, idx) => (
                  <Highlight key={highlight} text={highlight} index={idx} />
                ))}
              </ScrollReveal>

              {hidden.length > 0 && (
                <>
                  <Collapsible open={showAll} id="app-highlights-more">
                    <div className="flex flex-col gap-3 pt-3">
                      {hidden.map((highlight, idx) => (
                        <Highlight key={highlight} text={highlight} index={idx} />
                      ))}
                    </div>
                  </Collapsible>
                  <ExpandToggle
                    open={showAll}
                    onToggle={() => setShowAll((v) => !v)}
                    controls="app-highlights-more"
                    moreLabel={`+${hidden.length} more capabilities`}
                    lessLabel="Show fewer capabilities"
                    variant="text"
                    className="mt-3"
                  />
                </>
              )}
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-stone-500 font-medium mr-2">Stack &amp; scope:</span>
              {appSpotlight.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-tag px-3 py-1 rounded-full bg-[#f5f1ea] border border-black/10 text-stone-800 font-mono text-xs font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <Link
                to={`/projects/${appSpotlight.slug}`}
                className="tactile-btn tactile-btn-emerald btn-arrow px-6 py-3.5 text-xs font-semibold flex items-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

          </div>

          {/* Right Column: Code Visualizer & Data Pipeline Mock */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal direction="right" delay={150} className="code-window rounded-2xl bg-stone-900 border border-stone-800 p-6 relative overflow-hidden">

              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-stone-200 font-bold">mosaic_app.py</span>
                </div>
                <span className="text-[#10B981] font-bold">Inventory Sync</span>
              </div>

              {/* Code Snippet Representation (lines type in when visible) */}
              <ScrollReveal stagger direction="fade" className="code-lines font-mono text-xs leading-relaxed text-stone-300">
                <div className="text-emerald-400"># Ingesting machine output metrics</div>
                <div className="text-white"><span className="text-emerald-400 font-bold">def</span> fetch_machine_telemetry(machine_id):</div>
                <div className="pl-4 text-stone-300">output_count = hardware_api.get_units(machine_id)</div>
                <div className="pl-4 text-stone-300"><span className="text-emerald-400">return</span> output_count</div>
                <div className="code-gap" aria-hidden="true"></div>
                <div className="text-emerald-400"># Syncing directly with Shopify Inventory API</div>
                <div className="text-white"><span className="text-emerald-400 font-bold">def</span> sync_shopify_inventory(variant_id, qty):</div>
                <div className="pl-4 text-stone-300">payload = &#123;"location_id": LOC_ID, "available": qty&#125;</div>
                <div className="pl-4 text-stone-300">res = shopify.GraphQL.mutate(SET_INV, payload)</div>
                <div className="pl-4 text-emerald-300"><span className="text-emerald-400">return</span> res.status == 200<span className="code-caret" aria-hidden="true"></span></div>
              </ScrollReveal>

              {/* Live Flow Indicator */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Machine 1 & 2 Output Connected</span>
                </div>
                <span className="text-[#10B981] font-bold">Shopify API Sync</span>
              </div>

            </ScrollReveal>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
