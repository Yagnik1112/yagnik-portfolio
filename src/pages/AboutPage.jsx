import SEO from '../components/SEO';
import { siteData } from '../data/siteData';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Code2, Layers, Atom, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0F5B4C]/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="page-intro max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4 shadow-xs font-bold">
              <span>Detailed Biography</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              About <span className="text-[#0F5B4C]">Yagnik Bavaliya</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Senior Shopify Developer with 2+ years of verified commercial experience based in Surat, Gujarat, India.
            </p>
          </div>

          {/* Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">

            {/* Left Image Column */}
            <ScrollReveal direction="image" delay={200} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-white border border-black/10 shadow-2xl">
                <img
                  src={siteData.profileImage}
                  alt="Yagnik Bavaliya"
                  className="w-full h-full object-cover object-center"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-between text-xs shadow-lg">
                  <div>
                    <div className="font-bold text-[#0a0a0a] text-sm">Yagnik Bavaliya</div>
                    <div className="text-xs text-[#0F5B4C] font-mono font-bold">Senior Shopify Developer</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Story Column */}
            <ScrollReveal stagger direction="up" delay={250} className="lg:col-span-7 flex flex-col gap-6 text-gray-700 text-base leading-relaxed font-medium">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
                From Mobile Apps to Specialized Shopify Solutions
              </h2>

              {siteData.bioAboutFull.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="tactile-btn tactile-btn-emerald btn-arrow px-6 py-3.5 text-xs font-semibold flex items-center gap-2">
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <a
                  href={siteData.resumeUrl}
                  download="yagnik-bavaliya-resume.pdf"
                  className="tactile-btn tactile-btn-white px-5 py-3.5 text-xs font-semibold flex items-center gap-2"
                >
                  Download Resume
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Stepper Progression Grid */}
          <ScrollReveal direction="up" className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 mb-20 shadow-md">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Development Philosophy & Tech Evolution</h2>

            <ScrollReveal stagger direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeySteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="journey-card group p-5 rounded-2xl bg-[#f5f1ea]/60 border border-black/5 flex flex-col gap-3 shadow-xs">
                    <div className="journey-icon w-10 h-10 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a0a0a]">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                );
              })}
            </ScrollReveal>
          </ScrollReveal>

          {/* Education & Experience Highlights */}
          <ScrollReveal stagger direction="up" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="experience-card p-8 rounded-2xl bg-white border border-black/10 flex flex-col gap-4">
              <span className="text-xs font-mono text-[#0F5B4C] font-bold uppercase">Workplace</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a]">Senior Shopify Developer</h3>
              <p className="text-gray-600 text-sm font-semibold">DAYDREAMSOFT INFOTECH LLP • May 2024 - Present</p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Developing custom Shopify 2.0 storefronts, building liquid theme sections from scratch, writing private Python/Node apps, and managing international client accounts.
              </p>
            </div>

            <div className="experience-card p-8 rounded-2xl bg-white border border-black/10 flex flex-col gap-4">
              <span className="text-xs font-mono text-[#0F5B4C] font-bold uppercase">Degree</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a]">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-600 text-sm font-semibold">Veer Narmad South Gujarat University (VNSGU) • Graduated 2024</p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Core foundation in computer science, software engineering, databases, algorithms, web technologies, and software architecture.
              </p>
            </div>
          </ScrollReveal>

          {/* Core Engineering Strengths */}
          <ScrollReveal direction="up" className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] mb-6">Core Engineering Guarantees</h2>
            <ScrollReveal stagger direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="journey-card p-5 rounded-2xl bg-[#f5f1ea]/60 border border-black/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F5B4C] mb-3"></div>
                <h3 className="text-base font-bold text-[#0a0a0a] mb-1">Clean Liquid 2.0</h3>
                <p className="text-xs text-gray-600 font-medium">100% modular, section-ready code compatible with Shopify OS 2.0 theme editor.</p>
              </div>
              <div className="journey-card p-5 rounded-2xl bg-[#f5f1ea]/60 border border-black/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F5B4C] mb-3"></div>
                <h3 className="text-base font-bold text-[#0a0a0a] mb-1">Custom App Sync</h3>
                <p className="text-xs text-gray-600 font-medium">Python and Node.js app development for automated inventory and API integrations.</p>
              </div>
              <div className="journey-card p-5 rounded-2xl bg-[#f5f1ea]/60 border border-black/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F5B4C] mb-3"></div>
                <h3 className="text-base font-bold text-[#0a0a0a] mb-1">Mobile First & Fast</h3>
                <p className="text-xs text-gray-600 font-medium">Lightning fast mobile load speed, responsive UI, and high Core Web Vitals performance.</p>
              </div>
              <div className="journey-card p-5 rounded-2xl bg-[#f5f1ea]/60 border border-black/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F5B4C] mb-3"></div>
                <h3 className="text-base font-bold text-[#0a0a0a] mb-1">Factual Engineering</h3>
                <p className="text-xs text-gray-600 font-medium">Direct communication, clear code documentation, and reliable project execution.</p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
