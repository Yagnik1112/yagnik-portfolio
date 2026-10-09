import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronRight, ExternalLink, ArrowLeft, CheckCircle2, ShoppingBag, Code2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { allProjects, getPublicTechnologies } from '../utils/projectFilters';

const defaultRoles = {
  'WordPress Development': 'WordPress Developer',
  'HTML & CSS Website': 'Frontend Developer',
  'Custom Applications': 'Custom Application Developer',
};

/** Related projects: same category first, then the most shared public technologies. */
function getRelatedProjects(project, limit = 3) {
  const techs = new Set(getPublicTechnologies(project));
  return allProjects
    .filter((p) => p.slug !== project.slug)
    .map((p, index) => ({
      p,
      index,
      score: (p.category === project.category ? 2 : 0) + getPublicTechnologies(p).filter((t) => techs.has(t)).length * 0.1 + (p.fullDescription ? 0.5 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ p }) => p);
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug || p.id === slug) || allProjects[0];
  // Track image failures per project so navigating to a related project retries its image
  const [failedImage, setFailedImage] = useState(null);
  const imgError = failedImage === project.slug;
  const relatedProjects = getRelatedProjects(project);
  const technologies = getPublicTechnologies(project);

  // Only show content written for this project — no generic filler for projects without a case study
  const projectRole = project.role || defaultRoles[project.category] || "Shopify Developer";
  const projectFullDesc = project.fullDescription || [project.shortDescription];
  const projectKeyFunc = project.keyFunctionality || [];

  return (
    <>
      <SEO
        title={`${project.title} - ${project.category} | Yagnik Bavaliya`}
        description={project.shortDescription}
        canonical={`https://yagnik-portfolio.vercel.app/projects/${project.slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://yagnik-portfolio.vercel.app/' },
          { name: 'Projects', url: 'https://yagnik-portfolio.vercel.app/projects' },
          { name: project.title, url: `https://yagnik-portfolio.vercel.app/projects/${project.slug}` }
        ]}
      />

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="page-intro-item flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#0F5B4C] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/projects" className="hover:text-[#0F5B4C] transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0F5B4C] font-semibold">{project.title}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/projects"
            className="page-intro-item inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#0F5B4C] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#0F5B4C]" />
            <span>Back to Projects</span>
          </Link>

          {/* Title Header */}
          <div key={`${project.slug}-intro`} className="page-intro max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-mono">
                Role: {projectRole}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Cover Image Display */}
          <ScrollReveal key={`${project.slug}-image`} direction="image" delay={250} className="relative aspect-[16/9] max-h-[550px] w-full rounded-2xl overflow-hidden bg-white border border-black/10 shadow-md mb-16">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-full object-cover object-top"
                onError={() => setFailedImage(project.slug)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0F5B4C] via-[#10B981] to-[#042F26] p-8 sm:p-12 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-white font-mono font-bold text-sm px-3 py-1 rounded bg-white/20 border border-white/30">
                    Project Case Study #{project.id}
                  </span>
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-200 tracking-widest uppercase">{project.category}</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">{project.title}</h2>
                  <p className="text-emerald-100 text-sm max-w-xl mt-2">{project.shortDescription}</p>
                </div>
              </div>
            )}
          </ScrollReveal>

          {/* Content Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
            
            {/* Left Column: Full Overview & Solution */}
            <ScrollReveal direction="up" className="lg:col-span-8 flex flex-col gap-8 text-gray-700 text-base leading-relaxed">
              
              <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-[#0a0a0a] flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-[#0F5B4C]" />
                  <span>Project Overview</span>
                </h2>
                {projectFullDesc.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Functionality List (case studies only) */}
              {projectKeyFunc.length > 0 && (
              <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#0F5B4C]" />
                  <span>Key Technical Deliverables & Features</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectKeyFunc.map((func, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-[#0a0a0a]">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5B4C] shrink-0 mt-0.5" />
                      <span>{func}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}

            </ScrollReveal>

            {/* Right Column: Meta Sidebar & Live CTA */}
            <ScrollReveal direction="right" delay={120} className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
              
              {/* Sidebar Info Card */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-6">
                
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-btn tactile-btn-emerald btn-arrow-diagonal w-full py-3.5 px-6 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                )}

                <div className="pt-4 border-t border-black/10 flex flex-col gap-4 text-xs">
                  <div>
                    <span className="text-gray-400 font-mono uppercase block mb-1">Developer Role:</span>
                    <span className="text-[#0a0a0a] font-bold text-sm">{projectRole}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 font-mono uppercase block mb-1">Category:</span>
                    <span className="text-[#0F5B4C] font-semibold">{project.category}</span>
                  </div>

                  {project.industry && (
                    <div>
                      <span className="text-gray-400 font-mono uppercase block mb-1">Client / Industry:</span>
                      <span className="text-[#0a0a0a] font-semibold">{project.industry}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-gray-400 font-mono uppercase block mb-2">Technologies Used:</span>
                    <ul className="tech-tag-list flex flex-wrap gap-1.5">
                      {technologies.map((tech) => (
                        <li key={tech} className="px-2.5 py-1 rounded bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] font-mono text-[10px]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Developer Verification Badge */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600">
                <div className="font-bold text-[#0a0a0a] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <span>Factual Portfolio Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  All technical descriptions and deliverables reflect actual development work completed by Yagnik Bavaliya without invented metrics.
                </p>
              </div>

            </ScrollReveal>

          </div>

          {/* Related Projects */}
          <div className="pt-16 border-t border-black/10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">
              Explore Related Projects
            </h2>

            <ScrollReveal stagger direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProj) => (
                <div key={relProj.slug} className="blog-card p-6 rounded-2xl bg-white border border-black/10 flex flex-col justify-between group">
                  <div>
                    <span className="text-[10px] font-mono text-[#0F5B4C] uppercase font-semibold">{relProj.category}</span>
                    <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors mt-1 mb-2">
                      <Link to={`/projects/${relProj.slug}`}>{relProj.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                      {relProj.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${relProj.slug}`}
                    className="link-arrow text-xs font-semibold text-[#0F5B4C] hover:text-[#10B981] flex items-center gap-1 mt-2"
                    aria-label={`Read case study: ${relProj.title}`}
                  >
                    <span>{relProj.fullDescription ? 'Read Case Study' : 'View Project'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </>
  );
}
