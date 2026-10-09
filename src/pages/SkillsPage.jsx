import { useState } from 'react';
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
import ScrollReveal from '../components/ScrollReveal';
import SegmentedTabs from '../components/SegmentedTabs';

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-1/3 left-0 w-[650px] h-[650px] bg-[#0F5B4C]/10 rounded-full blur-[170px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#10B981]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="page-intro max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4">
              <span>Technical Competencies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              Skills, Tools & <span className="text-[#0F5B4C]">Technology Stack</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Categorized breakdown of development tools, languages, frameworks, and eCommerce platform capabilities used across client projects.
            </p>
          </div>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={250} className="filter-bar flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
            {/* Category filter with sliding indicator */}
            <SegmentedTabs
              mode="filter"
              items={categories}
              value={activeCategory}
              onChange={setActiveCategory}
              ariaLabel="Filter skills by category"
            />

            {/* Clean Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                aria-label="Search technologies"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-[#0a0a0a] placeholder:text-gray-400 focus:border-[#0F5B4C] focus:outline-none transition-colors"
              />
            </div>
          </ScrollReveal>

          {/* Skill Category Cards */}
          <div key={activeCategory} className="fade-swap flex flex-col gap-10 mb-20">
            {filteredCategories.map((catGroup) => (
              <div
                key={catGroup.category}
                className="skill-page-group p-6 sm:p-8 rounded-2xl bg-white border border-black/10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-black/10 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F5B4C]"></div>
                    <h2 className="text-xl font-bold text-[#0a0a0a] tracking-wide">
                      {catGroup.category}
                    </h2>
                  </div>
                  <p className="text-xs text-gray-500">
                    {catGroup.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {catGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="skill-chip skill-chip-lg group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="skill-chip-icon">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-[10px] text-gray-500 font-mono">
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
            {filteredCategories.length === 0 && (
              <p className="empty-state">No technologies match “{searchTerm}”.</p>
            )}
          </div>

          {/* Bottom CTA Box */}
          <ScrollReveal direction="scale" className="cta-panel p-8 sm:p-10 lg:p-12 rounded-2xl bg-gradient-to-r from-white via-emerald-50 to-[#faf8f5] border border-black/10 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 sm:mt-20">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] leading-tight">Need specific tech stack integration?</h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Discuss your custom Liquid sections, Python apps, REST/GraphQL APIs, or headless architecture directly with Yagnik.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact" className="tactile-btn tactile-btn-emerald btn-arrow px-6 py-3 text-xs font-semibold flex items-center gap-2">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
