import { useState } from 'react';
import { siteData } from '../data/siteData';
import { Smartphone, ShoppingBag, Code2, Layers, Atom, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import Collapsible, { ExpandToggle } from './Collapsible';

const journeySteps = [
  { title: "Flutter App Dev", desc: "Started with mobile UI components and state management.", icon: Smartphone },
  { title: "Shopify Core", desc: "Transitioned to eCommerce building Liquid themes & sections.", icon: ShoppingBag },
  { title: "eCommerce Solutions", desc: "Solved custom store logic, checkout & multi-currency setups.", icon: Code2 },
  { title: "Custom Development", desc: "Built bespoke Liquid sections & Figma-to-Shopify storefronts.", icon: Layers },
  { title: "Shopify Apps", desc: "Created Python/Node apps syncing machine output & inventory.", icon: Sparkles },
  { title: "React & Modern Web", desc: "Currently mastering React and headless app ecosystems.", icon: Atom },
];

export default function AboutSection() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="about" className="py-[100px] bg-[#f6f5f0] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          align="center"
          eyebrow="About Me"
          title={<>Bridging App Craftsmanship with <span className="text-[#0F5B4C]">Shopify eCommerce</span></>}
        />

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <ScrollReveal direction="left" className="lg:col-span-7 flex flex-col gap-6 text-stone-700 text-base leading-relaxed font-medium">
            <p className="text-lg text-[#0a0a0a] font-semibold">
              {siteData.bioAboutShort}
            </p>

            <p className="text-stone-600">
              Whether it's building liquid themes from scratch, converting Figma files into dynamic section components, or connecting machine output data with Shopify inventory APIs, I take pride in writing clean, reliable code that drives real business results.
            </p>

            {/* Full story: revealed inline instead of a modal */}
            <Collapsible open={storyOpen} id="about-full-story">
              <div className="about-story">
                <div className="about-story-head">
                  <div className="w-10 h-10 rounded-full bg-[#0F5B4C] text-white flex items-center justify-center font-bold shrink-0">
                    YB
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0a0a]">Full Background & Philosophy</h3>
                    <p className="text-xs text-[#0F5B4C] font-mono font-bold">Flutter → Shopify → eCommerce → Apps</p>
                  </div>
                </div>
                {siteData.bioAboutFull.map((paragraph, index) => (
                  <p key={index} className="about-story-p text-stone-600 text-sm leading-relaxed" style={{ '--i': index }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Collapsible>

            <div className="pt-2">
              <ExpandToggle
                open={storyOpen}
                onToggle={() => setStoryOpen((v) => !v)}
                controls="about-full-story"
                moreLabel="Read My Full Story"
                lessLabel="Read Less"
                variant="solid"
              />
            </div>
          </ScrollReveal>

          {/* Right Column: Career Progression Timeline */}
          <ScrollReveal direction="right" delay={120} className="lg:col-span-5 bg-white text-[#0a0a0a] rounded-2xl p-6 sm:p-8 border border-black/10 career-card">
            <h3 className="text-lg font-bold text-[#0a0a0a] mb-6 flex items-center justify-between gap-3">
              <span>Career Progression</span>
              <span className="text-xs font-mono text-[#0F5B4C] px-3 py-1 rounded-full bg-[#f5f1ea] border border-[#0F5B4C]/20 font-bold">
                2022 - Present
              </span>
            </h3>

            <ScrollReveal as="ol" stagger direction="up" className="timeline">
              {journeySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <li key={step.title} className="timeline-step group">
                    <span className="timeline-icon">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                        {step.title}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5 leading-snug font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ScrollReveal>

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-stone-600">
              <span className="font-mono text-[#0F5B4C] font-bold">Location:</span>
              <span className="font-semibold text-stone-900">Surat, Gujarat, India</span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
