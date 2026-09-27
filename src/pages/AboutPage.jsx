import React from 'react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';
import { experienceData, educationData } from '../data/experienceData';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Code2, Layers, Atom, Sparkles, Award, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function AboutPage() {
  const journeySteps = [
    { title: "Flutter App Dev", desc: "Started with mobile UI components and state management.", icon: Smartphone },
    { title: "Shopify Core", desc: "Transitioned to eCommerce building Liquid themes & sections.", icon: ShoppingBag },
    { title: "eCommerce Solutions", desc: "Solved custom store logic, checkout & multi-currency setups.", icon: Code2 },
    { title: "Custom Development", desc: "Built bespoke Liquid sections & Figma-to-Shopify storefronts.", icon: Layers },
    { title: "Shopify Apps", desc: "Created Python/Node apps syncing machine output & inventory.", icon: Sparkles },
    { title: "React & Modern Web", desc: "Currently mastering React and headless app ecosystems.", icon: Atom },
  ];

  return (
    <>
      <SEO
        title="About Yagnik Bavaliya | Shopify Developer & eCommerce Specialist"
        description="Learn about Yagnik Bavaliya's experience as a Senior Shopify Developer in Surat, India. From Flutter app development to Shopify 2.0 themes, Python apps, and React."
        canonical="https://yagnik-portfolio.vercel.app/about"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Animated Ambient Background Visuals */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Detailed Biography</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              About <span className="gold-gradient-text">Yagnik Bavaliya</span>
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              Senior Shopify Developer with 2+ years of verified commercial experience based in Surat, Gujarat, India.
            </p>
          </div>

          {/* Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">

            {/* Left Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-forest-card border-2 border-gold/40 shadow-2xl">
                <img
                  src={siteData.profileImage}
                  alt="Yagnik Bavaliya"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D17] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1D17]/90 border border-gold/30 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-cream text-sm">Yagnik Bavaliya</div>
                    <div className="text-xs text-gold font-mono">Senior Shopify Developer</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-sand/90 text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-cream">
                From Mobile Apps to Specialized Shopify Solutions
              </h2>

              {siteData.bioAboutFull.map((paragraph, index) => (
                <p key={index} className="text-sand/90 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link to="/contact" className="btn-primary">
                    <span>Let's Work Together</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>

                <a
                  href={siteData.resumeUrl}
                  download="yagnik-bavaliya-resume.pdf"
                  className="btn-outline"
                >
                  Download Resume
                </a>
              </div>
            </div>

          </div>

          {/* Stepper Progression Grid */}
          <div className="p-8 sm:p-10 rounded-2xl bg-forest-card border border-sand-subtle/30 mb-20 shadow-xl">
            <h2 className="text-2xl font-bold text-cream mb-8">Development Philosophy & Tech Evolution</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeySteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-[#0B1D17] border border-sand-subtle/20 hover:border-gold/40 transition-all flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-cream">{step.title}</h3>
                    <p className="text-xs text-sand/75 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Experience Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl flex flex-col gap-4">
              <span className="text-xs font-mono text-gold font-bold uppercase">Workplace</span>
              <h3 className="text-2xl font-bold text-cream">Senior Shopify Developer</h3>
              <p className="text-sand/80 text-sm">DAYDREAMSOFT INFOTECH LLP • May 2024 - Present</p>
              <p className="text-xs text-sand/75 leading-relaxed">
                Developing custom Shopify 2.0 storefronts, building liquid theme sections from scratch, writing private Python/Node apps, and managing international client accounts.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl flex flex-col gap-4">
              <span className="text-xs font-mono text-gold font-bold uppercase">Degree</span>
              <h3 className="text-2xl font-bold text-cream">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sand/80 text-sm">Veer Narmad South Gujarat University (VNSGU) • Graduated 2024</p>
              <p className="text-xs text-sand/75 leading-relaxed">
                Core foundation in computer science, software engineering, databases, algorithms, web technologies, and software architecture.
              </p>
            </div>
          </div>

          {/* Core Engineering Strengths */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-forest-card via-[#132E24] to-[#0B1D17] border border-gold/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6">Core Engineering Guarantees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20">
                <div className="w-2.5 h-2.5 rounded-full bg-gold mb-3"></div>
                <h3 className="text-base font-bold text-cream mb-1">Clean Liquid 2.0</h3>
                <p className="text-xs text-sand/75">100% modular, section-ready code compatible with Shopify OS 2.0 theme editor.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20">
                <div className="w-2.5 h-2.5 rounded-full bg-gold mb-3"></div>
                <h3 className="text-base font-bold text-cream mb-1">Custom App Sync</h3>
                <p className="text-xs text-sand/75">Python and Node.js app development for automated inventory and API integrations.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20">
                <div className="w-2.5 h-2.5 rounded-full bg-gold mb-3"></div>
                <h3 className="text-base font-bold text-cream mb-1">Mobile First & Fast</h3>
                <p className="text-xs text-sand/75">Lightning fast mobile load speed, responsive UI, and high Core Web Vitals performance.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20">
                <div className="w-2.5 h-2.5 rounded-full bg-gold mb-3"></div>
                <h3 className="text-base font-bold text-cream mb-1">Factual Engineering</h3>
                <p className="text-xs text-sand/75">Direct communication, clear code documentation, and reliable project execution.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
