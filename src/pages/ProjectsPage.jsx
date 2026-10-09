import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import SegmentedTabs from '../components/SegmentedTabs';
import { Search, ChevronDown } from 'lucide-react';
import { ALL_FILTER, allProjects, filterProjects, getFilterOptions, isFeatured } from '../utils/projectFilters';

const PAGE_SIZE = 12;
const filterOptions = getFilterOptions(allProjects);

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  // A filter can be preselected via ?filter=WordPress (used by the homepage showcase links)
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('filter');
  const [activeFilter, setActiveFilter] = useState(
    filterOptions.some((o) => o.value === requested) ? requested : ALL_FILTER
  );
  const filterKey = `${activeFilter}|${searchTerm}`;
  // Pagination resets automatically whenever the filters change
  const [shown, setShown] = useState({ key: filterKey, count: PAGE_SIZE });
  const visibleCount = shown.key === filterKey ? shown.count : PAGE_SIZE;

  // One filtered list, split into the featured case studies and the remaining client projects
  const results = filterProjects(allProjects, { filter: activeFilter, query: searchTerm });
  const filteredFeatured = results.filter(isFeatured);
  const filteredOther = results.filter((p) => !isFeatured(p));

  const visibleOther = filteredOther.slice(0, visibleCount);
  const remaining = filteredOther.length - visibleOther.length;
  const filterLabel = activeFilter === ALL_FILTER ? 'all projects' : activeFilter;

  return (
    <>
      <SEO
        title="Shopify Portfolio Projects | Yagnik Bavaliya"
        description="Explore Shopify eCommerce projects, custom Shopify 2.0 themes, a custom inventory management application, WordPress sites, multi-currency stores, and 3PL integrations built by Yagnik Bavaliya."
        canonical="https://yagnik-portfolio.vercel.app/projects"
      />

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="page-intro max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4">
              <span>Complete Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              Shopify Storefronts & <span className="text-[#0F5B4C]">eCommerce Case Studies</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Real-world projects for international merchants and businesses: Shopify stores and themes, WordPress and hand-coded websites, and a custom inventory application.
            </p>
          </div>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={250} className="filter-bar flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-6 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">

            {/* Technology & category filters (derived from project data) */}
            <SegmentedTabs
              mode="filter"
              items={filterOptions}
              value={activeFilter}
              onChange={setActiveFilter}
              ariaLabel="Filter projects by technology or category"
            />

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                aria-label="Search projects"
                placeholder="Search projects, industries, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-[#0a0a0a] placeholder:text-gray-400 focus:border-[#0F5B4C] focus:outline-none transition-colors"
              />
            </div>
          </ScrollReveal>

          <p className="results-summary mb-12" aria-live="polite">
            Showing <strong>{results.length}</strong> {results.length === 1 ? 'project' : 'projects'} for <strong>{filterLabel}</strong>
            {searchTerm.trim() && <> matching “{searchTerm.trim()}”</>}
          </p>

          {results.length === 0 && (
            <div className="empty-state">
              No projects match this filter and search. Try another technology or clear the search.
            </div>
          )}

          {/* Featured Case Studies Grid */}
          {filteredFeatured.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">
                Featured Case Studies ({filteredFeatured.length})
              </h2>

              <ScrollReveal key={activeFilter} stagger direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFeatured.map((project, idx) => (
                  <ProjectCard key={project.slug} project={project} eager={idx < 3} />
                ))}
              </ScrollReveal>
            </div>
          )}

          {/* Additional Projects List */}
          {filteredOther.length > 0 && (
            <div className={filteredFeatured.length > 0 ? 'pt-12 border-t border-black/10' : ''}>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">
                More Client Projects ({filteredOther.length})
              </h2>

              <div key={activeFilter} className="fade-swap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleOther.map((proj, idx) => (
                  <div key={proj.slug} className="load-more-item" style={{ '--i': idx % PAGE_SIZE }}>
                    <ProjectCard project={proj} />
                  </div>
                ))}
              </div>

              {remaining > 0 && (
                <div className="mt-12 flex flex-col items-center gap-3">
                  <p className="text-xs font-mono text-stone-500">
                    Showing {visibleOther.length} of {filteredOther.length} projects
                  </p>
                  <button
                    type="button"
                    onClick={() => setShown({ key: filterKey, count: visibleCount + PAGE_SIZE })}
                    className="expand-toggle"
                  >
                    <span>Load {Math.min(PAGE_SIZE, remaining)} More Projects</span>
                    <ChevronDown className="expand-toggle-icon" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
