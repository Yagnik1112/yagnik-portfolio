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
import ScrollReveal from '../components/ScrollReveal';
import Accordion from '../components/Accordion';

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-12 left-10 w-[550px] h-[550px] bg-[#0F5B4C]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-5 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[170px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="page-intro max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4 shadow-xs font-bold">
              <span>Service Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              Professional <span className="text-[#0F5B4C]">Shopify & eCommerce</span> Solutions
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Engineering performant, scalable eCommerce storefronts tailored to business requirements. Explore the specialized services I provide for brands, agencies, and international clients.
            </p>
          </div>

          <div className="flex flex-col gap-12 mb-24">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.iconName] || Code2;
              return (
                <ScrollReveal
                  key={service.id}
                  id={service.slug}
                  direction="up"
                  className="service-detail-card p-8 sm:p-10 rounded-2xl bg-white border border-black/10 relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] group-hover:bg-[#0F5B4C] group-hover:text-white transition-all">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#0F5B4C] uppercase tracking-wider font-bold">Service #{service.id}</span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                        {service.fullDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-gray-500 font-medium">Target Capabilities:</span>
                        {service.targetKeywords.map((kw) => (
                          <span
                            key={kw}
                            className="px-2.5 py-0.5 rounded-full bg-[#f5f1ea] border border-black/5 text-[#0a0a0a] text-[10px] font-mono font-semibold"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ScrollReveal stagger direction="right" delay={150} className="lg:col-span-5 bg-[#f5f1ea]/60 p-6 rounded-2xl border border-black/5 flex flex-col gap-3">
                      <h3 className="text-xs font-bold text-[#0F5B4C] uppercase tracking-wider mb-2 font-mono">
                        Deliverables & Scope:
                      </h3>
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0a0a0a] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0F5B4C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </ScrollReveal>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* FAQs Section */}
          <ScrollReveal direction="up" className="p-8 sm:p-12 rounded-2xl bg-white border border-black/10 mb-20 shadow-md">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#0F5B4C]" />
              <span>Frequently Asked Questions</span>
            </h2>

            <Accordion items={faqs} />
          </ScrollReveal>

          {/* Bottom CTA Box */}
          <ScrollReveal direction="scale" className="cta-panel p-8 sm:p-10 lg:p-12 rounded-2xl bg-white border border-black/10 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] leading-tight">Need custom Shopify development?</h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Discuss your store requirements, theme customization, or custom app timeline directly with Yagnik.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact" className="tactile-btn tactile-btn-emerald btn-arrow px-6 py-3.5 text-xs font-semibold flex items-center gap-2">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
