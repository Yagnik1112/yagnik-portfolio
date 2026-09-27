import React, { useState } from 'react';
import SEO from '../components/SEO';
import { featuredProjects, otherProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { Search, Globe, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Shopify 2.0', 'Theme Development', 'Custom App', 'Multi-Market', 'SEO'];

  const filteredFeatured = featuredProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const filteredOther = otherProjects.filter((p) => {
    const title = p.title || p.name || '';
    const desc = p.shortDescription || '';
    const tech = (p.technologies || []).join(' ');
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Shopify Portfolio Projects | Yagnik Bavaliya"
        description="Explore 60+ Shopify eCommerce projects, custom 2.0 themes, Python inventory apps, multi-currency stores, and 3PL integrations built by Yagnik Bavaliya."
        canonical="https://yagnik-portfolio.vercel.app/projects"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Animated Ambient Background Visuals */}
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gold/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Complete Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              Shopify Storefronts & <span className="gold-gradient-text">eCommerce Case Studies</span>
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              Real-world Shopify projects built for international merchants, brands, and businesses across themes, custom apps, and multi-market configurations.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 p-5 rounded-2xl bg-[#132E24] border border-sand-subtle/30 shadow-xl">
            
            {/* Category Tabs with explicit high-contrast text */}
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

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gold pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-full pl-10 pr-4 py-2.5 text-xs text-cream placeholder:text-sand/60 focus:border-gold focus:outline-none transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Featured Case Studies Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-cream mb-8">
              Featured Case Studies ({filteredFeatured.length})
            </h2>

            {filteredFeatured.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFeatured.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-sand/70 rounded-2xl bg-forest-card border border-sand-subtle/20">
                No featured case studies match your search criteria.
              </div>
            )}
          </div>

          {/* Additional Projects List */}
          <div className="pt-12 border-t border-sand-subtle/30">
            <h2 className="text-2xl font-bold text-cream mb-8">
              All Client Storefronts & eCommerce Projects ({filteredOther.length})
            </h2>

            {filteredOther.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOther.map((proj) => (
                  <ProjectCard key={proj.id || proj.slug} project={proj} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-sand/70 rounded-2xl bg-forest-card border border-sand-subtle/20">
                No additional projects match your search criteria.
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
