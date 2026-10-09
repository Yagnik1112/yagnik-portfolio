import { useEffect, useRef, useState } from 'react';
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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

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

/**
 * Services explorer: a tab list of every service with a detail panel.
 * All panels are rendered (inactive ones hidden) so the content stays indexable.
 */
export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  // Keep the active tab in view inside the horizontally scrolling list (mobile)
  useEffect(() => {
    const list = listRef.current;
    const btn = list?.querySelectorAll('[role="tab"]')[active];
    if (btn && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: btn.offsetLeft - (list.clientWidth - btn.offsetWidth) / 2, behavior: 'smooth' });
    }
  }, [active]);

  const select = (index, focus = false) => {
    const next = (index + servicesData.length) % servicesData.length;
    setActive(next);
    if (focus) {
      listRef.current?.querySelectorAll('[role="tab"]')[next]?.focus({ preventScroll: true });
    }
  };

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      e.preventDefault();
      select(active + keys[e.key], true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      select(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      select(servicesData.length - 1, true);
    }
  };

  return (
    <section id="services" className="py-[100px] bg-[#f6f5f0] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          eyebrow="What I Do"
          title={<>Specialized <span className="text-[#0F5B4C]">Shopify & eCommerce</span> Services</>}
          subtitle={`${servicesData.length} focused services — pick one to see the scope and deliverables.`}
          action={
            <Link to="/services" className="section-link group">
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <ScrollReveal direction="up" className="services-explorer">
          {/* Service list (tabs) */}
          <div
            ref={listRef}
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            className="services-tabs"
            onKeyDown={onKeyDown}
          >
            {servicesData.map((service, idx) => {
              const IconComponent = iconMap[service.iconName] || Code2;
              const isActive = idx === active;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(idx)}
                  className={`services-tab ${isActive ? 'is-active' : ''}`}
                >
                  <span className="services-tab-icon">
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span className="services-tab-title">{service.title}</span>
                  <span className="services-tab-num">{service.id}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panels */}
          <div className="services-panels">
            {servicesData.map((service, idx) => {
              const IconComponent = iconMap[service.iconName] || Code2;
              const isActive = idx === active;
              return (
                <div
                  key={service.id}
                  id={`service-panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${service.id}`}
                  hidden={!isActive}
                  className="services-panel"
                >
                  <div className="services-panel-head">
                    <div className="services-panel-icon">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="services-panel-num">Service #{service.id}</span>
                  </div>

                  <h3 className="services-panel-title">{service.title}</h3>
                  <p className="services-panel-lead">{service.shortDescription}</p>
                  <p className="services-panel-body">{service.fullDescription}</p>

                  <ul className="services-panel-features">
                    {service.features.map((feat, fIdx) => (
                      <li key={feat} style={{ '--i': fIdx }}>
                        <CheckCircle2 className="w-4 h-4 text-[#0F5B4C] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="services-panel-footer">
                    <Link to={`/services#${service.slug}`} className="tactile-btn tactile-btn-emerald btn-arrow px-5 py-3 text-xs font-semibold flex items-center gap-2">
                      <span>Read Details</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                    <Link to="/contact" className="link-arrow text-xs font-bold text-stone-800 hover:text-[#0F5B4C] flex items-center gap-1.5 transition-colors">
                      <span>Discuss this service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0F5B4C]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
