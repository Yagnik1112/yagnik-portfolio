import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, otherProjects } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { ArrowRight, Search, ExternalLink, Globe } from 'lucide-react';

export default function FeaturedProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMore, setShowMore] = useState(false);

  const filteredOtherProjects = otherProjects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="py-[60px] lg:py-[100px] bg-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
              Featured <span className="gold-gradient-text">Shopify Projects</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="btn-outline text-xs px-5 py-2.5 flex items-center gap-2 hover:border-gold group self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Projects Section */}
        <div className="pt-16 border-t border-sand-subtle/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-cream">
                More Portfolio Projects <span className="text-gold font-mono text-sm">({otherProjects.length}+)</span>
              </h3>
              <p className="text-sand/70 text-xs mt-1">
                A selection of additional storefronts, liquid customizations, and eCommerce projects.
              </p>
            </div>

            {/* Clean Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/80 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#132E24] border border-sand-subtle/30 rounded-full pl-10 pr-4 py-2.5 text-xs text-cream placeholder:text-sand/60 focus:border-gold focus:outline-none transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Quick List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showMore ? filteredOtherProjects : filteredOtherProjects.slice(0, 12)).map((proj, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-forest-card/80 border border-sand-subtle/20 hover:border-gold/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-cream group-hover:text-gold transition-colors">
                      {proj.name}
                    </div>
                    <div className="text-[10px] text-sand/60 font-mono">
                      {proj.category}
                    </div>
                  </div>
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/60 hover:text-gold p-1.5 rounded-lg hover:bg-forest-dark transition-colors"
                  aria-label={`Visit ${proj.name}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          {filteredOtherProjects.length > 12 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn-secondary text-xs px-6 py-2.5"
              >
                <span>{showMore ? "Show Fewer Projects" : `Show All ${filteredOtherProjects.length} Projects`}</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
