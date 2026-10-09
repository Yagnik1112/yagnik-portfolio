import { useState } from 'react';
import { featuredProjects, otherProjects } from '../data/projectsData';
import ProjectShowcase from './ProjectShowcase';
import ScrollReveal from './ScrollReveal';
import Collapsible, { ExpandToggle } from './Collapsible';
import { Search, ExternalLink, Globe } from 'lucide-react';
import { allProjects, getFilterOptions, matchesSearch } from '../utils/projectFilters';

const PREVIEW_COUNT = 6;
// Category shortcuts shown under the showcase (link to the pre-filtered projects page)
const showcaseFilters = getFilterOptions(allProjects)
  .filter((o) => ['Shopify', 'WordPress', 'Custom Applications'].includes(o.value))
  .map((o) => ({ ...o, label: o.value === 'Custom Applications' ? 'Custom Apps' : o.value }));

function DirectoryItem({ proj, index }) {
  return (
    <div className="directory-item group" style={{ '--i': index }}>
      <div className="flex items-center gap-3 min-w-0">
        <div className="directory-icon">
          <Globe className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="directory-name">{proj.name}</div>
          <div className="directory-category">{proj.industry || proj.category}</div>
        </div>
      </div>

      <a
        href={proj.url}
        target="_blank"
        rel="noopener noreferrer"
        className="directory-link"
        aria-label={`Visit ${proj.name}`}
      >
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function FeaturedProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMore, setShowMore] = useState(false);

  const query = searchTerm.trim().toLowerCase();
  const filteredOtherProjects = otherProjects.filter((p) => matchesSearch(p, query));

  // While searching, every match is shown; otherwise show a short preview that can be expanded.
  const isSearching = query.length > 0;
  const preview = isSearching ? filteredOtherProjects : filteredOtherProjects.slice(0, PREVIEW_COUNT);
  const rest = isSearching ? [] : filteredOtherProjects.slice(PREVIEW_COUNT);

  return (
    <section id="projects" className="projects-section pt-[100px] pb-[100px] bg-[#ffffff] text-[#0a0a0a] relative border-t border-black/10">
      {/* Featured case studies: scroll-linked 3D showcase (carousel on small screens) */}
      <ProjectShowcase projects={featuredProjects} totalCount={allProjects.length} filterLinks={showcaseFilters} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">

        {/* More Projects Directory */}
        <ScrollReveal direction="up" className="directory">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a]">
                More Portfolio Projects <span className="text-[#0F5B4C] font-mono text-sm">({otherProjects.length}+)</span>
              </h3>
              <p className="text-gray-600 text-xs mt-1 font-medium">
                A selection of additional storefronts, liquid customizations, and eCommerce projects.
              </p>
            </div>

            {/* Clean Search Input */}
            <div className="search-field relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search projects..."
                aria-label="Search more portfolio projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-[#0a0a0a] placeholder:text-gray-400 focus:border-[#0F5B4C] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Quick List Grid with White Cards */}
          <div key={query} className="directory-grid fade-swap">
            {preview.map((proj, idx) => (
              <DirectoryItem key={proj.id} proj={proj} index={idx} />
            ))}
          </div>

          {preview.length === 0 && (
            <p className="empty-state">No projects match “{searchTerm}”.</p>
          )}

          {rest.length > 0 && (
            <>
              <Collapsible open={showMore} id="more-projects-list">
                <div className="directory-grid directory-grid-rest">
                  {rest.map((proj, idx) => (
                    <DirectoryItem key={proj.id} proj={proj} index={idx} />
                  ))}
                </div>
              </Collapsible>

              <div className="mt-8 flex justify-center">
                <ExpandToggle
                  open={showMore}
                  onToggle={() => setShowMore((v) => !v)}
                  controls="more-projects-list"
                  moreLabel={`Show All ${filteredOtherProjects.length} Projects`}
                  lessLabel="Show Fewer Projects"
                />
              </div>
            </>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}
