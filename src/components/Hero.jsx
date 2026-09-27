import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import { WhatsappIcon } from './Icons';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const whatsappUrl = `https://wa.me/919712847247?text=${encodeURIComponent("Hi Yagnik, I saw your portfolio and would like to discuss a Shopify project.")}`;

  return (
    <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0B1D17] via-[#132E24] to-[#0B1D17] py-[60px] lg:py-[100px]">
      {/* Dynamic Animated Ambient Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-700/10 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Ambient Grid & Dot Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* 50/50 Desktop Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center justify-center">

          {/* Text Content Column (Left column on desktop, 2nd on mobile) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-mobile-second">

            {/* Glassmorphic Availability Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-emerald-300 text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open to New Opportunities</span>
              </div>
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-gold text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Available for Freelance Projects</span>
              </div>
            </div>

            {/* Sub-badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sand text-xs font-mono tracking-widest uppercase font-bold">
                Yagnik Bavaliya
              </span>
              <span className="text-gold/60">•</span>
              <span className="text-gold text-xs font-semibold px-2.5 py-0.5 rounded bg-gold/10 border border-gold/30">
                2+ Years Experience
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight leading-[1.1] mb-6">
              Shopify Developer <br className="hidden sm:inline" />
              <span className="gold-gradient-text">& eCommerce Developer</span>
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-sand/90 max-w-xl mb-8 leading-relaxed font-medium">
              I build custom Shopify stores, Shopify 2.0 themes, apps, and eCommerce solutions for businesses worldwide.
            </p>

            {/* Primary Action Buttons with uniform gap spacing */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <MagneticButton>
                <Link to="/projects" className="btn-primary">
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsappIcon className="w-4.5 h-4.5 text-white" />
                  <span>WhatsApp Direct</span>
                </a>
              </MagneticButton>

              <a
                href={siteData.resumeUrl}
                download="yagnik-bavaliya-resume.pdf"
                className="btn-outline"
                aria-label="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-gold" />
                <span>Resume</span>
              </a>
            </div>

            {/* Technical Capability Tags */}
            <div className="pt-6 border-t border-sand-subtle/40 w-full flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-sand/90">
              <span className="font-mono text-gold text-xs uppercase tracking-wider font-extrabold mr-1">Capabilities:</span>
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Shopify 2.0</span>
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Liquid Themes</span>
              </span>
              <span className="inline-flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Shopify Markets</span>
              </span>
            </div>

          </div>

          {/* Profile Image (Right column on desktop, 1st on mobile) */}
          <div className="lg:col-span-6 flex justify-center relative order-mobile-first">

            {/* 1/1 Square Framed Image Container */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden bg-forest-card border-2 border-gold/40 shadow-2xl group">

              {/* Profile Image */}
              <img
                src={siteData.profileImage}
                alt="Yagnik Bavaliya - Senior Shopify Developer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/profile/yagnik.jpg";
                }}
              />

              {/* Ambient Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D17] via-transparent to-transparent opacity-70"></div>

              {/* Top Right Floating Badge */}
              <div className="absolute top-4 right-4 p-3 rounded-2xl glass-card border-gold/40 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cream">Shopify 2.0 Expert</div>
                  <div className="text-[10px] text-gold font-mono">Theme & App Dev</div>
                </div>
              </div>

              {/* Bottom Name Card Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0B1D17]/90 backdrop-blur-md border border-gold/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-cream text-sm">Yagnik Bavaliya</div>
                  <div className="text-xs text-gold font-mono">Senior Shopify Developer • Surat, India</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
