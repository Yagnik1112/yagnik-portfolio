import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

const coreStack = ['Shopify OS 2.0', 'Liquid & Metafields', 'Custom Apps & APIs', 'Technical SEO & Performance'];

export default function Hero() {
  return (
    <section className="hero-section relative min-h-[90vh] lg:h-[90vh] flex flex-col justify-end overflow-hidden bg-white">

      {/* Ambient Grid & Dot Patterns matching reference */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

      {/* FULL WIDTH LANDSCAPE BACKGROUND IMAGE */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={siteData.profileImageDesktop || "/images/profile/dekstop.png"}
          alt="Yagnik Bavaliya - Senior Shopify Developer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right bottom'
          }}
          className="hero-bg-image w-full h-full select-none"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/profile/white.png";
          }}
        />
      </div>

      {/* HERO FOREGROUND CONTENT (Positioned lower to give generous breathing room below navbar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-6 sm:pb-8 lg:pb-10 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left Text Box */}
          <div className="hero-copy lg:col-span-7 flex flex-col items-start text-left max-w-2xl bg-white/60 backdrop-blur-xs lg:bg-transparent p-4 sm:p-6 lg:p-0 rounded-3xl">

            {/* Top Tagline Badges */}
            <div className="hero-enter flex flex-wrap items-center gap-2 mb-4" style={{ '--d': 1 }}>
              <span className="text-[#0F5B4C] text-[11px] font-mono tracking-widest uppercase font-extrabold px-3 py-1 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 shadow-2xs">
                WEB & SHOPIFY DEVELOPER
              </span>
              <div className="glass-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#128C7E] text-xs font-semibold shadow-2xs">
                <span className="status-dot" aria-hidden="true"></span>
                <span>Open for Projects</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-enter hero-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] tracking-tight leading-[1.1] mb-6" style={{ '--d': 2 }}>
              Yagnik Bavaliya <span className="text-[#0F5B4C]">— Web & Shopify Developer</span>
            </h1>

            {/* Description */}
            <p className="hero-enter text-base sm:text-lg text-stone-700 mb-8 leading-relaxed font-medium max-w-xl" style={{ '--d': 3 }}>
              Hi, I'm <strong className="text-[#0a0a0a]">Yagnik Bavaliya</strong>. I help modern brands scale with lightning-fast Shopify 2.0 storefronts, custom Liquid theme development, and SEO optimization, alongside WordPress, Webflow, and Wix websites — built for performance, designed to convert.
            </p>

            {/* Action Buttons */}
            <div className="hero-enter flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8" style={{ '--d': 4 }}>
              <Link to="/contact" className="tactile-btn tactile-btn-dark btn-arrow px-6 py-3.5 text-xs">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link to="/projects" className="tactile-btn tactile-btn-white px-6 py-3.5 text-xs">
                <span>Explore Work (60+)</span>
              </Link>
            </div>

            {/* Capabilities Footer with 4 Tabs and Clean Gaps */}
            <div className="hero-enter mt-8 pt-6 border-t border-black/10 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ '--d': 5 }}>
              <span className="font-mono text-[#0F5B4C] text-[11px] uppercase tracking-wider font-extrabold shrink-0">
                CORE STACK:
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
                {coreStack.map((item) => (
                  <div
                    key={item}
                    className="hero-chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f1ea] border border-black/10 text-xs font-semibold text-stone-800 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F5B4C] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Portrait View */}
            <div className="hero-enter block lg:hidden mt-8 w-full" style={{ '--d': 6 }}>
              <div className="hero-portrait relative mx-auto max-w-[320px] rounded-3xl overflow-hidden shadow-lg border border-black/10 bg-white">
                <img
                  src={siteData.profileImage || "/images/profile/white.png"}
                  alt="Yagnik Bavaliya"
                  width="941"
                  height="1672"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Floating 'Make Creative' Tag Fixed At Bottom Aligned with Page Width */}
          <div className="hidden lg:flex lg:col-span-5 justify-end pb-2">
            <div className="hero-float-card hero-enter-right p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F5B4C] flex items-center justify-center text-white shadow-xs shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0a0a0a] flex items-center gap-2">
                  <span>Make Creative</span>
                  <span className="status-dot" aria-hidden="true"></span>
                </div>
                <div className="text-[10px] text-[#0F5B4C] font-mono font-bold">2+ Years Senior Dev • Surat</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
