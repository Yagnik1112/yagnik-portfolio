import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';
import {
  ShoppingBag,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Boxes,
  Globe2,
  Cpu,
  Layers,
  FileCode,
  Palette,
  Zap,
  Atom,
  Server,
  FileCode2,
  Binary,
  Send,
  Share2,
  Globe,
  Layout,
  GitBranch,
  GitFork,
  Code,
  Bot,
  Search,
  BarChart3,
  Tag,
  Mail,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

const iconMap = {
  ShoppingBag,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Boxes,
  Globe2,
  Cpu,
  Layers,
  FileCode,
  Palette,
  Zap,
  Atom,
  Server,
  FileCode2,
  Binary,
  Send,
  Share2,
  Globe,
  Layout,
  GitBranch,
  Github: GithubIcon,
  GitFork,
  Figma: FigmaIcon,
  Code,
  Bot,
  Search,
  BarChart3,
  Tag,
  Mail
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-[60px] lg:py-[100px] bg-[#132E24] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-dark border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
              Skills & <span className="gold-gradient-text">Technologies</span>
            </h2>
          </div>

          {/* Category Filter Tabs with explicit high-contrast classes */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0B1D17] p-2 rounded-full border border-sand-subtle/30">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gold text-[#0B1D17] shadow-md border border-gold font-extrabold'
                      : 'bg-[#0B1D17] text-cream border border-sand-subtle/30 hover:border-gold hover:text-gold font-semibold'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-sand-subtle/20 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                  <h3 className="text-xl font-bold text-cream tracking-wide">
                    {catGroup.category}
                  </h3>
                </div>
                <p className="text-xs text-sand/70">
                  {catGroup.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-3">
                {catGroup.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 transition-all duration-300 flex items-center justify-between group hover:-translate-y-0.5 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-cream group-hover:text-gold transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[10px] text-sand/60 font-mono">
                            {skill.tag}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Dedicated Skills Page */}
        <div className="mt-12 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 btn-gold text-xs px-6 py-3 font-bold"
          >
            <span>Explore Full Skills Page & Search Stack</span>
            <ArrowRight className="w-4 h-4 text-[#0B1D17]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
