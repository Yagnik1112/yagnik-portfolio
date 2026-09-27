import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { featuredProjects, otherProjects } from '../data/projectsData';
import { ChevronRight, ExternalLink, ArrowLeft, CheckCircle2, ShoppingBag, Code2, Globe, Cpu } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const allProjects = [...featuredProjects, ...otherProjects];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [imgError, setImgError] = useState(false);

  const project = allProjects.find((p) => p.slug === slug || p.id === slug) || allProjects[0];
  const relatedProjects = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const projectRole = project.role || "Shopify Developer";
  const projectFullDesc = project.fullDescription || [
    project.shortDescription,
    `I developed and customized the ${project.title} storefront, building custom Liquid sections, optimizing mobile responsiveness, and ensuring high eCommerce conversion standards.`
  ];
  const projectKeyFunc = project.keyFunctionality || [
    `Custom Shopify 2.0 section architecture`,
    `Responsive mobile UI & speed optimization`,
    `Third-party app ecosystem integration`,
    `Custom styling & Liquid template development`
  ];

  return (
    <>
      <SEO
        title={`${project.title} - Shopify Case Study | Yagnik Bavaliya`}
        description={project.shortDescription}
        canonical={`https://yagnik-portfolio.vercel.app/projects/${project.slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://yagnik-portfolio.vercel.app/' },
          { name: 'Projects', url: 'https://yagnik-portfolio.vercel.app/projects' },
          { name: project.title, url: `https://yagnik-portfolio.vercel.app/projects/${project.slug}` }
        ]}
      />

      <div className="pt-32 pb-24 bg-[#0B1D17] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-sand/70 mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand/40" />
            <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand/40" />
            <span className="text-gold font-semibold">{project.title}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand hover:text-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-gold" />
            <span>Back to Projects</span>
          </Link>

          {/* Title Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#132E24] border border-sand-subtle/30 text-sand text-xs font-mono">
                Role: {projectRole}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-sand/90 text-lg sm:text-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Cover Image Display */}
          <div className="relative aspect-[16/9] max-h-[550px] w-full rounded-2xl overflow-hidden bg-forest-card border-2 border-gold/30 shadow-2xl mb-16">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0F5B4C] via-[#1E4738] to-[#0B1D17] p-8 sm:p-12 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-gold font-mono font-bold text-sm px-3 py-1 rounded bg-gold/10 border border-gold/30">
                    Project Case Study #{project.id}
                  </span>
                  <ShoppingBag className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gold tracking-widest uppercase">{project.category}</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-cream mt-2">{project.title}</h2>
                  <p className="text-sand/80 text-sm max-w-xl mt-2">{project.shortDescription}</p>
                </div>
              </div>
            )}
          </div>

          {/* Content Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
            
            {/* Left Column: Full Overview & Solution */}
            <div className="lg:col-span-8 flex flex-col gap-8 text-sand/90 text-base leading-relaxed">
              
              <div className="p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-cream flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-gold" />
                  <span>Project Overview</span>
                </h2>
                {projectFullDesc.map((paragraph, index) => (
                  <p key={index} className="text-sand/90 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Functionality List */}
              <div className="p-8 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl">
                <h2 className="text-2xl font-bold text-cream mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                  <span>Key Technical Deliverables & Features</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectKeyFunc.map((func, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1D17]/80 border border-sand-subtle/20 text-xs sm:text-sm text-cream">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{func}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Meta Sidebar & Live CTA */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Sidebar Info Card */}
              <div className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl flex flex-col gap-6">
                
                {project.url && (
                  <MagneticButton className="w-full">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-3.5 w-full"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                )}

                <div className="pt-4 border-t border-sand-subtle/20 flex flex-col gap-4 text-xs">
                  <div>
                    <span className="text-sand/60 font-mono uppercase block mb-1">Developer Role:</span>
                    <span className="text-cream font-bold text-sm">{projectRole}</span>
                  </div>

                  <div>
                    <span className="text-sand/60 font-mono uppercase block mb-1">Category:</span>
                    <span className="text-gold font-semibold">{project.category}</span>
                  </div>

                  <div>
                    <span className="text-sand/60 font-mono uppercase block mb-2">Technologies Used:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-[#0B1D17] border border-gold/30 text-gold font-mono text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Developer Verification Badge */}
              <div className="p-5 rounded-2xl bg-[#0B1D17] border border-sand-subtle/30 text-xs text-sand/80">
                <div className="font-bold text-cream mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Factual Portfolio Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  All technical descriptions and deliverables reflect actual development work completed by Yagnik Bavaliya without invented metrics.
                </p>
              </div>

            </div>

          </div>

          {/* Related Projects */}
          <div className="pt-16 border-t border-sand-subtle/30">
            <h2 className="text-2xl font-bold text-cream mb-8">
              Explore Related Shopify Case Studies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProj) => (
                <div key={relProj.id} className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/20 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <span className="text-[10px] font-mono text-gold uppercase">{relProj.category}</span>
                    <h3 className="text-xl font-bold text-cream group-hover:text-gold transition-colors mt-1 mb-2">
                      <Link to={`/projects/${relProj.slug}`}>{relProj.title}</Link>
                    </h3>
                    <p className="text-sand/80 text-xs line-clamp-2 mb-4">
                      {relProj.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${relProj.slug}`}
                    className="text-xs font-semibold text-gold hover:text-gold-light flex items-center gap-1 mt-2"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
