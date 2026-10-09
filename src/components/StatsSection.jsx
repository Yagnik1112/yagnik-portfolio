import { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/siteData';
import { prefersReducedMotion, useInView } from '../hooks/useMotion';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

/** Animates the numeric part of values like "60+" from 0 once `start` is true. */
function CountUp({ value, start, duration = 1600 }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';
  const [current, setCurrent] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (!start || target === null || prefersReducedMotion()) return undefined;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setCurrent(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  if (target === null) return value;
  return (
    <>
      {/* Reserve the final width so the card never shifts while counting */}
      <span className="count-up" style={{ minWidth: `${String(target).length}ch` }}>{current}</span>
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const gridRef = useRef(null);
  const isVisible = useInView(gridRef, { rootMargin: '0px 0px -15% 0px' });

  return (
    <section className="py-[100px] bg-[#f6f5f0] text-[#0a0a0a] relative overflow-hidden border-y border-black/10">
      <div className="absolute inset-0 stats-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          align="center"
          eyebrow="Proven Track Record"
          title={<>Key Metrics & <span className="text-[#0F5B4C]">Milestones</span></>}
          subtitle="Verifiable development experience across international storefronts, custom apps, and technical SEO builds."
        />

        {/* 100% Center Aligned Number Block Grid */}
        <div ref={gridRef}>
          <ScrollReveal stagger direction="up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {siteData.stats.map((stat) => (
              <div key={stat.label} className="stat-card group">
                <div className="stat-value">
                  <CountUp value={stat.value} start={isVisible} />
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.description}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
