import React, { useState } from 'react';
import SEO from '../components/SEO';
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
import { GithubIcon, FigmaIcon } from '../components/Icons';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';

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

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = skillsData
    .map((group) => {
      const filteredSkills = group.skills.filter(
        (sk) =>
          sk.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sk.tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...group, skills: filteredSkills };
    })
    .filter(
      (group) =>
        (activeCategory === 'All' || group.category === activeCategory) && group.skills.length > 0
    );

  return (
    <>
      <SEO
        title="Technical Skills & Stack | Yagnik Bavaliya"
        description="Comprehensive technical skill stack of Yagnik Bavaliya: Shopify 2.0, Liquid, Metafields, Python inventory apps, REST/GraphQL APIs, React, HTML/CSS, and SEO."
        canonical="https://yagnik-portfolio.vercel.app/skills"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Animated Ambient Background Visuals */}
        <div className="absolute top-1/3 left-0 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-[170px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-gold/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Technical Competencies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              Skills, Tools & <span className="gold-gradient-text">Technology Stack</span>
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              Categorized breakdown of development tools, languages, frameworks, and eCommerce platform capabilities used across client projects.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 p-5 rounded-2xl bg-[#132E24] border border-sand-subtle/30 shadow-xl">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-full transition-all duration-300 ${
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

            {/* Clean Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gold pointer-events-none" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-full pl-10 pr-4 py-2.5 text-xs text-cream placeholder:text-sand/60 focus:border-gold focus:outline-none transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Skill Category Cards */}
          <div className="flex flex-col gap-10 mb-20">
            {filteredCategories.map((catGroup) => (
              <div
                key={catGroup.category}
                className="p-6 sm:p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-sand-subtle/20 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                    <h2 className="text-xl font-bold text-cream tracking-wide">
                      {catGroup.category}
                    </h2>
                  </div>
                  <p className="text-xs text-sand/70">
                    {catGroup.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {catGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-[#0B1D17] border border-sand-subtle/20 hover:border-gold/50 transition-all duration-300 flex items-center justify-between group shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                            <IconComponent className="w-4.5 h-4.5" />
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

          {/* Bottom CTA Box with proper padding, top margin, and text hierarchy matching ServicesPage */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-gradient-to-r from-forest-card via-[#132E24] to-[#0B1D17] border-2 border-gold/40 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 sm:mt-20">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-cream leading-tight">Need specific tech stack integration?</h2>
              <p className="text-sand/85 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Discuss your custom Liquid sections, Python apps, REST/GraphQL APIs, or headless architecture directly with Yagnik.
              </p>
            </div>
            <MagneticButton className="shrink-0">
              <Link to="/contact" className="btn-primary">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>

        </div>
      </div>
    </>
  );
}
