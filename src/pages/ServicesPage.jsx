import React from 'react';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';
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
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { FigmaIcon } from '../components/Icons';
import MagneticButton from '../components/MagneticButton';

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

export default function ServicesPage() {
  const faqs = [
    {
      question: "What types of Shopify projects do you handle?",
      answer: "I handle end-to-end custom Shopify store builds, Shopify 2.0 theme migrations, bespoke Liquid section development, Figma-to-Shopify storefront builds, private Python/Node app development, and 3PL/API integrations."
    },
    {
      question: "Do you build custom themes from scratch or customize existing ones?",
      answer: "Both. Depending on budget and requirements, I can build bespoke Shopify 2.0 themes completely from scratch or customize existing store themes to meet exact design specifications."
    },
    {
      question: "How do you handle Shopify multi-currency & international setups?",
      answer: "I utilize native Shopify Markets to configure country-specific currencies, subfolders, custom domain mappings, duties, and regional catalog displays while maintaining unified inventory."
    },
    {
      question: "Can you build custom applications for complex business logic?",
      answer: "Yes. I have experience building custom Python-based and Node.js applications that sync factory machinery telemetry data, 3PL logistics pipelines, and custom inventory workflows with Shopify Admin APIs."
    }
  ];

  return (
    <>
      <SEO
        title="Shopify Development Services | Yagnik Bavaliya"
        description="Comprehensive Shopify development services including Shopify 2.0 theme customization, custom apps, Liquid sections, Figma to Shopify conversion, and technical SEO."
        canonical="https://yagnik-portfolio.vercel.app/services"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Ambient Animated Background Elements */}
        <div className="absolute top-12 left-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-float-orb"></div>
        <div className="absolute top-1/2 right-5 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[170px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none animate-float-orb"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Service Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              Professional <span className="gold-gradient-text">Shopify & eCommerce</span> Solutions
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              Engineering performant, scalable eCommerce storefronts tailored to business requirements. Explore the specialized services I provide for brands, agencies, and international clients.
            </p>
          </div>

          <div className="flex flex-col gap-12 mb-24">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.iconName] || Code2;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="p-8 sm:p-10 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-2xl relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-gold uppercase tracking-wider">Service #{service.id}</span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-cream group-hover:text-gold transition-colors">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sand/90 text-sm leading-relaxed mb-6 font-medium">
                        {service.fullDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-sand/60">Target Capabilities:</span>
                        {service.targetKeywords.map((kw) => (
                          <span
                            key={kw}
                            className="px-2.5 py-0.5 rounded bg-[#0B1D17] border border-sand-subtle/20 text-sand/80 text-[10px] font-mono"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#0B1D17]/80 p-6 rounded-xl border border-sand-subtle/20 flex flex-col gap-3">
                      <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">
                        Deliverables & Scope:
                      </h3>
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-cream font-medium">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQs Section */}
          <div className="p-8 sm:p-12 rounded-2xl bg-forest-card border border-sand-subtle/30 mb-20 shadow-xl">
            <h2 className="text-2xl font-bold text-cream mb-8 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-gold" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-gold">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/85 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Box with proper padding and text alignment */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-gradient-to-r from-forest-card via-[#132E24] to-[#0B1D17] border-2 border-gold/40 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-cream leading-tight">Need custom Shopify development?</h2>
              <p className="text-sand/85 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Discuss your store requirements, theme customization, or custom app timeline directly with Yagnik.
              </p>
            </div>
            <MagneticButton className="shrink-0">
              <Link to="/contact" className="btn-primary">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>

        </div>
      </div>
    </>
  );
}
